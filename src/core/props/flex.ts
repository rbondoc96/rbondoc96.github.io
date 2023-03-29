import type {CSSProperties} from 'react';

import type {ResponsiveThemeValue} from '@/core/theme';

export type FlexProps = {
    flex?: ResponsiveThemeValue<CSSProperties['flex'] | null>;
    flexGrow?: CSSProperties['flexGrow'];
    flexShrink?: CSSProperties['flexShrink'];
    flexBasis?: CSSProperties['flexBasis'];
    flexDirection?: CSSProperties['flexDirection'];
    flexWrap?: CSSProperties['flexWrap'];
    justifyContent?: CSSProperties['justifyContent'];
    alignContent?: CSSProperties['alignContent'];
    alignItems?: CSSProperties['alignItems'];
    alignSelf?: CSSProperties['alignSelf'];
    justifyItems?: CSSProperties['justifyItems'];
    order?: CSSProperties['order'];
};

export default FlexProps;
