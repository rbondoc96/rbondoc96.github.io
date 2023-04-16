import {motion} from 'framer-motion';
import {Link as RouterLink} from 'react-router-dom';

import styles from '@/pages/styles/Home.module.scss';
import Page from '@/components/Page';
import Link from '@/components/Link';
import Button from '@/components/SolidButton';

const HomePage = () => (
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
            <motion.main
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
                <div className={styles.mainContainer}>
                    <div className={styles.titleStack}>
                        <motion.h3
                            className={styles.titleOverline}
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
                            Hey there! My name is
                        </motion.h3>
                        <motion.h1
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
                            Rodrigo Bondoc
                        </motion.h1>
                        <motion.h2
                            className={styles.subtitle}
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
                            Software Engineer
                        </motion.h2>
                    </div>
                    <motion.div
                        className={styles.titleBodyStack}
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
                        <span className={styles.titleBody}>
                            I&apos;m a full-stack web and mobile app developer with a
                            background in electrical engineering.
                        </span>
                        <span className={styles.titleBody}>
                            In other words, I joined the dark (soft) side.
                        </span>
                    </motion.div>
                    <motion.div
                        className={styles.linkStack}
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
                        <div>
                            <Link
                                as="a"
                                className={styles.memeLink}
                                href="https://knowyourmeme.com/memes/come-to-the-dark-side"
                                target="_blank"
                                rel="noreferrer"
                                variant="underline"
                            >
                                Yes, they did have cookies.
                            </Link>
                        </div>
                        <div>
                            <Button as={RouterLink} to="/about">
                                Get to know me!
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </motion.main>
        </Page.Content>
    </Page>
);

export default HomePage;
