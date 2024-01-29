import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Github from './Components/Github';
import Project from './Components/Project';
import Contact from './Components/Contact';
import WorkExperiance from './Components/WorkExperiance';

function App() {
  return (
    <>
      {/* Sparkling background */}
      <div className="sparkling-background">
        {[...Array(50)].map((_, index) => (
          <div className="sparkle" key={index}></div>
        ))}
      </div>

      {/* Rest of your app */}
      <Box fontFamily={'sans-serif'} width={'100%'} bg="#0f1624" color="#ececed">
        {/* navbar */}
        <Navbar />

        {/* home section */}
        <Home />

        {/* about me section */}
        <About />

        {/* exp */}
        <WorkExperiance />

        {/* skills section */}
        <Skills />


        {/* projects section */}
        <Project />

        {/* gitbus section */}
        <Github />

        {/* contact me section */}
        <Contact />

        {/* close box */}
      </Box>
    </>
  );
}

export default App;
