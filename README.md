# Binfab Bins Website

Modern, secure, static website for Binfab Bins - Australian waste bin manufacturers.

Built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x or later
- npm or pnpm

### Local Development

```bash
# Clone the repository
git clone <repository-url>
cd binfabbins-site

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
binfabbins-site/
├── app/                      # Next.js 14 App Router
│   ├── (pages)/
│   │   ├── page.tsx         # Home page
│   │   ├── products/        # Products page
│   │   ├── about/           # About Us page
│   │   ├── contact/         # Contact page
│   │   └── legal/           # Legal pages (privacy)
│   ├── api/                 # API routes
│   │   └── contact/         # Contact form handler
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── globals.css          # Global styles
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots.txt
├── components/
│   ├── layout/              # Layout components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section
│   │   └── Footer.tsx       # Site footer
│   ├── ui/                  # shadcn/ui components
│   │   ├── ProductCard.tsx  # Product display card
│   │   └── TestimonialCard.tsx
│   ├── ContactForm.tsx      # Contact form with validation
│   └── JsonLd.tsx           # Structured data component
├── content/                 # Content data
│   ├── products/            # Product data
│   │   └── products.ts
│   └── testimonials.ts      # Customer testimonials
├── public/
│   └── images/              # Static images
│       ├── products/        # Product images
│       └── hero/            # Hero section images
├── lib/
│   └── utils.ts             # Utility functions
├── .github/
│   └── workflows/
│       └── ci.yml           # GitHub Actions CI
├── .env.example             # Environment variables template
├── vercel.json              # Vercel config (security headers, redirects)
├── components.json          # shadcn/ui configuration
└── package.json
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://binfabbins.com.au

# Contact Form Configuration
# Choose provider: web3forms or formspree
CONTACT_PROVIDER=web3forms

# Contact Form API Key
# For web3forms: Get your access key from https://web3forms.com
# For formspree: Get your form ID from https://formspree.io
CONTACT_API_KEY=your_api_key_here
```

### Contact Form Setup

#### Option 1: Web3Forms (Recommended)

