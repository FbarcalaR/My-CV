import React, { FunctionComponent } from 'react';
import classes from "./Name.module.css";

type Props = {
    children?: React.ReactNode;
};

const Name: FunctionComponent<Props> = (props) => {
    return (
        <span className={classes.name}>{props.children}</span>
    );
}

export default Name;