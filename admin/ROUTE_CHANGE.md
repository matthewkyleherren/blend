# API Route Change - Fixed Conflict

## Problem
The admin panel was originally using `/api/*` routes, which conflicts with your existing Next.js `/api` directory used by the site.

## Solution
All admin panel API routes have been changed from `/api/*` to `/cms-api/*`

## Changes Made

### Backend (server.js)
- `/api/auth/login` → `/cms-api/auth/login`
- `/api/auth/logout` → `/cms-api/auth/logout`
- `/api/auth/check` → `/cms-api/auth/check`
- `/api/pages` → `/cms-api/pages`
- `/api/upload` → `/cms-api/upload`

### Frontend Files Updated
1. **public/js/auth.js** - Login and auth check
2. **public/js/dashboard.js** - Page list and logout
3. **public/js/editor.js** - All editor API calls

### Documentation
- **README.md** - Updated Vercel deployment instructions

## Result
✅ **No conflicts** - Your existing `/api` routes are unaffected
✅ **Admin panel works** - Uses `/cms-api` routes exclusively
✅ **Both can coexist** - Main site `/api` + Admin `/cms-api`

## Testing
```bash
# Admin auth endpoint
curl http://localhost:3031/cms-api/auth/check
# Returns: {"authenticated":false}

# Your existing Next.js API routes remain at
# /api/auth/*
# /api/get-settings
# /api/header
```

All routes tested and working correctly!
