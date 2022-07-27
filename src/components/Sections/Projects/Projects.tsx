import React from 'react';
import TitleSection from '../../UI/TitleSection/TitleSection';
import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';
import classes from './Projects.module.css';
import Project from './Project/Project';

const Projects = () => {
    return (
        <div className={classes['projects-section-container']}>
            <TitleSection icon={faCodePullRequest} title={'Personal/'} subtitle={'Projects'} />
            <div className={classes['projects-list-container']}>
                <Project title={'MyCV'} repositoryLink={'https://github.com/FbarcalaR/My-CV'} >
                    This CV, created to get to know me and my career, developed using <b>React</b>.
                </Project>
                <Project title={'Abbaco'} repositoryLink={'https://github.com/FbarcalaR/AbbacoDOC'} >
                    Project about financial management, to learn <b>React</b> and revisit <b>Spring Boot</b> concepts.
                </Project>
                <Project title={'Boxing Web Scrapper'} repositoryLink={'https://github.com/FbarcalaR/Boxing-Bouts-Predictor'} >
                    Project created with <b>Phyton</b> to extract, store and analyse data from a boxing matches web data.
                </Project>
                <Project title={'Unity Game Projects'} repositoryLink={'https://github.com/FbarcalaR/TrainsPuzzle'} >
                    A Jigsaw and an action game, created with <b>C#</b> for fun to learn and explore core concepts about <b>Unity</b>.
                </Project>
            </div>
        </div>
    );
}

export default Projects;