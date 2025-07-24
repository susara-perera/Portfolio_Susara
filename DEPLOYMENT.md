# Netlify Deployment Guide

## Prerequisites
- GitHub account
- Netlify account (free at netlify.com)
- Your portfolio project pushed to GitHub

## Step 1: Push Your Code to GitHub

1. **Initialize Git Repository** (if not already done):
   ```bash
   cd "c:\Users\User\Documents\Project\af2\Portfolio_Susara"
   git init
   git add .
   git commit -m "Initial commit - Portfolio ready for deployment"
   ```

2. **Create GitHub Repository**:
   - Go to GitHub.com
   - Click "New repository"
   - Name it "Portfolio_Susara" (or your preferred name)
   - Don't initialize with README (since you already have code)
   - Click "Create repository"

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/Portfolio_Susara.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Netlify

### Option A: Connect GitHub Repository (Recommended)

1. **Log in to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/log in with your GitHub account

2. **Create New Site**:
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your repositories
   - Select your `Portfolio_Susara` repository

3. **Configure Build Settings**:
   - **Branch to deploy**: `main`
   - **Build command**: `cd frontend && npm ci && npm run build`
   - **Publish directory**: `frontend/build`
   - Click "Deploy site"

4. **Your site will be live!**
   - Netlify will provide a random URL like `https://amazing-name-123456.netlify.app`
   - You can customize this later

### Option B: Manual Deploy (Drag and Drop)

If you prefer not to connect GitHub:

1. **Build your project locally**:
   ```bash
   cd "c:\Users\User\Documents\Project\af2\Portfolio_Susara\frontend"
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `frontend/build` folder to Netlify's deploy area

## Step 3: Custom Domain (Optional)

1. **Buy a domain** (from Namecheap, GoDaddy, etc.) or use Netlify's domain
2. **In Netlify Dashboard**:
   - Go to Site settings → Domain management
   - Add custom domain
   - Follow DNS configuration instructions

## Step 4: Environment Variables (If needed)

If your project uses environment variables:
1. Go to Site settings → Environment variables
2. Add your variables (like API keys)

## Automatic Deployments

With GitHub integration:
- Every push to your main branch automatically deploys
- Pull request previews are generated
- Build logs show any errors

## Build Configuration

The `netlify.toml` file I created configures:
- Build command and publish directory
- Node.js version
- Redirects for single-page app
- Caching headers for performance

## Common Issues & Solutions

### Build Fails
- Check build logs in Netlify dashboard
- Ensure all dependencies are in package.json
- Verify build command works locally

### Images Not Loading
- Use relative paths for local images
- Ensure images are in the public folder or imported properly

### 404 Errors
- The netlify.toml redirects should handle this
- Ensure you're using React Router correctly

## Performance Tips

1. **Optimize Images**: Compress images before adding to project
2. **Environment Variables**: Use them for API keys and sensitive data
3. **Caching**: The netlify.toml sets proper cache headers

## Your Site URL

After deployment, your portfolio will be available at:
`https://YOUR-SITE-NAME.netlify.app`

You can change the site name in Netlify dashboard under Site settings → General → Site details → Change site name.

## Next Steps

1. Test your deployed site thoroughly
2. Set up a custom domain if desired
3. Monitor analytics in Netlify dashboard
4. Set up form handling if you have contact forms
5. Consider upgrading to Pro for additional features

## Support

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Community](https://community.netlify.com/)
- Check build logs for debugging

Your portfolio is now ready for deployment! 🚀
