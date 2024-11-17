# Starter template for all react projects

This is to be used as a template for all react based projects. How the configuration was chosen can be read here: [Article](https://blog.stackademic.com/crafting-the-perfect-react-project-a-comprehensive-guide-to-directory-structure-and-essential-9bb0e32ba7aa)

## Directory structure

The following directory structure is to be strictly followed for a clean organization of code

For understanding the component classification, please refer [atomic design methodology](https://atomicdesign.bradfrost.com/chapter-2/)

```
src
├── assets
│   └── react.svg
├── components
├── layouts
│   ├── container
│   │   └── index.tsx
│   └── header-footer
│       └── index.tsx
├── constants
│   ├── local-storage-keys.ts
│   └── query-keys.ts
├── hooks
│   └── use-debounce.ts
├── queries (react-query | queries/mutations)
│   └── query.ts
├── routes
│   └── index.tsx
├── stores
│   └── global-store.ts
├── utils
│   └── parse-data.tsx
├── wrappers
│   └── auth-wrapper.tsx
├── vite-env.d.ts
├── main.tsx
└── index.css
```
