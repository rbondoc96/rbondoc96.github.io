import {AnimatePresence} from 'framer-motion';
import {Routes, Route, useLocation} from 'react-router-dom';
import routes from '@/navigation/routes';

const App = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
                {routes.map(({Component, path}, index) => (
                    <Route key={`route-${index}`} path={path} Component={Component} />
                ))}
            </Routes>
        </AnimatePresence>
    );
};

export default App;
