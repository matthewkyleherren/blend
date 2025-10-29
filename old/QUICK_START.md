# Quick Start - Admin Panel on Vercel

## 🚀 Deploy to Vercel in 3 Steps

### Step 1: Set Environment Variables in Vercel

Go to your Vercel project settings → Environment Variables and add:

| Variable | Value | Where to find it |
|----------|-------|------------------|
| `ADMIN_PASSWORD_HASH` | `$2b$10$NSzott1yMKnhrmsimMuIMOXlrzLjjtU2LrAsyuta6aHBfzkZfjMO.` | Already set! |
| `SESSION_SECRET` | `3a2c71da7a9cba868cbc761a17eb338bda61e762b328458723cab35cffe893a4` | Already set! |
| `NODE_ENV` | `production` | Set to production |

**Your Admin Password:** `FfM33ZB9d+yoL2CerGn7hg==`

### Step 2: Deploy

```bash
git add .
git commit -m "Add CMS admin panel"
git push origin main
```

Vercel will auto-deploy if connected to Git, or use:
```bash
vercel
```

### Step 3: Access Admin

Visit: `https://your-site.vercel.app/admin`

Login with password: `FfM33ZB9d+yoL2CerGn7hg==`

---

## ⚠️ Important: Serverless Limitations

**Changes made on Vercel are TEMPORARY!**

On Vercel serverless:
- ❌ HTML edits don't persist after next deployment
- ❌ Uploaded images disappear
- ❌ Backups are temporary

---

## ✅ Recommended Workflow

### Option 1: Local Editing (Best)

1. **Edit locally:**
   ```bash
   cd admin
   npm start
   # Visit http://localhost:3031/admin
   ```

2. **Make changes** in admin panel

3. **Commit & deploy:**
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```

Changes are now permanent! ✅

### Option 2: Quick Test on Vercel

1. Deploy admin to Vercel (steps above)
2. Make edits to test the interface
3. For permanent changes, use Option 1

---

## 📂 Files Added

- ✅ `/vercel.json` - Vercel configuration
- ✅ `/.vercelignore` - Excludes dev files
- ✅ Modified `admin/server.js` - Serverless compatible
- ✅ Modified `admin/config.js` - Vercel paths

---

## 🔧 Configuration Complete

Your project is now configured for Vercel with:
- Admin panel at `/admin`
- CMS API at `/cms-api/*`
- No conflicts with existing `/api` routes ✅
- Secure authentication ✅
- Automatic HTTPS ✅

---

## 🎯 Summary

**For Production Use:**
- Run admin **locally only**
- Commit changes to Git
- Deploy via Git push

**For Testing:**
- Deploy admin to Vercel
- Test the interface
- Remember changes are temporary

**Choose what works best for your workflow!**
