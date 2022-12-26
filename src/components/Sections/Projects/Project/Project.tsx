import React, { FunctionComponent, useEffect, useRef } from 'react';
import classes from './Project.module.css';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import useIsElementOnScreen from '../../../../hooks/useIsElementOnScreen';

interface Props {
    title: string;
    repositoryLink: string;
    children?: React.ReactNode;
}

const Project: FunctionComponent<Props> = (props) => {
    const projectContainerDiv = useRef<HTMLDivElement>(null);
    const headerDiv = useRef<HTMLDivElement>(null);
    const descriptionParagraph = useRef<HTMLParagraphElement>(null);
    const isProjectVisible = useIsElementOnScreen(projectContainerDiv, 1);
    
    useEffect(()=>{
        if(!projectContainerDiv.current || !headerDiv.current || !descriptionParagraph.current)
            return;
        
        if(isProjectVisible) {
            headerDiv.current.style.setProperty('transform', 'translateY(0)');
            headerDiv.current.style.setProperty('visibility', 'visible');
            descriptionParagraph.current.style.setProperty('transform', 'translateY(0)');
            descriptionParagraph.current.style.setProperty('visibility', 'visible');
        }

    }, [projectContainerDiv, isProjectVisible]);
    
    return (
        <div ref={projectContainerDiv} className={classes['project-container']}>
            <div ref={headerDiv} className={`${classes['project-header-container']} ${classes['shift-effect']}`}>
                <a href={props.repositoryLink} target='_blank' rel='noreferrer' >
                    <InsertLinkIcon className={classes['link-icon']} />
                </a>
                <span className={`${classes['project-title']} font-body`}>{props.title}</span>
            </div>

            <p ref={descriptionParagraph} className={`${classes['project-description']} font-body ${classes['shift-effect']}`}>
                {props.children}
            </p>
        </div>
    );
}

export default Project;