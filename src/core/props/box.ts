import type {KeysOf, ResponsiveCSSProperty} from '@/core/lib/types';

/**
 * Props that define CSS box properties.
 */
export type BoxProps = {
    /**
     * Sets a preferred aspect ratio for the box, which will be used in the calculation of auto sizes and some other layout functions.
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio}
     */
    aspectRatio?: ResponsiveCSSProperty<'aspectRatio'>;
    /**
     * Specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break}
     */
    boxDecorationBreak?: ResponsiveCSSProperty<'boxDecorationBreak'>;
    /**
     * Sets how the total width and height of an element is calculated.
     *
     * Values: `content-box` | `border-box`
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing}
     */
    boxSizing?: ResponsiveCSSProperty<'boxSizing'>;
    display?: ResponsiveCSSProperty<'display'>;
};

export const BoxPropNames: KeysOf<BoxProps> = {
    aspectRatio: true,
    boxDecorationBreak: true,
    boxSizing: true,
    display: true,
};

export default BoxProps;
