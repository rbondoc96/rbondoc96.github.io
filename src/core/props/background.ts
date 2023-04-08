import type {CSSProperties} from 'react';
import type {
    KeysOf,
    ResponsiveCSSProperty,
    ResponsiveValue,
    ResponsiveThemePropertyKey,
} from '@/core/lib/types';
import type {ThemePropertyKey} from '@/core/theme';

/**
 * Props that define background styles.
 */
export type BackgroundProps = {
    /**
     * Sets the opacity of an element.
     *
     * Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/opacity}
     */
    opacity?: ResponsiveThemePropertyKey<'opacities'>;
    /**
     * Sets all background style properties at once, such as color, image, origin and size, or repeat method.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background}
     */
    background?: ResponsiveValue<
        ThemePropertyKey<'colors'> | CSSProperties['background']
    >;
    /**
     * Sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment}
     */
    backgroundAttachment?: ResponsiveCSSProperty<'backgroundAttachment'>;
    /**
     * Sets how an element's background images should blend with each other and with the element's background color.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode}
     */
    backgroundBlendMode?: ResponsiveCSSProperty<'backgroundBlendMode'>;
    /**
     * Sets whether an element's background extends underneath its border box, padding box, or content box.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip}
     */
    backgroundClip?: ResponsiveCSSProperty<'backgroundClip'>;
    /**
     * Sets the background color of an element.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-color}
     */
    backgroundColor?: ResponsiveThemePropertyKey<'colors'>;
    /**
     * Sets one or more background images on an element.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-image}
     */
    backgroundImage?: ResponsiveCSSProperty<'backgroundImage'>;
    /**
     * Sets the background's origin: from the border start, inside the border, or inside the padding.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin}
     */
    backgroundOrigin?: ResponsiveCSSProperty<'backgroundOrigin'>;
    /**
     * Sets the initial position for each background image.
     *
     * The position is relative to the position layer set by backgroundOrigin.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-position}
     */
    backgroundPosition?: ResponsiveCSSProperty<'backgroundPosition'>;
    /**
     * Sets the initial horizontal position for each background image.
     *
     * The position is relative to the position layer set by backgroundOrigin.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-x}
     */
    backgroundPositionX?: ResponsiveCSSProperty<'backgroundPositionX'>;
    /**
     * Sets the initial vertical position for each background image.
     *
     * The position is relative to the position layer set by backgroundOrigin.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-y}
     */
    backgroundPositionY?: ResponsiveCSSProperty<'backgroundPositionY'>;
    /**
     * Sets how background images are repeated.
     *
     * A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat}
     */
    backgroundRepeat?: ResponsiveCSSProperty<'backgroundRepeat'>;
    /**
     * Sets the size of the element's background image.
     * The image can be left to its natural size, stretched, or constrained to fit the available space.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-size}
     */
    backgroundSize?: ResponsiveCSSProperty<'backgroundSize'>;
    /**
     * Sets all background style properties at once, such as color, image, origin and size, or repeat method.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background}
     */
    bg?: ResponsiveValue<ThemePropertyKey<'colors'> | CSSProperties['background']>;
    /**
     * Sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment}
     */
    bgAttachment?: ResponsiveCSSProperty<'backgroundAttachment'>;
    /**
     * Sets how an element's background images should blend with each other and with the element's background color.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode}
     */
    bgBlendMode?: ResponsiveCSSProperty<'backgroundBlendMode'>;
    /**
     * Sets whether an element's background extends underneath its border box, padding box, or content box.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip}
     */
    bgClip?: ResponsiveCSSProperty<'backgroundClip'>;
    /**
     * Sets the background color of an element.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-color}
     */
    bgColor?: ResponsiveThemePropertyKey<'colors'>;
    /**
     * Sets one or more background images on an element.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-image}
     */
    bgImage?: ResponsiveCSSProperty<'backgroundImage'>;
    /**
     * Sets the background's origin: from the border start, inside the border, or inside the padding.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin}
     */
    bgOrigin?: ResponsiveCSSProperty<'backgroundOrigin'>;
    /**
     * Sets the initial position for each background image.
     *
     * The position is relative to the position layer set by backgroundOrigin.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-position}
     */
    bgPos?: ResponsiveCSSProperty<'backgroundPosition'>;
    /**
     * Sets the initial horizontal position for each background image.
     *
     * The position is relative to the position layer set by backgroundOrigin.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-x}
     */
    bgPosX?: ResponsiveCSSProperty<'backgroundPositionX'>;
    /**
     * Sets the initial vertical position for each background image.
     *
     * The position is relative to the position layer set by backgroundOrigin.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-y}
     */
    bgPosY?: ResponsiveCSSProperty<'backgroundPositionY'>;
    /**
     * Sets the initial position for each background image.
     *
     * The position is relative to the position layer set by backgroundOrigin.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-position}
     */
    bgPosition?: ResponsiveCSSProperty<'backgroundPosition'>;
    /**
     * Sets the initial horizontal position for each background image.
     *
     * The position is relative to the position layer set by backgroundOrigin.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-x}
     */
    bgPositionX?: ResponsiveCSSProperty<'backgroundPositionX'>;
    /**
     * Sets the initial vertical position for each background image.
     *
     * The position is relative to the position layer set by backgroundOrigin
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-y}
     */
    bgPositionY?: ResponsiveCSSProperty<'backgroundPositionY'>;
    /**
     * Sets how background images are repeated.
     *
     * A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat}
     */
    bgRepeat?: ResponsiveCSSProperty<'backgroundRepeat'>;
    /**
     * Sets the size of the element's background image.
     *
     * The image can be left to its natural size, stretched, or constrained to fit the available space.
     *
     * Docs: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-size}
     */
    bgSize?: ResponsiveCSSProperty<'backgroundSize'>;
};

export const BackgroundPropNames: KeysOf<BackgroundProps> = {
    opacity: true,
    background: true,
    backgroundAttachment: true,
    backgroundBlendMode: true,
    backgroundClip: true,
    backgroundColor: true,
    backgroundImage: true,
    backgroundOrigin: true,
    backgroundPosition: true,
    backgroundPositionX: true,
    backgroundPositionY: true,
    backgroundRepeat: true,
    backgroundSize: true,
    bg: true,
    bgAttachment: true,
    bgBlendMode: true,
    bgClip: true,
    bgColor: true,
    bgImage: true,
    bgOrigin: true,
    bgPos: true,
    bgPosX: true,
    bgPosY: true,
    bgPosition: true,
    bgPositionX: true,
    bgPositionY: true,
    bgRepeat: true,
    bgSize: true,
};

export default BackgroundProps;
