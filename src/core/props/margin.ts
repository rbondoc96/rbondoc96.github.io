import type {DimensionValue, KeysOf, ResponsiveValue} from '@/core/lib/types';
import type {ThemePropertyKey} from '@/core/theme';

type ResponsiveMarginValue = ResponsiveValue<ThemePropertyKey<'space'> | DimensionValue>;

export type MarginProps = {
    margin?:
        | ResponsiveMarginValue
        | ResponsiveValue<`${number}px auto` | `auto ${number}px`>;
    marginBottom?: ResponsiveMarginValue;
    marginLeft?: ResponsiveMarginValue;
    marginRight?: ResponsiveMarginValue;
    marginTop?: ResponsiveMarginValue;
    marginX?: ResponsiveMarginValue;
    marginY?: ResponsiveMarginValue;
    m?: ResponsiveMarginValue;
    mb?: ResponsiveMarginValue;
    ml?: ResponsiveMarginValue;
    mr?: ResponsiveMarginValue;
    mt?: ResponsiveMarginValue;
    mx?: ResponsiveMarginValue;
    my?: ResponsiveMarginValue;
};

export const MarginPropNames: KeysOf<MarginProps> = {
    margin: true,
    marginBottom: true,
    marginLeft: true,
    marginRight: true,
    marginTop: true,
    marginX: true,
    marginY: true,
    m: true,
    mb: true,
    ml: true,
    mr: true,
    mt: true,
    mx: true,
    my: true,
};

export default MarginProps;
