import {Link} from 'react-router-dom';
import styles from './styles/Error404.module.scss';
import Box from '@/components/Box';
import Page from '@/components/Page';
import Heading from '@/components/Heading';
import SolidButton from '@/components/SolidButton';
import Text from '@/components/Text';

const delays = {
    '404': 3,
    'nothingHere': 1.5,
    'button': 3,
};

const Error404Page = () => (
    <Page>
        <Page.Content>
            <Box
                as="main"
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
                    <Text
                        as="span"
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
                    </Text>
                    <Text
                        as="span"
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
                    </Text>
                </Heading>
                <Box
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
                    <SolidButton as={Link} to="/">
                        Go Home
                    </SolidButton>
                </Box>
            </Box>
        </Page.Content>
    </Page>
);

export default Error404Page;
