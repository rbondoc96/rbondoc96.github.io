import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {motion} from 'framer-motion';
import {useCallback, useLayoutEffect, useRef, useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';

import styles from '@/partials/styles/Header.module.scss';
import logo from '@/assets/icons/logo.svg';
import Link from '@/components/Link';
import useScreen from '@/hooks/useScreen';
import FloatingSidebar from '@/components/FloatingSidebar';

const routes = [
    {label: 'Home', path: '/'},
    {label: 'About', path: '/about'},
    {label: 'Work', path: '/work'},
    {label: 'Projects', path: '/projects'},
    {label: 'Contact', path: '/contact'},
];

export const Header = () => {
    const screen = useScreen();
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const sidebarRef = useRef<HTMLDivElement | null>(null);

    const hideSidebar = () => {
        document.body.classList.remove('blurred');
        setIsSidebarVisible(false);
    };

    const showSidebar = () => {
        document.body.classList.add('blurred');
        setIsSidebarVisible(true);
    };

    const toggleSidebar = () => {
        if (isSidebarVisible) {
            hideSidebar();
        } else {
            showSidebar();
        }
    };

    const handleDocumentClick = useCallback(
        (event: globalThis.MouseEvent) => {
            if (sidebarRef.current === null || !isSidebarVisible) {
                return;
            }

            const contentElement = document.getElementById('content');

            if (contentElement === null) {
                throw new Error('Element with id "content" not found.');
            }

            const clickedContent = contentElement.contains(event.target as Node);
            console.log(clickedContent);

            if (clickedContent) {
                console.log('clicked');
                hideSidebar();
            }
        },
        [isSidebarVisible],
    );

    const handleWindowResize = useCallback(() => {
        if (screen.isEqualOrLargerThan('md')) {
            hideSidebar();
        }
    }, [screen]);

    useLayoutEffect(() => {
        document.addEventListener('mousedown', handleDocumentClick);
        window.addEventListener('resize', handleWindowResize);

        return () => {
            document.removeEventListener('mousedown', handleDocumentClick);
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [handleDocumentClick, handleWindowResize]);

    return (
        <header className={styles.header}>
            <div className={styles.headerBg} />

            <FloatingSidebar
                aria-hidden={!screen.isEqualOrLargerThan('md')}
                position="right"
            >
                <motion.nav
                    role="navigation"
                    aria-hidden={!screen.isEqualOrLargerThan('md')}
                    aria-label="Desktop navigation menu"
                >
                    <ul className={styles.headerSidebarLinks}>
                        {routes.map((route) => (
                            <li
                                className={styles.headerSidebarLinksItem}
                                key={`header-sidebar-link-${route.label}`}
                            >
                                <Link as={RouterLink} to={route.path}>
                                    {route.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.nav>
            </FloatingSidebar>

            <div className={styles.headerTopbar}>
                <Link
                    as={RouterLink}
                    reloadDocument={true}
                    href="/"
                    className={styles.headerLogo}
                    variant="unstyled"
                >
                    <img src={logo} alt="logo" />
                </Link>

                <button
                    aria-hidden={screen.isEqualOrLargerThan('md')}
                    aria-label="Hamburger menu button"
                    aria-roledescription="Toggle mobile navigation menu"
                    className={styles.headerMenuButton}
                    onClick={toggleSidebar}
                    type="button"
                >
                    <FontAwesomeIcon icon={faBars} size="2xl" color="inherit" />
                </button>
            </div>

            <aside
                aria-hidden={!isSidebarVisible}
                className={styles.headerSidebar}
                // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                tabIndex={isSidebarVisible ? 1 : -1}
                ref={sidebarRef}
            >
                <nav
                    role="navigation"
                    aria-hidden={!isSidebarVisible}
                    aria-label="Mobile navigation menu"
                >
                    <ul>
                        {routes.map((route) => (
                            <li key={`header-sidebar-link-${route.label}`}>
                                <Link
                                    as={RouterLink}
                                    onClick={() => {
                                        hideSidebar();
                                    }}
                                    to={route.path}
                                >
                                    {route.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </header>
    );
};

export default Header;
