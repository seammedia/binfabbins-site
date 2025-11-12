# GitHub & Vercel Setup Instructions

## Step 1: Create GitHub Repository

### Option A: Using GitHub CLI (gh)
```bash
cd ~/binfabbins-site

# Login to GitHub (if not already)
gh auth login

# Create repository
gh repo create binfabbins-site --public --source=. --remote=origin --push

# View repository
gh repo view --web
```

### Option B: Using GitHub Web Interface
1. Go to https://github.com/new
2. Repository name: `binfabbins-site`
3. Description: `Modern website for Binfab Bins - Australian waste bin manufacturers`
4. Choose: **Public** (or Private if preferred)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

7. Then run these commands:
```bash
cd ~/binfabbins-site

# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/binfabbins-site.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 2: Verify GitHub Repository

After pushing, verify at:
```
https://github.com/YOUR_USERNAME/binfabbins-site
```

You should see:
- ✅ All files pushed
- ✅ README.md displays on homepage
- ✅ 2 commits visible
- ✅ GitHub Actions workflow visible in .github/workflows/

## Step 3: Import to Vercel

### A. Sign in to Vercel
1. Go to https://vercel.com
2. Sign in with your GitHub account (recommended)
3. Authorize Vercel to access your GitHub repositories

### B. Import Project
1. Click **"Add New..."** → **"Project"**
2. Find and select **"binfabbins-site"** from your repositories
3. Click **"Import"**

### C. Configure Project
**Framework Preset:** Next.js (should auto-detect)
**Root Directory:** `./` (default)
**Build Command:** Leave as default (`npm run build`)
**Output Directory:** Leave as default (`.next`)
**Install Command:** Leave as default (`npm install`)

### D. Add Environment Variables
Click **"Environment Variables"** and add:

```
NEXT_PUBLIC_SITE_URL=https://binfabbins.com.au
CONTACT_PROVIDER=web3forms
CONTACT_API_KEY=your_api_key_here
```

**Important Notes:**
- Replace `your_api_key_here` with your actual Web3Forms or Formspree API key
- If you don't have an API key yet:
  - Web3Forms: Sign up at https://web3forms.com (free)
  - Formspree: Sign up at https://formspree.io (free tier available)
- Add these variables to **all environments** (Production, Preview, Development)

### E. Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. You'll see: ✅ **"Your project has been deployed!"**
4. Click **"Visit"** to see your live site

### F. Note Your Deployment URL
Vercel will give you a URL like:
```
https://binfabbins-site-xxxxx.vercel.app
```

Save this URL for testing.

## Step 4: Configure Custom Domain (Optional)

### A. Add Domain in Vercel
1. In Vercel Dashboard → Select your project
2. Go to **Settings** → **Domains**
3. Click **"Add Domain"**
4. Enter: `binfabbins.com.au`
5. Click **"Add"**
6. Enter: `www.binfabbins.com.au`
7. Click **"Add"**

### B. Configure DNS
Vercel will show you DNS records to add. You'll need to add these at your domain registrar:

**For binfabbins.com.au:**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**For www.binfabbins.com.au:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### C. Wait for DNS Propagation
- DNS changes can take up to 48 hours
- Usually completes in 1-2 hours
- Check status in Vercel dashboard

## Step 5: Test Deployment

### Test Checklist
- [ ] Visit your Vercel URL
- [ ] Homepage loads correctly
- [ ] Navigate to Products page
- [ ] Navigate to About page
- [ ] Navigate to Contact page
- [ ] Try submitting contact form (should work if API key is configured)
- [ ] Test on mobile device
- [ ] Click phone number link (should open phone dialer on mobile)

### Performance Check
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Click "Generate report"
4. Verify all scores > 90

## Step 6: Add Product Images (Critical)

Your site is live but needs product images:

1. **Find the images** from:
   - Original binfabbins.com.au site assets
   - Wayback Machine: https://web.archive.org/web/*/https://binfabbins.com.au/
   - Client-provided photos

2. **Add to project:**
   ```bash
   cd ~/binfabbins-site/public/images/products/
   # Copy your 9 product images here
   ```

3. **Required filenames:**
   - rib-sided-hooklifts.png
   - rolled-sided-hooklifts.png
   - marrell-bins.png
   - forklift-bins.png
   - tipping-bins.png
   - rear-lift-bins.png
   - frontlift-bins.png
   - mgb-plastic-bins.png
   - crane-bins.png

4. **Commit and push:**
   ```bash
   cd ~/binfabbins-site
   git add public/images/products/
   git commit -m "Add product images"
   git push
   ```

5. **Vercel will auto-deploy** the update (takes 2-3 minutes)

## Quick Reference

### Useful Commands
```bash
# View deployment status
cd ~/binfabbins-site
git status
git log --oneline

# Push updates
git add .
git commit -m "Your update message"
git push

# View deployments
vercel ls

# Deploy directly (alternative to git push)
vercel --prod
```

### Useful Links
- **GitHub Repo:** https://github.com/YOUR_USERNAME/binfabbins-site
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Deployment URL:** https://binfabbins-site-xxxxx.vercel.app
- **Custom Domain:** https://binfabbins.com.au (after DNS setup)

## Troubleshooting

### Issue: "Permission denied" when pushing to GitHub
**Solution:** Set up SSH key or use GitHub CLI
```bash
# Option 1: GitHub CLI (easiest)
brew install gh
gh auth login

# Option 2: SSH key
# Follow: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
```

### Issue: Vercel build failing
**Solution:** Check build logs in Vercel dashboard
- Look for error messages
- Verify environment variables are set
- Check that all dependencies are in package.json

### Issue: Contact form not working
**Solution:** Verify environment variables
1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Ensure all 3 variables are present
3. Redeploy if you just added them

### Issue: Images not showing
**Solution:** Add placeholder images or extract from Wayback Machine
- See `public/images/products/README.md` for details
- Use Wayback Machine to download original images
- Ensure filenames match exactly (case-sensitive)

## Support

- **Vercel Docs:** https://vercel.com/docs
- **GitHub Docs:** https://docs.github.com
- **Web3Forms:** https://web3forms.com/docs
- **Formspree:** https://help.formspree.io

---

## Next Steps After Deployment

1. [ ] Set up Google Search Console
2. [ ] Submit sitemap: `https://binfabbins.com.au/sitemap.xml`
3. [ ] Set up Google Analytics (optional)
4. [ ] Enable Vercel Analytics (optional)
5. [ ] Set up uptime monitoring (e.g., UptimeRobot)
6. [ ] Test thoroughly on multiple devices
7. [ ] Get client approval
8. [ ] Launch! 🚀
