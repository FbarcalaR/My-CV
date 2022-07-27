import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';
import classes from './Project.module.css';

interface Props {
    title: string;
    repositoryLink: string;
    children?: React.ReactNode;
}

const Project: FunctionComponent<Props> = (props) => {
        return (
            <div className={classes['project-container']}>
                <div className={classes['project-header-container']}>
                    <a href={props.repositoryLink} target='_blank' >
                        <FontAwesomeIcon icon={faLink} className={classes['link-icon']} />
                    </a>
                    <span className={classes['project-title']}>{props.title}</span>
                </div>

                <p className={classes['project-description']}>
                    {props.children}
                </p>
            </div>
        );
}

export default Project;