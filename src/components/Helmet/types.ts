import type {JSX} from 'solid-js';

type LinkIcon = {
    rel: 'icon';
    type: 'image/ico';
    href: `${string}.ico`;
};

type LinkPreload = {
    rel: 'preload';
    as: JSX.IntrinsicElements['link']['as'];
    type: `text/${'css' | 'html' | 'js'}`;
};

type LinkStyleSheet = {
    rel: 'stylesheet';
    href: string;
    title?: string;
};

export type LinkAttribute =
    | LinkIcon
    | LinkPreload
    | LinkStyleSheet
    | {
          rel: string;
      };

type MetaTwitter = {
    name: `twitter:${'card' | 'creator' | 'description' | 'image' | 'title'}`;
    content: string;
};

interface _MetaOpenGraph {
    description?: string;
    image?: string;
    title?: string;
    type?: string;
    url?: string;
}

interface _MetaTwitter {
    card?: string;
    creator?: string;
    description?: string;
    image?: string;
    title?: string;
}

export interface MetaAttributes {
    author?: string;
    description?: string;
    image?: string;
    openGraph?: _MetaOpenGraph;
    twitter?: _MetaTwitter;
}

export type MetaAttribute =
    | MetaTwitter
    | {
          name?: string;
          property?: string;
          content: string;
      };

/**
 * Open Graph attributes control how URLs are displayed
 * when shared on social media.
 * 
 * They are part of Facebook's Open Graph Protocol, and are also
 * used by other social media sites, including LinkedIn and Twitter
 * (if Twitter Cards are absent).
 */
export type OpenGraphAttributes = {
    /**
     * A brief description of the content.
     */
    'og:description'?: string;

    /**
     * The URL of an image for the social snippet.
     * 
     * This is probably the most important Open Graph tag because
     * it will occupy most of a post's space in a social feed.
     */
    'og:image'?: string;

    /**
     * Defines the content language.
     */
    'og:locale'?: string;

    /**
     * Title of the page
     */
    'og:title'?: string;

    /**
     * The type of object being shared (e.g. article, website, etc.)
     */
    // The intersection of `string` and `{}` allow us to get IntelliSense
    // hints for 'article' and 'website' as possible values.
    // eslint-disable-next-line @typescript-eslint/ban-types
    'og:type'?: 'article' | 'website' | (string & {});

    /**
     * URL of the content. The URL should be a canonical URL.
     * @see https://ahrefs.com/blog/canonical-tags/
     */
    'og:url'?: string;
};

export type TwitterCardAttributes = {
    /**
     * The type of the card.
     */
    'twitter:card'?: 'summary' | 'summary_large_image' | 'app' | 'player';
    /**
     * The Twitter @username of the content creator.
     */
    'twitter:creator'?: string;
    /**
     * Description of the content. (Max 200 characters)
     */
    'twitter:description'?: string;
    /**
     * URL of the image to use. (Must be less than 5MB)
     * 
     * Formats: JPG, PNG, WEBP, GIF. SVG is not supported.
     * 
     * For GIFs, only the first frame will be used.
     */
    'twitter:image'?: string;
    /**
     * Description of the image conveying its meaning to visually impaired users.
     * (Max 420 characters)
     */
    'twitter:image:alt'?: string;    
    /**
     * The Twitter @username of the website.
     */
    'twitter:site'?: string;
    /**
     * Title of the content. (Max 70 characters)
     */
    'twitter:title'?: string;
};
