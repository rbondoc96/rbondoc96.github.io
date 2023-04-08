import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from '@/pages/HomePage';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>
);

export default App;
