import {type PropsWithChildren, useMemo} from 'react';
import {get, Text as BaseText} from 'theme-ui';

import type {ComponentProps} from '@/core/props';
import type {ThemeVariants} from '@/core/theme';
import useTheme from '@/hooks/useTheme';
import extractStyleProps from '@/core/utils/extractStyleProps';

type TextProps = ComponentProps & {
    variant?: `text.${keyof ThemeVariants['text']}`;
};

export const Text = ({
    as = 'p',
    children,
    color = 'white',
    fontSize,
    letterSpacing,
    lineHeight,
    sx,
    variant,
    ...props
}: PropsWithChildren<TextProps>) => {
    const theme = useTheme();
    const styleProps = extractStyleProps(props)[0];

    const fontSizeValue = useMemo(() => {
        if (typeof fontSize !== 'object' || Array.isArray(fontSize)) {
            return fontSize;
        }

        const max = get(theme, `fontSizes.${fontSize.max}`) as string;
        const min = get(theme, `fontSizes.${fontSize.min}`) as string;
        return `clamp(${min}, ${fontSize.value}, ${max})`;
    }, [fontSize, theme]);

    const letterSpacingValue = useMemo(() => {
        if (typeof letterSpacing !== 'object' || Array.isArray(letterSpacing)) {
            return letterSpacing;
        }

        const max = get(theme, `letterSpacings.${letterSpacing.max}`) as string;
        const min = get(theme, `letterSpacings.${letterSpacing.min}`) as string;
        return `clamp(${min}, ${letterSpacing.value}, ${max})`;
    }, [letterSpacing, theme]);

    const lineHeightValue = useMemo(() => {
        if (typeof lineHeight !== 'object' || Array.isArray(lineHeight)) {
            return lineHeight;
        }

        const max = get(theme, `lineHeights.${lineHeight.max}`) as string;
        const min = get(theme, `lineHeights.${lineHeight.min}`) as string;
        return `clamp(${min}, ${lineHeight.value}, ${max})`;
    }, [lineHeight, theme]);

    return (
        <BaseText
            as={as}
            color={color}
            variant={variant}
            sx={{
                fontSize: fontSizeValue,
                letterSpacing: letterSpacingValue,
                lineHeight: lineHeightValue,
                ...styleProps,
                ...sx,
            }}
        >
            {children}
        </BaseText>
    );
};

export default Text;
