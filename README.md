# La Maison — EmDash Restaurant Template

A warm, elegant restaurant template for [EmDash CMS](https://emdashcms.com). Perfect for restaurants, cafes, bars, and any food business.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/awebsomestuff/emdash-template-restaurant)

## Features

- Full-screen hero with background image
- Menu/carta with category filtering
- Photo gallery
- Customer testimonials with star ratings
- Contact info & hours section
- Reservation form (decorative)
- Dark mode by default, light mode supported
- Mobile-first responsive design
- SEO optimized
- All content manageable from the CMS admin

## Getting Started

```bash
npm install
npx emdash dev
```

Visit `http://localhost:4321` to see the site and `http://localhost:4321/_emdash/admin` to manage content.

## Deployment

```bash
wrangler d1 create emdash-template-restaurant
# Add the database_id to wrangler.jsonc
wrangler r2 bucket create emdash-template-restaurant-media
npm run deploy
```
