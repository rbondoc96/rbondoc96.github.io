import {Router as SolidRouter, Routes, Route} from '@solidjs/router';
import {type Component} from 'solid-js';

import HomePage from '@/pages/HomePage';

const Router: Component = () => (
    <SolidRouter>
        <Routes>
            <Route path="/" component={HomePage} />
        </Routes>
    </SolidRouter>
);

export default Router;
