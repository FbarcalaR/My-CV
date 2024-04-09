import React from 'react';
import TitleSection from '../../UI/TitleSection/TitleSection';
import classes from './Projects.module.css';
import Project from './Project/Project';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const Projects = () => {
    return (
        <div className={classes['projects-section-container']}>
            <TitleSection icon={AccountTreeIcon} title={'Personal/'} subtitle={'Projects'} />
            <div className={classes['projects-list-container']}>
                <Project title={'MyCV'} repositoryLink={'https://github.com/FbarcalaR/My-CV'} >
                    This CV, created to get to know me and my career, developed using <b>React</b>.
                </Project>
                <Project title={'Abbaco'} repositoryLink={'https://github.com/FbarcalaR/AbbacoDOC'} >
                    Project about financial management, to learn <b>React</b> and revisit <b>Spring Boot</b> concepts.
                </Project>
                <Project title={'Pizza Tracker'} repositoryLink={'https://github.com/FbarcalaR/Pizza-Tracker'} >
                    Pizza recipes calculator, developed using <b>Next.js</b> and <b>Firebase</b>
                </Project>
                <Project title={'Trains Puzzle'} repositoryLink={'https://github.com/FbarcalaR/TrainsPuzzle'} >
                    A jigsaw game, created with <b>C#</b> for fun to learn and explore core concepts about <b>Unity</b>.
                </Project>
            </div>
        </div>
    );
}

export default Projects;