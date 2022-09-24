import React, { FunctionComponent } from 'react';
import NavBarButton from './NavBarButton/NavBarButton';
import classes from "./NavBar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { SectionIds } from '../../../store/sections/sections-provider';

const NavBar: FunctionComponent = () => {
  return (
    <div className={classes.homeContainer}>
      <NavBarButton id={SectionIds.Home} >
        <FontAwesomeIcon icon={faHome}/>
      </NavBarButton>
      <div className={classes.mainContainer}>
        <NavBarButton id={SectionIds.Experience} usesDecorators={true}>
          EXPERIENCE
        </NavBarButton>
        <NavBarButton id={SectionIds.Studies} usesDecorators={true}>
          STUDIES
        </NavBarButton>
        <NavBarButton id={SectionIds.Skills} usesDecorators={true}>
          SKILLS
        </NavBarButton>
        <NavBarButton id={SectionIds.Projects} usesDecorators={true}>
          PROJECTS
        </NavBarButton>
        <NavBarButton id={SectionIds.AboutMe} usesDecorators={true}>
          ABOUT ME
        </NavBarButton>
      </div>
    </div>
  );
}

export default NavBar;