1. Visit [https://web3forms.com](https://web3forms.com)
2. Create a free account
3. Get your Access Key
4. Set in `.env.local`:
   ```
   CONTACT_PROVIDER=web3forms
   CONTACT_API_KEY=your_web3forms_access_key
   ```

#### Option 2: Formspree

1. Visit [https://formspree.io](https://formspree.io)
2. Create a new form
3. Get your Form ID (e.g., `xwpkgqxy`)
4. Set in `.env.local`:
   ```
   CONTACT_PROVIDER=formspree
   CONTACT_API_KEY=xwpkgqxy
   ```

### Add Product Images

Product images should be placed in `public/images/products/`:

Required images (see `public/images/products/README.md` for details):
- rib-sided-hooklifts.png
- rolled-sided-hooklifts.png
- marrell-bins.png
- forklift-bins.png
- tipping-bins.png
- rear-lift-bins.png
- frontlift-bins.png
- mgb-plastic-bins.png
- crane-bins.png

**Sources for images:**
1. Original binfabbins.com.au website assets
2. Wayback Machine: https://web.archive.org/web/*/https://binfabbins.com.au/
3. Client-provided product photography

Images will be automatically optimized by Next.js Image component.

## 🚀 Deployment to Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/binfabbins-site)

### Manual Deployment

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Initialize Vercel project**:
   ```bash
   cd binfabbins-site
   vercel
   ```

3. **Set Environment Variables** in Vercel Dashboard:
   - Go to Project Settings > Environment Variables
   - Add:
     - `NEXT_PUBLIC_SITE_URL`
     - `CONTACT_PROVIDER`
     - `CONTACT_API_KEY`

4. **Deploy**:
   ```bash
   vercel --prod
   ```

### Vercel Project Settings

**Framework Preset:** Next.js
**Build Command:** `npm run build`
**Output Directory:** `.next`
**Install Command:** `npm install`
**Development Command:** `npm run dev`

**Custom Domains:**
- Add `binfabbins.com.au` as primary domain
- `www.binfabbins.com.au` will automatically redirect to apex (configured in vercel.json)

## 🔒 Security Features

- **Content Security Policy (CSP)** - Restricts resource loading
- **X-Frame-Options** - Prevents clickjacking
- **X-Content-Type-Options** - Prevents MIME sniffing
- **Referrer-Policy** - Controls referrer information
- **Permissions-Policy** - Restricts browser features
- **Rate Limiting** - Contact form API rate limiting (5 requests/minute per IP)
- **Input Validation** - Form validation with Zod schema
- **No client secrets** - All sensitive data in environment variables

## 📈 SEO Features

- ✅ Server-side metadata generation
- ✅ Semantic HTML structure
- ✅ Open Graph tags for social sharing
- ✅ JSON-LD structured data (LocalBusiness schema)
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Mobile-responsive design
- ✅ Fast load times (static generation)
- ✅ Image optimization with next/image
- ✅ Descriptive URLs and page titles

## 🧪 Testing & Quality

### Run Linter

```bash
npm run lint
```

### Type Checking

```bash
npx tsc --noEmit
```

### Build Test

```bash
npm run build
```

## 📝 Content Management

### Adding/Updating Products

Edit `content/products/products.ts`:

```typescript
{
  id: '10',
  slug: 'new-product',
  title: 'New Product Name',
  description: 'Product description...',
  image: '/images/products/new-product.png',
  category: 'category-name'
}
```

### Adding/Updating Testimonials

Edit `content/testimonials.ts`:

```typescript
{
  id: '4',
  name: 'Customer Name',
  content: 'Testimonial content...'
}
```

## 🎨 Styling

- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Custom Theme** - Navy/charcoal color scheme matching brand
- **Responsive Design** - Mobile-first approach
- **Dark Mode Ready** - Color scheme prepared for dark mode (optional)

## 📦 Adding shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
```

## 🔄 CI/CD

GitHub Actions workflow automatically:
1. Runs on push to `main` branch
2. Installs dependencies
3. Runs ESLint
4. Builds the project
5. Checks for TypeScript errors

## 🐛 Common Issues

### Issue: Contact form not sending emails

**Solution:** Check that environment variables are set correctly in `.env.local` (development) or Vercel Dashboard (production).

### Issue: Images not loading

**Solution:** Ensure images are placed in `public/images/products/` with correct filenames matching `products.ts`.

### Issue: Build failing

**Solution:** Run `npm run lint` and `npx tsc --noEmit` to identify errors.

## 📚 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Form Handling:** React Hook Form + Zod
- **SEO:** next-seo, JSON-LD
- **Icons:** Lucide React
- **Deployment:** Vercel
- **CI/CD:** GitHub Actions

## 📞 Support

For issues or questions:
- **Client:** Binfab Bins
- **Phone:** 0478 598 242
- **Website:** https://binfabbins.com.au

## 📄 License

Copyright © 2025 Binfab Bins. All rights reserved.

---

## 🎯 Handover Notes

### Content Completeness

✅ **Complete:**
- All page structure and layout
- Navigation and footer
- Product data structure (9 products)
- Customer testimonials (3 reviews)
- Contact form with validation
- About Us content
- SEO metadata and structured data

⚠️ **Requires Action:**

1. **Product Images** (Priority: HIGH)
   - 9 product images needed in `public/images/products/`
   - See `public/images/products/README.md` for specific filenames
   - Can be extracted from original site or Wayback Machine
   - Suggested sources documented in README

2. **Contact Form API Key** (Priority: HIGH)
   - Sign up for Web3Forms or Formspree
   - Add API key to environment variables
   - Form will work in development mode without key (logs to console)

3. **Domain Configuration** (Priority: MEDIUM)
   - Set `NEXT_PUBLIC_SITE_URL` environment variable
   - Configure DNS to point to Vercel
   - Add custom domain in Vercel dashboard

### Wayback Machine Reference

Used Wayback Machine snapshots to verify:
- Original site structure and navigation
- Product names and descriptions
- About Us copy (20+ years experience, locally sourced)
- Customer testimonials
- Phone number: 0478 598 242

**Last referenced snapshot:** Available at https://web.archive.org/web/*/https://binfabbins.com.au/

### Performance Targets

- Lighthouse Performance: >90
- Lighthouse Best Practices: >90
- Lighthouse SEO: >90
- Lighthouse Accessibility: >90

All targets achievable with current implementation.

### Next Steps

1. ✅ Clone repository
2. ✅ Install dependencies (`npm install`)
3. ⚠️ Add product images to `public/images/products/`
4. ⚠️ Configure `.env.local` with API keys
5. ✅ Test locally (`npm run dev`)
6. ✅ Deploy to Vercel (`vercel`)
7. ⚠️ Configure custom domain
8. ✅ Test production build
9. ⚠️ Set up Google Analytics (optional, via env var)

---

**Built with ❤️ for Binfab Bins**
