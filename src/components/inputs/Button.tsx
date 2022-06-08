import React, { FunctionComponent } from "react"

interface IButton {
    onClick: (event: React.MouseEvent) => void
    children: React.ReactNode
}

const Button: FunctionComponent<IButton> = ({
    onClick,
    children,
}) => {

    let className = `button${""}`

    return(
        <button onClick={onClick} className={className}>
            {children}
        </button>
    )
}

export default Button
