# Vercel Deployment Guide

## ⚠️ Important: Vercel Serverless Limitations

Vercel serverless functions have a **read-only file system** except for `/tmp`. This means:

### What Works:
✅ Login and authentication
✅ Viewing and editing content
✅ Saving changes (temporarily)

### What Doesn't Persist:
❌ **HTML file changes are temporary** - Lost on next deployment
❌ **Backups are temporary** - Stored in `/tmp`, cleared periodically
❌ **Image uploads are temporary** - Lost on next deployment

---

## 🎯 Recommended Solutions

### Option 1: Git-Based Workflow (Recommended)

**How it works:**
1. Make changes via admin panel locally
2. Test changes on your local site
3. Commit changes to Git
4. Deploy to Vercel (changes are permanent)

**Setup:**
```bash
# 1. Edit locally
cd admin
npm start
# Visit http://localhost:3031/admin

# 2. Make your changes in the admin panel

# 3. Commit the modified HTML files
git add index.html about/index.html menu/index.html
git commit -m "Update site content"

# 4. Push to deploy
git push origin main
```

### Option 2: Deploy Admin Separately (Advanced)

Deploy the admin panel on a VPS or container service where it has write access to files, then sync changes back to Vercel via Git API.

### Option 3: Use Vercel Blob Storage (Future Enhancement)

Integrate Vercel Blob Storage for:
- Persistent image uploads
- Backup storage
- Content versioning

---

## 📦 Deploying to Vercel

### Step 1: Set Environment Variables

In your Vercel project settings, add these environment variables:

```
ADMIN_PASSWORD_HASH=<copy from admin/.env>
SESSION_SECRET=<copy from admin/.env>
NODE_ENV=production
```

### Step 2: Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your Git repository to Vercel for automatic deployments.

### Step 3: Access Admin Panel

Once deployed, visit:
```
https://your-domain.vercel.app/admin
```

---

## ⚙️ Configuration Files Created

### `/vercel.json`
Configures Vercel to:
- Run admin panel as serverless function (`admin/server.js`)
- Route `/cms-api/*` to admin API
- Route `/admin/*` to admin interface
- Serve static Next.js site for all other routes

### Routes:
```
/admin          → Admin login page
/admin/*        → Admin dashboard & editor
/cms-api/*      → Admin API endpoints
/*              → Your static Next.js site
```

---

## 🔧 Files Modified for Vercel

### 1. `admin/server.js`
- Only starts server when run directly (not in serverless)
- Exports Express app for Vercel

### 2. `admin/config.js`
- Detects Vercel environment
- Sets correct file paths for serverless

### 3. `vercel.json` (NEW)
- Routes configuration
- Serverless function setup

### 4. `.vercelignore` (NEW)
- Excludes dev files from deployment

---

## 🧪 Testing Locally

Before deploying, test that everything works:

```bash
# Test admin panel
cd admin
npm start
# Visit http://localhost:3031/admin

# Test main site (if you have a local server)
# Make sure /api routes still work
```

---

## 🚨 Current Limitations on Vercel

### 1. Changes Don't Persist
**Problem:** HTML file modifications are lost on next deployment.

**Solution:** Use Git-based workflow (see Option 1 above).

### 2. Image Uploads
**Problem:** Uploaded images don't persist.

**Solutions:**
- Upload images to your repo before deploying
- Use Vercel Blob Storage
- Use external CDN (Cloudinary, Imgix, etc.)

### 3. Backups
**Problem:** Backups stored in `/tmp` are cleared.

**Solutions:**
- Backups are less critical with Git workflow
- For production, integrate S3 or similar storage

---

## 🔐 Security Notes

1. **Never commit `.env` files** - Use Vercel environment variables
2. **HTTPS is automatic** on Vercel - Secure cookies enabled
3. **Rate limiting works** - 5 login attempts per 15 minutes
4. **Session security** - HTTP-only, secure cookies in production

---

## 📝 Recommended Workflow

### For Quick Edits:
1. **Local**: Edit via admin panel → Test → Commit → Push → Auto-deploy

### For Images:
1. Add images to repo: `/path/to/image.jpg`
2. Reference in content: `image.jpg`
3. Commit and push

### For Major Updates:
1. Work locally with admin panel
2. Test thoroughly
3. Create a Git branch
4. Push and create PR
5. Merge to main for production

---

## 🎯 Next Steps

1. **Test locally first**: Make sure everything works
2. **Set environment variables** in Vercel dashboard
3. **Deploy**: `vercel` or connect Git repo
4. **Test admin login** on deployed site
5. **Document your workflow** for content updates

---

## ❓ FAQ

**Q: Can I edit content directly on Vercel?**
A: Yes, but changes are temporary. Use Git workflow for permanent changes.

**Q: Will my admin password work on Vercel?**
A: Yes, if you set the environment variables correctly.

**Q: Can I upload images?**
A: Temporarily yes, but they won't persist. Add images to Git instead.

**Q: Do I need a database?**
A: No! This CMS uses HTML files, which is perfect for static sites.

**Q: What happens to backups on Vercel?**
A: They're stored temporarily in `/tmp` but not persistent.

---

## 🔄 Alternative: Local Admin + Git

**Best practice for Vercel:**

1. Run admin panel **locally only**
2. Make content changes locally
3. Commit changes to Git
4. Don't deploy admin to Vercel at all
5. Vercel only serves static site

This avoids all serverless limitations!

---

## 📞 Need Help?

Check the main README.md for troubleshooting tips.
