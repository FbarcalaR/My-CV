'use client'
import React, { FunctionComponent, useEffect, useRef } from 'react';
import useIsElementOnScreen from '../../../hooks/useIsElementOnScreen';
import classes from './ExperienceEntry.module.css';

interface Props {
    place: string;
    title: string;
    date: string;
    children?: React.ReactNode;
}

const ExperienceEntry: FunctionComponent<Props> = (props) => {
    const experienceDiv = useRef<HTMLDivElement>(null);
    const headerDiv = useRef<HTMLDivElement>(null);
    const bodyDiv = useRef<HTMLDivElement>(null);
    const isEntryVisible = useIsElementOnScreen(experienceDiv, 0.9);
    
    useEffect(()=>{
        if(!experienceDiv.current || !headerDiv.current || !bodyDiv.current)
            return;
        
        if(isEntryVisible) {
            headerDiv.current.style.setProperty('transform', 'translateY(0)');
            headerDiv.current.style.setProperty('visibility', 'visible');
            bodyDiv.current.style.setProperty('transform', 'translateY(0)');
            bodyDiv.current.style.setProperty('visibility', 'visible');
        }

    }, [experienceDiv, isEntryVisible]);
    
    return (
        <div ref={experienceDiv}>
            <div ref={headerDiv} className={`${classes['experience-header']} ${classes['shift-effect']}`} >
                <span className={`${classes['experience-title']} font-body`}>{props.place}/<b>{props.title}</b></span>
                <span className={`${classes['experience-date']} font-body`}>{props.date}</span>
            </div>
            <div ref={bodyDiv} className={`${classes['experience-body']} font-body ${classes['shift-effect']}`} >
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default ExperienceEntry;