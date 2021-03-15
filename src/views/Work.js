import React, {useContext} from "react"

import Header from "../components/content/Header"
import Button from "../components/inputs/Button"
import ProjectCard from "../components/content/ProjectCard"
import InlineLink from "../components/content/InlineLink"

import Timeline from "../components/content/Timeline"

import Email from "../svg/Email"
import Github from "../svg/Github"
import LinkedIn from "../svg/LinkedIn"

import {UIContext} from "../context/UIContext"

import Resume from "../../public/pdfs/Software QA Analyst - Rodrigo Bondoc Resume.pdf"

export default function Work() {

    const {theme, 
        mobile, 
        sidebar, 
        navbar} = useContext(UIContext)

    const [uiTheme, setUITheme] = theme
    const [isMobile, setIsMobile] = mobile
    const [isSidebarActive, setIsSidebarActive] = sidebar
    const [isNavBarShown, setIsNavBarShown] = navbar

    let className = isMobile? "Work--mobile" : "Work"

    return(
        <div className={className} id="work">
            <Header children="Things I've Done" />

            <div className="Work-timeline">
                <Timeline />

                <div className="Work-links">
                    <div className="Work-links-button">
                        <Button 
                            children="Resume"
                            href={Resume} 
                            onClick={() => {
                                window.open(Resume, "_blank")
                            }}
                        />
                    </div>
                    <div className="Work-links-icons">
                        <div className="Work-links-icon" onClick={() => {
                            window.open("https://github.com/rbondoc96", "_blank")
                        }}>
                            <Github 
                                theme={uiTheme}
                            />
                        </div>
                        <div className="Work-links-icon" onClick={() => {
                            window.open("https://www.linkedin.com/in/rbondoc96/", "_blank")
                        }}>
                            <LinkedIn 
                                theme={uiTheme}
                            />
                        </div>
                        <div className="Work-links-icon" onClick={() => {
                            window.open("mailto:rbondoc96@gmail.com")
                        }}>
                            <Email 
                                theme={uiTheme}
                            />
                        </div>                                                
                    </div>
                </div>
            </div>

            <div className="Work-ProjectCards">
                <ProjectCard 
                name="Personal Website"
                status="Updating"
                github="https://github.com/rbondoc96/rbondoc96.github.io"
                description={"My portfoilio website I designed and built. This current iteration was built using React."}
                tags={[
                    "React",
                    "SCSS",
                    "Webpack",
                ]} />

                <ProjectCard 
                name="Game Randomizer"
                status="Work in Progress"
                github="https://github.com/rbondoc96/DBD-Game-Randomizer"
                description={"A web application for randomizing and analyzing player builds in Dead by Daylight, an asymmetrical action-horror game by Behavior Interactive. Choose a random build and analyze the effects of each player’s assets and resources."}
                tags={[
                    "React",
                    "Django",
                    "SCSS",
                    "Webpack",
                    "WebSockets",
                    "PostgreSQL",
                ]} />

                <ProjectCard 
                name="Parking Buddy"
                status="Complete"
                github="https://github.com/rbondoc96/EE-Senior-Design"
                description={"My senior capstone group project for my Electrical Engineering major at San Diego State University. Track parking availability in campus parking structures and know ahead of time where you can park"}
                tags={[
                    "Python",
                    "LoRa",
                    "Android",
                    "Raspberry Pi",
                ]} />
            </div>
        </div>
    )
}