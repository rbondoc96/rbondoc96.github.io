import type {PropsWithChildren} from 'react';
import {get} from 'theme-ui';

import {Box, Stack} from '@/components/base';
import type {
    AnimatedComponentProps,
    StackProps,
    ThemeProps,
} from '@/core/props';

type ListItemProps = ThemeProps & {
    rotate?: 'left' | 'right';
};

type ListProps = AnimatedComponentProps & StackProps & ThemeProps;

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

    return (
        <Box
            as="li"
            display="inline-block"
            sx={{
                'transition': 'transform300',
                'writing-mode':
                    rotate !== undefined ? 'vertical-rl' : undefined,
                'transform': `translateY(0) ${rotationStyle}`,

                '&:hover': {
                    transform: (theme) =>
                        `translateY(-${get(
                            theme,
                            'space.1',
                        )}) ${rotationStyle}`,
                    ..._hover,
                },

                ...sx,
            }}
            {...props}
        >
            {children}
        </Box>
    );
};

const _List = ({
    animClass,
    children,
    direction,
    space,
    sx,
}: PropsWithChildren<ListProps>) => {
    return (
        <Stack
            animClass={animClass}
            as="ul"
            direction={direction}
            space={space}
            sx={sx}
        >
            {children}
        </Stack>
    );
};

export const List = Object.assign(_List, {
    Item: ListItem,
});

export default List;
