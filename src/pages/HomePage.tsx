import {Motion} from '@motionone/solid';
import {type Component} from 'solid-js';

import Logo from '@/components/Logo';
import Page from '@/components/Page';
import ThemeToggle from '@/components/ThemeToggle';

const HomePage: Component = () => {
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
            <header class="w-full">
                <div class="absolute left-0 right-0 pt-8">
                    <div class="mx-auto max-w-7xl px-8 lg:px-10">
                        <div class="mx-auto max-w-2xl lg:max-w-none">
                            <div class="flex items-center justify-between">
                                <Motion.div
                                    /**
                                     * Don't use Motion.a because there is an issue
                                     * where the component will snap back to the initial animation
                                     * when it finishes the first time. So it will end up
                                     * playing the animation twice.
                                     */
                                    initial={{
                                        opacity: 0,
                                        y: '-100%',
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: '0%',
                                    }}
                                    transition={{
                                        duration: 1,
                                    }}
                                >
                                    <a
                                        aria-label="Home"
                                        class="block p-2"
                                        href="/"
                                    >
                                        <Logo />
                                    </a>
                                </Motion.div>
                                
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
                                        delay: 0.5,
                                        duration: 1,
                                    }}
                                >
                                    <ThemeToggle />
                                </Motion.div>
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
