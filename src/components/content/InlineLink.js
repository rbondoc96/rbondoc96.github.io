import React from "react"

export default function InlineLink({
    href,
    children,
    underline=true,
}) {

    return(
        <span className="InlineLink">
            <a href={href} target="_blank">
                {children}
            </a>
            {underline && <div className="InlineLink-underline"></div>}
        </span>
    )
}