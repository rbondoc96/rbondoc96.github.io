import type {Properties as CSSProperties} from 'csstype';
import type {Component, JSX} from 'solid-js';
import {styled} from 'solid-styled-components';
import type {DefaultTheme} from 'solid-styled-components';

import theme from '@/theme';

type ValidComponent = keyof JSX.IntrinsicElements | Component<any>;

interface AsProps {
    as?: never;
}

type ThemeStyler = (theme: DefaultTheme) => CSSProperties;

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

const themed: ThemedFunction = (component: ValidComponent) => {
    return function (styler: ThemeStyler) {
        return styled(component)(() => ({
            ...styler(theme),
        }));
    };
};

export default themed;
