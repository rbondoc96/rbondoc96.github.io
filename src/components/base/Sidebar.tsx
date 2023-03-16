import type {ParentComponent} from 'solid-js';
import {styled} from 'solid-styled-components';
import {destructure} from '@solid-primitives/destructure';

interface SidebarProps {
    jsClass?: `js-${string}`;
    component: 'div' | 'header';
    position: 'left' | 'right';
}

const Sidebar: ParentComponent<SidebarProps> = (props) => {
    const {jsClass, component, position} = destructure(props);

    const Wrapper = styled(component())`
        position: fixed;
        ${position()}: 0;
        z-index: 50;
        height: 100vh;

        padding-left: ${({theme}) => theme?.spacing[6]};
        padding-right: ${({theme}) => theme?.spacing[6]};

        > * {
            height: 100%;
            display: flex;
            align-items: center;
        }
    `;

    return <Wrapper class={jsClass?.()}>{props.children}</Wrapper>;
};

export default Sidebar;
