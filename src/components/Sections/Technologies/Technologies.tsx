import React from 'react';
import TitleSection from '../../UI/TitleSection/TitleSection';
import classes from './Technologies.module.css';
import Technology from './Technology/Technology';
import TerminalIcon from '@mui/icons-material/Terminal';

const Technologies = () => {
    const reactExperienceYears = (new Date()).getFullYear() - 2021;
    const netExperienceYears = (new Date()).getFullYear() - 2019;
    const cSharpExperienceYears = (new Date()).getFullYear() - 2019;
    const sqlServerExperienceYears = (new Date()).getFullYear() - 2019;

    return (
        <div className={classes['technologies-section-container']}>
            <TitleSection icon={TerminalIcon} title={'Skills/'} subtitle={'Technologies'} />
            <div className={classes['technologies-list-container']}>
                <Technology name={'React'} icon={()=><span>TBD</span>}>
                    Worked with React for +{reactExperienceYears} years. <br />
                    Also completed a Udemy Course with +45 hours. <br />
                    And developed some personal projects with it. <br />
                </Technology>
                <Technology name={'Angular'} icon={()=><span>TBD</span>}>
                    Worked with Angular for +1.5 years. <br />
                    Used to develop an SPA.
                </Technology>
                <Technology name={'.NET Core'} icon={()=><span>TBD</span>}>
                    Worked with .NET Core for +{netExperienceYears} years. <br/>
                    Used for REST APIs, and with Entity Framework.
                </Technology>
                <Technology name={'C#'} icon={()=><span>TBD</span>}>
                    Worked with C# for +{cSharpExperienceYears} years. <br />
                    Also, I've use it in personal projects.
                </Technology>
                <Technology name={'SQL Server'} icon={()=><span>TBD</span>}>
                    Worked with SQL Server for +{sqlServerExperienceYears} years. <br />
                    Used for querying data or creating tables and views, e.g.
                </Technology>
                <Technology name={'Unity'} icon={()=><span>TBD</span>}>
                    Used as a hobby to create different games <br/>
                    and explore some of its concepts
                </Technology>
            </div>
        </div>
    );
}

export default Technologies;