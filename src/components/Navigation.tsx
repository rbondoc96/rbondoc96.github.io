import type {Component} from 'solid-js';
import {styled} from 'solid-styled-components';

import logo from '@/assets/logo.svg';
import Sidebar from '@base/Sidebar';

const NavigationList = styled('ul')`
    display: flex;
    flex-direction: column;

    > *:not(:first-child) {
        margin-top: ${({theme}) => theme?.spacing[8]};
    }
`;

const NavigationListItem = styled('li')`
    &:not(:first-child) {
        writing-mode: vertical-rl;
        transform: rotate(180deg);
    }
`;

const Link = styled('a')`
    // ^?
    color: ${({theme}) => theme?.colors.white};
    transition-property: ${({theme}) => theme?.transitions.property.colors};
    transition-duration: ${({theme}) => theme?.transitions.duration[300]};

    &:hover {
        color: ${({theme}) => theme?.colors.red};
    }
`;

const Navigation: Component = () => {
    return (
        <Sidebar as="header" jsClass="js-header" position="right">
            <nav role="navigation" aria-label="Home page sections">
                <NavigationList>
                    <NavigationListItem>
                        <a href="/">
                            <img src={logo} alt="Logo" width="30" />
                        </a>
                    </NavigationListItem>

                    <NavigationListItem>
                        <Link href="#home-about">About</Link>
                    </NavigationListItem>

                    <NavigationListItem>
                        <Link href="#home-work">Work</Link>
                    </NavigationListItem>
                </NavigationList>
            </nav>
        </Sidebar>
    );
};

export default Navigation;
