'use client'
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
        const urlToMapsLocation = 'https://www.google.com/maps/place/M%C3%BAnich/@48.155022,11.3770276,37234m/data=!3m2!1e3!4b1!4m6!3m5!1s0x479e75f9a38c5fd9:0x10cb84a7db1987d!8m2!3d48.1351253!4d11.5819805!16s%2Fm%2F02h6_6p?authuser=0&entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D';
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
        <div className={classes['presentation-block-wrapper']}>
            <div className={classes['presentation-block']}>
                <div className={classes.name}>
                    <span className='font-title'>FERNANDO</span>
                    <span className='font-title'>BARCALA</span>
                    <span className='font-title'>RODRIGUEZ</span>
                </div>
                <Divider></Divider>
                <Description></Description>
            </div>
            <div className={classes['buttons-block']}>
                <Tooltip body={'In Munich, Germany'}>
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