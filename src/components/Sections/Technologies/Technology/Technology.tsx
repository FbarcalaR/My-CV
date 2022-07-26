import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';
import Tooltip from '../../../UI/Tooltip/Tooltip';
import classes from './Technology.module.css';

interface Props {
    name: string;
    icon: IconDefinition;
    children?: React.ReactNode;
}

const Technology: FunctionComponent<Props> = (props) => {
    return (
        <div className={classes['technology-container']}>
            <Tooltip body={props.children}>
                <FontAwesomeIcon icon={props.icon} className={classes['icon']} />
            </Tooltip>
            <span className={classes['technology-name']}>{props.name}</span>
        </div>
    );
}

export default Technology;