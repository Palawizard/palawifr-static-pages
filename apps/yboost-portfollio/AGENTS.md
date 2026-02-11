# Repository Guidelines

## Project Structure & Module Organization
- `index.html` is the Vite entry HTML.
- `src/` holds application code:
  - `main.js` boots the Vue app and router.
  - `App.vue` is the root component.
  - `views/` contains route-level views (e.g., `HomeView.vue`).
  - `router/index.js` defines routes.
  - `composables/` and `utils/` store reusable logic.
  - `assets/` keeps local styles and static assets (e.g., `tailwind.css`).
- `public/` is for static files copied as-is.
- `dist/` is the production build output.

## Build, Test, and Development Commands
Use npm (or pnpm/yarn equivalents).
- `npm install` installs dependencies.
- `npm run dev` starts the Vite dev server.
- `npm run build` builds production assets into `dist/`.
- `npm run preview` serves the production build locally.
- `npm run start` serves `dist/` with `serve` on `$PORT` (useful for hosting).

## Coding Style & Naming Conventions
- Vue SFCs are PascalCase (`HomeView.vue`, `PortfolioView.vue`).
- Use ES modules and single quotes in JavaScript, matching `src/main.js`.
- Indentation is 2 spaces in `.vue` templates; keep it consistent across files.
- Styling is Tailwind-based; keep custom CSS in `src/assets/tailwind.css`.
- No formatter or linter is configured; avoid reformatting unrelated code.

## Testing Guidelines
- No test framework is configured yet.
- If you add tests, prefer Vitest (Vite-native) and place files in `src/__tests__/` or `tests/` with `.spec.js` naming.
- Add a `test` script to `package.json` when introducing tests.

## Commit & Pull Request Guidelines
- Commit history is informal; please use concise, imperative summaries (e.g., “Add hero animation”).
- Include scope when helpful: `feat:`, `fix:`, or `docs:`.
- PRs should include a short description, linked issue (if any), and screenshots for UI changes.
- Run `npm run build` before opening a PR to catch build errors.

## Configuration & Environment
- `npm run start` reads the `PORT` environment variable; set it when deploying (e.g., `PORT=8080 npm run start`).
