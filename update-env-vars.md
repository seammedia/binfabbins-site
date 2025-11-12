# Update Vercel Environment Variables for Contact Form

## Option 1: Using Vercel Dashboard (Easiest)

1. Go to https://vercel.com/seammedias-projects/binfabbins-site/settings/environment-variables

2. Find and **EDIT** these existing variables (or add them if missing):

   **Variable 1:**
   ```
   Name: CONTACT_PROVIDER
   Value: formspree
   ```
   Select: Production ✓, Preview ✓, Development ✓
   Click "Save"

   **Variable 2:**
   ```
   Name: CONTACT_API_KEY
   Value: mzzybwpw
   ```
   Select: Production ✓, Preview ✓, Development ✓
   Click "Save"

   **Variable 3:** (should already exist, verify it's correct)
   ```
   Name: NEXT_PUBLIC_SITE_URL
   Value: https://binfabbins.com.au
   ```
   Select: Production ✓, Preview ✓, Development ✓

3. After saving, Vercel will ask if you want to redeploy
   - Click **"Redeploy"** or **"Redeploy with latest commit"**

4. Wait 2-3 minutes for deployment to complete

## Option 2: Using Vercel CLI (Automated)

Run these commands:

```bash
cd ~/binfabbins-site

# Update environment variables
vercel env rm CONTACT_PROVIDER production
vercel env add CONTACT_PROVIDER production
# When prompted, enter: formspree

vercel env rm CONTACT_API_KEY production
vercel env add CONTACT_API_KEY production
# When prompted, enter: mzzybwpw

# Redeploy with new env vars
vercel --prod
```

## How to Test

After redeployment:

1. Visit: https://binfabbins-site-18z4it4h2-seammedias-projects.vercel.app/contact
2. Fill out the contact form with test data
3. Click "Send Message"
4. You should see: "Thank you for your message! We'll get back to you soon."
5. Check your Formspree dashboard for the submission

## Troubleshooting

If the form doesn't work:
1. Check Vercel deployment logs for errors
2. Verify environment variables are set correctly
3. Check browser console for errors (F12 → Console tab)
4. Verify Formspree form ID is correct: mzzybwpw
