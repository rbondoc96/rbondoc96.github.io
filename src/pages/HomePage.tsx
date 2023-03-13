import gsap from 'gsap';
import type {Component} from 'solid-js';
import {createEffect} from 'solid-js';

import Navigation from '@/components/Navigation';
import Socials from '@/components/Socials';

import './index.css';

// import About from '@/pages/Home/About';
// import Contact from '@/pages/Home/Contact';
// import Experience from '@/pages/Home/Experience';
// import Hero from '@/pages/Home/Hero';
// import Scroller from '@/components/Scroller';

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
                '.socials',
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
                <div class="js-title flex flex-col mx-8 md:mx-20">
                    <h1 class="text-white text-7xl font-bold">
                        Rodrigo Bondoc
                    </h1>
                    <h2 class="text-white text-2xl font-medium">
                        Full Stack Software Engineer
                    </h2>
                </div>
            </main>

            <footer>
                <Socials />
            </footer>
        </>
    );
};

export default Home;
