import React, {FunctionComponent as FC} from 'react';

import Intro from './Intro';
import About from './About';
import Work from './Work';
import Contact from './Contact';

const Home: FC = () => (
    <>
        <Intro />
        <About />
        <Work />
        <Contact />
    </>
);

export default Home;
