import React from 'react';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import classes from './Experience.module.css';
import TitleSection from '../../UI/TitleSection/TitleSection';
import JobDescription from './JobDescription/JobDescription';
import ElementListDivider from '../../UI/ListElementDivider/ElementListDivider';

const Experience = () => {
    return (
        <div className={classes['experience-container']}>
            <TitleSection icon={faBriefcase} title={'Career/'} subtitle={'Experience'} />
            <JobDescription />
            <ElementListDivider />
            <JobDescription />
        </div>
    );
}

export default Experience;