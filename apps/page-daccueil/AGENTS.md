# Repository Guidelines

## Project Structure & Module Organization
- `src/` holds the Vue 3 application code.
  - `src/main.js` is the entry point.
  - `src/App.vue` is the root component.
  - `src/components/` contains reusable Vue components.
  - `src/assets/` stores bundled images and styles used by components.
  - `src/style.css` contains global styles (Tailwind v4 setup lives here).
- `public/` contains static assets copied as-is to the build output.
- `dist/` is the production build output (generated).
- `deploy.sh` is the deployment helper script.

## Build, Test, and Development Commands
- `npm install`: install dependencies.
- `npm run dev`: start the Vite dev server for local development.
- `npm run build`: create a production build in `dist/`.
- `npm run preview`: serve the built app locally for a production-like preview.
- `npm run start`: serve `dist/` on `$PORT` (used for production hosting).

## Coding Style & Naming Conventions
- Use 2-space indentation in Vue SFCs, JS, and CSS, matching existing files.
- Prefer Vue SFCs (`.vue`) with `<script setup>` style when adding components.
- Component files use PascalCase (e.g., `HeroBanner.vue`).
- Keep Tailwind utility classes in templates; put global styles in `src/style.css`.
- No formatter or linter is configured; keep changes consistent with nearby code.

## Testing Guidelines
- No automated tests are currently configured.
- If you add tests, document the framework and commands in this file and in
  `package.json` scripts. Prefer colocating tests near components or using a
  `/tests` directory with clear naming (e.g., `ComponentName.spec.js`).

## Commit & Pull Request Guidelines
- Commit history is minimal and uses short, imperative summaries
  (e.g., “Add prod start command for Scalingo”). Keep messages concise.
- PRs should include: a short summary, screenshots for UI changes, and any
  relevant deployment notes (e.g., env vars or build changes).

## Configuration Tips
- The app expects standard Vite + Vue conventions; update `vite.config.js` only
  when build or asset handling needs to change.
- Ensure `$PORT` is set when using `npm run start` in production hosting.
