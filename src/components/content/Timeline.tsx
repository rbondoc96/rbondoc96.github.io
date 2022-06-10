import React, {FunctionComponent as FC} from 'react';

import InlineLink from './InlineLink';

interface ITimelineBullet {
    type: string;
    date: string;
    lightText: string;
    boldText: string;
    boldHref?: string;
}

const TimelineBullet: FC<ITimelineBullet> = ({type, date, lightText, boldText, boldHref}) => {
    let colorClass: string;

    switch (type) {
        case 'Work':
            colorClass = 'TimelineBullet--work';
            break;
        case 'Education':
            colorClass = 'TimelineBullet--education';
            break;
        case 'Personal':
        default:
            colorClass = 'TimelineBullet--personal';
            break;
    }

    return (
        <li className={`TimelineBullet ${colorClass}`}>
            <div className="TimelineBullet-inner">
                <div className="TimelineBullet-bullet">{}</div>
                <div className="TimelineBullet-date">
                    {date}
                </div>
                <div className="TimelineBullet-text">
                    <span>
                        {`${lightText} `}
                    </span>
                    <span className="TimelineBullet-text-bold">
                        {boldHref
                        ? <InlineLink href={boldHref} underline={false}>{boldText}</InlineLink>
                        : boldText}
                    </span>
                </div>
            </div>
        </li>
    );
};

const Timeline: FC = () => (
    <ul className="Timeline">
        <TimelineBullet
            type="Work"
            date="Jan 2021"
            lightText="Started as a Software QA Analyst at"
            boldText="LabCorp Drug Development"
            boldHref="https://drugdevelopment.labcorp.com/"
        />

        <TimelineBullet
            type="Work"
            date="Dec 2019"
            lightText="Started as a Compliance Specialist at"
            boldText="Aya Healthcare"
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
            boldText="Raveon Technologies"
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
);

export default Timeline;
