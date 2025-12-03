'use client'
import React from 'react';
import Image from 'next/image';
import TitleSection from '../../UI/TitleSection/TitleSection';
import classes from './Technologies.module.css';
import Technology from './Technology/Technology';
import TerminalIcon from '@mui/icons-material/Terminal';
import AngularLogo from '@/assets/technologies/angular.svg';
import AzureLogo from '@/assets/technologies/azure.svg';
import DotNetCoreLogo from '@/assets/technologies/dotNetCore.svg';
import MicrosoftSqlServerLogo from '@/assets/technologies/microsoftSqlServer.svg';
import ReactLogo from '@/assets/technologies/react.svg';
import TypeScriptLogo from '@/assets/technologies/typescript.svg';

const Technologies = () => {
    const reactExperienceYears = (new Date()).getFullYear() - 2021;
    const netExperienceYears = (new Date()).getFullYear() - 2019;
    const azureExperienceYears = (new Date()).getFullYear() - 2021;
    const sqlServerExperienceYears = (new Date()).getFullYear() - 2019;

    return (
        <div className={classes['technologies-section-container']}>
            <TitleSection icon={TerminalIcon} title={'Skills/'} subtitle={'Technologies'} />
            <div className={classes['technologies-list-container']}>
                <Technology name={'React'} icon={() => <Image src={ReactLogo} alt='ReactLogo' />}>
                    Worked with React for +{reactExperienceYears} years. <br />
                    Also completed a Udemy Course with +45 hours. <br />
                    And developed some personal projects with it. <br />
                </Technology>
                <Technology name={'Angular'} icon={() => <Image src={AngularLogo} alt='AngularLogo' />}>
                    Worked with Angular for 2 years. <br />
                    Used to develop an SPA.
                </Technology>
                <Technology name={'TypeScript'} icon={() => <Image src={TypeScriptLogo} alt='TypeScriptLogo' />}>
                    Worked with TypeScript for 3 years<br />
                    under other technologies like React or Angular
                </Technology>
                <Technology name={'.NET'} icon={() => <Image src={DotNetCoreLogo} alt='DotNetCoreLogo' />}>
                    Worked with .NET (Framework v4.7.2 to Core v8) for +{netExperienceYears} years. <br/>
                    Used to develop REST APIs, along with Entity Framework.
                </Technology>
                <Technology name={'Azure'} icon={() => <Image src={AzureLogo} alt='AzureLogo' />}>
                    Worked with azure for +{azureExperienceYears} years. <br />
                    Used it mainly for deployments
                </Technology>
                <Technology name={'SQL Server'} icon={() => <Image src={MicrosoftSqlServerLogo} alt='MicrosoftSqlServerLogo' />}>
                    Worked with SQL Server for +{sqlServerExperienceYears} years. <br />
                    Used for querying data or creating tables and views
                </Technology>
            </div>
            <ul>
                <li><b>Frontend: </b>SCSS, LESS, React Native, Jest, Blazor</li>
                <li><b>Backend: </b>C#, REST APIs, Entity Framework, nUnit</li>
                <li><b>Cloud & DevOps: </b>Azure, AWS, Terraform, RabbitMQ, CI/CD</li>
                <li><b>Architecture: </b>Microservices, DDD</li>
                <li><b>Other: </b>Docker, Redis, SQL Server, Auth0, TDD</li>
            </ul>
        </div>
    );
}

export default Technologies;