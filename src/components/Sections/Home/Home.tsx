import React, { useState } from 'react';
import classes from './Home.module.css'
import Divider from './Divider/Divider';
import Description from './Description/Description';
import Tooltip from '../../UI/Tooltip/Tooltip';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
        setTimeout(()=>setEmailTooltipBody(email), 2000);
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
                <div className={classes.name}>
                    <span>FERNANDO</span>
                    <span>BARCALA</span>
                    <span>RODRIGUEZ</span>
                </div>
                <Divider></Divider>
                <Description></Description>
            </div>
            <div className={classes['buttons-block']}>
                <Tooltip body={'Based on Málaga, Spain'}>
                    <LocationOnIcon className={classes['button']} onClick={handleMapClick} />
                </Tooltip>
                <Tooltip body={emailTooltipBody}>
                    <MailIcon className={classes['button']} onClick={handleEmailClick} />
                </Tooltip>
                <Tooltip body={'Personal GitHub'}>
                    <GitHubIcon className={classes['button']} onClick={handleGitHubClick} />
                </Tooltip>
                <Tooltip body={'LinkedIn page'}>
                    <LinkedInIcon className={classes['button']} onClick={handleLinkedInClick} />
                </Tooltip>
            </div>
        </div>
    );
}

export default Home;