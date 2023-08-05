// @ts-check

const {defineConfig} = require('eslint-define-config');

module.exports = defineConfig({
    env: {
        browser: true,
        es2020: true,
    },
    extends: '@pxeeio/eslint-config-solid',
    plugins: ['@typescript-eslint', 'import', 'simple-import-sort', 'solid'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
    rules: {
        'import/named': 'off',
        'import/no-named-as-default': 'off',
        'import/no-unresolved': 'error',
        'object-curly-spacing': ['error', 'never'],
        'require-jsdoc': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
    },
    overrides: [],
});
