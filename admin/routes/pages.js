const express = require('express');
const path = require('path');
const router = express.Router();
const config = require('../config');
const { requireAuth } = require('../middleware/auth');
const { extractJsonFromHtml, injectJsonIntoHtml, validatePageProps } = require('../utils/htmlParser');
const { createBackup, listBackups, restoreBackup } = require('../utils/backup');
const { isValidPageSlug } = require('../utils/validator');

/**
 * GET /api/pages
 * List all available pages
 */
router.get('/', requireAuth, (req, res) => {
  res.json({
    pages: config.pages
  });
});

/**
 * GET /api/pages/:slug
 * Get page data
 */
router.get('/:slug', requireAuth, async (req, res) => {
  try {
    const { slug } = req.params;

    // Validate slug
    if (!isValidPageSlug(slug, config.pages)) {
      return res.status(404).json({
        error: 'Not Found',
        message: 'Page not found'
      });
    }

    // Find page config
    const pageConfig = config.pages.find(p => p.slug === slug);
    const filePath = path.join(config.siteRoot, pageConfig.path);

    // Extract JSON from HTML
    const data = await extractJsonFromHtml(filePath);

    res.json({
      slug: slug,
      title: pageConfig.title,
      pageProps: data.pageProps
    });
  } catch (error) {
    console.error('Error getting page:', error);
    res.status(500).json({
      error: 'Server Error',
      message: error.message
    });
  }
});

/**
 * POST /api/pages/:slug
 * Update page data
 */
router.post('/:slug', requireAuth, async (req, res) => {
  try {
    const { slug } = req.params;
    const { pageProps } = req.body;

    // Validate slug
    if (!isValidPageSlug(slug, config.pages)) {
      return res.status(404).json({
        error: 'Not Found',
        message: 'Page not found'
      });
    }

    // Validate pageProps
    if (!pageProps) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'pageProps is required'
      });
    }

    // Validate structure
    try {
      validatePageProps(pageProps);
    } catch (validationError) {
      return res.status(400).json({
        error: 'Validation Error',
        message: validationError.message
      });
    }

    // Find page config
    const pageConfig = config.pages.find(p => p.slug === slug);
    const filePath = path.join(config.siteRoot, pageConfig.path);

    // Create backup before modifying
    const backupPath = await createBackup(filePath, slug);
    console.log(`Backup created: ${backupPath}`);

    // Extract current data
    const originalData = await extractJsonFromHtml(filePath);

    // Inject updated data
    await injectJsonIntoHtml(filePath, originalData, pageProps);

    res.json({
      success: true,
      message: 'Page updated successfully',
      backup: path.basename(backupPath)
    });
  } catch (error) {
    console.error('Error updating page:', error);
    res.status(500).json({
      error: 'Server Error',
      message: error.message
    });
  }
});

/**
 * GET /api/backups
 * List all backups
 */
router.get('/backups/list', requireAuth, async (req, res) => {
  try {
    const backups = await listBackups();
    res.json({ backups });
  } catch (error) {
    console.error('Error listing backups:', error);
    res.status(500).json({
      error: 'Server Error',
      message: error.message
    });
  }
});

/**
 * POST /api/backups/restore
 * Restore from backup
 */
router.post('/backups/restore', requireAuth, async (req, res) => {
  try {
    const { filename, slug } = req.body;

    if (!filename || !slug) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'filename and slug are required'
      });
    }

    // Validate slug
    if (!isValidPageSlug(slug, config.pages)) {
      return res.status(404).json({
        error: 'Not Found',
        message: 'Page not found'
      });
    }

    // Find page config
    const pageConfig = config.pages.find(p => p.slug === slug);
    const targetPath = path.join(config.siteRoot, pageConfig.path);

    // Restore backup
    await restoreBackup(filename, targetPath);

    res.json({
      success: true,
      message: 'Backup restored successfully'
    });
  } catch (error) {
    console.error('Error restoring backup:', error);
    res.status(500).json({
      error: 'Server Error',
      message: error.message
    });
  }
});

module.exports = router;
