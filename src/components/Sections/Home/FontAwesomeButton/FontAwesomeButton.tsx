import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';
import classes from './FontAwesomeButton.module.css';

type Props = {
    icon: IconDefinition;
    children?: React.ReactNode;
};

const Button: FunctionComponent<Props> = (props) => {
        return (
            <button className={classes.button}>
                <FontAwesomeIcon icon={props.icon} className={classes.icon} />
            </button>
        );
}

export default Button;