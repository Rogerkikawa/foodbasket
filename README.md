# KaBasket landing page

A responsive grocery-delivery landing page and guest shopping catalogue for Uganda, with original grocery and delivery imagery, gentle animation, guest category browsing, and an optional member offer.

## Open it on your computer

Open `index.html` in your browser. Everything needed is included locally. No npm, Composer, database, API key, or installation is required for this landing page.

## Put it on GitHub and share it

1. Extract the ZIP on your computer.
2. Create a new public GitHub repository, for example `kabasket-landing`.
3. Upload the extracted files into the repository root. `index.html` must be at the top level, beside `styles.css`, `app.js`, the three main `.webp` images, and the `images` folder. Upload the extracted files AND folders, not the ZIP.
4. Commit the files to the `main` branch.
5. Open repository Settings > Pages.
6. Under Build and deployment, choose Deploy from a branch.
7. Select `main` and `/(root)`, then Save.
8. Wait for the deployment to finish. GitHub Pages will display the link you can send to colleagues.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## What is included

- `index.html` — the landing page.
- `shop.html` — the full shopping catalogue.
- `products.js` — 103 preview products across five categories, without prices.
- `shop.js` — catalogue search and category filtering.
- `styles.css` — design, mobile layouts and animations.
- `app.js` — category browsing, dialogs, FAQs through native HTML, and animation controls.
- `hero.webp` — grocery hero photograph.
- `membership.webp` — member-offer grocery photograph.
- `delivery.webp` — delivery rider photograph.
- `images/products/` — individual optimized images for all 103 catalogue products. Keep this folder structure intact.
- `.nojekyll` — tells GitHub Pages to serve these files directly.

## What works now

- Open the full shopping page without an account.
- Browse or search 103 products, each with its own representative image, across fruit, vegetables, staples, breakfast/dairy and household supplies.
- Posho flour is listed as 10 kg.
- Open the sample product range, with no product prices shown or hard-coded.
- Read the member offer and how delivery will work.
- Use the page on mobile or desktop.
- Pause moving elements; reduced-motion preferences are respected.

## What comes later in Laravel

This is a landing page, not a working e-commerce backend. Registration, login, ordering, payments and admin editing are not connected. The dialogs say this clearly and no personal information is collected.

Product prices will be created and updated by an administrator through a protected Laravel dashboard and stored in the database. They should not be entered into this page's HTML or JavaScript. Real checkout will read current prices and calculate discounts securely on the server.

The future admin dashboard should support product names, categories, photos, units, prices, stock and availability. That dashboard is not included in this package.

To port the landing page into Laravel, begin with its HTML in `resources/views/welcome.blade.php`, place the CSS, JavaScript and images in the Laravel public directory, and use Laravel asset URLs. Connect real shop and authentication routes when those features are built. Guest shopping should remain available.

## Provisional content

KaBasket is a working name. The 5% member grocery offer is proposed and should be confirmed before launch. It excludes delivery and cleaning products. Product names and units are sample catalogue content, with no prices. The hero, membership, delivery and all 103 product images were AI-generated for this design. Product images are representative and do not establish an actual brand, exact pictured quantity, packaging, availability or supplier. The quantity text is the proposed selling unit. The rider is illustrative, not an actual employee. Replace representative images with your own actual product photos before selling.
