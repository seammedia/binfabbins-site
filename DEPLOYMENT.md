# Binfab Bins - Deployment Checklist

## ✅ Pre-Deployment Checklist

### 1. Repository Setup
- [ ] Create new GitHub repository (public or private)
- [ ] Add repository as remote:
  ```bash
  git remote add origin https://github.com/YOUR_USERNAME/binfabbins-site.git
  git branch -M main
  git push -u origin main
  ```

### 2. Product Images (CRITICAL)
- [ ] Add 9 product images to `public/images/products/`
- [ ] Verify filenames match those in `content/products/products.ts`:
  - `rib-sided-hooklifts.png`
  - `rolled-sided-hooklifts.png`
  - `marrell-bins.png`
  - `forklift-bins.png`
  - `tipping-bins.png`
  - `rear-lift-bins.png`
  - `frontlift-bins.png`
  - `mgb-plastic-bins.png`
  - `crane-bins.png`

**Image Sources:**
- Original binfabbins.com.au website
- Wayback Machine: https://web.archive.org/web/*/https://binfabbins.com.au/
- Client-provided photography

### 3. Contact Form Setup
- [ ] Sign up for Web3Forms (https://web3forms.com) OR Formspree (https://formspree.io)
- [ ] Get API key/Form ID
- [ ] Note API key for Vercel environment variables

### 4. Vercel Deployment

#### A. Initial Setup
1. [ ] Sign in to Vercel (https://vercel.com)
2. [ ] Click "Add New Project"
3. [ ] Import your GitHub repository
4. [ ] Configure project settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** ./
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install` (default)

#### B. Environment Variables
Add the following in Vercel Dashboard → Project Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://binfabbins.com.au
CONTACT_PROVIDER=web3forms
CONTACT_API_KEY=your_actual_api_key_here
```

**Important:** Add these for all environments (Production, Preview, Development)

#### C. Domain Configuration
1. [ ] Go to Project Settings → Domains
2. [ ] Add domain: `binfabbins.com.au`
3. [ ] Add domain: `www.binfabbins.com.au` (will auto-redirect to apex)
4. [ ] Copy DNS records provided by Vercel
5. [ ] Update DNS records with your domain registrar:
   - Add A record pointing to Vercel IP
   - OR add CNAME record pointing to Vercel
   - Add TXT record for verification

#### D. Deploy
- [ ] Click "Deploy" in Vercel dashboard
- [ ] Wait for deployment to complete (usually 2-3 minutes)
- [ ] Test deployment URL

### 5. DNS Configuration

**At your domain registrar (e.g., GoDaddy, Namecheap, etc.):**

1. [ ] Add A records:
   - Host: `@` → Points to: `76.76.21.21`

2. [ ] Add CNAME record:
   - Host: `www` → Points to: `cname.vercel-dns.com`

3. [ ] Verify DNS propagation (can take up to 48 hours):
   ```bash
   dig binfabbins.com.au
   dig www.binfabbins.com.au
   ```

### 6. Post-Deployment Testing

- [ ] Visit https://binfabbins.com.au
- [ ] Verify www redirect: https://www.binfabbins.com.au → https://binfabbins.com.au
- [ ] Test all pages:
  - [ ] Home page loads correctly
  - [ ] Products page displays all products
  - [ ] About page displays content and testimonials
  - [ ] Contact page loads
  - [ ] Contact form submits successfully
  - [ ] Privacy policy page loads
- [ ] Test mobile responsiveness on multiple devices
- [ ] Verify phone number links work on mobile (tel: links)
- [ ] Check product images load correctly
- [ ] Test form validation (try submitting empty form)
- [ ] Submit test contact form and verify email receipt

### 7. SEO Verification

- [ ] Verify sitemap: https://binfabbins.com.au/sitemap.xml
- [ ] Verify robots.txt: https://binfabbins.com.au/robots.txt
- [ ] Check Google Search Console:
  - [ ] Add property for binfabbins.com.au
  - [ ] Submit sitemap
  - [ ] Verify ownership
- [ ] Check structured data:
  - [ ] Test with Google Rich Results Test
  - [ ] Verify LocalBusiness schema appears correctly

### 8. Performance Testing

- [ ] Run Lighthouse audit (Chrome DevTools)
  - Target scores: All >90
  - [ ] Performance >90
  - [ ] Accessibility >90
  - [ ] Best Practices >90
  - [ ] SEO >90
- [ ] Test page load times
- [ ] Verify images are optimized

### 9. Security Verification

- [ ] Test security headers:
  - Visit https://securityheaders.com
  - Enter: https://binfabbins.com.au
  - Verify headers are present
- [ ] Test contact form rate limiting
- [ ] Verify no sensitive data in client-side code

### 10. Optional Enhancements

- [ ] Set up Google Analytics:
  - Add GA4 tracking code to layout.tsx
  - Add `NEXT_PUBLIC_GA_ID` environment variable
- [ ] Set up monitoring (e.g., Vercel Analytics)
- [ ] Enable Vercel Speed Insights
- [ ] Set up uptime monitoring (e.g., UptimeRobot)

## 🚀 Quick Deploy Commands

```bash
# One-time setup
npm install -g vercel

# Deploy to production
cd binfabbins-site
vercel --prod

# Deploy to preview (staging)
vercel
```

## 🔄 Continuous Deployment

After initial setup, any push to the `main` branch will automatically trigger a new deployment on Vercel.

## 📊 Monitoring

**Vercel Dashboard:** https://vercel.com/dashboard
- View deployment logs
- Monitor analytics
- Check function logs (contact form)
- View bandwidth usage

## 🐛 Troubleshooting

### Issue: Images not displaying
**Solution:**
1. Check that images exist in `public/images/products/`
2. Verify filenames match exactly (case-sensitive)
3. Check browser console for 404 errors

### Issue: Contact form not sending emails
**Solution:**
1. Verify environment variables are set in Vercel
2. Check Vercel function logs for errors
3. Test API key separately
4. Check spam folder for test emails

### Issue: Domain not resolving
**Solution:**
1. Wait for DNS propagation (up to 48 hours)
2. Verify DNS records are correct
3. Use `dig` command to check DNS resolution
4. Clear browser DNS cache

### Issue: Build failing on Vercel
**Solution:**
1. Check build logs in Vercel dashboard
2. Run `npm run build` locally to reproduce
3. Verify all dependencies are in package.json
4. Check for TypeScript errors

## 📞 Support

**Developer Support:**
- GitHub Issues: [repository-url]/issues
- Vercel Support: https://vercel.com/support

**Client:**
- Binfab Bins
- Phone: 0478 598 242
- Website: https://binfabbins.com.au

---

## 🎉 Launch Checklist

Final steps before going live:

- [ ] All above checklists completed
- [ ] Product images added
- [ ] Contact form tested and working
- [ ] Domain properly configured and resolving
- [ ] All pages tested on desktop and mobile
- [ ] SEO verified (sitemap, robots.txt, structured data)
- [ ] Performance scores >90 on Lighthouse
- [ ] Security headers verified
- [ ] Contact email confirmed working
- [ ] Client approval received

**🚀 Ready to launch!**

---

**Deployment Date:** _____________
**Deployed By:** _____________
**Production URL:** https://binfabbins.com.au
**Vercel Project:** _____________
