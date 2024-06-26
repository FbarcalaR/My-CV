import React from 'react';
import TitleSection from '../../UI/TitleSection/TitleSection';
import classes from './Technologies.module.css';
import Technology from './Technology/Technology';
import TerminalIcon from '@mui/icons-material/Terminal';
import {ReactComponent as AngularLogo} from '../../../assets/technologies/angular.svg';
import {ReactComponent as AzureLogo} from '../../../assets/technologies/azure.svg';
import {ReactComponent as DotNetCoreLogo} from '../../../assets/technologies/dotNetCore.svg';
import {ReactComponent as MicrosoftSqlServerLogo} from '../../../assets/technologies/microsoftSqlServer.svg';
import {ReactComponent as ReactLogo} from '../../../assets/technologies/react.svg';
import {ReactComponent as TypeScriptLogo} from '../../../assets/technologies/typescript.svg';

const Technologies = () => {
    const reactExperienceYears = (new Date()).getFullYear() - 2021;
    const netExperienceYears = (new Date()).getFullYear() - 2019;
    const azureExperienceYears = (new Date()).getFullYear() - 2021;
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
                <Technology name={'TypeScript'} icon={()=><TypeScriptLogo />}>
                    Worked with TypeScript for +1.5 years,<br />
                    under other technologies like React or Angular
                </Technology>
                <Technology name={'.NET'} icon={()=><DotNetCoreLogo />}>
                    Worked with .NET Core for +{netExperienceYears} years. <br/>
                    Used to develop REST APIs, along with Entity Framework.
                </Technology>
                <Technology name={'Azure'} icon={()=><AzureLogo />}>
                    Worked with azure for +{azureExperienceYears} years. <br />
                    Used it mainly for deployments
                </Technology>
                <Technology name={'SQL Server'} icon={()=><MicrosoftSqlServerLogo />}>
                    Worked with SQL Server for +{sqlServerExperienceYears} years. <br />
                    Used for querying data or creating tables and views, e.g.
                </Technology>
            </div>
        </div>
    );
}

export default Technologies;