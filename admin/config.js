require('dotenv').config();
const path = require('path');

module.exports = {
  port: process.env.PORT || 3031,
  siteRoot: process.env.SITE_ROOT || path.join(__dirname, '..'),
  adminPasswordHash: process.env.ADMIN_PASSWORD_HASH,
  sessionSecret: process.env.SESSION_SECRET,

  // Paths
  paths: {
    home: 'index.html',
    about: 'about/index.html',
    menu: 'menu/index.html',
    backups: path.join(__dirname, 'backups'),
    uploads: path.join(__dirname, 'uploads')
  },

  // Pages configuration
  pages: [
    { slug: 'home', title: 'Home Page', path: 'index.html' },
    { slug: 'about', title: 'About Page', path: 'about/index.html' },
    { slug: 'menu', title: 'Menu Page', path: 'menu/index.html' }
  ],

  // Upload settings
  upload: {
    maxFileSize: 10 * 1024 * 1024, // 10MB
    allowedTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'],
    allowedExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']
  }
};
