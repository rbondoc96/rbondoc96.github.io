import type {CSSProperties} from 'react';

import type {ThemePropertyKey, ThemeTokens} from '@/core/theme';

export type DimensionValue =
    | `${number}px`
    | `${number}vw`
    | `${number}em`
    | `${number}%`
    | `${number}`;

export type FluidValue<ValueType> = {
    max: ValueType;
    min: ValueType;
    value: DimensionValue | `calc(${string})`;
};

export type KeysOf<T extends object> = Record<keyof T, boolean>;

export type ResponsiveValue<Value> = Value | Array<Value | null>;

export type ResponsiveCSSProperty<Property extends keyof CSSProperties> = ResponsiveValue<
    CSSProperties[Property]
>;

export type ResponsiveThemePropertyKey<Property extends keyof ThemeTokens> =
    ResponsiveValue<ThemePropertyKey<Property>>;
