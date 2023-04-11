import gsap from 'gsap';
import {useEffect, useLayoutEffect, useMemo} from 'react';

import {Page, Stack} from '@/components/base';
import AboutSection from '@/components/pages/home/AboutSection';
import ContactSection from '@/components/pages/home/ContactSection';
import HeroSection from '@/components/pages/home/HeroSection';
import WorkSection from '@/components/pages/home/WorkSection';
import Socials from '@/components/pages/home/Socials';
import SectionNavigation from '@/components/pages/home/SectionNavigation';
import useNavigationLinks from '@/hooks/useNavigationLinks';

const HomePage = () => {
    const sections = useMemo(
        () => [
            {href: '#home-about', id: 'home-about', name: 'About'},
            {href: '#home-experience', id: 'home-experience', name: 'Work'},
            {href: '#home-projects', id: 'home-projects', name: 'Projects'},
            {href: '#home-contact', id: 'home-contact', name: 'Contact'},
        ],
        [],
    );

    const {setRoutes, addStyles} = useNavigationLinks();

    useEffect(() => {
        setRoutes(
            sections.map((section) => ({
                name: section.name,
                path: section.href,
            })),
        );

        addStyles({
            display: ['initial', 'initial', 'initial', 'none'],
        });
    }, [addStyles, sections, setRoutes]);

    useLayoutEffect(() => {
        const timeline = gsap.timeline();

        timeline
            .fromTo(
                '.js-home-hero',
                {
                    opacity: 0,
                    translateY: -100,
                },
                {
                    opacity: 1,
                    translateY: 0,
                    delay: 0.4,
                    duration: 1.5,
                    ease: 'back',
                },
            )
            .fromTo(
                '.js-home-socials',
                {
                    opacity: 0,
                    translateX: -100,
                },
                {
                    opacity: 1,
                    translateX: 0,
                    delay: 0.5,
                    duration: 1.5,
                    ease: 'back',
                },
                '<',
            )
            .fromTo(
                '.js-home-navigation',
                {
                    opacity: 0,
                    translateX: 100,
                },
                {
                    opacity: 1,
                    translateX: 0,
                    delay: 0.5,
                    duration: 1.5,
                    ease: 'back',
                },
                '<',
            );
    }, []);

    return (
        <Page>
            <Page.SEO
                author="Rodrigo Bondoc"
                description="Rodrigo Bondoc is a software engineer who specializes in building full-stack web and mobile applications."
                title="Rodrigo Bondoc"
                _twitter={{
                    card: 'summary',
                    creator: '@rbondoc96',
                }}
            />

            <Page.Overlay>
                <Socials animClass="js-home-socials" />
                <SectionNavigation animClass="js-home-navigation" links={sections} />
            </Page.Overlay>

            <Page.Content>
                <Stack
                    as="main"
                    alignItems="center"
                    direction="column"
                    margin="0px auto"
                    maxWidth="1600px"
                    minHeight="100vh"
                    paddingX={['24px', '24px', '48px', '64px', '96px', '148px']}
                    width="full"
                >
                    <HeroSection animClass="js-home-hero" />
                    <AboutSection animClass="js-home-about" id={sections[0].id} />
                    <WorkSection animClass="js-home-experience" id={sections[1].id} />
                    <ContactSection animClass="js-home-contact" id={sections[3].id} />
                </Stack>
            </Page.Content>
        </Page>
    );
};

export default HomePage;
