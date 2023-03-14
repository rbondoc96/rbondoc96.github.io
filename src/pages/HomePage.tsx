import gsap from 'gsap';
import type {Component} from 'solid-js';
import {createEffect} from 'solid-js';

import Navigation from '@/components/Navigation';
import SectionHeader from '@/components/SectionHeader';
import Socials from '@/components/Socials';

import './index.css';

const Home: Component = () => {
    createEffect(() => {
        const timeline = gsap.timeline();
        timeline
            .from('.js-nav', {
                opacity: 0,
                yPercent: -100,
                duration: 1,
            })
            .from(
                '.js-socials',
                {
                    opacity: 0,
                    yPercent: 20,
                    duration: 1,
                },
                '<',
            )
            .from(
                '.js-title',
                {
                    opacity: 0,
                    translateX: 200,
                    duration: 1.2,
                    ease: 'back',
                },
                '<',
            );
    });

    return (
        <>
            <header>
                <Navigation />
            </header>

            <main class="home flex items-center">
                <section id="home-welcome">
                    <div class="flex-1 flex items-center">
                        <div class="js-title flex flex-col">
                            <h1 class="text-white text-7xl font-bold">
                                Rodrigo Bondoc
                            </h1>
                            <h2 class="text-white text-2xl font-light">
                                Full Stack Software Engineer
                            </h2>
                        </div>
                    </div>
                </section>

                <section id="home-about">
                    <div class="flex-1 flex flex-col">
                        <SectionHeader>Me, Myself, and I</SectionHeader>
                    </div>
                </section>

                <section id="home-experience">
                    <div class="flex-1 flex flex-col">
                        <SectionHeader>My Experience</SectionHeader>
                    </div>
                </section>
                
                <section id="home-projects">
                    <div class="flex-1 flex flex-col">
                        <SectionHeader>Things I&apos;ve Built</SectionHeader>
                    </div>
                </section>

                <section id="home-contact">
                    <div class="flex-1 flex flex-col">
                        <SectionHeader>Let&apos;s get in touch!</SectionHeader>
                    </div>
                </section>
            </main>

            <footer>
                <Socials />
            </footer>
        </>
    );
};

export default Home;
