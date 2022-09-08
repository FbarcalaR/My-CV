import React from 'react';
import PageSection from './components/UI/PageSection/PageSection';
import './App.css';
import Home from './components/Sections/Home/Home';
import Experience from './components/Sections/Experience/Experience';
import Studies from './components/Sections/Studies/Studies';
import Projects from './components/Sections/Projects/Projects';
import AboutMe from './components/Sections/AboutMe/AboutMe';
import NavBar from './components/UI/NavBar/NavBar';
import Technologies from './components/Sections/Technologies/Technologies';
import Languages from './components/Sections/Languages/Languages';
import SectionsContextProvider from './store/sections-provider';

function App() {
  return (
    <SectionsContextProvider>
      <div className="App">
        <NavBar defaultSectionKey={'HOME'}/>
        <PageSection innerKey={'HOME'} >
          <Home />
        </PageSection>
        <PageSection  innerKey={'EXPERIENCE'} >
          <Experience />
        </PageSection>
        <PageSection  innerKey={'STUDIES'} >
          <Studies />
        </PageSection>
        <PageSection  innerKey={'SKILLS'} >
          <Technologies />
          <Languages />
        </PageSection>
        <PageSection  innerKey={'PROJECTS'} >
          <Projects />
        </PageSection>
        <PageSection  innerKey={'ABOUTME'} >
          <AboutMe />
        </PageSection>
      </div>

    </SectionsContextProvider>
  );
}

export default App;
