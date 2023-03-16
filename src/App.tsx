import type {Component} from 'solid-js';
import {createSignal, Show} from 'solid-js';

import Loader from '@/components/Loader';
import Router from '@/navigation/Router';

const App: Component = () => {
    const [isLoaderFinished, setIsLoaderFinished] = createSignal(false);

    return (
        <Show
            fallback={<Loader onFinish={() => setIsLoaderFinished(true)} />}
            when={isLoaderFinished()}
        >
            <Router />
        </Show>
    );
};

export default App;
