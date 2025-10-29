let currentPage = null;
let pageData = null;
let originalData = null;
let hasUnsavedChanges = false;
let currentImageField = null;

// Get page slug from URL
const urlParams = new URLSearchParams(window.location.search);
const pageSlug = urlParams.get('page');

if (!pageSlug) {
  window.location.href = '/admin/dashboard.html';
}

// Check authentication and load page
checkAuth();

async function checkAuth() {
  try {
    const response = await fetch('/cms-api/auth/check', {
      credentials: 'include'
    });
    const data = await response.json();

    if (!data.authenticated) {
      window.location.href = '/admin/index.html';
      return;
    }

    loadPage();
  } catch (error) {
    console.error('Auth check error:', error);
    window.location.href = '/admin/index.html';
  }
}

// Logout handler
document.getElementById('logoutBtn').addEventListener('click', async () => {
  if (hasUnsavedChanges) {
    if (!confirm('You have unsaved changes. Are you sure you want to logout?')) {
      return;
    }
  }

  try {
    await fetch('/cms-api/auth/logout', {
      method: 'POST',
      credentials: 'include'
    });
    window.location.href = '/admin/index.html';
  } catch (error) {
    console.error('Logout error:', error);
  }
});

// Load page data
async function loadPage() {
  try {
    const response = await fetch(`/cms-api/pages/${pageSlug}`, {
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error('Failed to load page');
    }

    const data = await response.json();
    currentPage = data.slug;
    pageData = data.pageProps;
    originalData = JSON.parse(JSON.stringify(data.pageProps)); // Deep copy

    document.getElementById('pageTitle').textContent = `Edit ${data.title}`;
    document.getElementById('statusText').textContent = 'Ready';

    renderEditor();
    enableButtons();
  } catch (error) {
    console.error('Error loading page:', error);
    document.getElementById('editorContainer').innerHTML = `
      <div class="alert alert-error">
        Failed to load page. Please try again.
      </div>
    `;
  }
}

function renderEditor() {
  const container = document.getElementById('editorContainer');

  const html = `
    <div class="card">
      <h2 class="card-title">Page Content</h2>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
        Edit the content blocks below. Changes are not saved until you click "Save Changes".
      </p>

      <div id="contentBlocks">
        ${pageData.page.content.map((block, index) => renderContentBlock(block, index)).join('')}
      </div>
    </div>
  `;

  container.innerHTML = html;
  attachEventListeners();
}

function renderContentBlock(block, index) {
  return `
    <div class="content-block" data-index="${index}">
      <div class="content-block-header">
        <div>
          <strong>Block ${index + 1}</strong>
          <span class="content-block-type"> - ${block.__component}</span>
        </div>
      </div>

      <div class="content-block-fields">
        ${renderFields(block, index)}
      </div>
    </div>
  `;
}

function renderFields(obj, blockIndex, path = '') {
  let html = '';

  for (const [key, value] of Object.entries(obj)) {
    // Skip internal fields
    if (key === '__component' || key === 'id') continue;

    const fieldPath = path ? `${path}.${key}` : key;
    const fieldId = `field_${blockIndex}_${fieldPath.replace(/\./g, '_')}`;

    if (value === null || value === undefined) {
      // Skip null/undefined values
      continue;
    } else if (typeof value === 'string') {
      // String field
      const isLongText = value.length > 100;
      html += `
        <div class="form-group">
          <label class="form-label" for="${fieldId}">${formatLabel(key)}</label>
          ${isLongText
            ? `<textarea
                class="form-textarea"
                id="${fieldId}"
                data-block="${blockIndex}"
                data-path="${fieldPath}"
                rows="4"
              >${escapeHtml(value)}</textarea>`
            : `<input
                type="text"
                class="form-input"
                id="${fieldId}"
                data-block="${blockIndex}"
                data-path="${fieldPath}"
                value="${escapeHtml(value)}"
              >`
          }
        </div>
      `;
    } else if (typeof value === 'boolean') {
      // Boolean field
      html += `
        <div class="form-group">
          <label style="display: flex; align-items: center; gap: 0.5rem;">
            <input
              type="checkbox"
              id="${fieldId}"
              data-block="${blockIndex}"
              data-path="${fieldPath}"
              ${value ? 'checked' : ''}
            >
            <span class="form-label" style="margin: 0;">${formatLabel(key)}</span>
          </label>
        </div>
      `;
    } else if (typeof value === 'number') {
      // Number field
      html += `
        <div class="form-group">
          <label class="form-label" for="${fieldId}">${formatLabel(key)}</label>
          <input
            type="number"
            class="form-input"
            id="${fieldId}"
            data-block="${blockIndex}"
            data-path="${fieldPath}"
            value="${value}"
          >
        </div>
      `;
    } else if (Array.isArray(value)) {
      // Array field - render as JSON textarea for now
      html += `
        <div class="form-group">
          <label class="form-label" for="${fieldId}">${formatLabel(key)} (Array)</label>
          <textarea
            class="form-textarea"
            id="${fieldId}"
            data-block="${blockIndex}"
            data-path="${fieldPath}"
            data-type="json"
            rows="6"
          >${JSON.stringify(value, null, 2)}</textarea>
          <p style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.25rem;">
            Edit as JSON
          </p>
        </div>
      `;
    } else if (typeof value === 'object' && value !== null) {
      // Check if it's an image object
      if (value.data && (value.data.id || value.data === null)) {
        const imagePath = value.data?.attributes?.url || '';
        html += `
          <div class="form-group">
            <label class="form-label">${formatLabel(key)}</label>
            <button
              type="button"
              class="btn btn-secondary btn-small image-selector-btn"
              data-block="${blockIndex}"
              data-path="${fieldPath}"
            >
              Select Image
            </button>
            ${imagePath ? `
              <div class="image-preview">
                <img src="/${imagePath}" alt="Preview" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><text x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22>No preview</text></svg>'">
                <p style="font-size: 0.75rem; margin-top: 0.5rem;">${imagePath}</p>
              </div>
            ` : '<p style="font-size: 0.875rem; color: var(--text-secondary); margin-top: 0.5rem;">No image selected</p>'}
          </div>
        `;
      } else {
        // Nested object - render as JSON textarea
        html += `
          <div class="form-group">
            <label class="form-label" for="${fieldId}">${formatLabel(key)} (Object)</label>
            <textarea
              class="form-textarea"
              id="${fieldId}"
              data-block="${blockIndex}"
              data-path="${fieldPath}"
              data-type="json"
              rows="6"
            >${JSON.stringify(value, null, 2)}</textarea>
            <p style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.25rem;">
              Edit as JSON
            </p>
          </div>
        `;
      }
    }
  }

  return html;
}

function attachEventListeners() {
  // Text inputs
  document.querySelectorAll('input[type="text"], textarea, input[type="number"]').forEach(input => {
    input.addEventListener('input', handleFieldChange);
  });

  // Checkboxes
  document.querySelectorAll('input[type="checkbox"]').forEach(input => {
    input.addEventListener('change', handleFieldChange);
  });

  // Image selector buttons
  document.querySelectorAll('.image-selector-btn').forEach(btn => {
    btn.addEventListener('click', handleImageSelect);
  });
}

function handleFieldChange(e) {
  const blockIndex = parseInt(e.target.dataset.block);
  const path = e.target.dataset.path;
  const isJson = e.target.dataset.type === 'json';

  let value;
  if (e.target.type === 'checkbox') {
    value = e.target.checked;
  } else if (e.target.type === 'number') {
    value = parseFloat(e.target.value) || 0;
  } else if (isJson) {
    try {
      value = JSON.parse(e.target.value);
    } catch (err) {
      // Invalid JSON, don't update
      return;
    }
  } else {
    value = e.target.value;
  }

  updateFieldValue(blockIndex, path, value);
  markAsUnsaved();
}

function updateFieldValue(blockIndex, path, value) {
  const block = pageData.page.content[blockIndex];
  const pathParts = path.split('.');

  let current = block;
  for (let i = 0; i < pathParts.length - 1; i++) {
    current = current[pathParts[i]];
  }

  current[pathParts[pathParts.length - 1]] = value;
}

function markAsUnsaved() {
  hasUnsavedChanges = true;
  document.getElementById('statusText').textContent = 'Unsaved changes';
  document.getElementById('statusText').style.color = 'var(--danger-color)';
}

function enableButtons() {
  document.getElementById('saveBtn').disabled = false;
  document.getElementById('previewBtn').disabled = false;
  document.getElementById('resetBtn').disabled = false;
}

// Save changes
document.getElementById('saveBtn').addEventListener('click', async () => {
  if (!confirm('Save changes to this page? A backup will be created automatically.')) {
    return;
  }

  const btn = document.getElementById('saveBtn');
  btn.disabled = true;
  btn.textContent = 'Saving...';

  try {
    const response = await fetch(`/cms-api/pages/${pageSlug}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ pageProps: pageData })
    });

    const result = await response.json();

    if (response.ok && result.success) {
      showAlert('success', `Page saved successfully! Backup created: ${result.backup}`);
      hasUnsavedChanges = false;
      originalData = JSON.parse(JSON.stringify(pageData));
      document.getElementById('statusText').textContent = 'Saved';
      document.getElementById('statusText').style.color = 'var(--success-color)';
    } else {
      throw new Error(result.message || 'Save failed');
    }
  } catch (error) {
    console.error('Save error:', error);
    showAlert('error', `Failed to save: ${error.message}`);
  } finally {
    btn.disabled = false;
    btn.textContent = 'Save Changes';
  }
});

// Preview JSON
document.getElementById('previewBtn').addEventListener('click', () => {
  const jsonStr = JSON.stringify(pageData, null, 2);
  const newWindow = window.open('', '_blank');
  newWindow.document.write(`
    <html>
      <head>
        <title>JSON Preview</title>
        <style>
          body { font-family: monospace; padding: 2rem; background: #1e1e1e; color: #d4d4d4; }
          pre { white-space: pre-wrap; word-wrap: break-word; }
        </style>
      </head>
      <body>
        <h1>Page Data Preview</h1>
        <pre>${escapeHtml(jsonStr)}</pre>
      </body>
    </html>
  `);
});

// Reset changes
document.getElementById('resetBtn').addEventListener('click', () => {
  if (!confirm('Discard all changes and reload original data?')) {
    return;
  }

  pageData = JSON.parse(JSON.stringify(originalData));
  hasUnsavedChanges = false;
  document.getElementById('statusText').textContent = 'Reset';
  document.getElementById('statusText').style.color = 'var(--text-secondary)';
  renderEditor();
});

// Image selection
function handleImageSelect(e) {
  currentImageField = {
    blockIndex: parseInt(e.target.dataset.block),
    path: e.target.dataset.path
  };

  openImageModal();
  loadImages();
}

function openImageModal() {
  document.getElementById('imageModal').classList.remove('hidden');
}

function closeImageModal() {
  document.getElementById('imageModal').classList.add('hidden');
  currentImageField = null;
}

// Load images
async function loadImages() {
  try {
    const response = await fetch('/cms-api/upload/images', {
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error('Failed to load images');
    }

    const data = await response.json();
    displayImages(data.images);
  } catch (error) {
    console.error('Error loading images:', error);
    document.getElementById('imageGridContainer').innerHTML = `
      <p style="color: var(--danger-color);">Failed to load images</p>
    `;
  }
}

function displayImages(images) {
  const container = document.getElementById('imageGridContainer');

  const html = `
    <div class="image-grid">
      ${images.map(image => `
        <div class="image-grid-item" onclick="selectImage('${image.path}')">
          ${image.type === 'mp4' || image.type === 'mov'
            ? `<video src="/${image.path}" style="width: 100%; height: 100px; object-fit: cover;"></video>`
            : `<img src="/${image.path}" alt="${image.filename}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><text x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22>Error</text></svg>'">`
          }
          <p>${image.filename}</p>
        </div>
      `).join('')}
    </div>
  `;

  container.innerHTML = html;
}

function selectImage(imagePath) {
  if (!currentImageField) return;

  // Update the data
  const block = pageData.page.content[currentImageField.blockIndex];
  const pathParts = currentImageField.path.split('.');

  let current = block;
  for (let i = 0; i < pathParts.length - 1; i++) {
    current = current[pathParts[i]];
  }

  // Update the image data structure
  const fieldName = pathParts[pathParts.length - 1];
  if (!current[fieldName]) {
    current[fieldName] = { data: null };
  }
  if (!current[fieldName].data) {
    current[fieldName].data = {};
  }
  if (!current[fieldName].data.attributes) {
    current[fieldName].data.attributes = {};
  }

  current[fieldName].data.attributes.url = imagePath;

  markAsUnsaved();
  renderEditor();
  closeImageModal();

  showAlert('success', 'Image selected successfully');
}

// Upload image
document.getElementById('uploadImageBtn').addEventListener('click', async () => {
  const fileInput = document.getElementById('imageUploadInput');
  const file = fileInput.files[0];

  if (!file) {
    alert('Please select a file');
    return;
  }

  const btn = document.getElementById('uploadImageBtn');
  btn.disabled = true;
  btn.textContent = 'Uploading...';

  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await fetch('/cms-api/upload', {
      method: 'POST',
      credentials: 'include',
      body: formData
    });

    const result = await response.json();

    if (response.ok && result.success) {
      showAlert('success', 'Image uploaded successfully');
      fileInput.value = '';
      loadImages(); // Reload image list
    } else {
      throw new Error(result.message || 'Upload failed');
    }
  } catch (error) {
    console.error('Upload error:', error);
    alert(`Upload failed: ${error.message}`);
  } finally {
    btn.disabled = false;
    btn.textContent = 'Upload';
  }
});

// Utility functions
function formatLabel(key) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .trim();
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.toString().replace(/[&<>"']/g, m => map[m]);
}

function showAlert(type, message) {
  const alertContainer = document.getElementById('alertContainer');
  const alertClass = type === 'success' ? 'alert-success' : type === 'error' ? 'alert-error' : 'alert-info';

  alertContainer.innerHTML = `
    <div class="alert ${alertClass}">
      ${message}
    </div>
  `;

  // Auto-dismiss after 5 seconds
  setTimeout(() => {
    alertContainer.innerHTML = '';
  }, 5000);
}

// Warn before leaving with unsaved changes
window.addEventListener('beforeunload', (e) => {
  if (hasUnsavedChanges) {
    e.preventDefault();
    e.returnValue = '';
  }
});
