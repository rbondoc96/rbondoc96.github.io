import {Stack, Text} from '@/components/base';

const Footer = () => {
    return (
        <Stack as="footer" direction="column" space="xs" marginY="lg">
            <Text as="span" color="white" textAlign="center" fontSize="sm">
                Designed and Built by Rodrigo Bondoc.
            </Text>
            <Text as="span" color="white" textAlign="center" fontSize="sm">
                &copy; {new Date().getFullYear()} All rights reserved.
            </Text>
        </Stack>
    );
};

export default Footer;
