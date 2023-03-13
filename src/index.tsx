/* @refresh reload */
import {render} from 'solid-js/web';

import './index.css';
import '@/assets/fonts';
import App from '@/App';

render(() => <App />, document.getElementById('root') as HTMLElement);
