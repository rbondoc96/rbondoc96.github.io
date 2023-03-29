import type React from 'react';
import type {PropsWithChildren} from 'react';
import {useMemo} from 'react';
import {get, Text} from 'theme-ui';

import type {Theme} from '@/core/theme';
import useTheme from '@/hooks/useTheme';
import type {MarginProps} from '@/core/props';

type FluidValue<ValueType> = {
    max: ValueType;
    min: ValueType;
    value: `${number}vw` | `${number}px` | `${number}em` | `calc(${string})`;
};

type FluidTextProps = MarginProps & {
    as?: React.ElementType;
    color?: keyof Theme['colors'];
    fontSize: FluidValue<keyof Theme['fontSizes']>;
    fontWeight?: keyof Theme['fontWeights'];
    letterSpacing?:
        | keyof Theme['letterSpacings']
        | FluidValue<keyof Theme['letterSpacings']>;
    lineHeight?:
        | keyof Theme['lineHeights']
        | FluidValue<keyof Theme['lineHeights']>;
    variant?: string;
};

export const FluidText = ({
    as = 'p',
    children,
    color = 'white',
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    variant,
    ...props
}: PropsWithChildren<FluidTextProps>) => {
    const theme = useTheme();

    const fluidFontSize = useMemo(() => {
        if (fontSize === undefined) {
            return fontSize;
        }

        const max = get(theme, `fontSizes.${fontSize.max}`);
        const min = get(theme, `fontSizes.${fontSize.min}`);
        return `clamp(${min}, ${fontSize.value}, ${max})`;
    }, [fontSize]);

    const fluidLetterSpacing = useMemo(() => {
        if (letterSpacing === undefined || typeof letterSpacing === 'string') {
            return letterSpacing;
        }

        const max = get(theme, `letterSpacings.${letterSpacing.max}`);
        const min = get(theme, `letterSpacings.${letterSpacing.min}`);
        return `clamp(${min}, ${letterSpacing.value}, ${max})`;
    }, [letterSpacing]);

    const fluidLineHeight = useMemo(() => {
        if (lineHeight === undefined || typeof lineHeight === 'string') {
            return lineHeight;
        }

        const max = get(theme, `lineHeights.${lineHeight.max}`);
        const min = get(theme, `lineHeights.${lineHeight.min}`);
        return `clamp(${min}, ${lineHeight.value}, ${max})`;
    }, [lineHeight]);

    return (
        <Text
            as={as}
            color={color}
            sx={{
                fontSize: fluidFontSize,
                fontWeight,
                letterSpacing: fluidLetterSpacing,
                lineHeight: fluidLineHeight,
                variant: variant,
                ...props,
            }}
        >
            {children}
        </Text>
    );
};

export default FluidText;
