import React from 'react';
import PageSection from './components/UI/PageSection/PageSection';
import './App.css';
import Home from './components/Sections/Home/Home';
import Experience from './components/Sections/Experience/Experience';
import Studies from './components/Sections/Studies/Studies';
import Skills from './components/Sections/Skills/Skills';
import Projects from './components/Sections/Projects/Projects';
import AboutMe from './components/Sections/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
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
        <Skills />
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
