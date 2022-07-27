import React, { FunctionComponent, useEffect, useRef } from 'react';
import classes from './Language.module.css';

interface Props {
    name: string;
    ratingPercentage: number;
}

const Language: FunctionComponent<Props> = (props) => {
    const fillingRef = useRef<HTMLSpanElement>(null);
    
    useEffect(()=>{
        fillingRef.current?.style.setProperty('width', `${props.ratingPercentage}%`);
    });

    return (
        <div className={classes['language-container']}>
            <span className={classes['language-name']}>{props.name}</span>
            <div className={classes['level-bar']}>
                <span ref={fillingRef} ></span>
            </div>
        </div>
    );
}

export default Language;