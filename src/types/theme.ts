import type {Properties as CSSProperties} from 'csstype';

type ScreenSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type ScreenMediaQueryString<Specifier extends 'min' | 'max'> =
    `@media (${Specifier}-width: ${number}px)`;

export type ScreenMediaQueries = Record<ScreenSize, number> & {
    largerThan: (size: ScreenSize) => ScreenMediaQueryString<'min'>;
    smallerThan: (size: ScreenSize) => ScreenMediaQueryString<'max'>;
};

export type SpacingOption =
    | 0
    | 0.5
    | 1
    | 1.5
    | 2
    | 2.5
    | 3
    | 3.5
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 14
    | 16
    | 20
    | 24
    | 28
    | 32
    | 36
    | 40
    | 44
    | 48
    | 52
    | 56
    | 60
    | 64
    | 72
    | 80
    | 96;

export interface ThemeColors {
    black: string;
    blue: string;
    dark: string;
    red: string;
    white: string;
}

export type ThemeSpacingOptions = Record<SpacingOption, string>;

export type ThemeTransformOptions = ThemeSpacingOptions &
    Record<string, string>;

export interface ThemeTransitionOptions {
    duration: Record<number, `${number}ms`>;
    property: Record<string, string>;
    timingFunction: Record<string, string>;
}

export interface ThemeTypography {
    letterSpacing: Record<string, CSSProperties>;
    size: Record<string, CSSProperties>;
    weight: Record<string, CSSProperties>;
}

export default interface Theme {
    colors: ThemeColors;
    screens: ScreenMediaQueries;
    spacing: ThemeSpacingOptions;
    transform: ThemeTransformOptions;
    transitions: ThemeTransitionOptions;
    typography: ThemeTypography;
}
