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
            {underline && <span className="InlineLink-underline"></span>}
        </span>
    )
}