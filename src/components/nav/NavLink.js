import React from "react"
import {Link} from "react-router-dom"

export default function NavLink({
    href,
    children,
}) {

    return(
        <div className="NavLink">
            <a href={href}>
                {children}
            </a>
        </div>
    )
}