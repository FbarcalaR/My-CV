import React from 'react';
import myPicture from '../../../assets/me.jpg';
import classes from './AboutMe.module.css';

const AboutMe = () => {
    return (
        <div className={classes['about-me-container']}>
            <img src={myPicture} alt='me' ></img>
            <p className='font-body'>
                I’m a Software Developer, working as <b>Fullstack</b> and interested in fields like <b>Software Design</b> or <b>Game Development</b>.
                <br/>
                <br/>
                In my free time, besides doing sports or playing videogames, I also like to learn and try new techs and concepts like <b>React</b>, <b>Software Architecture</b> or <b>Unity</b>.
            </p>
        </div>
    );
}

export default AboutMe;