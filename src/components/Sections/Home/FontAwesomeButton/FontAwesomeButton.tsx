import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';
import classes from './FontAwesomeButton.module.css';

type Props = {
    icon: IconDefinition;
    onClick?: () => void;
    className?: string
    children?: React.ReactNode;
};

const Button: FunctionComponent<Props> = (props) => {
        return (
            <button className={classes.button} onClick={props.onClick}>
                <FontAwesomeIcon icon={props.icon} className={`${classes.icon} ${props.className}`} />
            </button>
        );
}

export default Button;