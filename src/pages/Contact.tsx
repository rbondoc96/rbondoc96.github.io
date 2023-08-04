import styles from './styles/Contact.module.scss';
import Box from '@/components/Box';
import Heading from '@/components/Heading';
import Page from '@/components/Page';

const Contact = () => (
    <Page
        seo={{
            author: 'Rodrigo Bondoc',
            description:
                'Rodrigo Bondoc is a software engineer who specializes in building full-stack web and mobile applications.',
            title: 'Rodrigo Bondoc',
            _twitter: {
                card: 'summary',
                creator: '@rbondoc96',
            },
        }}
    >
        <Page.Content>
            <Box
                as="main"
                className={styles.main}
                initial="hidden"
                animate="visible"
                exit={{
                    opacity: 0,
                    transition: {
                        duration: 1,
                    },
                }}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.3,
                        },
                    },
                }}
            >
                <Heading
                    as="h2"
                    className={styles.title}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 20,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.75,
                            },
                        },
                    }}
                >
                    Let&apos;s Get in Touch!
                </Heading>
            </Box>
        </Page.Content>
    </Page>
);

export default Contact;
