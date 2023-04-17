import {faXmarkCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {MouseEvent} from 'react';
import styles from './styles/ExpandedCard.module.scss';
import Overlay from '@/components/Overlay';
import Box from '@/components/Box';
import Button from '@/components/Button';
import type {CompactCardContent} from '@/components/ExpandableCardList/CompactCard';
import Heading from '@/components/Heading';
import Image, {type ImageProps} from '@/components/Image';
import Link from '@/components/Link';
import List from '@/components/List';
import Text from '@/components/Text';

export type ExpandedCardContent = CompactCardContent & {
    background: ImageProps;
    body: string[];
    icon: ImageProps;
    link: {
        href: string;
        label: string;
    };
    minorTitle: string;
    subtitle: string;
};

type ExpandedCardProps = {
    card: ExpandedCardContent | null;
    isVisible: boolean;
    onClose: () => void;
};

export const ExpandedCard = ({card, isVisible, onClose}: ExpandedCardProps) => {
    return (
        <Overlay aria-hidden={!isVisible} onClose={onClose}>
            {card !== null && (
                <Box
                    className={styles.expandedCard}
                    initial="hidden"
                    animate="visible"
                    onClick={(event: MouseEvent) => {
                        event.stopPropagation();
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    variants={{
                        hidden: {
                            opacity: 0,
                        },
                        visible: {
                            opacity: 1,
                        },
                    }}
                >
                    <Box className={styles.expandedCardContent} layoutId={card.layoutId}>
                        <Box className={styles.expandedCardContentHeader}>
                            <Box
                                className={
                                    styles.expandedCardContentHeaderBackgroundImage
                                }
                            >
                                <Image
                                    alt={card.background.alt}
                                    src={card.background.src}
                                />
                            </Box>

                            <Box className={styles.expandedCardContentHeaderOverlay} />

                            <Box
                                className={
                                    styles.expandedCardContentHeaderIconImageContainer
                                }
                            >
                                <Box
                                    className={styles.expandedCardContentHeaderIconImage}
                                >
                                    <Image alt={card.icon.alt} src={card.icon.src} />
                                </Box>
                            </Box>

                            <Button
                                className={styles.expandedCardCloseButton}
                                onClick={onClose}
                            >
                                <FontAwesomeIcon icon={faXmarkCircle} size="xl" />
                            </Button>
                        </Box>

                        <Box className={styles.expandedCardContentBody}>
                            <Box className={styles.expandedCardContentBodyHeader}>
                                <Heading as="h4">{card.title}</Heading>
                                <Heading as="h5">{card.subtitle}</Heading>
                                <Text as="span">{card.minorTitle}</Text>
                            </Box>

                            <List>
                                {card.body.map((bodyItem, index) => (
                                    <List.Item key={`${card.layoutId}-body-${index}`}>
                                        <Text
                                            as="span"
                                            className={
                                                styles.expandedCardContentBodyDescription
                                            }
                                        >
                                            {bodyItem}
                                        </Text>
                                    </List.Item>
                                ))}
                            </List>

                            <Box>
                                <Link
                                    href={card.link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    variant="button"
                                >
                                    {card.link.label}
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )}
        </Overlay>
    );
};

export default ExpandedCard;
