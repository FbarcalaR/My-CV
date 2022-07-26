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
                <Language name={'Spanish'} rating={0.83}></Language>
                <Language name={'English'} rating={0.83}></Language>
            </div>
        </div>
    );
}

export default Languages;