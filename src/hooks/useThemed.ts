import type {Properties as CSSProperties} from 'csstype';
import type {Component, JSX} from 'solid-js';
import type {DefaultTheme} from 'solid-styled-components';
import {styled} from 'solid-styled-components';

import theme from '@/theme';

type ValidComponent = keyof JSX.IntrinsicElements | Component<any>;

export type ThemeStyles =
    | CSSProperties
    | {
          [key: string]: ThemeStyles;
      };

export interface AsProps {
    as?: never;
}

type ThemeStyler = (theme: DefaultTheme) => ThemeStyles;

type StyledWrapper<ElementProps> = (
    styler: ThemeStyler,
) => Component<ElementProps & AsProps>;

interface ThemedFunction {
    <
        Element extends keyof JSX.IntrinsicElements,
        ElementProps = JSX.IntrinsicElements[Element],
    >(
        element: Element | Component<ElementProps>,
    ): StyledWrapper<ElementProps>;

    <ComponentProps>(
        component: Component<ComponentProps>,
    ): StyledWrapper<ComponentProps>;
}

const useThemed: ThemedFunction = (component: ValidComponent) => {
    return function (themeStyler: ThemeStyler) {
        return styled(component)(() => ({
            // FIXME: This is a workaround for a type error due to styled() supporting tag template strings.
            ...(themeStyler(theme) as CSSProperties),
        }));
    };
};

export default useThemed;
