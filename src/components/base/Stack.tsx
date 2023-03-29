import type {PropsWithChildren} from 'react';
import {Flex} from 'theme-ui';

import type {
    AnimatedComponentProps,
    BoxProps,
    FlexProps,
    HTMLProps,
    MarginProps,
    PaddingProps,
    StackProps,
    ThemeProps,
} from '@/core/props';

type _StackProps = AnimatedComponentProps &
    BoxProps &
    FlexProps &
    HTMLProps &
    MarginProps &
    PaddingProps &
    StackProps &
    ThemeProps;

export const Stack = ({
    alignItems,
    animClass,
    as = 'div',
    children,
    direction = 'row',
    flex,
    justifyContent,
    minHeight,
    paddingX,
    paddingY,
    space,
    sx,
    width,
    ...props
}: PropsWithChildren<_StackProps>) => {
    return (
        <Flex
            as={as}
            className={animClass}
            sx={{
                alignItems,
                flex,
                'flexDirection': direction,
                justifyContent,
                minHeight,
                paddingX,
                paddingY,
                width,
                '& > *:not(:first-child)': {
                    [direction === 'row' ? 'marginRight' : 'marginTop']: space,
                },

                ...props,
                ...sx,
            }}
        >
            {children}
        </Flex>
    );
};

export default Stack;
