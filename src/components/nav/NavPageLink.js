import React from "react"
import {Link} from "react-router-dom"

export default function NavPageLink({
    to,
    children,
}) {

    return(
        <div className="NavLink">
            <Link to={to}>
                {children}
            </Link>
        </div>
    )
}