import React from 'react';
import TitleSection from '../../UI/TitleSection/TitleSection';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import classes from './Technologies.module.css';
import Technology from './Technology/Technology';

const Technologies = () => {
    return (
        <div className={classes['technologies-section-container']}>
            <TitleSection icon={faCode} title={'Skills/'} subtitle={'Technologies'} />
            <div className={classes['technologies-list-container']}>
                <Technology name={'React'} icon={faCode}>
                    <span>
                        bla bla bla
                        <br/>
                        bla bla
                    </span>
                </Technology>
                <Technology name={'Angular'} icon={faCode}>
                    <span>
                        bla bla bla
                        <br/>
                        bla bla
                    </span>
                </Technology>
                <Technology name={'.NET Core'} icon={faCode}>
                    <ul>
                        <li>bla bla bla</li>
                        <li>bla bla</li>
                        <li>bla bla bla</li>
                    </ul>
                </Technology>
                <Technology name={'C#'} icon={faCode}>
                    <span>
                        bla bla bla
                        <br/>
                        bla bla
                    </span>
                </Technology>
                <Technology name={'SQL Server'} icon={faCode}>
                    <span>
                        bla bla bla
                        <br/>
                        bla bla
                    </span>
                </Technology>
                <Technology name={'Unity'} icon={faCode}>
                    <span>
                        bla bla bla
                        <br/>
                        bla bla
                    </span>
                </Technology>
            </div>
        </div>
    );
}

export default Technologies;