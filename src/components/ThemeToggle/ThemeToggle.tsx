import {faMoon, faSun} from '@fortawesome/free-regular-svg-icons';
import FontAwesomeIcon from 'solid-fa';
import {type Component, createSignal, Show} from 'solid-js';

import {setTheme, useLocalStore} from '@/stores/local.store';

import styles from './styles.module.scss';

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
            class={styles.themeToggle}
            onClick={toggleDarkMode}
        >
            <div>
                <Show
                    when={isDarkMode()}
                    fallback={(
                        <FontAwesomeIcon
                            fw
                            class={styles.iconSun}
                            icon={faSun}
                        />
                    )}
                >
                    <FontAwesomeIcon
                        fw
                        class={styles.iconMoon}
                        icon={faMoon}
                    />
                </Show>
            </div>
        </button>   
    );
};

export default ThemeToggle;
