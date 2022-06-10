/**
 * Why is this file not a `.d.ts` file?
 *
 * `.d.ts` files MUST have no compiled output.
 * On transpilation, `enums` ARE compiled.
 */

enum UITheme {
    light = 'light',
    dark = 'dark',
}

export default UITheme;
