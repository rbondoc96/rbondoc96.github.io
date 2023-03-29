import {Typography} from '@mui/material';

const Footer = () => {
    return (
        <footer>
            <Typography color="white" textAlign="center" fontSize="sm">
                &copy; {new Date().getFullYear()} Rodrigo Bondoc. - All rights
                reserved.
            </Typography>
        </footer>
    );
};

export default Footer;
