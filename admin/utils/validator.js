/**
 * Validate file path to prevent directory traversal attacks
 * @param {string} filePath - File path to validate
 * @returns {boolean} - True if valid
 */
function isValidPath(filePath) {
  // Check for directory traversal patterns
  if (filePath.includes('..') || filePath.includes('~')) {
    return false;
  }

  // Check for absolute paths (we want relative paths only)
  if (filePath.startsWith('/')) {
    return false;
  }

  return true;
}

/**
 * Validate image file
 * @param {Object} file - Multer file object
 * @param {Object} config - Upload config
 * @returns {Object} - { valid: boolean, error: string }
 */
function validateImageFile(file, config) {
  if (!file) {
    return { valid: false, error: 'No file provided' };
  }

  // Check file size
  if (file.size > config.upload.maxFileSize) {
    return {
      valid: false,
      error: `File too large. Maximum size: ${config.upload.maxFileSize / 1024 / 1024}MB`
    };
  }

  // Check MIME type
  if (!config.upload.allowedTypes.includes(file.mimetype)) {
    return {
      valid: false,
      error: `Invalid file type. Allowed: ${config.upload.allowedTypes.join(', ')}`
    };
  }

  // Check file extension
  const ext = file.originalname.toLowerCase().match(/\.[^.]+$/)?.[0];
  if (!ext || !config.upload.allowedExtensions.includes(ext)) {
    return {
      valid: false,
      error: `Invalid file extension. Allowed: ${config.upload.allowedExtensions.join(', ')}`
    };
  }

  return { valid: true };
}

/**
 * Sanitize filename
 * @param {string} filename - Original filename
 * @returns {string} - Sanitized filename
 */
function sanitizeFilename(filename) {
  // Remove any path components
  filename = filename.replace(/^.*[\\\/]/, '');

  // Replace spaces with underscores
  filename = filename.replace(/\s+/g, '_');

  // Remove any characters that aren't alphanumeric, underscore, hyphen, or dot
  filename = filename.replace(/[^a-zA-Z0-9_.-]/g, '');

  // Ensure it doesn't start with a dot
  if (filename.startsWith('.')) {
    filename = '_' + filename;
  }

  return filename;
}

/**
 * Validate page slug
 * @param {string} slug - Page slug to validate
 * @param {Array} validPages - Array of valid page configurations
 * @returns {boolean} - True if valid
 */
function isValidPageSlug(slug, validPages) {
  return validPages.some(page => page.slug === slug);
}

module.exports = {
  isValidPath,
  validateImageFile,
  sanitizeFilename,
  isValidPageSlug
};
