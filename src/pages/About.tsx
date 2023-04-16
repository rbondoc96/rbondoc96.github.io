import styles from '@/pages/styles/About.module.scss';
import Box from '@/components/Box';
import Page from '@/components/Page';
import Heading from '@/components/Heading';

const AboutPage = () => (
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
                    y: -100,
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
                <div>
                    <Heading
                        as="h2"
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
                        Me, Myself & I
                    </Heading>
                </div>
            </Box>
        </Page.Content>
    </Page>
);

export default AboutPage;
