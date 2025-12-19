# Order Dashboard

🚀 [Check the live version](https://order-dashboard-mu.vercel.app/)

Dashboard for orders with listing, status filtering, API integration, feature flags, and tests.

---

## Technologies
- Next.js 13+ (App Router)
- React + TypeScript
- Redux Toolkit
- Jest & React Testing Library
- Cypress (E2E)
- Prettier + ESLint + Husky
- Vercel (deployment)

---

## Features
- Order listing with detailed cards
- Status filter controlled by a feature flag
- Manageable feature flags via `/manage-feature-flag` page
- Loader, error messages, and fallback for empty data
- API requests using MockAPI
- Unit and E2E tests
- Redux Toolkit for global state management

---

## Install Dependencies
> [!IMPORTANT]  
> [nvm](https://github.com/nvm-sh/nvm) is recommended to manage local node versions.

After installing nvm, ensure the correct node version is being used:
```sh
nvm use
```

Install all dependencies:
```sh
npm install
```

Install husky:
```sh
npm run prepare
```

## Setup Environment variables

Create a `.env`

Run the project in dev mode:
```sh
npm run dev
```

## Testing

Unit Tests
```sh
npm run test
```

E2E with Cypress
```sh
npm run cypress
```