import {faBars} from '@fortawesome/free-solid-svg-icons';
import FontAwesomeIcon from 'solid-fa';
import {type Component, createSignal} from 'solid-js';

import Logo from '@/components/Logo';
import Page from '@/components/Page';

const HomePage: Component = () => {
    const [isNavigationDrawerVisible, setIsNavigationDrawerVisible] = createSignal(false);

    return (
        <Page
            author="Rodrigo Bondoc"
            description="Rodrigo Bondoc is a software engineer who specializes in building full-stack web and mobile applications."
            title="Rodrigo Bondoc"
            og:title="Rodrigo Bondoc"
            og:url="https://rbondoc.com"
            twitter:card="summary"
            twitter:creator="@rbondoc96"
            twitter:site="@rbondoc96"
        >
            <header>
                <div class="absolute left-0 right-0 top-2 z-40 pt-14">
                    <div class="mx-auto max-w-7xl px-6 lg:px-8">
                        <div class="mx-auto max-w-2xl lg:max-w-none">
                            <div class="flex items-center justify-between">
                                <a aria-label="Home" href="/">
                                    <Logo />
                                </a>
                                <button
                                    type="button"
                                    aria-label="Toggle navigation"
                                    aria-expanded={isNavigationDrawerVisible()}
                                    onClick={() => setIsNavigationDrawerVisible(prevState => !prevState)}
                                >
                                    <FontAwesomeIcon icon={faBars} color="white" size="2x" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    aria-hidden={!isNavigationDrawerVisible()}
                    class="relative z-50 h-2 overflow-hidden bg-neutral-950 pt-2"
                >
                    <div
                        class="bg-neutral-800"
                    >
                        
                    </div>
                </div>
            </header>
            <div>
                <main>
                    My Main
                </main>
            </div>
            <footer>
    
            </footer>
        </Page>
    );
}

export default HomePage;
