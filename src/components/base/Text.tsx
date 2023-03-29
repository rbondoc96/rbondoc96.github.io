import type React from 'react';
import type {PropsWithChildren} from 'react';
import {Text as BaseText} from 'theme-ui';

import type {Theme} from '@/core/theme';

type TextProps = {
    as?: React.ElementType;
    color?: keyof Theme['colors'];
    fontSize?: keyof Theme['fontSizes'] | Array<keyof Theme['fontSizes']>;
    fontWeight?: keyof Theme['fontWeights'];
    letterSpacing?:
        | keyof Theme['letterSpacings']
        | Array<keyof Theme['letterSpacings']>;
    lineHeight?:
        | keyof Theme['lineHeights']
        | Array<keyof Theme['lineHeights']>;
    variant?: string;
};

export const Text = ({
    as = 'p',
    children,
    color = 'white',
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    variant,
}: PropsWithChildren<TextProps>) => {
    return (
        <BaseText
            as={as}
            color={color}
            sx={{
                fontSize,
                fontWeight,
                letterSpacing,
                lineHeight,
                variant: variant,
            }}
        >
            {children}
        </BaseText>
    );
};

export default Text;
