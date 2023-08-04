import type {RouteObject} from 'react-router-dom';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Error404 from '@/pages/Error404';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
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
        path: '/contact',
        Component: Contact,
    },
    {
        path: '/projects',
        Component: Projects,
    },
    {
        path: '/work',
        Component: Work,
    },
];

export default routes;
