import React, { FunctionComponent } from 'react';
import NavBarButton from './NavBarButton/NavBarButton';
import classes from "./NavBar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

interface Props {
  defaultSectionKey: string;
};

const NavBar: FunctionComponent<Props> = (props) => {
  return (
    <div className={classes.homeContainer}>
      <NavBarButton id='HOME' >
        <FontAwesomeIcon icon={faHome}/>
      </NavBarButton>
      <div className={classes.mainContainer}>
        <NavBarButton  id='EXPERIENCE' usesDecorators={true}>
          EXPERIENCE
        </NavBarButton>
        <NavBarButton  id='STUDIES' usesDecorators={true}>
          STUDIES
        </NavBarButton>
        <NavBarButton  id='SKILLS' usesDecorators={true}>
          SKILLS
        </NavBarButton>
        <NavBarButton  id='PROJECTS' usesDecorators={true}>
          PROJECTS
        </NavBarButton>
        <NavBarButton  id='ABOUTME' usesDecorators={true}>
          ABOUT ME
        </NavBarButton>
      </div>
    </div>
  );
}

export default NavBar;