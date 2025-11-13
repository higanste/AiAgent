# 🔑 Vercel Environment Variables - COPY AND PASTE

## ⚠️ IMPORTANT: Copy these EXACTLY as shown below

Go to your Vercel project → Settings → Environment Variables and add these:

---

### 1. NEXT_PUBLIC_OPENROUTER_API_KEY

```
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
```

**Settings:**
- Environment: Production, Preview, Development (select all three)

---

### 2. NEXT_PUBLIC_SUPABASE_URL

```
https://pfhooryqziljvzyorbin.supabase.co
```

**Settings:**
- Environment: Production, Preview, Development (select all three)

---

### 3. NEXT_PUBLIC_SUPABASE_ANON_KEY

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmaG9vcnlxemlsanZ6eW9yYmluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5ODM3ODcsImV4cCI6MjA3ODU1OTc4N30.psEdD7KsNQ8UDV_4_6EEJGuS0IQQ2eaE9H65De45hDU
```

**Settings:**
- Environment: Production, Preview, Development (select all three)

---

### 4. NEXT_PUBLIC_SITE_URL

```
https://yuriai.vercel.app
```

**⚠️ IMPORTANT:** 
- **NO trailing slash** (no `/` at the end)
- Should be exactly: `https://yuriai.vercel.app`

**Settings:**
- Environment: Production, Preview, Development (select all three)

---

## 📋 Step-by-Step Instructions

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project: **AiAgent** (or whatever it's named)
3. Click **Settings** (top menu)
4. Click **Environment Variables** (left sidebar)
5. For EACH variable above:
   - Click **Add New**
   - Paste the **Key** (the name, e.g., `NEXT_PUBLIC_OPENROUTER_API_KEY`)
   - Paste the **Value** (the value shown above)
   - Select **Production**, **Preview**, and **Development** (all three)
   - Click **Save**
6. After adding all variables, go to **Deployments** tab
7. Click the three dots (⋯) on the latest deployment
8. Click **Redeploy**
9. Wait for deployment to complete (1-2 minutes)

---

## ✅ Verification

After redeploying, check:
- ✅ All 4 variables are listed
- ✅ `NEXT_PUBLIC_SITE_URL` has NO trailing slash
- ✅ All variables are enabled for Production, Preview, and Development
- ✅ Deployment completed successfully

---

## 🐛 If Still Not Working

1. **Check Vercel Logs:**
   - Go to Deployments → Click on latest deployment → View Logs
   - Look for any error messages

2. **Verify Environment Variables:**
   - Make sure they're spelled exactly as shown
   - Make sure there are no extra spaces
   - Make sure `NEXT_PUBLIC_SITE_URL` has no trailing slash

3. **Redeploy:**
   - After adding/updating variables, always redeploy

---

## 📝 Quick Copy List

```
NEXT_PUBLIC_OPENROUTER_API_KEY=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
NEXT_PUBLIC_SUPABASE_URL=https://pfhooryqziljvzyorbin.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmaG9vcnlxemlsanZ6eW9yYmluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5ODM3ODcsImV4cCI6MjA3ODU1OTc4N30.psEdD7KsNQ8UDV_4_6EEJGuS0IQQ2eaE9H65De45hDU
NEXT_PUBLIC_SITE_URL=https://yuriai.vercel.app
```

**Note:** In Vercel, add each one separately (don't paste this whole block).

