import React from "react"

export default function Header({
    children,
    classes,
}) {

    let cssClass
    if(classes)
        cssClass = `Header ${classes}`
    else
        cssClass = "Header"
    

    return(
        <div className={cssClass}>
            <h2 className="Header-text">{children}</h2>
            <div className="Header-underline"></div>
        </div>
    )
}