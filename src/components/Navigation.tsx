import type {Component} from 'solid-js';

import logo from '@/assets/logo.svg';
import Link from '@base/Link';
import List from '@base/List';
import Sidebar from '@base/Sidebar';

const Navigation: Component = () => (
    <Sidebar as="header" jsClass="js-header" position="right">
        <nav role="navigation" aria-label="Home page sections">
            <List direction="column" space="8">
                <List.Item>
                    <a href="/">
                        <img src={logo} alt="Logo" width="30" />
                    </a>
                </List.Item>

                <List.Item rotate="left">
                    <Link href="#home-about">About</Link>
                </List.Item>

                <List.Item rotate="left">
                    <Link href="#home-experience">Work</Link>
                </List.Item>

                <List.Item rotate="left">
                    <Link href="#home-projects">Projects</Link>
                </List.Item>

                <List.Item rotate="left">
                    <Link href="#home-contact">Contact</Link>
                </List.Item>
            </List>
        </nav>
    </Sidebar>
);

export default Navigation;
