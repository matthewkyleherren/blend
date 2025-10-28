const bcrypt = require('bcryptjs');
const config = require('../config');

/**
 * Middleware to check if user is authenticated
 */
function requireAuth(req, res, next) {
  if (req.session && req.session.isAuthenticated) {
    return next();
  }

  return res.status(401).json({
    error: 'Unauthorized',
    message: 'Please log in to access this resource'
  });
}

/**
 * Login handler
 */
async function login(req, res) {
  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'Password is required'
      });
    }

    // Check if password hash is configured
    if (!config.adminPasswordHash) {
      return res.status(500).json({
        error: 'Server Error',
        message: 'Admin password not configured'
      });
    }

    // Verify password
    const isValid = await bcrypt.compare(password, config.adminPasswordHash);

    if (!isValid) {
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'Invalid password'
      });
    }

    // Set session
    req.session.isAuthenticated = true;
    req.session.loginTime = new Date().toISOString();

    res.json({
      success: true,
      message: 'Login successful'
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      error: 'Server Error',
      message: 'An error occurred during login'
    });
  }
}

/**
 * Logout handler
 */
function logout(req, res) {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({
        error: 'Server Error',
        message: 'Failed to logout'
      });
    }

    res.json({
      success: true,
      message: 'Logout successful'
    });
  });
}

/**
 * Check authentication status
 */
function checkAuth(req, res) {
  if (req.session && req.session.isAuthenticated) {
    return res.json({
      authenticated: true,
      loginTime: req.session.loginTime
    });
  }

  res.json({
    authenticated: false
  });
}

module.exports = {
  requireAuth,
  login,
  logout,
  checkAuth
};
