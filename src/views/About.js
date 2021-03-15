import React, {useContext} from "react"

import Header from "../components/content/Header"
import InlineLink from "../components/content/InlineLink"
import SkillList from "../components/content/SkillList"

import {UIContext} from "../context/UIContext"

import GPOY from "../../public/imgs/me_london.png"

export default function About() {

    const {theme, 
        mobile, 
        sidebar, 
        navbar} = useContext(UIContext)

    const [uiTheme, setUITheme] = theme
    const [isMobile, setIsMobile] = mobile
    const [isSidebarActive, setIsSidebarActive] = sidebar
    const [isNavBarShown, setIsNavBarShown] = navbar

    let className = isMobile? "About--mobile" : "About"

    return(
        <div className={className} id="about">
            <Header children="About Me" />

            <div className="About-left">
                <p>
                    Welcome! My name’s Rodrigo and my pronouns ar
                    {/* The <span>'s are formatted this way to 
                        keep the space character before the word
                    */}
                    e <span className="fw-bold">he</span>
                    , <span className="fw-bold">him</span>
                    , and <span className="fw-bold">his</span>. 
                    I’m an electrical engineer and software developer based in San Diego, CA, U.S.A.
                    <br/><br/>

                    I studied 
                    at <InlineLink 
                    children="San Diego State University" 
                    href="https://electrical.sdsu.edu/" /> and
                    graduated with a B.S. in Electrical Engineering and a minor in Computer Science. 
                    I recently joined the software quality assurance team 
                    at <InlineLink 
                    children="snapIoT"
                    href="https://snapiot.com/"
                    /> where
                    I test applications used in clinical trials.
                    <br/><br/>

                    In my free time, I enjoy working on personal projects to work on my technical 
                    skills. But when I’m not at my desk, I like to play some video games, visit the 
                    beach, and spend time with loved ones.
                    <br/><br/>

                    Here are some technologies I have experience with:
                </p>
                <SkillList />
            </div>
            <div className="About-right">
                <img src={GPOY} />
            </div>
        </div>
    )
}