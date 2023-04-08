import type {ThemeUIStyleObject} from 'theme-ui';
import type {KeysOf} from '@/core/lib/types';
import {
    BackgroundPropNames,
    type BackgroundProps,
    BorderPropNames,
    type BorderProps,
    BoxPropNames,
    type BoxProps,
    FilterPropNames,
    type FilterProps,
    FlexPropNames,
    type FlexProps,
    LayoutPropNames,
    type LayoutProps,
    MarginPropNames,
    type MarginProps,
    PaddingPropsNames,
    type PaddingProps,
    PositioningPropNames,
    type PositioningProps,
    SizePropNames,
    type SizeProps,
    TypographyPropNames,
    type TypographyProps,
} from '@/core/props';

export type StyleProps = BackgroundProps &
    BorderProps &
    BoxProps &
    FilterProps &
    FlexProps &
    LayoutProps &
    MarginProps &
    PaddingProps &
    PositioningProps &
    SizeProps &
    TypographyProps;

const StylePropNames: KeysOf<StyleProps> = {
    ...BackgroundPropNames,
    ...BorderPropNames,
    ...BoxPropNames,
    ...FilterPropNames,
    ...FlexPropNames,
    ...LayoutPropNames,
    ...MarginPropNames,
    ...PaddingPropsNames,
    ...PositioningPropNames,
    ...SizePropNames,
    ...TypographyPropNames,
};

export function extractStyleProps<T extends StyleProps>(
    props: T,
): [ThemeUIStyleObject, Omit<T, keyof StyleProps>] {
    const styleProps: ThemeUIStyleObject = {};
    const otherProps: Partial<Omit<T, keyof StyleProps>> = {};

    for (const [key, value] of Object.entries(props)) {
        if (key in StylePropNames) {
            styleProps[key] = value;
        } else {
            // @ts-expect-error TODO: fix this
            otherProps[key] = value;
        }
    }

    return [styleProps, otherProps as Omit<T, keyof StyleProps>];
}

export default extractStyleProps;
