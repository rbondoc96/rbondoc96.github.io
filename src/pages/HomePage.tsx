import gsap from 'gsap';
import type {Component} from 'solid-js';
import {createEffect} from 'solid-js';
// import Typed from 'typed.js';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Socials from '@/components/Socials';
import Content from '@pages/Home/Content';

import '@/styles/home.css';

const Home: Component = () => {
    createEffect(() => {
        // const typed = new Typed('#home-about-typed', {
        //     strings: ['Rodrigo Bondoc', 'My Name'],
        //     typeSpeed: 30,
        // });

        const timeline = gsap.timeline();
        timeline
            .from('.js-header', {
                opacity: 0,
                xPercent: 50,
                duration: 1,
                ease: 'back',
            })
            .from(
                '.js-socials',
                {
                    opacity: 0,
                    xPercent: -50,
                    duration: 1,
                    ease: 'back',
                },
                '<',
            )
            .from(
                '.js-hero-content',
                {
                    opacity: 0,
                    translateY: -100,
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
            }, 150);
        }
    };

    return (
        <>
            <Socials />
            <Navigation />

            <Content jsClass="js-mainHome">
                <Content.Section id="home-welcome">
                    <div class="js-hero-content home-section-content">
                        <div class="hero-content-header">
                            <div class="hero-preamble">
                                Hey there! My name is
                            </div>
                            <h1 class="hero-title">Rodrigo Bondoc</h1>
                            <h3 class="hero-subtitle">Software Engineer</h3>
                        </div>
                        <p class="hero-body">
                            <span class="hero-caption">
                                I'm a full-stack web and mobile app developer
                                with a background in electrical engineering.
                            </span>
                            <span class="hero-caption">
                                In other words, I joined the dark (soft) side.
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
                </Content.Section>

                <Content.Section id="home-about">
                    <h2 class="section-title">Me, Myself, and I</h2>
                </Content.Section>

                <Content.Section id="home-experience">
                    <h2 class="section-title">My Experience</h2>
                </Content.Section>

                <Content.Section id="home-projects">
                    <h2 class="section-title">Things I&apos;ve Built</h2>
                </Content.Section>

                <Content.Section id="home-contact">
                    <h2 class="section-title">Let&apos;s get in touch!</h2>

                    <Footer />
                </Content.Section>
            </Content>
        </>
    );
};

export default Home;
