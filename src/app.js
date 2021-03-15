import regeneratorRuntime from "regenerator-runtime"
import throttle from "lodash/throttle"

import React, {useContext, useEffect, useState} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import {UIContext} from "./context/UIContext"

import NavBar from "./components/nav/NavBar"

import Home from "./views/Home"
import About from "./views/About"
import Work from "./views/Work"
import Contact from "./views/Contact"

import Sun from "./svg/Sun"
import Moon from "./svg/Moon"

import "./styles/theme.scss"
import "./styles/components/_all.scss"
import "./styles/views/_all.scss"

export default function App({
    DEBUG_WINDOW=true,
}) {

    const {theme, 
        mobile, 
        sidebar, 
        navbar} = useContext(UIContext)

    const [uiTheme, setUITheme] = theme
    const [isMobile, setIsMobile] = mobile
    const [isSidebarActive, setIsSidebarActive] = sidebar
    const [isNavBarShown, setIsNavBarShown] = navbar

    var prevScrollPos = window.pageYOffset
    const onScroll = event => {
        var currScrollPos = window.pageYOffset

        if(prevScrollPos > currScrollPos) {
            setIsNavBarShown(true)
        } else {
            setIsNavBarShown(false)
        }

        prevScrollPos = currScrollPos
    }

    const onResize = event => {
        if(window.innerWidth < 960) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
            setIsSidebarActive(false)
        }
    }

    const toggleTheme = event => {
        if(uiTheme.toLowerCase() == "dark") {
            setUITheme("light")
        } else {
            setUITheme("dark")
        }
    }

    useEffect(() => {
        const throttledScroll = throttle(onScroll, 100)
        
        window.addEventListener("resize", onResize)
        window.addEventListener("scroll", throttledScroll)

        return () => {
            window.removeEventListener("resize", onResize)
            window.removeEventListener("scroll", throttledScroll)
        }
    }, [])

    return(
        <div className={uiTheme.toLowerCase() == "light"
        ? "app"
        : "app--dark"}>
            <NavBar />
            <div className="app-inner">
                <Home />
                <About />
                <Work />
                <Contact />

            </div>

            <div className={`app-theme-toggle ${
                !isNavBarShown
                ? "app-theme-toggle--hidden"
                : ""
            }`} onClick={toggleTheme}>
                {uiTheme.toLowerCase() == "dark"
                ? <Moon 
                    theme={uiTheme}
                />
                : <Sun 
                    theme={uiTheme}
                />}
            </div>
        </div>
    )
}