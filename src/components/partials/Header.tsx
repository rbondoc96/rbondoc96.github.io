import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Fragment, useCallback, useLayoutEffect, useRef, useState} from 'react';
import {Image} from 'theme-ui';

import logo from '@/assets/icons/logo.svg';
import {Box, Button, Link, Stack} from '@/components/base';
import useBreakpoints from '@/hooks/useBreakpoints';
import useNavigationLinks from '@/hooks/useNavigationLinks';

export const Header = () => {
    const breakpoints = useBreakpoints();
    const {routes, styles} = useNavigationLinks();
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const sidebarRef = useRef<HTMLDivElement | null>(null);

    const hideSidebar = () => {
        document.body.classList.remove('blur');
        setIsSidebarVisible(false);
    };

    const showSidebar = () => {
        document.body.classList.add('blur');
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

            const clickedContent = contentElement === event.target;

            if (clickedContent) {
                hideSidebar();
            }
        },
        [isSidebarVisible],
    );

    const handleWindowResize = useCallback(() => {
        if (window.innerWidth >= breakpoints.md) {
            hideSidebar();
        }
    }, [breakpoints]);

    useLayoutEffect(() => {
        document.addEventListener('mousedown', handleDocumentClick);
        window.addEventListener('resize', handleWindowResize);

        return () => {
            document.removeEventListener('mousedown', handleDocumentClick);
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [handleDocumentClick, handleWindowResize]);

    return (
        <Box
            as="header"
            position="fixed"
            width="100%"
            top="0"
            zIndex="sticky"
            sx={{...styles}}
        >
            <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                sx={{
                    backdropFilter: 'blur(4px)',
                }}
            />

            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                paddingX="lg"
                paddingY="lg"
                position="relative"
            >
                <Link href="/" zIndex="skipLink">
                    <Image src={logo} sx={{width: '40px'}} />
                </Link>

                {routes.length > 0 && (
                    <Stack
                        direction="row"
                        display={['none', 'none', 'inline-block']}
                        space="sm"
                    >
                        {routes.map((route) => {
                            if (route.component !== undefined) {
                                return (
                                    <Fragment key={`route-${route.path}`}>
                                        {route.component}
                                    </Fragment>
                                );
                            }

                            return (
                                <a
                                    href={route.path}
                                    key={`route-${route.path}`}
                                    target={route.options?.target}
                                    rel={route.options?.rel}
                                >
                                    {route.name}
                                </a>
                            );
                        })}
                    </Stack>
                )}

                <Button
                    display={['inline-block', 'inline-block', 'none']}
                    variant="buttons.unstyled"
                    onClick={toggleSidebar}
                    zIndex="skipLink"
                >
                    <FontAwesomeIcon icon={faBars} size="2xl" color="inherit" />
                </Button>
            </Stack>

            <Box
                aria-hidden={!isSidebarVisible}
                as="aside"
                backgroundColor="darkLight"
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                maxWidth="320px"
                width="70vw"
                paddingX="lg"
                paddingY="xl"
                position="absolute"
                tabIndex={isSidebarVisible ? 1 : -1}
                top="0"
                right="0"
                height="100vh"
                ref={sidebarRef}
                sx={{
                    color: 'white',
                    transform: isSidebarVisible ? 'translateX(0)' : 'translateX(100vw)',
                    transition: 'transform300',
                }}
            >
                <Stack as="nav" direction="column" width="100%" alignItems="center">
                    {routes.map((route) => (
                        <Link
                            href={route.path}
                            key={`route-${route.path}`}
                            onClick={hideSidebar}
                            rel={route.options?.rel}
                            variant="links.gradient90TextOnHover"
                        >
                            {route.name}
                        </Link>
                    ))}
                </Stack>
            </Box>
        </Box>
    );
};

export default Header;
