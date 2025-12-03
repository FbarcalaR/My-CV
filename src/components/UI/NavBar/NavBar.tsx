'use client'
import React, { FunctionComponent } from 'react';
import NavBarButton from './NavBarButton/NavBarButton';
import classes from "./NavBar.module.css";
import { SectionIds } from '@/store/sections/SectionIds';
import HomeIcon from '@mui/icons-material/Home';

const NavBar: FunctionComponent = () => {
  return (
    <div className={classes.homeContainer}>
      <NavBarButton id={SectionIds.Home} >
        <HomeIcon/>
      </NavBarButton>
      <div className={classes.mainContainer}>
        <NavBarButton id={SectionIds.Studies} usesDecorators={true}>
          STUDIES
        </NavBarButton>
        <NavBarButton id={SectionIds.Experience} usesDecorators={true}>
          EXPERIENCE
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
        <NavBarButton id={SectionIds.ChatMe} usesDecorators={true}>
          CHAT ME (AI)
        </NavBarButton>
      </div>
    </div>
  );
}

export default NavBar;