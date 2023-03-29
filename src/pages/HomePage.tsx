import gsap from 'gsap';
import {useLayoutEffect} from 'react';
import {Box} from 'theme-ui';

import {Button, FluidText, Link, Stack, Text} from '@/components/base';
import Section from '@/components/pages/home/Section';
import HeroSection from '@/components/pages/home/HeroSection';
import Socials from '@/components/pages/home/Socials';
import SectionNavigation from '@/components/pages/home/SectionNavigation';

const HomePage = () => {
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

    const sections = [
        {href: '#home-about', name: 'About'},
        {href: '#home-experience', name: 'Work'},
        {href: '#home-projects', name: 'Projects'},
        {href: '#home-contact', name: 'Contact'},
    ];

    return (
        <>
            <SectionNavigation
                animClass="js-home-navigation"
                links={sections}
            />
            <Socials animClass="js-home-socials" />

            <Stack
                as="main"
                alignItems="center"
                direction="column"
                paddingX={['8', '20']}
                width="full"
            >
                <HeroSection animClass="js-home-hero" />
            </Stack>
        </>
    );
};

export default HomePage;
