const fs = require('fs').promises;
const path = require('path');
const config = require('../config');

/**
 * Create a backup of an HTML file
 * @param {string} filePath - Path to the file to backup
 * @param {string} pageSlug - Slug of the page (for naming)
 * @returns {string} - Path to backup file
 */
async function createBackup(filePath, pageSlug) {
  try {
    // Read the file
    const content = await fs.readFile(filePath, 'utf8');

    // Create backup filename with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFileName = `${pageSlug}_${timestamp}.html`;
    const backupPath = path.join(config.paths.backups, backupFileName);

    // Ensure backups directory exists
    await fs.mkdir(config.paths.backups, { recursive: true });

    // Write backup
    await fs.writeFile(backupPath, content, 'utf8');

    return backupPath;
  } catch (error) {
    throw new Error(`Failed to create backup: ${error.message}`);
  }
}

/**
 * List all backups
 * @returns {Array} - Array of backup files with metadata
 */
async function listBackups() {
  try {
    await fs.mkdir(config.paths.backups, { recursive: true });
    const files = await fs.readdir(config.paths.backups);

    const backups = await Promise.all(
      files
        .filter(file => file.endsWith('.html'))
        .map(async (file) => {
          const filePath = path.join(config.paths.backups, file);
          const stats = await fs.stat(filePath);

          // Parse filename: pageSlug_timestamp.html
          const match = file.match(/^(.+?)_(\d{4}-\d{2}-\d{2}T\d{2}-\d{2}-\d{2}-\d{3}Z)\.html$/);

          return {
            filename: file,
            path: filePath,
            pageSlug: match ? match[1] : 'unknown',
            timestamp: match ? match[2].replace(/-/g, ':').replace(/T(\d{2}):(\d{2}):(\d{2})/, 'T$1:$2:$3') : '',
            size: stats.size,
            created: stats.birthtime
          };
        })
    );

    // Sort by creation time, newest first
    return backups.sort((a, b) => b.created - a.created);
  } catch (error) {
    throw new Error(`Failed to list backups: ${error.message}`);
  }
}

/**
 * Restore from a backup
 * @param {string} backupFileName - Name of the backup file
 * @param {string} targetPath - Path to restore to
 */
async function restoreBackup(backupFileName, targetPath) {
  try {
    const backupPath = path.join(config.paths.backups, backupFileName);

    // Check if backup exists
    await fs.access(backupPath);

    // Read backup content
    const content = await fs.readFile(backupPath, 'utf8');

    // Create a backup of the current file before restoring
    const currentBackupName = `pre-restore_${Date.now()}.html`;
    await fs.copyFile(targetPath, path.join(config.paths.backups, currentBackupName));

    // Restore the backup
    await fs.writeFile(targetPath, content, 'utf8');

    return true;
  } catch (error) {
    throw new Error(`Failed to restore backup: ${error.message}`);
  }
}

/**
 * Delete old backups, keeping only the most recent N backups per page
 * @param {number} keepCount - Number of backups to keep per page
 */
async function cleanOldBackups(keepCount = 10) {
  try {
    const backups = await listBackups();

    // Group by page slug
    const byPage = {};
    backups.forEach(backup => {
      if (!byPage[backup.pageSlug]) {
        byPage[backup.pageSlug] = [];
      }
      byPage[backup.pageSlug].push(backup);
    });

    // Delete old backups
    for (const pageSlug in byPage) {
      const pageBackups = byPage[pageSlug];
      if (pageBackups.length > keepCount) {
        const toDelete = pageBackups.slice(keepCount);
        await Promise.all(
          toDelete.map(backup => fs.unlink(backup.path))
        );
      }
    }

    return true;
  } catch (error) {
    throw new Error(`Failed to clean old backups: ${error.message}`);
  }
}

module.exports = {
  createBackup,
  listBackups,
  restoreBackup,
  cleanOldBackups
};
