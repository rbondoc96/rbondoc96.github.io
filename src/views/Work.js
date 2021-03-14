import React, {useContext} from "react"

import Header from "../components/Header"
import Button from "../components/inputs/Button"
import ProjectCard from "../components/content/ProjectCard"
import InlineLink from "../components/content/InlineLink"

import Email from "../svg/Email"
import Github from "../svg/Github"
import LinkedIn from "../svg/LinkedIn"

import {UIContext} from "../context/UIContext"

import Resume from "../../public/pdfs/Software QA Analyst - Rodrigo Bondoc Resume.pdf"

function TimelineBullet({
    type,
    date,
    lightText,
    boldText,
    boldHref,
}) {

    // Types: Personal, Work, Education
    let colorClass
    switch(type) {
        case "Work":
            colorClass = "TimelineBullet--work"
            break;
        case "Education":
            colorClass = "TimelineBullet--education"
            break;
        case "Personal":
            colorClass = "TimelineBullet--personal"
    }

    return(
        <li className={`TimelineBullet ${colorClass}`}>
            <div className="TimelineBullet-inner">
                <div className="TimelineBullet-bullet"></div>
                <div className="TimelineBullet-date">
                    {date}
                </div>
                <div className="TimelineBullet-text">
                    {lightText}{" "}
                    <span className="TimelineBullet-text-bold">
                        {boldHref
                        ? <InlineLink 
                            href={boldHref}
                            children={boldText}
                            underline={false}
                        />
                        : boldText}
                    </span>
                </div>
            </div>
        </li>
    )
}

function Timeline() {
    
    return(
        <ul className="Timeline">

            <TimelineBullet 
                type="Work"
                date="Jan 2021"
                lightText="Started as a Software QA Analyst at"
                boldText="snapIoT (acquired by Covance Inc.)"
                boldHref="https://snapiot.com/"
            />

            <TimelineBullet 
                type="Work"
                date="Dec 2019"
                lightText="Started as a Software QA Analyst at"
                boldText="Aya Healthcare Inc."
                boldHref="https://www.ayahealthcare.com/"
            />

            <TimelineBullet 
                type="Personal"
                date="Sep 2019"
                lightText="Went backpacking solo through"
                boldText="Europe"
            />

            <TimelineBullet 
                type="Work"
                date="Jul 2019"
                lightText="Started as a Design Engineer at"
                boldText="Raveon Technologies Corp."
                boldHref="https://www.raveon.com/"
            />

            <TimelineBullet 
                type="Education"
                date="May 2019"
                lightText="Graduated from"
                boldText="San Diego State University"
                boldHref="https://electrical.sdsu.edu/"
            />
        </ul>
    )
}

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
                github="https://github.com/"
                description={"My portfoilio website I designed and built. This current iteration was built using React."}
                tags={[
                    "React",
                    "SCSS",
                    "Webpack",
                ]} />

                <ProjectCard 
                name="Game Randomizer"
                status="Work in Progress"
                github="https://github.com/"
                description={"A web application for randomizing and analyzing player builds in Dead by Daylight, an asymmetrical action-horror game by Behavior Interactive. Choose a random build and analyze the effects of each player’s assets and resources."}
                tags={[
                    "React",
                    "Django",
                    "SCSS",
                    "Webpack",
                    "PostgreSQL",
                ]} />

                <ProjectCard 
                name="Parking Buddy"
                status="Complete"
                github="https://github.com/"
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