import {Link} from 'react-router-dom';
import {Page} from '@/components/base';
import styles from '@/pages/styles/Error404.module.scss';
import Button from '@/components/SolidButton';

const Error404Page = () => (
    <Page>
        <Page.Content>
            <main className={styles.main}>
                <h1 className={styles.h1}>404</h1>
                <h2 className={styles.h2}>
                    <span>Uh oh!</span>
                    <span> There&apos;s nothing here.</span>
                </h2>
                <div className={styles.buttonContainer}>
                    <Button as={Link} to="/">
                        Go Home
                    </Button>
                </div>
            </main>
        </Page.Content>
    </Page>
);

export default Error404Page;
