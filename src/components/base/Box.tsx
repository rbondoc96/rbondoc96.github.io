import type {PropsWithChildren} from 'react';
import {Box as TUIBox} from 'theme-ui';

import type {BoxProps, MarginProps, ThemeProps} from '@/core/props';

type _BoxProps = BoxProps & MarginProps & ThemeProps;

export const Box = ({
    as = 'div',
    display,
    children,
    height,
    sx,
    width,
    variant,
    _focus,
    _hover,
    ...props
}: PropsWithChildren<_BoxProps>) => {
    return (
        <TUIBox
            as={as}
            variant={variant}
            sx={{
                display,
                height,
                width,
                ...props,

                '&:focus': {
                    ..._focus,
                },

                '&:hover': {
                    ..._hover,
                },

                ...sx,
            }}
        >
            {children}
        </TUIBox>
    );
};

export default Box;
