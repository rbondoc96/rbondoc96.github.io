import type {CSSProperties} from 'react';

import type {ResponsiveThemeValue, Theme} from '@/core/theme';

export type BoxProps = {
    display?: ResponsiveThemeValue<CSSProperties['display'] | null>;
    maxHeight?: ResponsiveThemeValue<keyof Theme['sizes'] | null>;
    maxWidth?: ResponsiveThemeValue<keyof Theme['sizes'] | null>;
    minHeight?: ResponsiveThemeValue<keyof Theme['sizes'] | null>;
    minWidth?: ResponsiveThemeValue<keyof Theme['sizes'] | null>;
    height?: ResponsiveThemeValue<keyof Theme['sizes'] | null>;
    width?: ResponsiveThemeValue<keyof Theme['sizes'] | null>;
};

export default BoxProps;
