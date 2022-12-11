import React, { FunctionComponent } from 'react';
import classes from './Project.module.css';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

interface Props {
    title: string;
    repositoryLink: string;
    children?: React.ReactNode;
}

const Project: FunctionComponent<Props> = (props) => {
    return (
        <div className={classes['project-container']}>
            <div className={classes['project-header-container']}>
                <a href={props.repositoryLink} target='_blank' rel='noreferrer' >
                    <InsertLinkIcon className={classes['link-icon']} />
                </a>
                <span className={`${classes['project-title']} font-body`}>{props.title}</span>
            </div>

            <p className={`${classes['project-description']} font-body`}>
                {props.children}
            </p>
        </div>
    );
}

export default Project;