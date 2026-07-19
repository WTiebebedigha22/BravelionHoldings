# Bravelion Holdings

The official website for **Bravelion Group**, a diversified holding company operating across technical services, real estate development, energy infrastructure, and professional training across Africa.

**Motto:** *"Built on Trust, Driven by Results."*

🔗 Live site: [www.bravelionholdings.com](https://www.bravelionholdings.com)

## About

Bravelion Group is a privately owned, strategic holding company operating four specialized divisions:

1. **Bravelion Services** — Technical Services & NDT (non-destructive testing, asset integrity, and engineering support for oil & gas, power, and construction)
2. **Bravelion Estates & Development** — Real Estate & Development (residential, commercial, and industrial projects across Nigeria)
3. **Bravelion Training & Consulting** — Executive Education & Advisory (accredited NDT, HSE, and leadership certification programmes)
4. **Bravelion Energy** — Energy Infrastructure & Advisory (strategic energy and oil & gas advisory, training, and infrastructure execution)

The site presents the group's structure, featured real estate projects, technical service offerings, training programmes, leadership team, and vision/mission.

## Tech Stack

- **React** + **Vite** for a fast development experience with Hot Module Replacement (HMR)
- **React Router** (`react-router-dom`) for client-side routing between division pages
- **lucide-react** for icons
- [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) or [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) for Fast Refresh
- **React Compiler** enabled (see [React Compiler docs](https://react.dev/learn/react-compiler)) — note this may impact dev/build performance

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

- `/` — Home / About page: hero, "Who We Are," divisions overview, featured projects, NDT services, training programmes, vision/mission/motto, leadership, and CTA sections
- `/services` — Bravelion Services (NDT & technical services)
- `/estates` — Bravelion Estates & Development (real estate portfolio)
- `/training` — Bravelion Training & Consulting (certification programmes)
- `/energy` — Bravelion Energy (energy infrastructure & advisory)
- `/contact` — Contact / engagement page

## Deployment

The site is deployed on [Vercel](https://vercel.com/), with the custom domain **bravelionholdings.com**.

## Linting

For production applications, consider migrating to TypeScript with type-aware ESLint rules. See the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) and [`typescript-eslint`](https://typescript-eslint.io) for guidance on integration.
