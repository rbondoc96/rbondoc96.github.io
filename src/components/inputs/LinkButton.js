import React from "react"

export default function LinkButton({
    size="medium",
    onClick,
    children,
    href,
    classes,
}) {

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