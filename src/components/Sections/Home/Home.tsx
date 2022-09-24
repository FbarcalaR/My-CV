import React, { useState } from 'react';
import Name from './Name/Name';
import classes from './Home.module.css'
import Divider from './Divider/Divider';
import Description from './Description/Description';
import FontAwesomeButton from './FontAwesomeButton/FontAwesomeButton';
import { faEnvelope, faLocationDot, faPlugCircleBolt } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '../../UI/Tooltip/Tooltip';

const email = 'fernandobarcalarodriguez@gmail.com';

const Home = () => {
    const [emailTooltipBody, setEmailTooltipBody] = useState(email);

    const handleMapClick = () => {
        const urlToMapsLocation = 'https://www.google.es/maps/place/M%C3%A1laga/@36.765025,-4.5642765,11z/data=!3m1!4b1!4m5!3m4!1s0xd72f6698d30d151:0x403d278a576e680!8m2!3d36.7211784!4d-4.4217199';
        window.open(urlToMapsLocation,'_blank');
    }

    const handleEmailClick = () => {
        navigator.clipboard.writeText(email);
        setEmailTooltipBody('Email copied to clipboard');
        setTimeout(()=>setEmailTooltipBody(email), 1500);
    }

    const handleGitHubClick = () => {
        const urlToGitHub = 'https://github.com/FbarcalaR';
        window.open(urlToGitHub,'_blank');
    }

    const handleLinkedInClick = () => {
        const urlToLinkedInHub = 'https://es.linkedin.com/in/fernando-barcala-rodr%C3%ADguez-4b85a1100';
        window.open(urlToLinkedInHub,'_blank');
    }

    return (
        <div>
            <div className={classes['presentation-block']}>
                <Name>FERNANDO BARCALA RODRIGUEZ</Name>
                <Divider></Divider>
                <Description></Description>
            </div>
            <div className={classes['buttons-block']}>
                <Tooltip body={'Based on Málaga, Spain'}>
                    <FontAwesomeButton className={classes['button']} icon={faLocationDot} onClick={handleMapClick}></FontAwesomeButton>
                </Tooltip>
                <Tooltip body={emailTooltipBody}>
                    <FontAwesomeButton className={classes['button']} icon={faEnvelope} onClick={handleEmailClick}></FontAwesomeButton>
                </Tooltip>
                <Tooltip body={'Personal GitHub'}>
                    <FontAwesomeButton className={classes['button']} icon={faPlugCircleBolt} onClick={handleGitHubClick}></FontAwesomeButton>
                </Tooltip>
                <Tooltip body={'LinkedIn page'}>
                    <FontAwesomeButton className={classes['button']} icon={faPlugCircleBolt} onClick={handleLinkedInClick}></FontAwesomeButton>
                </Tooltip>
            </div>
        </div>
    );
}

export default Home;