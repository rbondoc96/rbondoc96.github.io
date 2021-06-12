import React, {useContext} from "react"

import Github from "../../svg/Github"

import {UIContext} from "../../context/UIContext"

export default function ProjectCard({
    name,
    status,
    github,
    description,
    tags,
}) {

    const {
        theme, 
        mobile, 
        sidebar, 
        navbar
    } = useContext(UIContext)

    const [uiTheme, setUITheme] = theme
    const [isMobile, setIsMobile] = mobile
    const [isSidebarActive, setIsSidebarActive] = sidebar
    const [isNavBarShown, setIsNavBarShown] = navbar

    let status__formatted = status.charAt(0) + status.substring(1)

    return(
        <div className="ProjectCard">

            <h3 className="ProjectCard-header">
                {name}
            </h3>

            <a className="ProjectCard-github" href={github} target="_blank">
                <Github 
                    theme={uiTheme}
                />
            </a>

            <p className="ProjectCard-status">
                <span className="ProjectCard-status-label">Status:</span>
                <span>{status__formatted}</span>
            </p>

            <p className="ProjectCard-description">
                {description}
            </p>

            <ul className="ProjectCard-tags">
                {tags && tags.map((elem, idx) => {
                    return(
                        <li
                        key={idx}
                        className="ProjectCard-tag">
                            {elem}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}