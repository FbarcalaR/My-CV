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
                Fullstack Developer with nearly 5 years of experience. After graduating in 
                Software Engineering, I have been working with technologies like <b>React</b>, <b>Angular</b>, <b>.NET</b>, 
                <b> SQL</b> or <b>Azure</b>.  I’m also keen to create quality and readable code, always ready to learn new
                 concepts about Software Design and Architecture, and engaged in continuous improvement and professional development.
                  Willing to coach, pair with and learn from others.
                <br/>
                <br/>
                In my free time, apart of doing sports, read or cook, I also like to learn and try new techs and concepts like
                <b> Clean Code</b>, <b>DDD</b> or <b>Software Design</b>.
            </p>
        </div>
    );
}

export default AboutMe;