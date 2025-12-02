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
                Software Engineer with 5+ years of experience web and mobile applications using .NET, React, Angular, SQL, 
                and modern system architectures and principles (microservices, DDD, CI/CD). Passionate about software 
                architecture, clean code, and having a look at new AI/ML technologies.
                <br/>
                <br/>
                Collaborative, fast learner and invested in continuous improvement, willing to coach and learn from others while having fun.
                I like to create quality and readable code, always ready to learn new concepts about Software Design and Architecture,
                and engaged in continuous improvement and professional development.
                <br/>
                <br/>
                In my free time, apart of doing sports, making (neapolitan) pizza or playing my guitar, I also like to learn about and try new techs and concepts like
                <b> DDD</b>, <b>Software Design</b> or <b>AI agents</b>.
            </p>
        </div>
    );
}

export default AboutMe;