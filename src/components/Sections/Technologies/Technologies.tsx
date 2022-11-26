import React from 'react';
import TitleSection from '../../UI/TitleSection/TitleSection';
import classes from './Technologies.module.css';
import Technology from './Technology/Technology';
import TerminalIcon from '@mui/icons-material/Terminal';
import {ReactComponent as AngularLogo} from '../../../assets/technologies/angular.svg';
import {ReactComponent as CSharpLogo} from '../../../assets/technologies/cSharp.svg';
import {ReactComponent as DotNetCoreLogo} from '../../../assets/technologies/dotNetCore.svg';
import {ReactComponent as MicrosoftSqlServerLogo} from '../../../assets/technologies/microsoftSqlServer.svg';
import {ReactComponent as ReactLogo} from '../../../assets/technologies/react.svg';
import {ReactComponent as UnityLogo} from '../../../assets/technologies/unity.svg';

const Technologies = () => {
    const reactExperienceYears = (new Date()).getFullYear() - 2021;
    const netExperienceYears = (new Date()).getFullYear() - 2019;
    const cSharpExperienceYears = (new Date()).getFullYear() - 2019;
    const sqlServerExperienceYears = (new Date()).getFullYear() - 2019;

    return (
        <div className={classes['technologies-section-container']}>
            <TitleSection icon={TerminalIcon} title={'Skills/'} subtitle={'Technologies'} />
            <div className={classes['technologies-list-container']}>
                <Technology name={'React'} icon={()=><ReactLogo />}>
                    Worked with React for +{reactExperienceYears} years. <br />
                    Also completed a Udemy Course with +45 hours. <br />
                    And developed some personal projects with it. <br />
                </Technology>
                <Technology name={'Angular'} icon={()=><AngularLogo />}>
                    Worked with Angular for +1.5 years. <br />
                    Used to develop an SPA.
                </Technology>
                <Technology name={'.NET Core'} icon={()=><DotNetCoreLogo />}>
                    Worked with .NET Core for +{netExperienceYears} years. <br/>
                    Used for REST APIs, and with Entity Framework.
                </Technology>
                <Technology name={'C#'} icon={()=><CSharpLogo />}>
                    Worked with C# for +{cSharpExperienceYears} years. <br />
                    Also, I've use it in personal projects.
                </Technology>
                <Technology name={'SQL Server'} icon={()=><MicrosoftSqlServerLogo />}>
                    Worked with SQL Server for +{sqlServerExperienceYears} years. <br />
                    Used for querying data or creating tables and views, e.g.
                </Technology>
                <Technology name={'Unity'} icon={()=><UnityLogo />}>
                    Used as a hobby to create different games <br/>
                    and explore some of its concepts
                </Technology>
            </div>
        </div>
    );
}

export default Technologies;