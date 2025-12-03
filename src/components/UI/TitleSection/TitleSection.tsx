'use client'
import React, { FunctionComponent } from 'react';
import classes from './TitleSection.module.css';

type Props = {
    icon: FunctionComponent<any>;
    title: string;
    subtitle: string;
}

const TitleSection: FunctionComponent<Props> = (props) => {
        return (
            <span className={`${classes['title-font']} font-title`}>
                <props.icon className={classes['title-icon']} />
                {props.title}<b>{props.subtitle}</b>
            </span>
        );
}

export default TitleSection;