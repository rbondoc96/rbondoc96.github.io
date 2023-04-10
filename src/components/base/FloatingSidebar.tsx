import type {CSSProperties, PropsWithChildren} from 'react';
import {Box} from 'theme-ui';

import type {AnimatedComponentProps, BoxProps} from '@/core/props';

type FloatingSidebarProps = AnimatedComponentProps &
    BoxProps & {
        as?: 'div' | 'header';
        paddingX?: CSSProperties['paddingLeft'] | Array<CSSProperties['paddingLeft']>;
        position: 'left' | 'right';
    };

export const FloatingSidebar = ({
    animClass,
    as = 'div',
    children,
    display = ['none', 'none', 'none', 'block'],
    paddingX = '6',
    position,
}: PropsWithChildren<FloatingSidebarProps>) => {
    return (
        <Box
            as={as}
            className={animClass}
            sx={{
                display,
                height: '100vh',
                paddingX,
                position: 'fixed',
                [position]: 0,
            }}
        >
            <Box
                sx={{
                    'display': 'flex',
                    'height': '100%',
                    'alignItems': 'center',

                    '& > *': {
                        zIndex: 'sticky',
                    },
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default FloatingSidebar;
