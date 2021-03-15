import React from "react"

import Button from "../components/inputs/Button"

export default function Home() {

    return(
        <div className="Home">
            <div className="Home-left">
                <h1 className="Home-header">
                    <span>Hi there!</span>
                    <span>I'm Rodrigo.</span>
                </h1>

                <p className="Home-text">I'm an electrical engineer and software developer based in San Diego, CA, U.S.A.</p>

                <Button children="Say Hello" onClick={() => {
                    window.open("mailto:rbondoc96@gmail.com")
                }} />
            </div>
            <div className="Home-right">

            </div>
        </div>
    )
}