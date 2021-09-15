import React, {useContext} from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import Header from "../../components/content/Header"
import LinkButton from "../../components/inputs/LinkButton"
import ProjectCard from "../../components/content/ProjectCard"
import InlineLink from "../../components/content/InlineLink"

import Timeline from "../../components/content/Timeline"

import Email from "../../svg/Email"
import Github from "../../svg/Github"
import LinkedIn from "../../svg/LinkedIn"

import {UIContext} from "../../context/UIContext"

import Resume from "../../../public/pdfs/Rodrigo Bondoc Resume.pdf"

export default function Work() {

    const {theme, mobile} = useContext(UIContext)

    const [uiTheme, setUITheme] = theme
    const [isMobile, setIsMobile] = mobile

    let className = isMobile? "Work--mobile" : "Work"

    return(
        <div className={className} id="work">
            <Header classes="js-Work-Header" children="Things I've Done" />

            <div className="Work-timeline">
                <Timeline />

                <div className="Work-links">
                    <div className="Work-links-button">
                        <LinkButton 
                            children="Resume"
                            href={Resume} 
                        />
                    </div>
                    <div className="Work-links-icons">
                        <a href="https://github.com/rbondoc96" className="Work-links-icon" target="_blank">
                            <Github 
                                theme={uiTheme}
                            />
                        </a>

                        <a href="https://www.linkedin.com/in/rbondoc96/" className="Work-links-icon" target="_blank">
                            <LinkedIn 
                                theme={uiTheme}
                            />
                        </a>
                        <a href="mailto:rbondoc96@gmail.com" className="Work-links-icon" target="_blank">
                            <Email 
                                theme={uiTheme}
                            />
                        </a>                                                
                    </div>
                </div>
            </div>

            <div className="Work-ProjectCards">
                <ProjectCard 
                name="Sudoku"
                status="Complete"
                github="https://rbondoc.com/sudoku"
                description="A web app that creates a solvable 9x9 Sudoku grid with a given amount of clues. The app features a focusing mechanic that highlights areas affected by the cell being changed and a hint mechanic that reveals hints 1-by-1."
                tags={[
                    "CSS", 
                    "React", 
                    "TypeScript", 
                    "Webpack"
                ]}
                />

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
            </div>
        </div>
    )
}