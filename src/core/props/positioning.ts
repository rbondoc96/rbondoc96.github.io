import type {CSSProperties} from 'react';

import type {
    DimensionValue,
    KeysOf,
    ResponsiveThemePropertyKey,
    ResponsiveValue,
} from '@/core/lib/types';
import type {ThemePropertyKey} from '@/core/theme';

type ResponsiveSpaceValue = ResponsiveValue<ThemePropertyKey<'space'> | DimensionValue>;

export type PositioningProps = {
    display?: ResponsiveValue<CSSProperties['display']>;
    position?: ResponsiveValue<CSSProperties['position']>;
    bottom?: ResponsiveSpaceValue;
    left?: ResponsiveSpaceValue;
    right?: ResponsiveSpaceValue;
    top?: ResponsiveSpaceValue;
    zIndex?: ResponsiveThemePropertyKey<'zIndices'>;
};

export const PositioningPropNames: KeysOf<PositioningProps> = {
    display: true,
    position: true,
    bottom: true,
    left: true,
    right: true,
    top: true,
    zIndex: true,
};

export default PositioningProps;
