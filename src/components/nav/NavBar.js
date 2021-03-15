import React, {useContext} from "react"

import Logo from "../Logo"
import NavLink from "./NavLink"
import Button from "../inputs/Button"

import {UIContext} from "../../context/UIContext"

import Hamburger from "../../svg/Hamburger"
import Resume from "../../../public/pdfs/Software QA Analyst - Rodrigo Bondoc Resume.pdf"

export default function NavBar() {

    const {theme, 
        mobile, 
        sidebar, 
        navbar} = useContext(UIContext)

    const [uiTheme, setUITheme] = theme
    const [isMobile, setIsMobile] = mobile
    const [isSidebarActive, setIsSidebarActive] = sidebar
    const [isNavBarShown, setIsNavBarShown] = navbar

    const toggleSidebar = event => {
        if(isMobile) {
            setIsSidebarActive(!isSidebarActive)
        }
    }

    return(
        <nav className={`${isMobile ? "NavBar--mobile": "NavBar"} ${
            isNavBarShown ? "" : "NavBar--hidden"
        }`}>
            <div className="NavBar-inner">
                <div className="NavBar-logo" onClick={() => {
                    window.open(window.location.href.split("#")[0], "_self")
                }}>
                    <Logo />
                </div>

                <div className={(isMobile && !isSidebarActive)
                    ? "NavBar-links--hidden"
                    : "NavBar-links"}>

                    {isMobile && <div 
                    className="NavBar-links--sidebar-toggle"
                    onClick={toggleSidebar}>
                        X
                    </div>}

                    <NavLink href="#about" children="About" />
                    <NavLink href="#work" children="Work" />
                    <NavLink href="#contact" children="Contact" />
                    <Button children="Resume" href={Resume} onClick={() => {
                        window.open(Resume, "_blank")
                    }}/>

                </div>

                {isMobile && <Hamburger 
                    className="NavBar-toggle" 
                    theme={uiTheme}
                    onClick={toggleSidebar}
                />}
            </div>
        </nav>
    )
}