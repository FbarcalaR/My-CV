import React from "react";
import classes from "./PageSection.module.css";

type Props = {
    children?: React.ReactNode
};

const PageSection: React.FC<Props> = (props) => {
    return (
        <div className={classes.section}>{props.children}</div>
    );
}

export default PageSection;