# Made in Syria B2B Marketplace

Frappe + React application scaffold for the Made in Syria (MIS) B2B marketplace.

## What is included

- Frappe app metadata, website route rules, and a `mis-app` web template that mounts the React frontend.
- Backend DocType definitions for public, buyer, supplier, subscription, verification, messaging, RFQ, quotation, order, product, industry, category, resource, and review workflows.
- React/Vite frontend source for the requested public pages, authentication pages, buyer portal, supplier portal, and supplier/product detail pages.
- Desk page scaffolds for supplier verification, Category/CMS management, and platform analytics.
- `mis/mis/portal_routes.json` documenting implemented URL coverage by portal.

## Development

```bash
npm install
npm run build
python -m compileall mis
```

In a Frappe bench, install the app with `bench get-app` / `bench --site <site> install-app mis`, then run migrations.

> Note: `mis/public/frontend/assets/index.js` is a lightweight placeholder. Run `npm run build` in an environment with npm registry access to generate the production React bundle from `frontend/src`.
