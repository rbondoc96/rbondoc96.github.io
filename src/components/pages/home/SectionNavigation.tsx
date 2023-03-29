import {FloatingSidebar, Link, List} from '@/components/base';
import {AnimatedComponentProps} from '@/core/props';

type SectionNavigationProps = AnimatedComponentProps & {
    links: Array<{
        href: string;
        name: string;
    }>;
};

export const SectionNavigation = ({animClass, links}: SectionNavigationProps) => {
    return (
        <FloatingSidebar animClass={animClass} position="right">
            <nav role="navigation" aria-label="Home page sections">
                <List direction="column" space="8">
                    {links.map((link) => (
                        <List.Item key={`nav-${link.name}`} rotate="left">
                            <Link
                                href={link.href}
                                textDecoration="none"
                                _hover={{
                                    color: 'red',
                                }}
                            >
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
