## Dependencies

### Development Tools

- `vite` - Build tool
- `vite-plugin-solid` - Plugin to run `solid-js` with Vite

### Types for TypeScript

- `@types/lodash.throttle` - Types for `throttle()` from the `lodash` library
- `@types/node` - Types for `node` libraries used for Vite

### Assets

- `@fontsource/work-sans` - Font used for this project.
- `@fortawesome/fontawesome-svg-core` - Required for using SVGs for FontAwesome.
- `@fortawesome/free-brands-svg-icons` - Icons for brands (Facebook, GitHub, etc.)
- `@fortawesome/free-regular-svg-icons` - Used for outlined versions of solid icons.
- `@fortawesome/free-solid-svg-icons` - Filled/solid icons.

### Solid JS

- `@solidjs/router` - Routing library for Solid JS
- `solid-icons` - Icon library for Solid JS
- `solid-js` - JS frontend library

### Animations

- `gasp` - JS Animation library

### TailwindCSS

Configuring with Vite: https://tailwindcss.com/docs/guides/vite

- `tailwindcss` - CSS utility framework
- `postcss` - TailwindCSS peer dependency
- `autoprefixer` - TailwindCSS peer dependency

### Code Style

#### ESLint

- `eslint` - Main linter.
- `eslint-plugin-import` - Tells ESLint how to resolve imports.
- `eslint-import-resolver-typescript` - Allows `eslint` to resolve aliases defined in `tsconfig.json`
- `eslint-config-google` - Google JS style rules.
- `eslint-config-standard-with-typescript` - Standard ESLint rules for TypeScript.
- `eslint-plugin-jsx-a11y` - Checks for accessibility issues.
- `eslint-plugin-n` -
- `eslint-plugin-promise` -
- `eslint-plugin-solid` - Solid JS specific linting rules for ESLint.
- `@typescript-eslint/eslint-plugin` - An ESLint plugin which provides rules for TypeScript code bases.
- `@typescript-eslint/parser` - A parser which allows ESLint to lint TypeScript source code.

#### Prettier

- `prettier` - Main code formatter.

#### Configuring ESLint and Prettier

- `eslint-config-prettier` - An ESLint configuration which disables the formatting rules in ESLint that Prettier is going to be responsible for handling, hence avoiding any clashes.
