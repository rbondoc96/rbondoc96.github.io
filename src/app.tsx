import throttle from "lodash.throttle"

import React, {FunctionComponent, useContext, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import {UIContext} from "@/context/UIContext"
import {UITheme} from "@/types/enum"

import NavBar from "@/components/nav/NavBar"

import Home from "@/pages/Home"
import AppsHome from "@/pages/AppsHome";

import Sun from "@public/imgs/sun.svg"
import Moon from "@public/imgs/moon.svg"

import {animationInit} from "./anims"

import "@/styles/theme.css"
import "@/styles/components/_all.css"
import "@/styles/views/_all.css"


const App: FunctionComponent = () => {

    const {
        theme, 
        mobile, 
        sidebar, 
        navbar
    } = useContext(UIContext)

    const [uiTheme, setUITheme] = theme
    const [isMobile, setIsMobile] = mobile
    const setIsSidebarActive = sidebar[1]
    const [isNavBarShown, setIsNavBarShown] = navbar

    var prevScrollPos = window.pageYOffset
    const onScroll = () => {
        var currScrollPos = window.pageYOffset

        if(prevScrollPos > currScrollPos) {
            setIsNavBarShown(true)
        } else {
            setIsNavBarShown(false)
        }

        prevScrollPos = currScrollPos
    }

    const onResize = () => {
        if(window.innerWidth < 960) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
            setIsSidebarActive(false)
        }
    }

    const toggleTheme = () => {
        if(uiTheme === UITheme.dark) {
            setUITheme(UITheme.light)
        } else {
            setUITheme(UITheme.dark)
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
        <div className={uiTheme === UITheme.light? "app" : "app--dark"}>
            <Router>
                <NavBar />
                <div className="app-inner">
                    <Switch>
                        <Route exact path="/" render={Home}/>
                        <Route path="/apps" component={AppsHome} />
                    </Switch>
                </div>

                <div 
                    className={`app-theme-toggle${!isNavBarShown? "app-theme-toggle--hidden" : ""}`} 
                    onClick={toggleTheme}
                >
                    {uiTheme === UITheme.dark? <img src={Moon} /> : <img src={Sun} />}
                </div>
            </Router>
        </div> 
    )
}

export default App
