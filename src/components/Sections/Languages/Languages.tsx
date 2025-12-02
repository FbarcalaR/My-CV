import React from 'react';
import TitleSection from '../../UI/TitleSection/TitleSection';
import classes from './Languages.module.css';
import Language from './Language/Language';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

const Languages = () => {
    return (
        <div className={classes['languages-section-container']}>
            <TitleSection icon={LanguageRoundedIcon} title={'Skills/'} subtitle={'Languages'} />
            <div className={classes['languages-list-container']}>
                <Language name={'Spanish'} ratingPercentage={100}></Language>
                <Language name={'English'} ratingPercentage={80}></Language>
                <Language name={'German'} ratingPercentage={43}></Language>
            </div>
        </div>
    );
}

export default Languages;