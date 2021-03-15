import React from "react"

import InlineLink from "./InlineLink"

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

export default function Timeline() {
    
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
                lightText="Started as a Compliance Specialist at"
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