import React, {FunctionComponent as FC} from 'react';

import Header from '@/components/content/Header';
import LinkButton from '@/components/inputs/LinkButton';

const Contact: FC = () => (
        <div className="Contact" id="contact">
            <Header classes="js-Contact-Header">
                Contact Me
            </Header>

            <p className="Contact-content">
                My inbox is always open, whether you have a question or you just feel like having
                a chat. I&aposll get back to you as soon as I can!
            </p>

            <div className="Contact-button">
                <LinkButton href="mailto:rbondoc96@gmail.com">
                    Get In Touch
                </LinkButton>
            </div>

            <footer className="Contact-footer">
                <div className="Contact-footer-note">
                    Made with &lt;/&gt; and 💙 by Rodrigo Bondoc
                </div>

                <div className="Contact-footer-attributions">
                    Icons made by
                </div>
            </footer>
        </div>
);

export default Contact;
