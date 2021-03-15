import React from "react"

export default function Button({
    size="medium",
    onClick,
    children,
}) {

    let className = `button${""}`

    return(
        <button onClick={onClick} className={className}>
            {children}
        </button>
    )
}