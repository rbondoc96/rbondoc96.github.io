import type {Theme as DefaultTheme, ThemeUIStyleObject} from 'theme-ui';

import breakpoints from './breakpoints';
import tokens from './tokens';
import variants from './variants';

const makeTheme = <T extends DefaultTheme>(theme: T): T => theme;

const theme = makeTheme({
    breakpoints: Object.values(breakpoints).map((bp) => `${bp}px`),
    borderStyles: tokens.borderStyles,
    borderWidths: tokens.borderWidths,
    colors: tokens.colors,
    fonts: tokens.fonts,
    fontSizes: tokens.fontSizes,
    fontWeights: tokens.fontWeights,
    letterSpacings: tokens.letterSpacings,
    lineHeights: tokens.lineHeights,
    opacities: tokens.opacities,
    radii: tokens.radii,
    shadows: tokens.shadows,
    sizes: tokens.sizes,
    space: tokens.space,
    transitions: tokens.transitions,
    zIndices: tokens.zIndices,
    ...variants,
});

export type Theme = typeof theme;

export type ThemeTokens = Omit<Theme, 'breakpoints' | keyof typeof variants>;

export type ThemeVariants = typeof variants;

export type ThemeVariantKey<Variant extends keyof ThemeVariants> =
    keyof ThemeVariants[Variant];

export type ThemePropertyKey<Property extends keyof ThemeTokens> =
    keyof ThemeTokens[Property];

export type VariantDefinition = Record<string, ThemeUIStyleObject>;

export const getBreakpoints = (): typeof breakpoints => breakpoints;

export const getTheme = (): Theme => theme;

export default theme;
