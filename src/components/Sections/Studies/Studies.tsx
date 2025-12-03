'use client'
import React from 'react';
import classes from './Studies.module.css';
import TitleSection from '../../UI/TitleSection/TitleSection';
import ExperienceEntry from '../../UI/ExperienceEntry/ExperienceEntry';
import ElementListDivider from '../../UI/ListElementDivider/ElementListDivider';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';

const Studies = () => {
    return (
        <div className={classes['studies-container']}>
            <TitleSection icon={SchoolRoundedIcon} title={'Career/'} subtitle={'Studies'} />
            <ExperienceEntry place='Polytechnic University of Madrid' date='Madrid, Sept 2015 - Sept 2019' title='B.Sc. Software-Engineering'>
                Learnt basics like <b>Architecture</b>, <b>Algorithmics</b>, <b>Programming</b> or <b>Team methodologies</b>.<br/>
                My final year project's aim was to understand the <b>Spring Boot</b> framework and then create a web app with it.
            </ExperienceEntry>
            <ElementListDivider />
            <ExperienceEntry place='Avanade' title='Intern web developer' date='Madrid, Jan 2019 - July 2019'>
                Collaborated on ingesting and visualizing vehicle-related data feeds<br/>
                Technologies: HTML, CSS, Bootstrap, Razor and C#
            </ExperienceEntry>
        </div>
    );
}

export default Studies;