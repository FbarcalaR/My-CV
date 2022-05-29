import React from 'react';
import NavBarButton from './NavBarButton';
import classes from "./NavBar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div className={classes.homeContainer}>
      <NavBarButton>
        <FontAwesomeIcon icon={faHome} style={{cursor:'pointer'}}/> {/* <--- POINTER NOT WORKING (CHECK MODULES .CSS, buttonStyle CLASS)*/}
      </NavBarButton>
      <div className={classes.mainContainer}>
        <NavBarButton>
          EXPERIENCE
        </NavBarButton>
        <NavBarButton>
          STUDIES
        </NavBarButton>
        <NavBarButton>
          SKILLS
        </NavBarButton>
        <NavBarButton>
          PROJECTS
        </NavBarButton>
        <NavBarButton>
          ABOUT ME
        </NavBarButton>
      </div>
    </div>
  );
}

export default NavBar;