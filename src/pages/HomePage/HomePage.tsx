import {Motion} from '@motionone/solid';
import {type Component, createSignal} from 'solid-js';

import Logo from '@/components/Logo';
import Page from '@/components/Page';
import SquareOfDotsIcon from '@/components/SquareOfDotsIcon';
import ThemeToggle from '@/components/ThemeToggle';

import styles from './styles.module.scss';

const HomePage: Component = () => {
    const [isNavigationDrawerVisible, setIsNavigationDrawerVisible] = createSignal(false);

    return (
        <Page
            author="Rodrigo Bondoc"
            // eslint-disable-next-line max-len
            description="Rodrigo Bondoc is a software engineer who specializes in creating web and mobile apps."
            title="Rodrigo Bondoc"
            og-title="Rodrigo Bondoc"
            og-url="https://rbondoc.dev"
            twitter-creator="@rbondoc96"
            twitter-card="summary"
            twitter-site="@rbondoc96"
            
            anim-initial={{
                opacity: 0,
            }}
            anim-animate={{
                opacity: 1,
            }}
            anim-exit={{
                opacity: 0,
            }}
            anim-transition={{
                duration: 1,
            }}
        >
            <a
                href="#content"
                class={styles.skipToContentLink}
            >
                Skip to Content
            </a>
            <header class={styles.header}>
                <div class={styles.headerLayout}>
                    <div class={styles.headerContainer}>
                        <div class={styles.headerInnerContainer}>
                            <div class={styles.headerContent}>
                                <Motion.div
                                    /**
                                     * Don't use Motion.a because there is an issue
                                     * where the component will snap back to the initial animation
                                     * when it finishes the first time. So it will end up
                                     * playing the animation twice.
                                     */
                                    class={styles.headerLogoLink}
                                    initial={{
                                        opacity: 0,
                                        y: '-100%',
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: '0%',
                                    }}
                                    transition={{
                                        delay: 1,
                                        duration: 1,
                                    }}
                                >
                                    <a
                                        aria-label="Home"
                                        href="/"
                                    >
                                        <Logo />
                                    </a>
                                </Motion.div>

                                <Motion.nav
                                    initial={{
                                        opacity: 0,
                                        y: '-100%',
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: '0%',
                                    }}
                                    transition={{
                                        delay: 1.5,
                                        duration: 1,
                                    }}
                                >
                                    <a href="#about">About</a>
                                    <a href="#about">Experience</a>
                                    <a href="#about">Projects</a>
                                    <a href="#about">Contact</a>
                                </Motion.nav>
                                
                                <Motion.div
                                    initial={{
                                        opacity: 0,
                                        y: '-100%',
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: '0%',
                                    }}
                                    transition={{
                                        delay: 1.8,
                                        duration: 1,
                                    }}
                                >
                                    <ThemeToggle />
                                </Motion.div>
                                
                                <button
                                    class={styles.headerNavigationToggleButton}
                                    type="button"
                                    aria-label="Toggle navigation"
                                    aria-expanded={isNavigationDrawerVisible()}
                                    onClick={
                                        () => setIsNavigationDrawerVisible(prevState => !prevState)
                                    }
                                >
                                    <div>
                                        <SquareOfDotsIcon />
                                        <span>Menu</span>
                                        <SquareOfDotsIcon />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>        
            </header>
            
            {/* <Motion.div
                class={styles.content}
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 2,
                    delay: 1.5,
                }}
            >
                <div class={styles.contentLayout}>
                    <main class={styles.contentContainer}>
                        <h1>Rodrigo Bondoc</h1>
                        <h2>Software Engineer at Sourcetoad</h2>
                        <p>
                            <span>
                                I&apos;m a full-stack web and mobile app developer with a
                                background in electrical engineering.
                            </span>
                            <span>
                                In other words, I joined the dark (soft) side.
                            </span>
                        </p>
                    </main>
                </div>
            </Motion.div>                 */}
        </Page>
    );
};

export default HomePage;
