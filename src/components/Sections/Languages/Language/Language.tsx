import React, { FunctionComponent, useEffect, useRef } from 'react';
import Stars from '../Stars/Stars';
import classes from './Language.module.css';

interface Props {
    name: string;
    rating: number;
}

const Language: FunctionComponent<Props> = (props) => {
    const fillingRef = useRef<HTMLSpanElement>(null);
    
    useEffect(()=>{
        fillingRef.current?.style.setProperty('width', '25%');
    });

    return (
        <div className={classes['language-container']}>
            <span className={classes['language-name']}>{props.name}</span>
            {/* <Stars starsNumber={5} fillPercentage={props.rating} /> */}
            <div className={classes['meter']}>
                <span ref={fillingRef} ></span>
            </div>
        </div>
    );
}

export default Language;