import React from 'react';
import TitleSection from '../../UI/TitleSection/TitleSection';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import classes from './Languages.module.css';
import Language from './Language/Language';

const Languages = () => {
    return (
        <div className={classes['languages-section-container']}>
            <TitleSection icon={faLanguage} title={'Skills/'} subtitle={'Languages'} />
            <div className={classes['languages-list-container']}>
                <Language name={'Spanish'} ratingPercentage={100}></Language>
                <Language name={'English'} ratingPercentage={80}></Language>
            </div>
        </div>
    );
}

export default Languages;