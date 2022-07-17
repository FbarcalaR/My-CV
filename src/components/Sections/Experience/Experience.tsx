import React from 'react';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import classes from './Experience.module.css';
import TitleSection from '../../UI/TitleSection/TitleSection';
import ExperienceEntry from '../../UI/ExperienceEntry/ExperienceEntry';
import ElementListDivider from '../../UI/ListElementDivider/ElementListDivider';

const Experience = () => {
    return (
        <div className={classes['experience-container']}>
            <TitleSection icon={faBriefcase} title={'Career/'} subtitle={'Experience'} />
            <ExperienceEntry place='Ciklum' title='Junior-Developer' date='2020-NOW'>
                <span>
                    Developed a vehicles auctions web app with technologies like 
                    <b> C#</b>, <b>.NET</b>, <b>React</b>, <b>AWS</b>, <b>terraform</b> or <b>SQL</b>, 
                    in an agile (<b>SCRUM</b>) and <b>international</b> team.
                </span>
            </ExperienceEntry>
            <ElementListDivider />
            <ExperienceEntry place='Entelgy' date='2019-2020' title='Junior-Developer'>
                <span>
                    Created from scratch a web app for bankruptcy management using technologies like 
                    <b> Angular</b>, <b>TypeScript</b>, <b>C#</b>, <b>.NET</b>, <b>SQLServer</b>, and <b>Azure </b>
                    in an agile team.
                 </span>
            </ExperienceEntry>
        </div>
    );
}

export default Experience;