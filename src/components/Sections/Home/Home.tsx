import React from 'react';
import Name from './Name/Name';
import classes from './Home.module.css'
import Divider from './Divider/Divider';
import Description from './Description/Description';
import FontAwesomeButton from './FontAwesomeButton/FontAwesomeButton';
import { faEnvelope, faLocationDot, faPlugCircleBolt } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div>
            <div className={classes['presentation-block']}>
                <Name>FERNANDO BARCALA RODRIGUEZ</Name>
                <Divider></Divider>
                <Description></Description>
            </div>
            <div className={classes['buttons-block']}>
                <FontAwesomeButton icon={faLocationDot}></FontAwesomeButton>
                <FontAwesomeButton icon={faEnvelope}></FontAwesomeButton>
                <FontAwesomeButton icon={faPlugCircleBolt}></FontAwesomeButton>
                <FontAwesomeButton icon={faPlugCircleBolt}></FontAwesomeButton>
            </div>
        </div>
    );
}

export default Home;