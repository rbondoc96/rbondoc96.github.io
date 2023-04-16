import type {PropsWithChildren} from 'react';
import styles from './styles/FloatingSidebar.module.scss';

type FloatingSidebarProps = {
    position: 'left' | 'right';
};

export const FloatingSidebar = ({
    children,
    position,
}: PropsWithChildren<FloatingSidebarProps>) => {
    const composedStyles = [
        styles.floatingSidebar,
        position === 'left' ? styles.floatingSidebarLeft : styles.floatingSidebarRight,
    ]
        .filter(Boolean)
        .join(' ');
    return (
        <div className={composedStyles}>
            <div className={styles.floatingSidebarContent}>{children}</div>
        </div>
    );
};

export default FloatingSidebar;
