import type {Component} from 'solid-js';

import logo from '@/assets/logo.svg';

import './index.css';

const Navigation: Component = () => {
    return (
        <nav
            class="nav js-nav"
            role="navigation"
            aria-label="Home page sections"
        >
            <ul>
                <li>
                    <a href="/">
                        <img src={logo} alt="Logo" width="30" />
                    </a>
                </li>

                <li>
                    <a
                        class="text-white hover:text-red duration-300 transition-colors"
                        href="#home-about"
                    >
                        About
                    </a>
                </li>

                <li>
                    <a
                        class="text-white hover:text-red duration-300 transition-colors"
                        href="#home-work"
                    >
                        Work
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
