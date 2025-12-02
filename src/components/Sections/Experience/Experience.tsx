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
            <ExperienceEntry place='Yamdu' title='Fullstack-Developer' date='Munich, Sept 2024 - now'>
                <ul className={classes['description-list']}>
                    <li>Implemented Sustainability and Job Offers features for a film production management web</li>
                    <li>Helped the team move forward with modern architectures, technologies and methodologies</li>
                    <li>Worked on a European web for carbon emissions calculation in film industry</li>
                </ul>
            Technologies: React, LESS, .NET, Entity Framework, C#, Azure, SQLServer
            </ExperienceEntry>
            <ElementListDivider />
            <ExperienceEntry place='Vector Software' title='Middle-Developer' date='Malaga, Aug 2022 - Sept 2024'>
                <ul className={classes['description-list']}>
                    <li>Developed from scratch two applications for energy procurement and ecological certificates</li>
                    <li>Implemented DDD and restructured applications to microservices for better modularity</li>
                    <li>Used and maintained CI/CD pipelines and automated testing, reducing deployment time and errors</li>
                </ul>
            Technologies: React, Angular, TypeScript, Jest, LESS, Auth0, .NET, Entity Framework, C#, Redis, Azure, SQLServer
            </ExperienceEntry>
            <ElementListDivider />
            <ExperienceEntry place='Ciklum' title='Junior-Developer' date='Malaga, May 2021 - Aug 2022'>
                <ul className={classes['description-list']}>
                    <li>Delivered features for 3 webs plus a mobile app, for a car leasing platform</li>
                    <li>Learned about and integrated new Kafka streams for async processing and decouple teams</li>
                    <li>Built and documented RESTful APIs; peer-reviewed code for maintainability </li>
                    <li>Developed unit tests to improve the system’s reliability, with at least a 75% of code coverage</li>
                </ul>
            Technologies: HTML, CSS, Blazor, React, React Native, ASP.NET, RabbitMQ, Redis, C#, Terraform and AWS
            </ExperienceEntry>
            <ElementListDivider />
            <ExperienceEntry place='Entelgy' title='Junior-Developer' date='Madrid, Oct 2019 - May 2021'>
                <ul className={classes['description-list']}>
                    <li>Developed from scratch a web application for managing bankruptcy processes</li>
                    <li>Worked within SCRUM teams to ensure consistent sprint delivery and testing</li>
                </ul>
            Technologies: Angular, Typescript, SCSS, Material, .NET Framework, C# and SQL Server
            </ExperienceEntry>
        </div>
    );
}

export default Experience;