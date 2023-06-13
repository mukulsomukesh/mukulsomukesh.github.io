import { Box } from '@chakra-ui/react'
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from './Components/About';
import Skills from './Components/Skills';
import Github from './Components/Github';
import Project from './Components/Project';
import Contact from "./Components/Contact"
 
function App() {
  return (
<>

 {/*  container  */}
<Box fontFamily={"sans-serif"} width={"100%"} bg="#0b111b" color="white" h="fit-content">
<Navbar />
<Home />
<About />
<Skills />
<Project />
<Github />
<Contact/>
</Box>
</>
  );
}

export default App;
