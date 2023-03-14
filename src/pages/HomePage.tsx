import gsap from 'gsap';
import type {Component} from 'solid-js';
import {createEffect} from 'solid-js';
// import Typed from 'typed.js';

import Navigation from '@/components/Navigation';
import Socials from '@/components/Socials';

import '@/styles/home.css';

const Home: Component = () => {
    createEffect(() => {
        // const typed = new Typed('#home-about-typed', {
        //     strings: ['Rodrigo Bondoc', 'My Name'],
        //     typeSpeed: 30,
        // });

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
                '.js-hero-content',
                {
                    opacity: 0,
                    translateX: 200,
                    duration: 1.2,
                    ease: 'back',
                },
                '<',
            );
    });

    const scrollTo = (event: Event) => {
        event.preventDefault();

        const target = event.currentTarget as HTMLAnchorElement;
        const href = target.getAttribute('href');

        if (href === null) {
            return;
        }
        const element = document.querySelector(href);
        if (element !== null) {
            setTimeout(() => {
                element.scrollIntoView({behavior: 'smooth'});
                target.blur();
            }, 150);
        }
    };

    return (
        <>
            <header>
                <Navigation />
            </header>

            <main class="home flex items-center">
                <section id="home-welcome" class="home-section">
                    <div class="hero">
                        <div class="js-hero-content hero-content">
                            <div class="hero-content-header">
                                <div class="hero-preamble">
                                    Hey there. My name is
                                </div>
                                <h1 class="hero-title">Rodrigo Bondoc</h1>
                                <h3 class="hero-subtitle">
                                    Full Stack Software Developer
                                </h3>
                            </div>
                            <p class="hero-body">
                                <span class="hero-caption">
                                    I'm a web and mobile app developer with a
                                    background in electrical engineering.
                                </span>
                                <span class="hero-caption">
                                    In other words, I joined the dark (soft)
                                    side.
                                </span>
                            </p>
                            <div>
                                <a
                                    class="hero-link hero-link--joke"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://knowyourmeme.com/memes/come-to-the-dark-side"
                                >
                                    Yes, they did have cookies.
                                </a>
                            </div>
                            <div>
                                <a
                                    class="hero-link"
                                    href="#home-about"
                                    onClick={scrollTo}
                                >
                                    <button type="button" class="hero-button">
                                        Get to know me!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="home-about" class="home-section">
                    <div class="flex-1 flex flex-col">
                        <h2 class="section-title">Me, Myself, and I</h2>
                    </div>
                </section>

                <section id="home-experience" class="home-section">
                    <div class="flex-1 flex flex-col">
                        <h2 class="section-title">My Experience</h2>
                    </div>
                </section>

                <section id="home-projects" class="home-section">
                    <div class="flex-1 flex flex-col">
                        <h2 class="section-title">Things I&apos;ve Built</h2>
                    </div>
                </section>

                <section id="home-contact" class="home-section">
                    <div class="flex-1 flex flex-col">
                        <h2 class="section-title">Let&apos;s get in touch!</h2>
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
