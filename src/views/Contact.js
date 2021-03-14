import React from "react"

import Header from "../components/Header"
import Button from "../components/inputs/Button"
import InlineLink from "../components/content/InlineLink"

export default function Contact() {

    return(
        <div className="Contact" id="contact">
            <Header children="Contact Me" />

            <p className="Contact-content">
                My inbox is always open, whether you have a question or you just feel like having a chat. I’ll get back to you as soon as I can!
            </p>

            <Button children="Get In Touch" onClick={() => {
                window.open("mailto:rbondoc96@gmail.com")
            }}  />

            <footer className="Contact-footer">
                <div className="Contact-footer-note">
                    Made with &lt;/&gt; and 💙 by Rodrigo Bondoc
                </div>
                <div className="Contact-footer-attributions">
                    Icons made by <InlineLink 
                        href="https://www.flaticon.com/authors/ultimatearm"
                        children="ultimatearm"
                    />
                    , <InlineLink 
                        href="https://www.flaticon.com/authors/dinosoftlabs"
                        children="DinosoftLabs"
                    />
                    , <InlineLink 
                        href="https://www.flaticon.com/authors/dave-gandy"
                        children="Dave Gandy"
                    />
                    , <InlineLink 
                        href="https://www.freepik.com"
                        children="Freepik"
                    /> and <InlineLink 
                        href="https://www.flaticon.com/authors/prettycons"
                        children="prettycons"
                    /> from <InlineLink 
                        href="https://www.flaticon.com/"
                        children="www.flaticon.com"
                    />
                </div>
            </footer>
        </div>
    )
}