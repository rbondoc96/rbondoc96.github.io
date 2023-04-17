import type {PropsWithChildren} from 'react';
import styles from './styles/Overlay.module.scss';
import Box from '@/components/Box';

type OverlayProps = {
    'aria-hidden': boolean;
    'onClose': () => void;
};

export const Overlay = ({
    'aria-hidden': ariaHidden,
    children,
    onClose,
}: PropsWithChildren<OverlayProps>) => {
    return (
        <Box aria-hidden={ariaHidden} className={styles.overlay} onClick={onClose}>
            {children}
        </Box>
    );
};

export default Overlay;
