import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {motion} from 'framer-motion';
import type {ComponentPropsWithoutRef, PropsWithChildren} from 'react';
import styles from './styles/List.module.scss';
import Box from '@/components/Box';

type ListItemProps = {
    className?: string;
} & ComponentPropsWithoutRef<typeof motion.li>;

type ListProps = {
    className?: string;
} & ComponentPropsWithoutRef<typeof motion.ul>;

const ListItem = ({children, className, ...props}: PropsWithChildren<ListItemProps>) => {
    const composedStyles = [className, styles.listItem].filter(Boolean).join(' ');

    return (
        <motion.li className={composedStyles} {...props}>
            <FontAwesomeIcon className={styles.listItemBullet} icon={faCaretRight} />
            <Box>{children}</Box>
        </motion.li>
    );
};

const _List = ({children, className, ...props}: PropsWithChildren<ListProps>) => {
    const composedStyles = [className, styles.list].filter(Boolean).join(' ');

    return (
        <motion.ul className={composedStyles} {...props}>
            {children}
        </motion.ul>
    );
};

export const List = Object.assign(_List, {
    Item: ListItem,
});

export default List;
