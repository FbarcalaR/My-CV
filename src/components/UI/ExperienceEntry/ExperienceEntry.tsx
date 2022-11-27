import React, { FunctionComponent } from 'react';
import classes from './ExperienceEntry.module.css';

interface Props {
    place: string;
    title: string;
    date: string;
    children?: React.ReactNode;
}

const ExperienceEntry: FunctionComponent<Props> = (props) => {
    return (
        <>
            <div className={classes['experience-header']} >
                <span className={`${classes['experience-title']} font-body`}>{props.place}/<b>{props.title}</b></span>
                <span className={`${classes['experience-date']}  font-body`}>{props.date}</span>
            </div>
            <div className={`${classes['experience-body']} font-body`}>
                <p>
                    {props.children}
                </p>
            </div>
        </>
    );
}

export default ExperienceEntry;