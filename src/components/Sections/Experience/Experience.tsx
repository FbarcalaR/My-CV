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
                Developed a couple of web projects to manage ecological certifications and energy consumptions
                with technologies like <b>React</b>, <b>Angular</b>, <b>TypeScript</b>, <b>C#</b>, <b>.NET</b>, <b>Azure</b>, or <b>SQL</b>,
                in an agile (<b>SCRUM</b>) and <b>international</b> team.
            </ExperienceEntry>
            <ElementListDivider />
            <ExperienceEntry place='Ciklum' title='Junior-Developer' date='2020-2022'>
                Developed a vehicle auctions web app, based on different micro-services, with technologies like
                <b> C#</b>, <b>.NET</b>, <b>React</b>, <b>AWS</b>, <b>terraform</b> or <b>SQL</b>,
                in an agile (<b>SCRUM</b>) and <b>international</b> team.
            </ExperienceEntry>
            <ElementListDivider />
            <ExperienceEntry place='Entelgy' date='2019-2020' title='Junior-Developer'>
                Created from scratch a web app for bankruptcy management using technologies like
                <b> Angular</b>, <b>TypeScript</b>, <b>C#</b>, <b>.NET</b>, <b>SQLServer</b>, and <b>Azure </b>
                in an agile team.
            </ExperienceEntry>
        </div>
    );
}

export default Experience;