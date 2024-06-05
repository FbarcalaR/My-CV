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
            <ExperienceEntry place='Avanade' title='Internship' date='Jan 2019-Jul 2019'>
                Worked on a project to receive car-related data from an external source with a high-skilled team of developers, understanding how a company develops and delivers software.<br/>
                Technologies: HTML, CSS, Bootstrap, Razor and C#
            </ExperienceEntry>
            <ElementListDivider />
            <ExperienceEntry place='UPM' date='2015-2019' title='Software-Engineering'>
                Learnt basics like <b>Architecture</b>, <b>Algorithmics</b>, <b>Programming</b> or <b>Team methodologies</b>.<br/>
                My Final Year Project aim was to understand the <b>Spring Boot</b> framework and then create a web app with it.
            </ExperienceEntry>
        </div>
    );
}

export default Studies;