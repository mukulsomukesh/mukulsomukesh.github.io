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
{/* box container */}
<Box fontFamily={"sans-serif"} width={"100%"} bg="#0f1624" color="#ececed">

{/* navbar */}
<Navbar />

{/* home section */}
<Home />

{/* about me section */}
<About />

{/* skills section */}
<Skills />

{/* projects section */}
<Project />

{/* gitbus section  */}
<Github />

{/* contact me section */}
<Contact/>

{/* close box */}
</Box>
</>
  );
}

export default App;

//  h="100vh"
// overflowY="auto"
// __css={{
// '&::-webkit-scrollbar': {
//   width: '8px',
//   background: "white",
// },
// '&::-webkit-scrollbar-thumb': {
//   background: "#dc143c",
//   borderRadius: '1rem',
// },
// }}