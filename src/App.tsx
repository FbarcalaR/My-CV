import React from 'react';
import PageSection from './components/UI/PageSection/PageSection';
import './App.css';
import './colors.css';
import './fonts.css';
import Home from './components/Sections/Home/Home';
import Experience from './components/Sections/Experience/Experience';
import Studies from './components/Sections/Studies/Studies';
import Projects from './components/Sections/Projects/Projects';
import AboutMe from './components/Sections/AboutMe/AboutMe';
import NavBar from './components/UI/NavBar/NavBar';
import Technologies from './components/Sections/Technologies/Technologies';
import Languages from './components/Sections/Languages/Languages';
import SectionsContextProvider, { SectionIds } from './store/sections/sections-provider';
import ChatMe from './components/Sections/ChatMe/ChatMe';

function App() {
  return (
    <SectionsContextProvider>
      <div className="App">
        <NavBar/>
        <PageSection innerKey={SectionIds.Home} >
          <Home />
        </PageSection>
        <PageSection  innerKey={SectionIds.Studies} >
          <Studies />
        </PageSection>
        <PageSection  innerKey={SectionIds.Experience} >
          <Experience />
        </PageSection>
        <PageSection  innerKey={SectionIds.Skills} >
          <Technologies />
          <Languages />
        </PageSection>
        <PageSection  innerKey={SectionIds.Projects} >
          <Projects />
        </PageSection>
        <PageSection  innerKey={SectionIds.AboutMe} >
          <AboutMe />
        </PageSection>
        <PageSection  innerKey={SectionIds.ChatMe} >
          <ChatMe />
        </PageSection>
      </div>

    </SectionsContextProvider>
  );
}

export default App;
