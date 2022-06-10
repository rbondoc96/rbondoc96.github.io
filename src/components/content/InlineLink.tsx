import React, {FunctionComponent as FC} from 'react';

interface IInlineLink {
    href: string;
    children: React.ReactNode;
    underline: boolean;
}

const InlineLink: FC<IInlineLink> = ({href, children, underline = true}) => (
    <span className="InlineLink">
        <a href={href} target="_blank" rel="noreferrer">
            {children}
        </a>
        {underline && <span className="InlineLink-underline">{}</span>}
    </span>
);

export default InlineLink;
