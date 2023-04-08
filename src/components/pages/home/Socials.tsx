import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faScroll} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {FloatingSidebar, Link, List} from '@/components/base';
import type {AnimatedComponentProps} from '@/core/props';

const Socials = ({animClass}: AnimatedComponentProps) => {
    return (
        <FloatingSidebar animClass={animClass} position="left">
            <List direction="column" space="8">
                <List.Item>
                    <Link
                        color="white"
                        href="mailto:rbondoc96@gmail.com"
                        _hover={{color: 'red'}}
                    >
                        <FontAwesomeIcon color="inherit" icon={faEnvelope} size="lg" />
                    </Link>
                </List.Item>

                <List.Item>
                    <Link
                        color="white"
                        href="https://github.com/rbondoc96"
                        target="_blank"
                        rel="noreferrer"
                        _hover={{color: 'red'}}
                    >
                        <FontAwesomeIcon color="inherit" icon={faGithub} size="lg" />
                    </Link>
                </List.Item>

                <List.Item>
                    <Link
                        color="white"
                        href="https://linkedin.com/in/rbondoc96"
                        target="_blank"
                        rel="noreferrer"
                        _hover={{color: 'red'}}
                    >
                        <FontAwesomeIcon color="inherit" icon={faLinkedinIn} size="lg" />
                    </Link>
                </List.Item>

                <List.Item>
                    <Link
                        color="white"
                        href="/docs/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        _hover={{color: 'red'}}
                    >
                        <FontAwesomeIcon color="inherit" icon={faScroll} size="lg" />
                    </Link>
                </List.Item>
            </List>
        </FloatingSidebar>
    );
};

export default Socials;
