import type {ParentComponent} from 'solid-js';
import {mergeProps} from 'solid-js';
import {styled} from 'solid-styled-components';
import {destructure} from '@solid-primitives/destructure';

interface SidebarProps {
    as?: 'div' | 'header';
    jsClass?: `js-${string}`;
    position: 'left' | 'right';
}

const Sidebar: ParentComponent<SidebarProps> = (props) => {
    const _props = mergeProps(props, {
        as: 'div',
    });
    const {as, jsClass, position} = destructure(_props);

    const Wrapper = styled('div')`
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

    return (
        <Wrapper as={as()} class={jsClass?.()}>
            {props.children}
        </Wrapper>
    );
};

export default Sidebar;
