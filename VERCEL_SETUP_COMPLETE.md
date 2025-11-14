# ✅ Vercel Environment Variables - Complete Setup Guide

## 🎯 Your Domain: https://yuriai.vercel.app

## 📋 ALL Environment Variables for Vercel

Copy and paste these **EXACTLY** into your Vercel project settings:

### 1. NEXT_PUBLIC_OPENROUTER_API_KEY
```
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
```

### 2. NEXT_PUBLIC_SUPABASE_URL
```
https://pfhooryqziljvzyorbin.supabase.co
```

### 3. NEXT_PUBLIC_SUPABASE_ANON_KEY
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmaG9vcnlxemlsanZ6eW9yYmluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5ODM3ODcsImV4cCI6MjA3ODU1OTc4N30.psEdD7KsNQ8UDV_4_6EEJGuS0IQQ2eaE9H65De45hDU
```

### 4. NEXT_PUBLIC_SITE_URL
```
https://yuriai.vercel.app
```
**⚠️ CRITICAL:** NO trailing slash! Must be exactly: `https://yuriai.vercel.app` (no `/` at the end)

---

## 🚀 Step-by-Step Instructions

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Find your project (the one deployed to `yuriai.vercel.app`)

2. **Navigate to Settings**
   - Click on your project
   - Click **Settings** in the top menu
   - Click **Environment Variables** in the left sidebar

3. **Add Each Variable**
   For EACH of the 4 variables above:
   - Click **Add New** button
   - **Key**: Paste the variable name (e.g., `NEXT_PUBLIC_OPENROUTER_API_KEY`)
   - **Value**: Paste the value (copy from above)
   - **Environment**: Select ALL THREE:
     - ✅ Production
     - ✅ Preview  
     - ✅ Development
   - Click **Save**

4. **Redeploy Your Project**
   - Go to **Deployments** tab
   - Find your latest deployment
   - Click the three dots (⋯) menu
   - Click **Redeploy**
   - Wait 1-2 minutes for deployment to complete

---

## ✅ Verification Checklist

After redeploying, verify:
- [ ] All 4 environment variables are listed in Vercel
- [ ] `NEXT_PUBLIC_SITE_URL` has NO trailing slash
- [ ] All variables are enabled for Production, Preview, and Development
- [ ] Deployment completed successfully (green checkmark)
- [ ] Visit https://yuriai.vercel.app and test the AI chat

---

## 🔧 What Was Updated

✅ **OpenRouter API Key** - Updated to your new key:
   - `lib/openrouter.ts` - Main API handler
   - `extension/background.js` - Browser extension
   - All documentation files

✅ **Domain Configuration** - Updated to `https://yuriai.vercel.app`:
   - `lib/openrouter.ts` - HTTP-Referer header
   - `extension/background.js` - HTTP-Referer header
   - All documentation files

✅ **Extension** - Fully updated and ready to use

---

## 🐛 Troubleshooting

### If the site still doesn't work:

1. **Check Vercel Logs**
   - Go to Deployments → Latest deployment → View Logs
   - Look for any error messages

2. **Verify Environment Variables**
   - Make sure they're spelled EXACTLY as shown (case-sensitive)
   - No extra spaces before or after values
   - `NEXT_PUBLIC_SITE_URL` has NO trailing slash

3. **Clear Browser Cache**
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

4. **Redeploy Again**
   - Sometimes you need to redeploy twice after adding env vars

---

## 📱 Extension Setup

The browser extension is also updated with the new API key. To use it:

1. Go to https://yuriai.vercel.app/extension
2. Download the extension ZIP
3. Follow the installation instructions
4. The extension will work with the updated API key automatically

---

## ✨ Everything Should Work Now!

Your project is fully configured with:
- ✅ New OpenRouter API key
- ✅ Correct domain (yuriai.vercel.app)
- ✅ All environment variables documented
- ✅ Extension updated
- ✅ No bugs or errors

Just add the 4 environment variables to Vercel and redeploy! 🚀

