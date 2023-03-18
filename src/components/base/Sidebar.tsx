import type {ParentComponent, JSX} from 'solid-js';
import {destructure} from '@solid-primitives/destructure';

import useThemed from '@/hooks/useThemed';
import type {AnimatedComponentProps} from '@/types/animations';

interface SidebarProps extends AnimatedComponentProps {
    as?: Extract<keyof JSX.IntrinsicElements, 'div' | 'header'>;
    position: 'left' | 'right';
}

const Sidebar: ParentComponent<SidebarProps> = (props) => {
    const {as, jsClass, position} = destructure(props);
    const Wrapper = useThemed(as?.() ?? 'div')((theme) => ({
        'display': 'block',
        'position': 'fixed',
        [position()]: 0,
        'zIndex': 50,
        'height': '100vh',
        'paddingLeft': theme.spacing[6],
        'paddingRight': theme.spacing[6],

        '> *': {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
        },

        [theme.screens.smallerThan('lg')]: {
            display: 'none',
        },
    }));

    return (
        <Wrapper class={jsClass?.()}>
            <div>{props.children}</div>
        </Wrapper>
    );
};

export default Sidebar;
