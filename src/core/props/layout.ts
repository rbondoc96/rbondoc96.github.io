import type {CSSProperties} from 'react';

import type {KeysOf, ResponsiveThemePropertyKey, ResponsiveValue} from '@/core/lib/types';

type ResponsiveSpaceValue = ResponsiveThemePropertyKey<'space'>;

export type LayoutProps = {
    position?: ResponsiveValue<CSSProperties['position']>;
    bottom?: ResponsiveSpaceValue;
    left?: ResponsiveSpaceValue;
    right?: ResponsiveSpaceValue;
    top?: ResponsiveSpaceValue;
    zIndex?: ResponsiveThemePropertyKey<'zIndices'>;
};

export const LayoutPropNames: KeysOf<LayoutProps> = {
    position: true,
    bottom: true,
    left: true,
    right: true,
    top: true,
    zIndex: true,
};

export default LayoutProps;
