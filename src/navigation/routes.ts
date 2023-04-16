import type {RouteObject} from 'react-router-dom';
import About from '@/pages/About';
import Error404 from '@/pages/Error404';
import Home from '@/pages/Home';

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
];

export default routes;
