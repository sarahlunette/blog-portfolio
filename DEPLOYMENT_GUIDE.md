# Quick Deployment Guide

This guide will help you deploy your blog portfolio to Vercel in just a few steps.

## Prerequisites

- GitHub account
- Vercel account (sign up at [vercel.com](https://vercel.com) using your GitHub account)

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., "thelab-blog-portfolio")
4. Choose "Public" or "Private"
5. Do NOT initialize with README (we already have one)
6. Click "Create repository"

## Step 2: Push Your Code to GitHub

Open your terminal and run these commands:

```bash
# Navigate to your project
cd "c:\Users\sarah\Desktop\blog-portfolio"

# Add your GitHub repository as remote (replace with your actual repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push your code
git branch -M main
git push -u origin main
```

**Note**: Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## Step 3: Deploy to Vercel

### Option A: Using Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New" → "Project"
3. Import your GitHub repository:
   - Find "thelab-blog-portfolio" (or your repo name)
   - Click "Import"
4. Configure your project:
   - **Project Name**: thelab-blog (or your choice)
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: ./ (default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `out` (auto-filled)
5. Click "Deploy"
6. Wait 2-3 minutes for deployment to complete
7. Your site is live! Click "Visit" to see it

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Navigate to your project
cd "c:\Users\sarah\Desktop\blog-portfolio"

# Deploy to production
vercel --prod
```

## Step 4: Get Your Live URL

After deployment, Vercel will give you a URL like:
```
https://thelab-blog.vercel.app
```

You can share this URL with anyone!

## Next Steps

### Add a Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain (e.g., `thelab-blog.com`)
3. Follow Vercel's instructions to update your DNS settings
4. Wait for DNS propagation (usually 5-30 minutes)

### Automatic Deployments

Good news! Every time you push to GitHub, Vercel will automatically:
- Build your site
- Run tests (if you have any)
- Deploy the new version
- Give you a preview URL for each commit

### Update Your Site

To make changes:

```bash
# Make your changes to files
# Then commit and push

git add .
git commit -m "Your commit message"
git push
```

Vercel will automatically deploy the changes!

## Troubleshooting

### "Permission denied" when pushing to GitHub

You may need to set up SSH keys or use a Personal Access Token. See:
- [GitHub SSH Keys Guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- [GitHub Personal Access Token Guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

### Build fails on Vercel

1. Check the build logs in Vercel dashboard
2. Make sure all dependencies are in `package.json`
3. Try building locally first: `npm run build`

### Articles not showing

1. Make sure article HTML files are in `public/articles/`
2. Check that filenames match exactly in the code
3. Verify the article mapping in `src/app/articles/page.tsx`

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)
- GitHub Documentation: [docs.github.com](https://docs.github.com)

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Check for errors
npm run lint

# Git commands
git status                    # Check what changed
git add .                     # Stage all changes
git commit -m "message"       # Commit changes
git push                      # Push to GitHub

# Vercel commands
vercel                        # Deploy preview
vercel --prod                 # Deploy production
vercel ls                     # List deployments
```

---

**Your blog is now ready to deploy! 🚀**
