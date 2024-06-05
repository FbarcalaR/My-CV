import React from 'react';
import classes from './Experience.module.css';
import TitleSection from '../../UI/TitleSection/TitleSection';
import ExperienceEntry from '../../UI/ExperienceEntry/ExperienceEntry';
import ElementListDivider from '../../UI/ListElementDivider/ElementListDivider';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const Experience = () => {
    return (
        <div className={classes['experience-container']}>
            <TitleSection icon={BusinessCenterIcon} title={'Career/'} subtitle={'Experience'} />
            <ExperienceEntry place='Vector Software' title='Middle-Developer' date='2022-now'>
                <ul className={classes['description-list']}>
                    <li>Developed from scratch 2 projects related energy purchase and ecological certificates</li>
                    <li>Collaborated with international teams in an agile (SCRUM) environment to deliver high-quality software</li>
                    <li>Implemented DDD and microservices architecture enhancing application modularity and maintainability</li>
                    <li>Maintained and monitored CI/CD pipelines, reducing deployment time</li>
                </ul>
            Technologies: React, Angular, TypeScript, LESS, Auth0, .NET, Entity Framework, C#, Redis, Azure, SQLServer
            </ExperienceEntry>
            <ElementListDivider />
            <ExperienceEntry place='Ciklum' title='Junior-Developer' date='2020-2022'>
                <ul className={classes['description-list']}>
                    <li>Collaborated to 3 web apps and a mobile application, improving the client’s car leasing success rate</li>
                    <li>Integrated new Kafka streams to reduce team interdependencies and to improve delivery rate</li>
                    <li>Implemented and contributed to the design of RESTful APIs, ensuring seamless integration with front-end</li>
                    <li>Ensured quality code and best practices while meeting deadlines and performing code-reviews with peers</li>
                    <li>Developed unit tests to improve the system’s reliability, with at least a 75% of code coverage</li>
                </ul>
            Technologies: HTML, CSS, Blazor, React, React Native, ASP.NET, RabbitMQ, Redis, C#, Terraform and AWS
            </ExperienceEntry>
            <ElementListDivider />
            <ExperienceEntry place='Entelgy' date='2019-2020' title='Junior-Developer'>
                <ul className={classes['description-list']}>
                    <li>Contributed developing a web application from scratch to assist users in managing bankruptcy processes</li>
                    <li>Collaborated in a team following agile processes and ceremonies to ensure meeting of deadlines</li>
                    <li>Maintained and used CI/CD pipelines for all deployments</li>
                </ul>
            Technologies: Angular, Typescript, SCSS, Material, .NET Framework, C# and SQL Server
            </ExperienceEntry>
        </div>
    );
}

export default Experience;