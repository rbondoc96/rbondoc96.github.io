import styles from './styles/CompactCard.module.scss';
import Box from '@/components/Box';
import Heading from '@/components/Heading';
import Image, {type ImageProps} from '@/components/Image';
import Text from '@/components/Text';

export type CompactCardContent = {
    footer: string;
    icon: ImageProps;
    layoutId: string;
    title: string;
};

export type CompactCardProps = CompactCardContent & {
    onClick: () => void;
};

export const CompactCard = ({
    footer,
    icon,
    layoutId,
    onClick,
    title,
}: CompactCardProps) => {
    return (
        <Box
            layoutId={layoutId}
            className={styles.compactCard}
            onClick={onClick}
            whileHover={{
                y: -15,
                transition: {
                    duration: 0.25,
                },
            }}
        >
            <Box as="article" className={styles.compactCardContainer}>
                <Image alt={icon.alt} src={icon.src} />
                <Box className={styles.compactCardContent}>
                    <Box>
                        <Box>
                            <Heading as="h4" className={styles.compactCardTitle}>
                                {title}
                            </Heading>
                        </Box>
                    </Box>
                    <Box className={styles.compactCardFooter}>
                        <Text as="span">{footer}</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CompactCard;
