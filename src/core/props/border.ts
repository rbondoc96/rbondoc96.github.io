import type {
    KeysOf,
    ResponsiveCSSProperty,
    ResponsiveThemePropertyKey,
} from '@/core/lib/types';

export type BorderProps = {
    /**
     * Sets an element's border.
     *
     * It sets the values of borderWidth, borderStyle, and borderColor.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border}
     */
    border?: ResponsiveCSSProperty<'border'>;
    /**
     * A shorthand property for setting the individual logical block border property values in a single place in the style sheet.
     *
     * It can be used to set the values for one or more of borderBlockWidth, borderBlockStyle, and borderBlockColor
     * setting both the start and end in the block dimension at once.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block}
     */
    borderBlock?: ResponsiveCSSProperty<'borderBlock'>;
    /**
     * Defines the color of the logical block borders of an element, which maps to a physical border color
     * depending on the element's writing mode, directionality, and text orientation.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-color}
     */
    borderBlockColor?: ResponsiveThemePropertyKey<'colors'>;
    /**
     * A shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end}
     */
    borderBlockEnd?: ResponsiveCSSProperty<'borderBlockEnd'>;
    /**
     * Defines the color of the logical block-end border of an element, which maps to a physical border color
     * depending on the element's writing mode, directionality, and text orientation.
     *
     * It corresponds to the borderTopColor, borderRightColor, borderBottomColor, or borderLeftColor property
     * depending on the values defined for writingMode, direction, and textOrientation.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-color}
     */
    borderBlockEndColor?: ResponsiveThemePropertyKey<'colors'>;
    /**
     * Defines the style of the logical block-end border of an element, which maps to a physical border style
     * depending on the element's writing mode, directionality, and text orientation.
     *
     * It corresponds to the borderTopStyle, borderRightStyle, borderBottomStyle, or borderLeftStyle property
     * depending on the values defined for writingMode, direction, and textOrientation.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-style}
     */
    borderBlockEndStyle?: ResponsiveThemePropertyKey<'borderStyles'>;
    /**
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-width}
     */
    borderBlockEndWidth?: ResponsiveThemePropertyKey<'borderWidths'>;
};

export const BorderPropNames: KeysOf<BorderProps> = {
    border: true,
    borderBlock: true,
    borderBlockColor: true,
    borderBlockEnd: true,
    borderBlockEndColor: true,
    borderBlockEndStyle: true,
    borderBlockEndWidth: true,
};

export default BorderProps;
