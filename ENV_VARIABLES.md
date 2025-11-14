# Environment Variables for Vercel

Copy and paste these into your Vercel project settings (Settings → Environment Variables):

## Required Variables

```
NEXT_PUBLIC_OPENROUTER_API_KEY=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
```

```
NEXT_PUBLIC_SUPABASE_URL=https://pfhooryqziljvzyorbin.supabase.co
```

```
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmaG9vcnlxemlsanZ6eW9yYmluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5ODM3ODcsImV4cCI6MjA3ODU1OTc4N30.psEdD7KsNQ8UDV_4_6EEJGuS0IQQ2eaE9H65De45hDU
```

```
NEXT_PUBLIC_SITE_URL=https://yuriai.vercel.app
```

**⚠️ IMPORTANT:** 
- **NO trailing slash** (no `/` at the end)
- Should be exactly: `https://yuriai.vercel.app`

## How to Add in Vercel

1. Go to your Vercel project dashboard
2. Click on **Settings**
3. Click on **Environment Variables**
4. Add each variable one by one:
   - **Key**: The variable name (e.g., `NEXT_PUBLIC_OPENROUTER_API_KEY`)
   - **Value**: The value (paste from above)
   - **Environment**: Select "Production", "Preview", and "Development" (or just "Production" if you want)
5. Click **Save**
6. Redeploy your project for changes to take effect

## After Adding Variables

1. Go to **Deployments** tab
2. Click the three dots (⋯) on your latest deployment
3. Click **Redeploy**
4. Wait for deployment to complete

Your app should now work with all the environment variables configured!

