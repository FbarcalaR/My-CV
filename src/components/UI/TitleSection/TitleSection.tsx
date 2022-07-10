import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';
import classes from './TitleSection.module.css';

type Props = {
    icon: IconDefinition;
    title: string;
    subtitle: string;
}

const TitleSection: FunctionComponent<Props> = (props) => {
        return (
            <span className={classes['title-font']}>
                <FontAwesomeIcon icon={props.icon} className={classes['title-icon']} />
                {props.title}<b>{props.subtitle}</b>
            </span>
        );
}

export default TitleSection;