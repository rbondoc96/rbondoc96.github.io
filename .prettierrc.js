module.exports = {
    /**
     * Include parentheses around a sole arrow function parameter.
     * - "always" - Always include parens. Example: (x) => x
     * - "avoid" - Omit parens when possible. Example: x => x
     */
    arrowParens: 'always',
    /**
     * Put `>` of opening tags at the end of last line instead of on a new line.
     * - true - Example:
     * <button
     *  className="prettier-class"
     *  id="prettier-id"
     *  onClick={this.handleClick}>
     * 
     * - false - Example:
     * <button
     *  className="prettier-class"
     *  id="prettier-id"
     *  onClick={this.handleClick}
     * >
     * 
     */
    bracketSameLine: false,
    /**
     * Print spaces between brackets in object literals.
     * - true - Example: { foo: bar }
     * - false - Example: {foo: bar}
     */
    bracketSpacing: false,
    /**
     * Enforce Linux-style line endings in files covered by Prettier.
     */
    endOfLine: 'lf',
    /**
     * Use single quotes instead of double quotes in JSX.
     */
    jsxSingleQuote: false,
    /**
     * Specify the line length that the printer will wrap on.
     */
    printWidth: 79,
    /**
     * Change when properties in objects are quoted.
     * - "as-needed" - only add quotes around object properties where required.
     * - "consistent" - if at least one property in an object requires quotes.
     */
    quoteProps: 'consistent',
    /**
     * Print semicolons at the ends of statements.
     */
    semi: true,
    /**
     * Enforce a single attribute per line in HTML, Vue, and JSX.
     */
    singleAttributePerLine: false,
    /**
     * Use single quotes instead of double quotes.
     * 
     * JSX quotes ignore this option
     */
    singleQuote: true,
    /**
     * Indent lines with tabs instead of spaces.
     */
    tabs: false,
    /**
     * Specify the number of spaces per indentation-level.
     */
    tabWidth: 4,
    /**
     * Print trailing commas wherever possible in multi-line, comma-separated structures.
     */
    trailingComma: 'all',
    /**
     * Indent script and style tags in Vue files.
     */
    vueIndentScriptAndStyle: false,
}
