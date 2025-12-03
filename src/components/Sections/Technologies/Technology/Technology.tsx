'use client'
import React, { FunctionComponent } from 'react';
import Tooltip from '../../../UI/Tooltip/Tooltip';
import classes from './Technology.module.css';

interface Props {
    name: string;
    icon: FunctionComponent<any>;
    children?: React.ReactNode;
}

const Technology: FunctionComponent<Props> = (props) => {
    return (
        <div className={classes['technology-container']}>
            <Tooltip body={props.children}>
                <div className={classes['icon']}>
                    <props.icon />
                </div>
            </Tooltip>
            <span className={`${classes['technology-name']} font-body`}>{props.name}</span>
        </div>
    );
}

export default Technology;