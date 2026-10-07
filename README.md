# SPEC website

Static site for SPEC, the Spec & Propensity Evaluation Center. Plain HTML and CSS, no build step.

- `index.html` – home page
- `roles/` – one folder per open role, e.g. `roles/epc-researcher/`
- `assets/site.css`, `assets/site.js` – shared styles and the mobile menu
- `assets/people/` – headshots

Deploys from `master` via Cloudflare Pages to specevals.org. Other branches get preview URLs.

Design explorations from the October 2026 redesign are kept on the `design-archive` branch and are not served.
