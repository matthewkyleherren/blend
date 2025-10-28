# CMS Admin Panel

A custom, lightweight CMS admin panel for managing your static Next.js site.

## 🔐 Login Credentials

**Password:** `FfM33ZB9d+yoL2CerGn7hg==`

**Important:** Save this password securely! You'll need it to access the admin panel.

## 🚀 Getting Started

### Local Development

1. Navigate to the admin directory:
   ```bash
   cd admin
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3031/admin
   ```

4. Login with the password above

## 📁 Features

### ✅ Completed Features

- **Authentication System**: Secure password-protected login
- **Page Management**: Edit 3 pages (Home, About, Menu)
- **Content Editor**: Dynamic form-based content editing
- **Image Management**:
  - Upload new images
  - Select from existing images
  - Preview images before selection
- **Automatic Backups**: Every save creates a timestamped backup
- **JSON Validation**: Prevents breaking the site structure
- **Session Management**: Secure session-based authentication
- **Responsive Design**: Works on desktop and mobile

### 📄 Editable Pages

1. **Home Page** (`/index.html`)
   - 9 content blocks
   - Hero sections, text content, image galleries

2. **About Page** (`/about/index.html`)
   - 5 content blocks
   - Company information, team content

3. **Menu Page** (`/menu/index.html`)
   - 4 content blocks
   - Menu items, pricing, descriptions

## 🛠️ How It Works

### Architecture

```
Static HTML Files
     ↓
   __NEXT_DATA__ JSON
     ↓
  Admin Panel reads/writes JSON
     ↓
  Changes reflected on site
```

Each HTML file contains a `<script id="__NEXT_DATA__">` tag with JSON data. The admin panel:
1. Extracts the JSON from HTML
2. Lets you edit the content
3. Validates the changes
4. Creates a backup
5. Injects updated JSON back into HTML

### Backup System

- Automatic backup before every save
- Backups stored in `/admin/backups/`
- Named with timestamp: `home_2025-10-28T12-30-00-000Z.html`
- View recent backups on dashboard

## 📝 Editing Content

### Text Fields
- Short text: Single-line input
- Long text: Multi-line textarea

### Images
1. Click "Select Image" button
2. Choose from existing images OR upload new one
3. Image automatically copied to site root
4. Path updated in JSON

### Arrays & Objects
- Complex data shown as JSON
- Edit directly in textarea
- Must be valid JSON to save

### Content Blocks
Each page has multiple content blocks:
- `content.hero` - Hero sections
- `content.simple-content` - Text content
- `content.list-section` - Lists (menu items, etc.)
- `content.cover` - Cover images with text
- And more...

## 🔒 Security Features

- Bcrypt password hashing
- Session-based authentication
- Rate limiting on login (5 attempts per 15 minutes)
- CSRF protection
- File path validation
- File type validation for uploads
- Helmet.js security headers

## 📦 Deployment on Vercel

### Option 1: Serverless Functions (Recommended)

Create `vercel.json` in admin directory:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/admin/(.*)",
      "dest": "/server.js"
    },
    {
      "src": "/api/(.*)",
      "dest": "/server.js"
    }
  ]
}
```

### Option 2: Separate Deployment

Deploy admin panel as a separate Vercel project:
1. Push admin folder to separate Git repo
2. Deploy to Vercel
3. Update `SITE_ROOT` in `.env` to point to main site

### Environment Variables on Vercel

Add these to your Vercel project settings:
```
ADMIN_PASSWORD_HASH=<from .env file>
SESSION_SECRET=<from .env file>
PORT=3031
SITE_ROOT=/var/task
```

## 📂 Project Structure

```
admin/
├── server.js              # Express server
├── config.js              # Configuration
├── package.json           # Dependencies
├── .env                   # Environment variables (DO NOT COMMIT)
├── .env.example           # Example env file
├── middleware/
│   └── auth.js           # Authentication
├── routes/
│   ├── pages.js          # Page CRUD
│   └── uploads.js        # Image uploads
├── utils/
│   ├── htmlParser.js     # HTML/JSON parser
│   ├── backup.js         # Backup system
│   └── validator.js      # Validation
├── public/
│   ├── index.html        # Login page
│   ├── dashboard.html    # Dashboard
│   ├── editor.html       # Content editor
│   ├── css/
│   │   └── admin.css     # Styles
│   └── js/
│       ├── auth.js       # Login logic
│       ├── dashboard.js  # Dashboard logic
│       └── editor.js     # Editor logic
├── backups/              # Auto-created backups
└── uploads/              # Uploaded images
```

## 🧪 Testing

Test the parser on a page:
```bash
node -e "
const parser = require('./utils/htmlParser');
const path = require('path');
const config = require('./config');

(async () => {
  const filePath = path.join(config.siteRoot, 'index.html');
  const data = await parser.extractJsonFromHtml(filePath);
  console.log('Page:', data.pageProps.page.slug);
  console.log('Content blocks:', data.pageProps.page.content.length);
})();
"
```

## ⚠️ Important Notes

1. **Backup your site before first use!**
2. **Test on a copy first** to ensure everything works
3. The `.env` file contains your password hash - never commit it to Git
4. Backups are created automatically but stored locally
5. For production, consider:
   - HTTPS (set `cookie.secure: true` in server.js)
   - Additional authentication (2FA, IP whitelist)
   - Regular backup cleanup
   - Database for backups (instead of file system)

## 🐛 Troubleshooting

### "Failed to extract JSON from HTML"
- Check if the HTML file has `<script id="__NEXT_DATA__">`
- Verify the JSON is valid

### "Page not found"
- Check `config.js` has correct paths
- Verify HTML files exist at specified locations

### "Session expired"
- Sessions last 24 hours
- Just log in again

### Images not showing
- Check file was uploaded to site root
- Verify image path in JSON doesn't have leading `/admin/`
- Check browser console for 404 errors

## 📧 Support

For issues or questions, check the server logs:
```bash
npm start
```

Look for error messages in the console.

## 🎉 That's It!

Your CMS is ready to use. Login at `http://localhost:3031/admin` and start editing!
