import React from "react"

import Intro from "./sections/Intro"
import About from "./sections/About"
import Work from "./sections/Work"
import Contact from "./sections/Contact"

export default function Home() {

    return(
        <>
            <Intro/>
            <About/>
            <Work/>
            <Contact/>
        </>
    )
}