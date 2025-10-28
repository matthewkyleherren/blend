const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;
const config = require('../config');
const { requireAuth } = require('../middleware/auth');
const { validateImageFile, sanitizeFilename } = require('../utils/validator');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    // Ensure uploads directory exists
    await fs.mkdir(config.paths.uploads, { recursive: true });
    cb(null, config.paths.uploads);
  },
  filename: (req, file, cb) => {
    // Sanitize and create unique filename
    const sanitized = sanitizeFilename(file.originalname);
    const ext = path.extname(sanitized);
    const nameWithoutExt = path.basename(sanitized, ext);
    const timestamp = Date.now();
    const uniqueName = `${nameWithoutExt}_${timestamp}${ext}`;
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: config.upload.maxFileSize
  }
});

/**
 * POST /api/upload
 * Upload a new image
 */
router.post('/', requireAuth, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'No file uploaded'
      });
    }

    // Validate the uploaded file
    const validation = validateImageFile(req.file, config);
    if (!validation.valid) {
      // Delete the uploaded file
      await fs.unlink(req.file.path);

      return res.status(400).json({
        error: 'Validation Error',
        message: validation.error
      });
    }

    // Also copy to site root for immediate use
    const siteRootPath = path.join(config.siteRoot, req.file.filename);
    await fs.copyFile(req.file.path, siteRootPath);

    res.json({
      success: true,
      message: 'File uploaded successfully',
      file: {
        filename: req.file.filename,
        originalName: req.file.originalname,
        size: req.file.size,
        mimetype: req.file.mimetype,
        // Path relative to site root for use in JSON
        path: req.file.filename
      }
    });
  } catch (error) {
    console.error('Upload error:', error);

    // Clean up file if it was uploaded
    if (req.file) {
      try {
        await fs.unlink(req.file.path);
      } catch (unlinkError) {
        console.error('Error cleaning up file:', unlinkError);
      }
    }

    res.status(500).json({
      error: 'Server Error',
      message: error.message
    });
  }
});

/**
 * GET /api/images
 * List all images in site root and uploads directory
 */
router.get('/images', requireAuth, async (req, res) => {
  try {
    const siteRoot = config.siteRoot;
    const uploadsDir = config.paths.uploads;

    // Get all files from site root
    const siteRootFiles = await fs.readdir(siteRoot);

    // Filter for image files
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.mp4', '.mov'];
    const images = [];

    for (const file of siteRootFiles) {
      const ext = path.extname(file).toLowerCase();
      if (imageExtensions.includes(ext)) {
        const filePath = path.join(siteRoot, file);
        try {
          const stats = await fs.stat(filePath);
          if (stats.isFile()) {
            images.push({
              filename: file,
              path: file, // Relative path for JSON
              size: stats.size,
              modified: stats.mtime,
              type: ext.slice(1)
            });
          }
        } catch (err) {
          // Skip files we can't read
          continue;
        }
      }
    }

    // Sort by modified date, newest first
    images.sort((a, b) => b.modified - a.modified);

    res.json({
      images,
      count: images.length
    });
  } catch (error) {
    console.error('Error listing images:', error);
    res.status(500).json({
      error: 'Server Error',
      message: error.message
    });
  }
});

/**
 * DELETE /api/upload/:filename
 * Delete an uploaded image (only from uploads directory, not site root)
 */
router.delete('/:filename', requireAuth, async (req, res) => {
  try {
    const { filename } = req.params;

    // Validate filename
    const sanitized = sanitizeFilename(filename);
    if (sanitized !== filename) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'Invalid filename'
      });
    }

    const filePath = path.join(config.paths.uploads, filename);

    // Check if file exists
    try {
      await fs.access(filePath);
    } catch {
      return res.status(404).json({
        error: 'Not Found',
        message: 'File not found'
      });
    }

    // Delete the file
    await fs.unlink(filePath);

    res.json({
      success: true,
      message: 'File deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting file:', error);
    res.status(500).json({
      error: 'Server Error',
      message: error.message
    });
  }
});

module.exports = router;
