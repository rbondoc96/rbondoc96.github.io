import React, {FunctionComponent as FC, useEffect, useContext} from 'react';
import gsap from 'gsap';

import Resume from '@public/pdfs/Rodrigo Bondoc Resume.pdf';
import Logo from '../Logo';
import NavLink from './NavLink';
import NavPageLink from './NavPageLink';
import UIContext from '@/core/UIContext';

import Hamburger from '@/assets/svg/Hamburger';

const NavBar: FC = () => {
    const {
        theme,
        mobile,
        sidebar,
        navbar,
    } = useContext(UIContext);

    const uiTheme = theme[0];
    const isMobile = mobile[0];
    const [isSidebarActive, setIsSidebarActive] = sidebar;
    const isNavBarShown = navbar;

    const toggleSidebar = () => {
        if (isMobile) {
            setIsSidebarActive((prevState): boolean => !prevState);
        }
    };

    useEffect(() => {
        const timeline = gsap.timeline();
        timeline.from('.NavBar-logo', {
            opacity: 0,
            duration: 0.5,
            x: '-10%',
        });

        if (isMobile) {
            timeline.from('.NavBar-toggle', {
                opacity: 0,
                duration: 0.5,
                x: '-10%',
            });
        }

        timeline.from('.NavLink, .NavBar-links .LinkButton', {
            opacity: 0,
            duration: 0.5,
            x: '-10%',
        });
    }, []);

    return (
        <nav className={`${isMobile ? 'NavBar--mobile' : 'NavBar'} ${isNavBarShown ? '' : 'NavBar--hidden'}`}>
            <div className="NavBar-inner">
                <a className="NavBar-logo" href={window.location.origin} target="_self" rel="noreferrer">
                    <Logo />
                </a>

                <div className={(isMobile && !isSidebarActive) ? 'NavBar-links--hidden' : 'NavBar-links'}>
                    {isMobile && (
                        <div
                            className="NavBar-links--sidebar-toggle"
                            onClick={toggleSidebar}
                            onKeyDown={toggleSidebar}
                            role="button"
                            tabIndex={0}
                        >
                            X
                        </div>
                    )}

                    <NavLink href="#about">
                        About
                    </NavLink>

                    <NavLink href="#work">
                        Work
                    </NavLink>

                    <NavLink href="#contact">
                        Contact
                    </NavLink>

                    <NavPageLink to="/apps">
                        Apps
                    </NavPageLink>

                    <NavLink href={Resume}>
                        Resume
                    </NavLink>
                </div>

                {isMobile && (
                    <Hamburger
                        className="NavBar-toggle"
                        theme={uiTheme}
                        onClick={toggleSidebar}
                    />
                )}
            </div>
        </nav>
    );
};

export default NavBar;
