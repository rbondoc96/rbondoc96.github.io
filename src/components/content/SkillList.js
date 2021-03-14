import React, {useContext, useState} from "react"

import {UIContext} from "../../context/UIContext"

import Hardware from "../../svg/Hardware"
import Programming from "../../svg/Programming"
import Frameworks from "../../svg/Frameworks"
import Software from "../../svg/Software"

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

    const [selectedList, setSelectedList] = useState("hardware")

    return(
        <div className="SkillList">

            <div className="SkillList-icons">
                <div className={`SkillList-icon ${
                    selectedList == "hardware" && "SkillList-icon--selected"
                }`}
                onClick={() => {
                    setSelectedList("hardware")
                }}>
                    <Hardware 
                        theme={uiTheme}
                    />
                </div>

                <div className={`SkillList-icon ${
                    selectedList == "programming" && "SkillList-icon--selected"
                }`}
                onClick={() => {
                    setSelectedList("programming")
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
                }}>
                    <Frameworks 
                        theme={uiTheme}
                    />
                </div>

                <div className={`SkillList-icon ${
                    selectedList == "software" && "SkillList-icon--selected"
                }`}
                onClick={() => {
                    setSelectedList("software")
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
                            <li>JavaScript</li>
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
                        </ul>
                    </div>
                }

                {selectedList == "software" && 
                    <div className="SkillList-content-item SkillList-content-software">
                        <h3 className="SkillList-content-item-header">
                            Tools & Other Software
                        </h3>
                        <ul className="SkillList-content-item-list">
                            <li>VS Code</li>
                            <li>PostgreSQL</li>
                            <li>Altium CircuitMaker</li>
                        </ul>
                    </div>
                }
            </div>

        </div>
    )
}