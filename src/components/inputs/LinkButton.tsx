import React, {FunctionComponent} from 'react';

interface ILinkButton {
    href: string,
    classes?: string[]
    children: React.ReactNode
}

const LinkButton: FunctionComponent<ILinkButton> = ({
    href,
    classes,
    children,
}) => {
    let cssClass: string;
    if (classes) {
        cssClass = `button ${classes.join(' ')}`;
    } else {
        cssClass = 'button';
    }

    return (
        <a href={href} target="_blank" className="LinkButton" rel="noreferrer">
            <button className={cssClass} type="button">
                {children}
            </button>
        </a>
    );
};

export default LinkButton;
