import React, {FunctionComponent} from "react"

interface ILinkButton {
    href: string,
    classes?: string[]
    children: React.ReactNode
}

const LinkButton: FunctionComponent<ILinkButton> = ({
    href,
    classes,
    children,
}) => {

    let cssClass
    if(classes) 
        cssClass = `button ${classes}`
    else 
        cssClass = "button"


    return(
        <a href={href} target="_blank" className="LinkButton">
            <button className={cssClass}>
                {children}
            </button>
        </a>
    )
}

export default LinkButton
