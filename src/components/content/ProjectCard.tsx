import React, {FunctionComponent as FC} from 'react';
import Github from '@/assets/svg/socials/Github';

interface IProjectCard {
    name: string;
    status: string;
    github: string;
    description: string;
    tags: string[];
}

const ProjectCard: FC<IProjectCard> = ({
    name,
    status,
    github,
    description,
    tags,
}) => {
    const statusFormatted = status.charAt(0) + status.substring(1);

    return (
        <div className="ProjectCard">

            <h3 className="ProjectCard-header">
                {name}
            </h3>

            <a
                className="ProjectCard-github"
                href={github}
                target="_blank"
                rel="noreferrer"
            >
                <Github />
            </a>

            <p className="ProjectCard-status">
                <span className="ProjectCard-status-label">Status:</span>
                <span>{statusFormatted}</span>
            </p>

            <p className="ProjectCard-description">
                {description}
            </p>

            <ul className="ProjectCard-tags">
                {tags && tags.map((elem, idx) => (
                    <li
                        key={`pc-${3 + idx}`}
                        className="ProjectCard-tag"
                    >
                        {elem}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectCard;
