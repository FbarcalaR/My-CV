import React, { FunctionComponent, useEffect, useRef } from 'react';
import useIsElementOnScreen from '../../../../hooks/useIsElementOnScreen';
import classes from './Language.module.css';

interface Props {
    name: string;
    ratingPercentage: number;
}

const Language: FunctionComponent<Props> = (props) => {
    const fillingRef = useRef<HTMLSpanElement>(null);
    const isBarVisible = useIsElementOnScreen(fillingRef);
    
    useEffect(()=>{
        if(!fillingRef.current)
            return;

        if(isBarVisible)
            fillingRef.current.style.setProperty('width', `${props.ratingPercentage}%`);
        else
            fillingRef.current.style.setProperty('width', `0%`);
    }, [fillingRef, props.ratingPercentage, isBarVisible]);

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