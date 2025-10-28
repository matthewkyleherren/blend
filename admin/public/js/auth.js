// Check if already authenticated
checkAuthentication();

async function checkAuthentication() {
  try {
    const response = await fetch('/api/auth/check', {
      credentials: 'include'
    });
    const data = await response.json();

    if (data.authenticated) {
      window.location.href = '/admin/dashboard.html';
    }
  } catch (error) {
    console.error('Auth check error:', error);
  }
}

// Login form handler
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const password = document.getElementById('password').value;
  const loginBtn = document.getElementById('loginBtn');
  const alertContainer = document.getElementById('alertContainer');

  // Disable button
  loginBtn.disabled = true;
  loginBtn.textContent = 'Logging in...';

  // Clear previous alerts
  alertContainer.innerHTML = '';

  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ password })
    });

    const data = await response.json();

    if (response.ok && data.success) {
      showAlert('success', 'Login successful! Redirecting...');
      setTimeout(() => {
        window.location.href = '/admin/dashboard.html';
      }, 500);
    } else {
      showAlert('error', data.message || 'Login failed');
      loginBtn.disabled = false;
      loginBtn.textContent = 'Login';
    }
  } catch (error) {
    console.error('Login error:', error);
    showAlert('error', 'An error occurred. Please try again.');
    loginBtn.disabled = false;
    loginBtn.textContent = 'Login';
  }
});

function showAlert(type, message) {
  const alertContainer = document.getElementById('alertContainer');
  const alertClass = type === 'success' ? 'alert-success' : 'alert-error';

  alertContainer.innerHTML = `
    <div class="alert ${alertClass}">
      ${message}
    </div>
  `;
}
