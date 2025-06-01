# Commute Calculator

This is a frontend project built with **Vite**, **React**, and **TypeScript**, deployed automatically to **Netlify** using **GitHub Actions**.

## 🚀 Quick Start

### 1. Install dependencies

```
npm install
```

### 2. Run in development mode

```
npm run dev
```

### 3. Build for production

```
npm run build
```

### 4. Preview production build locally

```
npm run preview
```

## ✅ Features

* ⚡ Fast builds with Vite
* 💡 React 18 with TypeScript
* 🎨 Tailwind CSS (if used)
* 🧹 Pre-configured ESLint + Prettier
* 🔒 Git hooks with Husky & lint-staged
* 🚀 Auto-deployment to Netlify via GitHub Actions

## 🧪 Lint and Format

Run ESLint and Prettier for the entire project:

```
npm run lint
npm run format
```

## 📦 Deployment

Every push to the `main` branch triggers a GitHub Actions workflow that:

1. Installs dependencies
2. Builds the app
3. Deploys the `dist` folder to Netlify

Ensure the following secrets are set in your GitHub repo:

* `NETLIFY_AUTH_TOKEN`
* `NETLIFY_SITE_ID`
