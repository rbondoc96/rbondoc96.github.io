import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import Page from '@/components/Page';
import styles from '@/pages/styles/Error404.module.scss';
import Heading from '@/components/Heading';
import Button from '@/components/SolidButton';

const delays = {
    '404': 3,
    'nothingHere': 1.5,
    'button': 3,
};

const Error404Page = () => (
    <Page>
        <Page.Content>
            <motion.main
                className={styles.main}
                initial="hidden"
                animate="visible"
                exit={{
                    opacity: 0,
                    transition: {duration: 1},
                }}
            >
                <Heading
                    as="h1"
                    className={styles.h1}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 20,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: delays['404'],
                                duration: 0.75,
                            },
                        },
                    }}
                >
                    404
                </Heading>
                <Heading
                    as="h2"
                    className={styles.h2}
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
                    <motion.span
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
                        Uh oh!
                    </motion.span>
                    <motion.span
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 20,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: delays.nothingHere,
                                    duration: 0.75,
                                },
                            },
                        }}
                    >
                        There&apos;s nothing here.
                    </motion.span>
                </Heading>
                <motion.div
                    className={styles.buttonContainer}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 20,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: delays.button,
                                duration: 0.75,
                            },
                        },
                    }}
                >
                    <Button as={Link} to="/">
                        Go Home
                    </Button>
                </motion.div>
            </motion.main>
        </Page.Content>
    </Page>
);

export default Error404Page;
