import React, { FunctionComponent, useContext, useEffect, useRef } from "react";
import useOnScreen from "../../../hooks/use-on-screen";
import { SectionsContext } from "../../../store/sections-context";
import classes from "./PageSection.module.css";

interface Props {
    innerKey?: string;
    children?: React.ReactNode;
};

const PageSection: FunctionComponent<Props> = (props) => {
    const { sections, setActiveButton } = useContext(SectionsContext);
    const sectionDivRef = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(sectionDivRef);

    useEffect(() => {
        if (props.innerKey)
            sections.set(props.innerKey, sectionDivRef);

        return () => {
            if (props.innerKey)
                sections.delete(props.innerKey);
        }
    }, []);

    useEffect(()=>{
        if (props.innerKey)
            setActiveButton(props.innerKey)
    }, [isVisible])

    return (
        <div ref={sectionDivRef} className={classes.section}>{props.children}</div>
    );
}

export default PageSection;