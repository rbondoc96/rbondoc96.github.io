import type {PropsWithChildren} from 'react';
import {get} from 'theme-ui';

import {Box, Stack} from '@/components/base';
import type {ComponentProps, StackProps} from '@/core/props';
import extractStyleProps from '@/core/utils/extractStyleProps';

type ListItemProps = ComponentProps & {
    rotate?: 'left' | 'right';
};

type ListProps = ComponentProps &
    StackProps & {
        as?: 'ul' | 'ol' | 'menu';
    };

const ListItem = ({
    children,
    rotate,
    sx,
    _hover,
    ...props
}: PropsWithChildren<ListItemProps>) => {
    let rotationStyle = 'rotate(0deg)';
    if (rotate === 'left') {
        rotationStyle = 'rotate(180deg)';
    }

    const styleProps = extractStyleProps(props)[0];

    return (
        <Box
            as="li"
            display="inline-block"
            sx={{
                'transition': 'transform300',
                'writingMode': rotate !== undefined ? 'vertical-rl' : undefined,
                'transform': `translateY(0) ${rotationStyle}`,

                '&:hover': {
                    transform: (theme) =>
                        `translateY(-${
                            get(theme, 'space.1') as string
                        }) ${rotationStyle}`,
                    ..._hover,
                },

                ...styleProps,
                ...sx,
            }}
        >
            {children}
        </Box>
    );
};

const _List = ({
    animClass,
    as = 'ul',
    children,
    direction,
    space,
    sx,
    ...props
}: PropsWithChildren<ListProps>) => {
    const styleProps = extractStyleProps(props)[0];

    return (
        <Stack
            animClass={animClass}
            as={as}
            direction={direction}
            space={space}
            sx={{
                ...styleProps,
                ...sx,
            }}
        >
            {children}
        </Stack>
    );
};

export const List = Object.assign(_List, {
    Item: ListItem,
});

export default List;
