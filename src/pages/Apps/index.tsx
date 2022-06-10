import React, {FunctionComponent as FC} from 'react';

import Header from '@/components/content/Header';
// import InlineLink from '@/components/content/InlineLink';
import ProjectCard from '@/components/content/ProjectCard';

import '@/styles/components/appcard.css';

interface IAppProjectCard {
    name: string;
    github?: string;
    status?: string;
    description?: string;
    reversed: boolean;
    tags: string[];
    imgSrc?: string;
}

const AppProjectCard: FC<IAppProjectCard> = ({
    name,
    github = '',
    status = '',
    description = '',
    reversed = false,
    tags,
    imgSrc,
}) => {
    const classes = ['appprojectcard'];

    if (reversed) {
        classes.push('appprojectcard--reversed');
    }

    const card = (
        <div className="appprojectcard-card">
            <ProjectCard
                name={name}
                status={status}
                github={github}
                description={description}
                tags={tags}
            />
        </div>
    );

    const img = (
        <div className="appprojectcard-img">
            <div className="appprojectcard-img-overlay">{}</div>
            <img src={imgSrc} alt="projectcard" />
        </div>
    );

    return (
        <div className={classes.join(' ')}>
            <div className="appprojectcard-container">
                {reversed
                ? (
                    <>
                        {img}
                        {card}
                    </>
                )
                : (
                    <>
                        {card}
                        {img}
                    </>
                )}
            </div>
        </div>
    );
};

const AppsHome: FC = () => (
        <div className="appshome">
            <div className="appshome-container">
                <div className="appshome-header">
                    <Header classes="js-apphome-header">
                        My Apps
                    </Header>
                </div>
                <div className="appshome-cards">
                    <div className="appshome-cards-container">
                        <AppProjectCard
                            name="Sudoku"
                            status="Complete"
                            tags={['CSS', 'React', 'TypeScript', 'Webpack']}
                            github="https://github.com/rbondoc96/sudoku"
                            reversed={false}
                        />
                    </div>
                </div>
            </div>
        </div>
);

export default AppsHome;
