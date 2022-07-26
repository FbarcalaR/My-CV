import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent, RefObject, useEffect, useId, useRef, useState } from 'react';
import classes from './Stars.module.css';

interface Props {
    starsNumber: number;
    fillPercentage: number;
}

const Stars: FunctionComponent<Props> = (props) => {
    const starsContainer = useRef<HTMLDivElement>(null);
    const [starsToShowWidth, setStarsToShowWidth] = useState(0);
    const [hiddingBarWidth, setHiddingBarWidth] = useState(0);

    useEffect(() => {
        const starsContainerWidth = starsContainer.current?.clientWidth ?? 0;
        setStarsToShowWidth(starsContainerWidth * props.fillPercentage);
        setHiddingBarWidth(starsContainerWidth - starsToShowWidth);
    }, []);

    const stars = [];
    for (let index = 0; index < props.starsNumber; index++) {
        stars.push(<FontAwesomeIcon key={index} icon={faStar}  />);
    }
    const regularStars = [];
    for (let index = 0; index < props.starsNumber; index++) {
        regularStars.push(<FontAwesomeIcon key={index} icon={faStarRegular}  className={classes['void-stars']} />);
    }
        return (
            <div>
                <div className={classes['void-stars-container']} >{regularStars}</div>
                <div className={classes['filling']} style={{width:hiddingBarWidth, marginLeft:starsToShowWidth}}>'</div>
                <div ref={starsContainer} className={classes['filled-stars-container']}>{stars}</div>
            </div>
        );
}

export default Stars;