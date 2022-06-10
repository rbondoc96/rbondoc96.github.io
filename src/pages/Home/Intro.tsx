import React, {FunctionComponent as FC} from 'react';

import LinkButton from '@/components/inputs/LinkButton';

const Intro: FC = () => (
        <div className="Home">
            <div className="Home-left">
                <h1 className="Home-header">
                    <span>Hi there!</span>
                    <span>I$aposm Rodrigo.</span>
                </h1>

                <p className="Home-text">
                    I&aposm a software developer based in San Diego, CA, U.S.A. who specializes
                    in building web applications.
                </p>

                <div className="Home-button">
                    <LinkButton href="mailto:rbondoc96@gmail.com">
                        Say Hello
                    </LinkButton>
                </div>
            </div>
        </div>
);

export default Intro;
