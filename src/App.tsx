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
import ElementListDivider from './components/UI/ListElementDivider/ElementListDivider';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <PageSection>
        <Home />
      </PageSection>
      <PageSection>
        <Experience />
      </PageSection>
      <PageSection>
        <Studies />
      </PageSection>
      <PageSection>
        <Technologies />
        <Languages />
      </PageSection>
      <PageSection>
        <Projects />
      </PageSection>
      <PageSection>
        <AboutMe />
      </PageSection>
    </div>
  );
}

export default App;
