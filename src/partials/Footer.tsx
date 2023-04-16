import styles from '@/partials/styles/Footer.module.scss';

const Footer = () => (
    <footer className={styles.container}>
        <span className={styles.text}>Designed and Built by Rodrigo Bondoc.</span>
        <span className={styles.text}>
            &copy; {new Date().getFullYear()} All rights reserved.
        </span>
    </footer>
);

export default Footer;
