import type {DimensionValue, KeysOf, ResponsiveValue} from '@/core/lib/types';
import type {ThemePropertyKey} from '@/core/theme';

type ResponsivePaddingValue = ResponsiveValue<ThemePropertyKey<'space'> | DimensionValue>;

export type PaddingProps = {
    padding?: ResponsivePaddingValue;
    paddingBottom?: ResponsivePaddingValue;
    paddingLeft?: ResponsivePaddingValue;
    paddingRight?: ResponsivePaddingValue;
    paddingTop?: ResponsivePaddingValue;
    paddingX?: ResponsivePaddingValue;
    paddingY?: ResponsivePaddingValue;
    p?: ResponsivePaddingValue;
    pb?: ResponsivePaddingValue;
    pl?: ResponsivePaddingValue;
    pr?: ResponsivePaddingValue;
    pt?: ResponsivePaddingValue;
    px?: ResponsivePaddingValue;
    py?: ResponsivePaddingValue;
};

export const PaddingPropsNames: KeysOf<PaddingProps> = {
    padding: true,
    paddingBottom: true,
    paddingLeft: true,
    paddingRight: true,
    paddingTop: true,
    paddingX: true,
    paddingY: true,
    p: true,
    pb: true,
    pl: true,
    pr: true,
    pt: true,
    px: true,
    py: true,
};

export default PaddingProps;
