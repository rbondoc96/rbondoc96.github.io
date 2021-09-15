import React, {useContext} from "react"
import gsap from "gsap"

import Logo from "../Logo"
import NavLink from "./NavLink"
import NavPageLink from "./NavPageLink"
import Button from "../inputs/Button"
import LinkButton from "../inputs/LinkButton"

import {UIContext} from "../../context/UIContext"

import Hamburger from "../../svg/Hamburger"
import Resume from "../../../public/pdfs/Rodrigo Bondoc Resume.pdf"

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

    React.useEffect(() => {
        const timeline = gsap.timeline()
        timeline.from(".NavBar-logo", {
            opacity: 0,
            duration: 0.5,
            x: "-10%"
        })
        if(isMobile)
            timeline.from(".NavBar-toggle", {
                opacity: 0,
                duration: 0.5,
                x: "-10%"
            })

        timeline.from(".NavLink, .NavBar-links .LinkButton", {
            opacity: 0,
            duration: 0.5,
            x: "-10%",
        })
    }, [])

    return(
        <nav className={`${isMobile ? "NavBar--mobile": "NavBar"} ${
            isNavBarShown ? "" : "NavBar--hidden"
        }`}>
            <div className="NavBar-inner">
                <a className="NavBar-logo" href={window.location.origin} target="_self">
                    <Logo />
                </a>

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
                    <NavPageLink to="/apps" children="Apps" />
                    <LinkButton children="Resume" href={Resume} />

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