import type {CSSProperties} from 'react';

import type {
    FluidValue,
    KeysOf,
    ResponsiveThemePropertyKey,
    ResponsiveValue,
} from '@/core/lib/types';
import type {ThemePropertyKey} from '@/core/theme';

export type TypographyProps = {
    color?: ThemePropertyKey<'colors'>;
    fontFamily?: CSSProperties['fontFamily'] | ThemePropertyKey<'fonts'>;
    fontSize?:
        | ResponsiveThemePropertyKey<'fontSizes'>
        | FluidValue<ThemePropertyKey<'fontSizes'>>;
    fontStyle?: CSSProperties['fontStyle'];
    fontWeight?: ResponsiveThemePropertyKey<'fontWeights'>;
    letterSpacing?:
        | ResponsiveThemePropertyKey<'letterSpacings'>
        | FluidValue<ThemePropertyKey<'letterSpacings'>>;
    lineHeight?:
        | ResponsiveThemePropertyKey<'lineHeights'>
        | FluidValue<ThemePropertyKey<'lineHeights'>>;
    textAlign?: ResponsiveValue<CSSProperties['textAlign']>;
    textDecoration?: ResponsiveValue<CSSProperties['textDecoration']>;
    textDecorationColor?: ThemePropertyKey<'colors'>;
    textDecorationLine?: ResponsiveValue<CSSProperties['textDecorationLine']>;
    textDecorationThickness?: ResponsiveValue<CSSProperties['textDecorationThickness']>;
    textUnderlineOffset?: ResponsiveValue<CSSProperties['textUnderlineOffset']>;
    textTransform?: ResponsiveValue<CSSProperties['textTransform']>;
    textOverflow?: ResponsiveValue<CSSProperties['textOverflow']>;
    whiteSpace?: ResponsiveValue<CSSProperties['whiteSpace']>;
    wordBreak?: ResponsiveValue<CSSProperties['wordBreak']>;
    wordWrap?: ResponsiveValue<CSSProperties['wordWrap']>;
    overflowWrap?: ResponsiveValue<CSSProperties['overflowWrap']>;
    overflow?: ResponsiveValue<CSSProperties['overflow']>;
    textShadow?: ResponsiveThemePropertyKey<'shadows'>;
};

export const TypographyPropNames: KeysOf<TypographyProps> = {
    color: true,
    fontFamily: true,
    fontSize: true,
    fontStyle: true,
    fontWeight: true,
    letterSpacing: true,
    lineHeight: true,
    textAlign: true,
    textDecoration: true,
    textDecorationColor: true,
    textDecorationLine: true,
    textDecorationThickness: true,
    textUnderlineOffset: true,
    textTransform: true,
    textOverflow: true,
    whiteSpace: true,
    wordBreak: true,
    wordWrap: true,
    overflowWrap: true,
    overflow: true,
    textShadow: true,
};

export default TypographyProps;
