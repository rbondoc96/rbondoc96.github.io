import type {ResponsiveThemeValue, Theme} from '@/core/theme';

type MarginPropValue = keyof Theme['space'] | number | `${number}`;

export type MarginProps = {
    margin?: ResponsiveThemeValue<MarginPropValue>;
    marginBottom?: ResponsiveThemeValue<MarginPropValue>;
    marginLeft?: ResponsiveThemeValue<MarginPropValue>;
    marginRight?: ResponsiveThemeValue<MarginPropValue>;
    marginTop?: ResponsiveThemeValue<MarginPropValue>;
    marginX?: ResponsiveThemeValue<MarginPropValue>;
    marginY?: ResponsiveThemeValue<MarginPropValue>;
    m?: ResponsiveThemeValue<MarginPropValue>;
    mb?: ResponsiveThemeValue<MarginPropValue>;
    ml?: ResponsiveThemeValue<MarginPropValue>;
    mr?: ResponsiveThemeValue<MarginPropValue>;
    mt?: ResponsiveThemeValue<MarginPropValue>;
    mx?: ResponsiveThemeValue<MarginPropValue>;
    my?: ResponsiveThemeValue<MarginPropValue>;
};

export default MarginProps;
