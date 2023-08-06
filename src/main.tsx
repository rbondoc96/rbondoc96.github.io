// Must load these styles before the app so that app styles can override the
// base TailwindCSS styles.
import './index.scss';

import {render} from 'solid-js/web';

import Root from '@/Root';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error('Root element not found.');
}

if (root !== null) {
    render(() => <Root />, root);
} else {
    const rootElement = document.createElement('div');
    rootElement.setAttribute('id', 'root');
    document.body.appendChild(rootElement);
    render(() => <Root />, rootElement);
}
