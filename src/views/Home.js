import React from "react"
import gsap from "gsap"

import LinkButton from "@/components/inputs/LinkButton"

export default function Home() {

    return(
        <div className="Home">
            <div className="Home-left">
                <h1 className="Home-header">
                    <span>Hi there!</span>
                    <span>I'm Rodrigo.</span>
                </h1>

                <p className="Home-text">I'm a software developer based in San Diego, CA, U.S.A. who specializes in building web applications.</p>

                <div className="Home-button">
                    <LinkButton children="Say Hello" href="mailto:rbondoc96@gmail.com" />
                </div>
            </div>
        </div>
    )
}