import React from 'react';
import PageSection from '../components/UI/PageSection/PageSection';
import './page.module.css';
import './colors.css';
import './fonts.css';
import Home from '../components/Sections/Home/Home';
import Experience from '../components/Sections/Experience/Experience';
import Studies from '../components/Sections/Studies/Studies';
import Projects from '../components/Sections/Projects/Projects';
import AboutMe from '../components/Sections/AboutMe/AboutMe';
import NavBar from '../components/UI/NavBar/NavBar';
import Technologies from '../components/Sections/Technologies/Technologies';
import Languages from '../components/Sections/Languages/Languages';
import SectionsContextProvider from '../store/sections/sections-provider';
import { SectionIds } from '@/store/sections/SectionIds';
import ChatMe from '../components/Sections/ChatMe/ChatMe';

function App() {
  return (
    <SectionsContextProvider>
      <div className="App">
        <NavBar/>
        <PageSection sectionKey={SectionIds.Home} >
          <Home />
        </PageSection>
        <PageSection  sectionKey={SectionIds.Studies} >
          <Studies />
        </PageSection>
        <PageSection  sectionKey={SectionIds.Experience} >
          <Experience />
        </PageSection>
        <PageSection  sectionKey={SectionIds.Skills} >
          <Technologies />
          <Languages />
        </PageSection>
        <PageSection  sectionKey={SectionIds.Projects} >
          <Projects />
        </PageSection>
        <PageSection  sectionKey={SectionIds.AboutMe} >
          <AboutMe />
        </PageSection>
        <PageSection  sectionKey={SectionIds.ChatMe} >
          <ChatMe />
        </PageSection>
      </div>

    </SectionsContextProvider>
  );
}

export default App;
