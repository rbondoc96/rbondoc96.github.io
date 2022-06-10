import React, {FunctionComponent as FC} from 'react';
import {Link} from 'react-router-dom';

interface INavPageLink {
    to: string;
    children: React.ReactNode;
}

const NavPageLink: FC<INavPageLink> = ({to, children}) => (
    <div className="NavLink">
        <Link to={to}>
            {children}
        </Link>
    </div>
);

export default NavPageLink;
