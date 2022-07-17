import React, { FunctionComponent } from "react";
import classes from "./PageSection.module.css";

type Props = {
    children?: React.ReactNode;
};

const PageSection: FunctionComponent<Props> = (props) => {
    return (
        <div className={classes.section}>{props.children}</div>
    );
}

export default PageSection;