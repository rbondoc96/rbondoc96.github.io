import {Image} from 'theme-ui';

import logo from '@/assets/icons/logo.svg';
import {FloatingSidebar, Link, List} from '@/components/base';
import type {AnimatedComponentProps} from '@/core/props';

type SectionNavigationProps = AnimatedComponentProps & {
    links: Array<{
        href: string;
        name: string;
    }>;
};

export const SectionNavigation = ({animClass, links}: SectionNavigationProps) => {
    const scrollToPageTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <FloatingSidebar animClass={animClass} position="right">
            <nav role="navigation" aria-label="Home page sections">
                <List direction="column" space="8">
                    <Link href="#" onClick={scrollToPageTop}>
                        <Image src={logo} sx={{width: '35px'}} />
                    </Link>

                    {links.map((link) => (
                        <List.Item
                            display="flex"
                            alignItems="center"
                            key={`nav-${link.name}`}
                            rotate="left"
                        >
                            <Link href={link.href} variant="links.gradient180TextOnHover">
                                {link.name}
                            </Link>
                        </List.Item>
                    ))}
                </List>
            </nav>
        </FloatingSidebar>
    );
};

export default SectionNavigation;
