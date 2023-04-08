import type {CSSProperties} from 'react';

import type {KeysOf, ResponsiveValue} from '@/core/lib/types';

export type FlexProps = {
    flex?: ResponsiveValue<CSSProperties['flex']>;
    flexGrow?: ResponsiveValue<CSSProperties['flexGrow']>;
    flexShrink?: ResponsiveValue<CSSProperties['flexShrink']>;
    flexBasis?: ResponsiveValue<CSSProperties['flexBasis']>;
    flexDirection?: ResponsiveValue<CSSProperties['flexDirection']>;
    flexWrap?: ResponsiveValue<CSSProperties['flexWrap']>;
    justifyContent?: ResponsiveValue<CSSProperties['justifyContent']>;
    alignContent?: ResponsiveValue<CSSProperties['alignContent']>;
    alignItems?: ResponsiveValue<CSSProperties['alignItems']>;
    alignSelf?: ResponsiveValue<CSSProperties['alignSelf']>;
    justifyItems?: ResponsiveValue<CSSProperties['justifyItems']>;
    order?: ResponsiveValue<CSSProperties['order']>;
};

export const FlexPropNames: KeysOf<FlexProps> = {
    flex: true,
    flexGrow: true,
    flexShrink: true,
    flexBasis: true,
    flexDirection: true,
    flexWrap: true,
    justifyContent: true,
    alignContent: true,
    alignItems: true,
    alignSelf: true,
    justifyItems: true,
    order: true,
};

export default FlexProps;
