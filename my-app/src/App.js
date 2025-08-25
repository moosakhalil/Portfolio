import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero, About, Skills, Certificates, Projects, Contact, Footer, StarsCanvas, WorkExperience } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skills />
        <WorkExperience />
        <Certificates />
        <Projects />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
