'use client'
import React, { FunctionComponent, useContext, useEffect, useRef } from "react";
import useIsElementOnScreen from "../../../hooks/useIsElementOnScreen";
import { SectionsContext } from "../../../store/sections/sections-context";
import classes from "./PageSection.module.css";

interface Props {
    sectionKey?: string;
    children?: React.ReactNode;
};

const PageSection: FunctionComponent<Props> = (props) => {
    const { sections, setActiveButton } = useContext(SectionsContext);
    const sectionDivRef = useRef<HTMLDivElement>(null);
    const isSectionVisible = useIsElementOnScreen(sectionDivRef);

    useEffect(() => {
        if (props.sectionKey)
            sections.set(props.sectionKey, sectionDivRef);

        return () => {
            if (props.sectionKey)
                sections.delete(props.sectionKey);
        }
    }, [props.sectionKey , sections]);

    useEffect(()=>{
        if (props.sectionKey && isSectionVisible)
            setActiveButton(props.sectionKey)
    }, [isSectionVisible, props.sectionKey, setActiveButton])

    return (
        <div ref={sectionDivRef} className={classes.section}>{props.children}</div>
    );
}

export default PageSection;