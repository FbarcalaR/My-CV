import React, { FunctionComponent, useState } from 'react';
import classes from './Tooltip.module.css';

interface Props {
    body: React.ReactNode;
    children?: React.ReactNode;
}

const Tooltip: FunctionComponent<Props> = (props) => {
    return (
        <div className={classes['tooltip']} >
            {props.children}
            <p className={classes['tooltip-text']} >{props.body}</p>
        </div>
    );
}

export default Tooltip;