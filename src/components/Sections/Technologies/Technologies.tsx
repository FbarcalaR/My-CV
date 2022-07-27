import React from 'react';
import TitleSection from '../../UI/TitleSection/TitleSection';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import classes from './Technologies.module.css';
import Technology from './Technology/Technology';

const Technologies = () => {
    const reactExperienceYears = (new Date()).getFullYear() - 2021;
    const netExperienceYears = (new Date()).getFullYear() - 2019;
    const cSharpExperienceYears = (new Date()).getFullYear() - 2019;
    const sqlServerExperienceYears = (new Date()).getFullYear() - 2019;

    return (
        <div className={classes['technologies-section-container']}>
            <TitleSection icon={faCode} title={'Skills/'} subtitle={'Technologies'} />
            <div className={classes['technologies-list-container']}>
                <Technology name={'React'} icon={faCode}>
                    Worked with React for +{reactExperienceYears} years. <br />
                    Also completed a Udemy Course with +45 hours. <br />
                    And developed some personal projects with it. <br />
                </Technology>
                <Technology name={'Angular'} icon={faCode}>
                    Worked with Angular for +1.5 years. <br />
                    Used to develop an SPA.
                </Technology>
                <Technology name={'.NET Core'} icon={faCode}>
                    Worked with .NET Core for +{netExperienceYears} years. <br/>
                    Used for REST APIs, and with Entity Framework.
                </Technology>
                <Technology name={'C#'} icon={faCode}>
                    Worked with C# for +{cSharpExperienceYears} years. <br />
                    Also, I've use it in personal projects.
                </Technology>
                <Technology name={'SQL Server'} icon={faCode}>
                    Worked with SQL Server for +{sqlServerExperienceYears} years. <br />
                    Used for querying data or creating tables and views, e.g.
                </Technology>
                <Technology name={'Unity'} icon={faCode}>
                    Used as a hobby to create different games <br/>
                    and explore some of its concepts
                </Technology>
            </div>
        </div>
    );
}

export default Technologies;