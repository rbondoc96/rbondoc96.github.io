import React, {FunctionComponent as FC} from 'react';

interface INavLink {
    href: string;
    children: React.ReactNode;
}

const NavLink: FC<INavLink> = ({href, children}) => (
    <div className="NavLink">
        <a href={href}>
            {children}
        </a>
    </div>
);

export default NavLink;
