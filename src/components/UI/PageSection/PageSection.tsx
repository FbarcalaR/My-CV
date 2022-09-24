import React, { FunctionComponent, useContext, useEffect, useRef } from "react";
import useIsElementOnScreen from "../../../hooks/useIsElementOnScreen";
import { SectionsContext } from "../../../store/sections/sections-context";
import classes from "./PageSection.module.css";

interface Props {
    innerKey?: string;
    children?: React.ReactNode;
};

const PageSection: FunctionComponent<Props> = (props) => {
    const { sections, setActiveButton } = useContext(SectionsContext);
    const sectionDivRef = useRef<HTMLDivElement>(null);
    const isSectionVisible = useIsElementOnScreen(sectionDivRef);

    useEffect(() => {
        if (props.innerKey)
            sections.set(props.innerKey, sectionDivRef);

        return () => {
            if (props.innerKey)
                sections.delete(props.innerKey);
        }
    }, []);

    useEffect(()=>{
        if (props.innerKey && isSectionVisible)
            setActiveButton(props.innerKey)
    }, [isSectionVisible])

    return (
        <div ref={sectionDivRef} className={classes.section}>{props.children}</div>
    );
}

export default PageSection;