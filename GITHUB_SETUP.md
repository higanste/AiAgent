# GitHub Setup Instructions

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Repository name: `rtrvr-clone` (or any name you prefer)
5. Description: "AI Agent for Web - Rtrvr Clone"
6. Select **Private** (as requested)
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. Click **Create repository**

## Step 2: Push Your Code

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add all files
git add .

# Commit
git commit -m "Initial commit: Rtrvr clone with AI agent and Edge extension"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/rtrvr-clone.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Connect to Vercel

1. Go to [Vercel](https://vercel.com) and sign in
2. Click **Add New Project**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js
5. Add environment variables (see ENV_VARIABLES.md)
6. Click **Deploy**

## Alternative: Using GitHub CLI

If you have GitHub CLI installed:

```bash
gh repo create rtrvr-clone --private --source=. --remote=origin --push
```

This will create a private repo and push your code in one command!

## Troubleshooting

If you get authentication errors:
- Use a Personal Access Token instead of password
- Or use SSH: `git remote set-url origin git@github.com:YOUR_USERNAME/rtrvr-clone.git`

