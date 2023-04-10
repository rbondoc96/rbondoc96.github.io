import type {PropsWithChildren} from 'react';
import {Helmet} from 'react-helmet-async';

import {Stack} from '@/components/base';
import Header from '@/components/partials/Header';
import Footer from '@/components/partials/Footer';

const PageContent = ({children}: PropsWithChildren) => {
    return (
        <Stack id="content" direction="column">
            {children}
        </Stack>
    );
};

const PageOverlay = ({children}: PropsWithChildren) => {
    return <>{children}</>;
};

type PageSEOProps = {
    author: string;
    description: string;
    image?: string;
    title: string;
    _opengraph?: {
        description?: string;
        image?: string;
        title?: string;
        type?: string;
        url?: string;
    };
    _twitter?: {
        card: string;
        creator: `@${string}`;
        description?: string;
        image?: string;
        title?: string;
    };
};

const PageSEO = ({
    author,
    description,
    image,
    title,
    _opengraph,
    _twitter,
}: PageSEOProps) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="author" content={author} />
            <meta name="description" content={description} />
            {image !== undefined && <meta name="image" content={image} />}

            <meta property="og:title" content={_opengraph?.title ?? title} />
            <meta
                property="og:description"
                content={_opengraph?.description ?? description}
            />
            <meta property="og:url" content={_opengraph?.url ?? window.location.origin} />
            <meta property="og:type" content={_opengraph?.type ?? 'website'} />
            {_opengraph?.image !== undefined ? (
                <meta property="og:image" content={_opengraph.image} />
            ) : (
                image !== undefined && <meta property="og:image" content={image} />
            )}

            <meta name="twitter:card" content={_twitter?.card ?? 'summary'} />
            <meta name="twitter:creator" content={_twitter?.creator ?? author} />
            <meta
                name="twitter:description"
                content={_twitter?.description ?? description}
            />
            {_twitter?.image !== undefined ? (
                <meta name="twitter:image" content={_twitter.image} />
            ) : (
                image !== undefined && <meta name="twitter:image" content={image} />
            )}
            <meta name="twitter:title" content={_twitter?.title ?? title} />
        </Helmet>
    );
};

export const PageWrapper = ({children}: PropsWithChildren) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export const Page = Object.assign(PageWrapper, {
    Content: PageContent,
    SEO: PageSEO,
    Overlay: PageOverlay,
});

export default Page;
