import React, { useEffect, useRef } from 'react';
import myPicture from '../../../assets/me.jpg';
import useIsElementOnScreen from '../../../hooks/useIsElementOnScreen';
import classes from './AboutMe.module.css';

const AboutMe = () => {
    const containerDiv = useRef<HTMLDivElement>(null);
    const imageElement = useRef<HTMLImageElement>(null);
    const bodyDiv = useRef<HTMLParagraphElement>(null);
    const isSectionVisible = useIsElementOnScreen(containerDiv, 0.9);
    
    useEffect(()=>{
        if(!containerDiv.current || !imageElement.current || !bodyDiv.current)
            return;
        
        if(isSectionVisible) {
            imageElement.current.style.setProperty('opacity', '1');
            imageElement.current.style.setProperty('visibility', 'visible');
            bodyDiv.current.style.setProperty('transform', 'translateX(0)');
            bodyDiv.current.style.setProperty('visibility', 'visible');
        }

    }, [containerDiv, isSectionVisible]);

    return (
        <div ref={containerDiv} className={classes['about-me-container']}>
            <img ref={imageElement} src={myPicture} alt='me' className={`${classes['shift-effect']} ${classes['from-left']}`} ></img>
            <p ref={bodyDiv} className={`font-body ${classes['shift-effect']} ${classes['from-right']}`}>
                I’m a Software Developer, working as <b>Fullstack</b> and interested in fields like <b>Web Software Design</b> or <b>Software Architecture</b>.
                <br/>
                <br/>
                In my free time, besides doing sports or playing videogames, I also like to learn and try new techs and concepts like <b>React</b>, <b>Clean Code</b> or <b>Unity</b>.
            </p>
        </div>
    );
}

export default AboutMe;