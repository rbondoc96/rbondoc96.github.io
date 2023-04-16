import {
    faGithub,
    faLinkedinIn,
    type IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faScroll} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import styles from './styles/SocialsSidebar.module.scss';
import Link from '@/components/Link';
import FloatingSidebar from '@/components/FloatingSidebar';

type SocialsSidebarProps = {
    position?: 'left' | 'right';
};

type Social = {
    href: string;
    icon: IconDefinition;
    label: string;
    target?: string;
    rel?: string;
};

const socials: Social[] = [
    {label: 'Email', icon: faEnvelope, href: 'mailto:rbondoc96@gmail.com'},
    {
        label: 'GitHub',
        icon: faGithub,
        href: 'https://github.com/rbondoc96',
        target: '_blank',
        rel: 'noreferrer',
    },
    {
        label: 'LinkedIn',
        icon: faLinkedinIn,
        href: 'https://linkedin.com/in/rbondoc96',
        target: '_blank',
        rel: 'noreferrer',
    },
    {
        label: 'Resume',
        icon: faScroll,
        href: '/docs/resume.pdf',
        target: '_blank',
        rel: 'noreferrer',
    },
];

export const SocialsSidebar = ({position = 'left'}: SocialsSidebarProps) => (
    <FloatingSidebar position={position}>
        <ul className={styles.list}>
            {socials.map((social) => (
                <li key={social.label}>
                    <Link
                        as="a"
                        href={social.href}
                        target={social.target}
                        rel={social.rel}
                    >
                        <FontAwesomeIcon color="inherit" icon={social.icon} size="lg" />
                    </Link>
                </li>
            ))}
        </ul>
    </FloatingSidebar>
);

export default SocialsSidebar;
