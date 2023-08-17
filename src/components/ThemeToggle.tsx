import {faMoon, faSun} from '@fortawesome/free-regular-svg-icons';
import FontAwesomeIcon from 'solid-fa';
import {type Component, createSignal, Show} from 'solid-js';

import {setTheme, useLocalStore} from '@/stores/local.store';

const ThemeToggle: Component = () => {
    const localStore = useLocalStore();

    const [isDarkMode, setIsDarkMode] = createSignal(localStore.theme === 'dark');

    const toggleDarkMode = () => {
        setIsDarkMode(isCurrentlyDarkMode => {
            setTheme(isCurrentlyDarkMode ? 'light' : 'dark');
            return !isCurrentlyDarkMode;
        });
    };
    
    return (
        <button
            class="rounded-3xl px-4 py-2.5 border border-slate-300 shadow-lg"
            onClick={toggleDarkMode}
        >
            <div class="flex items-center justify-center">
                <Show
                    when={isDarkMode()}
                    fallback={(
                        <FontAwesomeIcon
                            fw
                            class="text-black dark:text-white"
                            icon={faSun}
                        />
                    )}
                >
                    <FontAwesomeIcon
                        fw
                        class="text-black dark:text-white"
                        icon={faMoon}
                    />
                </Show>
            </div>
        </button>   
    );
};

export default ThemeToggle;
