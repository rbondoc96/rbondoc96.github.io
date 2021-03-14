import React from "react"

export default function Header({
    children,
}) {

    return(
        <div className="Header">
            <h2 className="Header-text">{children}</h2>
            <div className="Header-underline"></div>
        </div>
    )
}