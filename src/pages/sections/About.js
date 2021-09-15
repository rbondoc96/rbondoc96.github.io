import React, {useContext} from "react"

import Header from "../../components/content/Header"
import InlineLink from "../../components/content/InlineLink"
import SkillList from "../../components/content/SkillList"

import {UIContext} from "../../context/UIContext"

import GPOY from "../../../public/imgs/me_london.png"


export default function About() {

    const {mobile} = useContext(UIContext)
    const [isMobile, setIsMobile] = mobile

    let className = isMobile? "About--mobile" : "About"

    return(
        <div className={className} id="about">
            <Header classes="js-About-Header" children="About Me" />

            <div className="About-left">
                <p>
                    <span>Welcome! My name's Rodrigo and my pronouns 
                    are <span className="fw-bold">he</span>
                    , <span className="fw-bold">him</span>
                    , and <span className="fw-bold">his</span>
                    . I'm a self-taught web developer based in sunny San Diego, CA, U.S.A.
                    </span>
                    <br/><br/>

                    I started programming while I was pursuing my degree in Electrical Engineering
                    at <InlineLink 
                    children="San Diego State University"
                    href="https://electrical.sdsu.edu"
                    />. I tinkered around with HTML & CSS, but focused on C, Java, and Python. It wasn't until I graudated that I started
                    to dive deeper into web development and began teaching myself.
                    <br/><br/>

                    Since then, I've gotten the opportunity to work in a variety of positions where I've had the chance to
                    work with <InlineLink href="https://www.raveon.com/" children="radio devices" />
                    , <InlineLink href="https://www.ayahealthcare.com/" children="travel nursing" />
                    , and now with web and mobile <InlineLink href="https://drugdevelopment.labcorp.com/" children="applications used in clinical trials" />.

                    <br/><br/>

                    My favorite hobby is playing video games. I grew up with Playstation consoles, but now I also 
                    play on my PC. But when I'm not at my desk, I like to visit the beach,
                    play <InlineLink href="https://www.varsitygayleague.com/" children="kickball"/> on weekends,
                    and spend time with loved ones.
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