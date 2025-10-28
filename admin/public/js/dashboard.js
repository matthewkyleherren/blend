// Check authentication
checkAuth();

async function checkAuth() {
  try {
    const response = await fetch('/api/auth/check', {
      credentials: 'include'
    });
    const data = await response.json();

    if (!data.authenticated) {
      window.location.href = '/admin/index.html';
      return;
    }

    // Load pages and backups
    loadPages();
    loadBackups();
  } catch (error) {
    console.error('Auth check error:', error);
    window.location.href = '/admin/index.html';
  }
}

// Logout handler
document.getElementById('logoutBtn').addEventListener('click', async () => {
  try {
    await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include'
    });
    window.location.href = '/admin/index.html';
  } catch (error) {
    console.error('Logout error:', error);
  }
});

// Load pages
async function loadPages() {
  try {
    const response = await fetch('/api/pages', {
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error('Failed to load pages');
    }

    const data = await response.json();
    displayPages(data.pages);
  } catch (error) {
    console.error('Error loading pages:', error);
    document.getElementById('pagesContainer').innerHTML = `
      <div class="alert alert-error">
        Failed to load pages. Please refresh the page.
      </div>
    `;
  }
}

function displayPages(pages) {
  const container = document.getElementById('pagesContainer');

  const html = `
    <div class="pages-grid">
      ${pages.map(page => `
        <div class="page-card" onclick="editPage('${page.slug}')">
          <h3>${page.title}</h3>
          <p>Slug: ${page.slug}</p>
          <p style="font-size: 0.75rem; color: var(--text-secondary);">
            ${page.path}
          </p>
          <button class="btn btn-primary btn-small" style="margin-top: 0.5rem;">
            Edit Page
          </button>
        </div>
      `).join('')}
    </div>
  `;

  container.innerHTML = html;
}

function editPage(slug) {
  window.location.href = `/admin/editor.html?page=${slug}`;
}

// Load backups
async function loadBackups() {
  try {
    const response = await fetch('/api/pages/backups/list', {
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error('Failed to load backups');
    }

    const data = await response.json();
    displayBackups(data.backups.slice(0, 10)); // Show only 10 most recent
  } catch (error) {
    console.error('Error loading backups:', error);
    document.getElementById('backupsContainer').innerHTML = `
      <p style="color: var(--danger-color); font-size: 0.875rem;">
        Failed to load backups
      </p>
    `;
  }
}

function displayBackups(backups) {
  const container = document.getElementById('backupsContainer');

  if (backups.length === 0) {
    container.innerHTML = `
      <p style="color: var(--text-secondary); font-size: 0.875rem;">
        No backups yet. Backups are created automatically when you save changes.
      </p>
    `;
    return;
  }

  const html = `
    <div style="max-height: 300px; overflow-y: auto;">
      <table style="width: 100%; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 1px solid var(--border-color);">
            <th style="text-align: left; padding: 0.5rem;">Page</th>
            <th style="text-align: left; padding: 0.5rem;">Date</th>
            <th style="text-align: left; padding: 0.5rem;">Size</th>
          </tr>
        </thead>
        <tbody>
          ${backups.map(backup => `
            <tr style="border-bottom: 1px solid var(--border-color);">
              <td style="padding: 0.5rem;">${backup.pageSlug}</td>
              <td style="padding: 0.5rem;">${formatDate(backup.created)}</td>
              <td style="padding: 0.5rem;">${formatBytes(backup.size)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  container.innerHTML = html;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}
