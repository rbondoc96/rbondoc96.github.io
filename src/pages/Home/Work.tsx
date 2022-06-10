import React, {FunctionComponent as FC, useContext} from 'react';
import Resume from '@public/pdfs/Rodrigo Bondoc Resume.pdf';
import Header from '@/components/content/Header';
import LinkButton from '@/components/inputs/LinkButton';
import ProjectCard from '@/components/content/ProjectCard';

import Timeline from '@/components/content/Timeline';

import Email from '@/assets/svg/socials/Email';
import Github from '@/assets/svg/socials/Github';
import LinkedIn from '@/assets/svg/socials/LinkedIn';

import UIContext from '@/core/UIContext';

const Work: FC = () => {
    const {mobile} = useContext(UIContext);
    const isMobile = mobile[0];

    const className = isMobile ? 'Work--mobile' : 'Work';

    return (
        <div className={className} id="work">
            <Header classes="js-Work-Header">
                Things I&aposve Done
            </Header>

            <div className="Work-timeline">
                <Timeline />

                <div className="Work-links">
                    <div className="Work-links-button">
                        <LinkButton href={Resume}>
                            Resume
                        </LinkButton>
                    </div>
                    <div className="Work-links-icons">
                        <a
                            href="https://github.com/rbondoc96"
                            className="Work-links-icon"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/rbondoc96/"
                            className="Work-links-icon"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkedIn />
                        </a>

                        <a
                            href="mailto:rbondoc96@gmail.com"
                            className="Work-links-icon"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Email />
                        </a>
                    </div>
                </div>
            </div>

            <div className="Work-ProjectCards">
                <ProjectCard
                    name="Sudoku"
                    status="Complete"
                    github="https://rbondoc.com/sudoku"
                    description="A web app that creates a solvable 9x9 Sudoku grid with a given amount of clues. The app features a focusing mechanic that highlights areas affected by the cell being changed and a hint mechanic that reveals hints 1-by-1."
                    tags={[
                        'CSS',
                        'React',
                        'TypeScript',
                        'Webpack',
                    ]}
                />

                <ProjectCard
                    name="Personal Website"
                    status="Updating"
                    github="https://github.com/rbondoc96/rbondoc96.github.io"
                    description="My portfoilio website I designed and built. This current iteration was built using React."
                    tags={[
                        'React',
                        'SCSS',
                        'Webpack',
                    ]}
                />

                <ProjectCard
                    name="Game Randomizer"
                    status="Work in Progress"
                    github="https://github.com/rbondoc96/DBD-Game-Randomizer"
                    description="A web application for randomizing and analyzing player builds in Dead by Daylight, an asymmetrical action-horror game by Behavior Interactive. Choose a random build and analyze the effects of each player’s assets and resources."
                    tags={[
                        'React',
                        'Django',
                        'SCSS',
                        'Webpack',
                        'WebSockets',
                        'PostgreSQL',
                    ]}
                />
            </div>
        </div>
    );
};

export default Work;
