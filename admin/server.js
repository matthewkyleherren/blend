const express = require('express');
const session = require('express-session');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const path = require('path');
const config = require('./config');

// Import middleware and routes
const { login, logout, checkAuth } = require('./middleware/auth');
const pagesRouter = require('./routes/pages');
const uploadsRouter = require('./routes/uploads');

// Initialize Express app
const app = express();

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false // Disable for development
}));

// CORS
app.use(cors({
  origin: true,
  credentials: true
}));

// Body parsing middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Session configuration
app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production (HTTPS)
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    sameSite: 'lax'
  }
}));

// Rate limiting for login attempts
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts
  message: {
    error: 'Too Many Requests',
    message: 'Too many login attempts, please try again later'
  }
});

// Serve static files from public directory
app.use('/admin', express.static(path.join(__dirname, 'public')));

// Serve uploaded images
app.use('/admin/uploads', express.static(path.join(__dirname, 'uploads')));

// Auth routes (using /cms-api to avoid conflict with Next.js /api routes)
app.post('/cms-api/auth/login', loginLimiter, login);
app.post('/cms-api/auth/logout', logout);
app.get('/cms-api/auth/check', checkAuth);

// API routes
app.use('/cms-api/pages', pagesRouter);
app.use('/cms-api/upload', uploadsRouter);

// Root redirect
app.get('/', (req, res) => {
  res.redirect('/admin');
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested resource was not found'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'An error occurred'
  });
});

// Start server (only if running directly, not in Vercel)
if (require.main === module) {
  const PORT = config.port;
  app.listen(PORT, () => {
    console.log('=================================');
    console.log('  CMS Admin Panel');
    console.log('=================================');
    console.log(`Server running on: http://localhost:${PORT}/admin`);
    console.log(`Site root: ${config.siteRoot}`);
    console.log('');
    console.log('To login, use the password from your .env file');
    console.log('=================================');
  });
}

// Export for Vercel serverless function
module.exports = app;
