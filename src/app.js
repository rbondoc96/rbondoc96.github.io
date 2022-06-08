import throttle from "lodash.throttle"

import React, {useContext, useEffect, useState} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import {UIContext} from "@/context/UIContext"

import NavBar from "@/components/nav/NavBar"

import Home from "@/pages/Home"
import AppsHome from "@/pages/AppsHome";

import Sun from "@public/imgs/sun.svg"
import Moon from "@public/imgs/moon.svg"

import {animationInit} from "./anims"

import "@/styles/theme.css"
import "@/styles/components/_all.css"
import "@/styles/views/_all.css"


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
        animationInit(isMobile)
        
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
            <Router>
                <NavBar />
                <div className="app-inner">
                    <Switch>
                        <Route exact path="/" render={Home}/>
                        <Route path="/apps" component={AppsHome} />
                    </Switch>
                </div>

                <div className={`app-theme-toggle ${
                    !isNavBarShown
                    ? "app-theme-toggle--hidden"
                    : ""
                }`} onClick={toggleTheme}>

                    {uiTheme.toLowerCase() == "dark"
                    ? <img src={Moon} />
                    : <img src={Sun} />
                    }
                </div>
            </Router>
        </div> 
    )
}