import React from "react"

import Header from "../components/content/Header"
import InlineLink from "../components/content/InlineLink"
import ProjectCard from "../components/content/ProjectCard"

import SudokuImg from "../../public/imgs/sudoku.png"
import "../styles/components/appcard.css"

function AppProjectCard(props) {

    let classes = ["appprojectcard"]
    if(props.reversed) {
        classes.push("appprojectcard--reversed")
    }

    let card = <div className="appprojectcard-card">
        <ProjectCard 
                name={<>
                    <InlineLink href={props.link}>
                        {props.name}
                    </InlineLink>
                </>}
                status={props.status}
                github={props.github}
                description={props.description}
                tags={props.tags} 
            />
    </div>

    let img = <div className="appprojectcard-img">
        <div className="appprojectcard-img-overlay"></div>
        <img src={props.img} />
    </div>

    return(
        <div className={classes.join(" ")}>
            <div className="appprojectcard-container">
                {props.reversed
                ? <>
                    {img}
                    {card}
                </>
                : <>
                    {card}
                    {img}
                </>}
            </div>
        </div>
    )
}

export default function AppsHome() {

    return(
        <div className="appshome">
            <div className="appshome-container">
                <div className="appshome-header">
                    <Header classes="js-apphome-header" children="My Apps" />
                </div>
                <div className="appshome-cards">
                    <div className="appshome-cards-container">
                        <AppProjectCard 
                            name="Sudoku"
                            status="Complete"
                            link="https://rbondoc.com/sudoku"
                            description={
                                <span>A web app that creates a solvable 9x9 Sudoku grid with a given amount of clues. The app features a focusing mechanic that highlights areas affected by the cell being changed and a hint mechanic that reveals hints 1-by-1. <InlineLink href="https://rbondoc.com/sudoku" children="Play it here."/></span>
                            }
                            tags={["CSS", "React", "TypeScript", "Webpack"]}
                            github="https://github.com/rbondoc96/sudoku"
                            img={SudokuImg}
                        />                     
                    </div>
                </div>
            </div>
        </div>
    )
}