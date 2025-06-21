# ReVyve Wellness Lounge Static Site

## Overview

This is a static HTML/CSS/JS site for ReVyve Wellness Lounge, optimized for SEO, engagement, and performance, deployed on Vercel.

## Structure

- `index.html`: Main entry point with optimized meta tags, JSON-LD structured data, hero section, and sectioned content.
- `404.html`: Custom 404 page (optional).
- `vercel.json`: Vercel configuration for caching headers, rewrites, and redirects.
- `package.json`: Build scripts (e.g., Tailwind CSS).
- `README.md`: Project documentation and deployment steps.
- `styles/`
  - `input.css`: Tailwind input file for custom utilities/components.
  - `main.css`: Generated Tailwind CSS (commit or build at deploy).
- `scripts/`
  - `main.js`: Custom JS for mobile menu toggle, analytics, dynamic year update, etc.
- `public/`: Static assets served at root
  - `images/`: Logos, hero poster, OG thumbnails, icons (e.g., `logo-revyve-lounge.png`, `hero-poster.jpg`, `og-thumbnail.jpg`).
  - `videos/`: Background or hero videos (e.g., `ReVyve_Wellness_Landing_Page_Video.mp4`).
  - `fonts/`: Custom font files (e.g., `.woff2`).
  - `favicon.ico`: Favicon.
- `.gitignore`: Ignore node\_modules, built CSS if generated at deploy.

> If not using a framework that recognizes `public/`, ensure assets are at site root so `/images/...`, `/videos/...`, `/fonts/...` serve correctly.

## Overview of Optimization

This project includes SEO strategy, engagement-boosting UX patterns, and development best practices:

- Keyword targeting and metadata (title, description, Open Graph, Twitter Card).
- JSON-LD structured data for LocalBusiness (HealthAndBeautyBusiness).
- Hero section with optimized background video or image and clear CTAs.
- Interactive elements: lead capture forms, chatbot widget, click-to-call links.
- Trust signals: testimonials, certifications, social proof.
- Performance: asset compression, caching headers, lazy-loading.
- Accessibility: alt text, keyboard navigation, responsive design.
- Analytics & tracking: event tracking for CTAs, video plays, form submissions.
- Ongoing SEO monitoring and A/B testing guidance.

## Setup & Tailwind CSS

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Configure **`` with content paths and custom colors:
   ```js
   module.exports = {
     content: ['./index.html', './scripts/**/*.js'],
     theme: {
       extend: {
         colors: {
           'gold-text': '#D4AF37',
           'gold-accent': '#FFD700',
           'gold-border': '#B5912D'
         }
       }
     },
     plugins: []
   };
   ```
3. **Build CSS**:
   ```bash
   npm run build   # generates styles/main.css via Tailwind
   ```
4. **Watch during development**:
   ```bash
   npm run watch:css
   ```
5. Ensure `<link rel="stylesheet" href="/styles/main.css" />` is in `index.html`.

## Deployment on Vercel

1. **Push to Git repository**.
2. In Vercel dashboard, import the repository.
3. **Framework**: select “Other” or “Static Site”.
4. **Build Command**: `npm run build` (if Tailwind build needed) or leave blank if `styles/main.css` is pre-generated.
5. **Output Directory**: root (where `index.html` resides).
6. **Deploy and verify**:
   - Visit `/`, confirm layout, hero video loads via `/videos/...` path.
   - Check static assets: `/images/...`, `/videos/...`, `/fonts/...`.
   - Verify no 404 errors on assets.
7. **Custom Domain**: configure after successful deploy.
8. **Local Testing**: use a simple HTTP server (`npx serve .`) or Live Server to verify paths before pushing.

## SEO & Meta

- Update `<title>` and `<meta name="description">` in `index.html` for current promotions or messaging (50–60 and 150–160 chars).
- Validate Open Graph and Twitter Card image URLs under `/images/` (e.g., `og-thumbnail.jpg`, `twitter-card.jpg`).
- Confirm JSON-LD structured data fields: address, phone, hours, social links.
- Use Lighthouse or SEO audit tools periodically to monitor performance and SEO issues.

## Analytics & Tracking

- Insert analytics snippet (e.g., GA4) in `index.html`.
- Set up event tracking:
  - Hero CTA clicks (“Book Free Consult”).
  - Form submissions or chatbot interactions.
  - Video play events (optional).
- Use UTM parameters for marketing campaign links.

## Caching & Performance

- In `vercel.json`, include caching headers for `/images/`, `/videos/`, `/fonts/` with long max-age and immutable for versioned assets.
- When updating assets, change filenames (e.g., add content hashes) so browsers fetch new versions.
- Compress images (prefer WebP) and video (<5MB for hero); consider WebM fallback for broader support.
- Preload critical fonts and defer non-essential JS.

### Example `vercel.json`

```json
{
  "headers": [
    { "source": "/videos/(.*)", "headers": [{"key": "Cache-Control", "value": "public, max-age=31536000, immutable"}] },
    { "source": "/images/(.*)", "headers": [{"key": "Cache-Control", "value": "public, max-age=31536000, immutable"}] },
    { "source": "/fonts/(.*)",  "headers": [{"key": "Cache-Control", "value": "public, max-age=31536000, immutable"}] },
    { "source": "/styles/(.*)", "headers": [{"key": "Cache-Control", "value": "public, max-age=31536000, immutable"}] },
    { "source": "/scripts/(.*)","headers": [{"key": "Cache-Control", "value": "public, max-age=86400"}] }
  ],
  "rewrites": [],
  "redirects": []
}
```

## Accessibility & Responsiveness

- Ensure `alt` text on images and captions on video if needed.
- Mobile-friendly: test menu toggle, click-to-call `tel:` links.
- Keyboard navigation: forms and interactive elements accessible.
- Color contrast: validate with tools to ensure readability.

## Customizations

- **Content**: modify sections in `index.html`: services, testimonials, team, FAQs, blog links.
- **Assets**: update filenames and paths in HTML/CSS to match actual files.
- **Interactive**: embed lead capture form (e.g., via form service or serverless function), chatbot widget script.
- **Integrations**: connect form submissions to CRM via APIs or serverless endpoints.

## Testing & QA

- **Local server**: `npx serve .` or Live Server extension for quick testing of asset paths.
- **Cross-browser/device**: ensure consistent behavior and visuals.
- **Structured data**: validate with Google Rich Results Test.
- **Analytics review**: monitor bounce rate, conversion events; adjust as needed.

## Ongoing Maintenance

- Schedule periodic SEO audits and content updates.
- A/B test headlines, CTAs, hero visuals, and messaging.
- Update promotions seasonally; reflect changes in meta tags.
- Monitor conversion metrics; iterate on form placement and UI elements.

---

Use this README as the authoritative reference for contributors and deployment. Customize URLs, contact details, and branding specifics as required.

