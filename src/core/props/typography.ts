import type {CSSProperties} from 'react';
import type {ResponsiveThemeValue, Theme} from '@/core/theme';

export type TypographyProps = {
    color?: keyof Theme['colors'];
    fontFamily?: CSSProperties['fontFamily'] | keyof Theme['fonts'];
    fontSize?: ResponsiveThemeValue<keyof Theme['fontSizes']>;
    fontStyle?: CSSProperties['fontStyle'];
    fontWeight?: ResponsiveThemeValue<keyof Theme['fontWeights']>;
    letterSpacing?: ResponsiveThemeValue<keyof Theme['letterSpacings']>;
    lineHeight?: ResponsiveThemeValue<keyof Theme['lineHeights']>;
    textAlign?: CSSProperties['textAlign'];
    textDecoration?: CSSProperties['textDecoration'];
    textDecorationColor?: keyof Theme['colors'];
    textDecorationLine?: CSSProperties['textDecorationLine'];
    textDecorationThickness?: CSSProperties['textDecorationThickness'];
    textUnderlineOffset?: CSSProperties['textUnderlineOffset'];
    textTransform?: CSSProperties['textTransform'];
    textOverflow?: CSSProperties['textOverflow'];
    whiteSpace?: CSSProperties['whiteSpace'];
    wordBreak?: CSSProperties['wordBreak'];
    wordWrap?: CSSProperties['wordWrap'];
    overflowWrap?: CSSProperties['overflowWrap'];
    overflow?: CSSProperties['overflow'];
    textShadow?: keyof Theme['shadows'];
};

export default TypographyProps;
