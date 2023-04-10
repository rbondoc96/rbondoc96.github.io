import type {PropsWithChildren} from 'react';
import {forwardRef} from 'react';
import {Box as TUIBox} from 'theme-ui';

import type {ComponentProps} from '@/core/props';
import extractStyleProps from '@/core/utils/extractStyleProps';

export const Box = forwardRef(function Box(
    {
        'aria-hidden': ariaHidden,
        animClass,
        as = 'div',
        children,
        className,
        id,
        sx,
        tabIndex,
        variant,
        _after,
        _before,
        _focus,
        _hover,
        ...props
    }: PropsWithChildren<ComponentProps>,
    ref,
) {
    const styleProps = extractStyleProps(props)[0];

    return (
        <TUIBox
            aria-hidden={ariaHidden}
            as={as}
            className={[animClass, className].filter(Boolean).join(' ')}
            id={id}
            ref={ref}
            tabIndex={tabIndex}
            variant={variant}
            sx={{
                ...styleProps,

                '&:focus': {
                    ..._focus,
                },

                '&:hover': {
                    ..._hover,
                },

                '&::after': {
                    ..._after,
                },

                '&::before': {
                    ..._before,
                },

                ...sx,
            }}
        >
            {children}
        </TUIBox>
    );
});

export default Box;
