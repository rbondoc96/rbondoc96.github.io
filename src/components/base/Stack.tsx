import type {PropsWithChildren} from 'react';
import {Flex} from 'theme-ui';

import type {ComponentProps, StackProps} from '@/core/props';
import extractStyleProps from '@/core/utils/extractStyleProps';

type StackComponentProps = ComponentProps & StackProps;

export const Stack = ({
    animClass,
    as = 'div',
    children,
    direction = 'row',
    id,
    onClick,
    onMouseDown,
    onMouseUp,
    space,
    sx,
    ...props
}: PropsWithChildren<StackComponentProps>) => {
    const styleProps = extractStyleProps(props)[0];

    return (
        <Flex
            as={as}
            className={animClass}
            id={id}
            onClick={onClick}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            sx={{
                'flexDirection': direction,
                '& > *:not(:first-child)': {
                    [direction === 'row' ? 'marginLeft' : 'marginTop']: space,
                },

                ...styleProps,
                ...sx,
            }}
        >
            {children}
        </Flex>
    );
};

export default Stack;
