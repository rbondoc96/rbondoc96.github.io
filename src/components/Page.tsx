import type {PropsWithChildren} from 'react';

import SEO, {type SEOProps} from '@/components/SEO';
import Header from '@/partials/Header';
import Footer from '@/partials/Footer';

type PageProps = {
    seo?: SEOProps;
};

export const PageWrapper = ({children, seo}: PropsWithChildren<PageProps>) => {
    return (
        <>
            {seo !== undefined && <SEO {...seo} />}
            <Header />
            {children}
            <Footer />
        </>
    );
};

const PageContent = ({children}: PropsWithChildren) => {
    return <div id="content">{children}</div>;
};

const PageOverlay = ({children}: PropsWithChildren) => {
    return <>{children}</>;
};

export const Page = Object.assign(PageWrapper, {
    Content: PageContent,
    Overlay: PageOverlay,
});

export default Page;
