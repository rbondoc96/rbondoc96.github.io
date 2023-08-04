import type {IconDefinition as SolidIconDefinition} from '@fortawesome/free-solid-svg-icons';
import type {IconDefinition as BrandIconDefinition} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon, type FontAwesomeIconProps} from '@fortawesome/react-fontawesome';
import type {Link as RouteLink} from 'react-router-dom';
import styles from './styles/IconLink.module.scss';
import Link from '@/components/Link';

type IconLinkProps = {
    as?: 'a' | typeof RouteLink;
    className?: string;
    href: string;
    icon: SolidIconDefinition | BrandIconDefinition;
    target?: string;
    rel?: string;
    _icon?: Omit<FontAwesomeIconProps, 'icon'>;
};

export const IconLink = ({
    as = 'a',
    className,
    href,
    icon,
    target,
    rel,
    _icon,
}: IconLinkProps) => {
    const composedStyles = [className, styles.iconLink].filter(Boolean).join(' ');

    return (
        <Link as={as} className={composedStyles} href={href} target={target} rel={rel}>
            <FontAwesomeIcon color="inherit" icon={icon} {..._icon} />
        </Link>
    );
};

export default IconLink;
