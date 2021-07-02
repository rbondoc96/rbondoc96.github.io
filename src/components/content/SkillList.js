import React, {useContext, useState} from "react"
import gsap from "gsap"

import {UIContext} from "../../context/UIContext"

import Hardware from "../../svg/Hardware"
import Programming from "../../svg/Programming"
import Frameworks from "../../svg/Frameworks"
import Software from "../../svg/Software"

function animateList() {
    const animProps = {
        duration: 0.3,
        opacity: 0,
        y: "10%"
    }

    gsap.from(".SkillList-content", animProps)
}

export default function SkillList({

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

    const [selectedList, setSelectedList] = useState("programming")

    return(
        <div className="SkillList">

            <div className="SkillList-icons">
                <div className={`SkillList-icon ${
                    selectedList == "programming" && "SkillList-icon--selected"
                }`}
                onClick={() => {
                    setSelectedList("programming")
                    animateList()
                }}>
                    <Programming 
                        theme={uiTheme}
                    />
                </div>

                <div className={`SkillList-icon ${
                    selectedList == "frameworks" && "SkillList-icon--selected"
                }`} 
                onClick={() => {
                    setSelectedList("frameworks")
                    animateList()
                }}>
                    <Frameworks 
                        theme={uiTheme}
                    />
                </div>

                <div className={`SkillList-icon ${
                    selectedList == "hardware" && "SkillList-icon--selected"
                }`}
                onClick={() => {
                    setSelectedList("hardware")
                    animateList()
                }}>
                    <Hardware 
                        theme={uiTheme}
                    />
                </div>

                <div className={`SkillList-icon ${
                    selectedList == "software" && "SkillList-icon--selected"
                }`}
                onClick={() => {
                    setSelectedList("software")
                    animateList()
                }}>
                    <Software 
                        theme={uiTheme}
                    />
                </div>
            </div>
            
            <div className="SkillList-content">

                {selectedList == "hardware" && 
                    <div className="SkillList-content-item SkillList-content-software">
                        <h3 className="SkillList-content-item-header">
                            Hardware
                        </h3>
                        <ul className="SkillList-content-item-list">
                            <li>Microcontrollers</li>
                            <li>Serial Communications (I<sup>2</sup>C, CAN, UART)</li>
                            <li>Lab Equipment (O-scopes, signal generators, DMMs)</li>
                        </ul>
                    </div>
                }

                {selectedList == "programming" && 
                    <div className="SkillList-content-item SkillList-content-software">
                        <h3 className="SkillList-content-item-header">
                            Programming Languages
                        </h3>
                        <ul className="SkillList-content-item-list">
                            <li>C/C++</li>
                            <li>Python</li>
                            <li>ES6 JavaScript</li>
                            <li>Node.js</li>
                            <li>HTML & (S)CSS</li>
                        </ul>
                    </div>
                }

                {selectedList == "frameworks" && 
                    <div className="SkillList-content-item SkillList-content-software">
                        <h3 className="SkillList-content-item-header">
                            Libraries & Frameworks
                        </h3>
                        <ul className="SkillList-content-item-list">
                            <li>React</li>
                            <li>Django</li>
                            <li>Cypress</li>
                            <li>Express.js</li>
                        </ul>
                    </div>
                }

                {selectedList == "software" && 
                    <div className="SkillList-content-item SkillList-content-software">
                        <h3 className="SkillList-content-item-header">
                            Tools & Other Software
                        </h3>
                        <ul className="SkillList-content-item-list">
                            <li>Webpack</li>
                            <li>VS Code</li>
                            <li>PostgreSQL</li>
                            <li>Chrome DevTools</li>
                            <li>Altium CircuitMaker</li>
                        </ul>
                    </div>
                }
            </div>

        </div>
    )
}