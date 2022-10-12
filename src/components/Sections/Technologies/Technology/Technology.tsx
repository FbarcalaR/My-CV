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
                <props.icon className={classes['icon']} />
            </Tooltip>
            <span className={classes['technology-name']}>{props.name}</span>
        </div>
    );
}

export default Technology;