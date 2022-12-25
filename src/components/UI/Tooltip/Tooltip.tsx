import Tippy from '@tippyjs/react';
import {roundArrow} from 'tippy.js';
import React, { FunctionComponent, ReactElement } from 'react';
import classes from './Tooltip.module.css';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/dist/svg-arrow.css';

interface Props {
    body: React.ReactNode;
    children?: ReactElement;
}

const Tooltip: FunctionComponent<Props> = (props) => {
    return (

        <Tippy
            content={props.body}
            className={classes['tooltip']}
            arrow={roundArrow}
            placement='bottom'
            animation='shift-away'
        >
            {props.children}
        </Tippy>
    );
}

export default Tooltip;