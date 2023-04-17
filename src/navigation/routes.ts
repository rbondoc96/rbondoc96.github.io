import type {RouteObject} from 'react-router-dom';
import About from '@/pages/About';
import Error404 from '@/pages/Error404';
import Home from '@/pages/Home';
import Work from '@/pages/Work';

const routes: RouteObject[] = [
    {
        path: '*',
        Component: Error404,
    },
    {
        path: '/',
        Component: Home,
    },
    {
        path: '/about',
        Component: About,
    },
    {
        path: '/work',
        Component: Work,
    },
];

export default routes;
