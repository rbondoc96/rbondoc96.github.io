import React, {FunctionComponent as FC} from 'react';

interface IHeader {
    classes: string,
    children: React.ReactNode;
}

const Header: FC<IHeader> = ({children, classes}) => {
    let cssClass: string;
    if (classes) {
        cssClass = `Header ${classes}`;
    } else {
        cssClass = 'Header';
    }

    return (
        <div className={cssClass}>
            <h2 className="Header-text">{children}</h2>
            <div className="Header-underline">{}</div>
        </div>
    );
};

export default Header;
