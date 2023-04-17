import {useState} from 'react';
import styles from './styles/ExpandableCardList.module.scss';
import Box from '@/components/Box';
import CompactCard from '@/components/ExpandableCardList/CompactCard';
import ExpandedCard, {
    type ExpandedCardContent,
} from '@/components/ExpandableCardList/ExpandedCard';

type ExpandableCardListProps = {
    cards: ExpandedCardContent[];
};

export const ExpandableCardList = ({cards}: ExpandableCardListProps) => {
    const [selectedCard, setSelectedCard] = useState<ExpandedCardContent | null>(null);

    const expandCard = (card: ExpandedCardContent) => {
        document.body.classList.add('no-scroll');
        setSelectedCard(card);
    };

    const shrinkCard = () => {
        document.body.classList.remove('no-scroll');
        setSelectedCard(null);
    };

    return (
        <>
            <Box
                className={styles.expandableCardList}
                variants={{
                    hidden: {
                        opacity: 0,
                    },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.25,
                        },
                    },
                }}
            >
                {cards.map((card) => (
                    <CompactCard
                        key={`expandable-card-${card.title}`}
                        footer={card.footer}
                        icon={card.icon}
                        layoutId={card.layoutId}
                        onClick={() => {
                            expandCard(card);
                        }}
                        title={card.title}
                    />
                ))}
            </Box>
            <ExpandedCard
                card={selectedCard}
                isVisible={selectedCard !== null}
                onClose={shrinkCard}
            />
        </>
    );
};

export default ExpandableCardList;
