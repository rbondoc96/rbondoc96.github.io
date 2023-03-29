import type {ResponsiveThemeValue, Theme} from '@/core/theme';

type PaddingPropValue = keyof Theme['space'] | number | `${number}`;

export type PaddingProps = {
    padding?: ResponsiveThemeValue<PaddingPropValue>;
    paddingBottom?: ResponsiveThemeValue<PaddingPropValue>;
    paddingLeft?: ResponsiveThemeValue<PaddingPropValue>;
    paddingRight?: ResponsiveThemeValue<PaddingPropValue>;
    paddingTop?: ResponsiveThemeValue<PaddingPropValue>;
    paddingX?: ResponsiveThemeValue<PaddingPropValue>;
    paddingY?: ResponsiveThemeValue<PaddingPropValue>;
    p?: ResponsiveThemeValue<PaddingPropValue>;
    pb?: ResponsiveThemeValue<PaddingPropValue>;
    pl?: ResponsiveThemeValue<PaddingPropValue>;
    pr?: ResponsiveThemeValue<PaddingPropValue>;
    pt?: ResponsiveThemeValue<PaddingPropValue>;
    px?: ResponsiveThemeValue<PaddingPropValue>;
    py?: ResponsiveThemeValue<PaddingPropValue>;
};

export default PaddingProps;
