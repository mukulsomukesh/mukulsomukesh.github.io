import {Flex,SimpleGrid,Image, Link, Box, Text, } from '@chakra-ui/react'
import GitHubCalendar from 'react-github-calendar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from 'react'

function Stats(){


    return (
        <>
        <Box id="Stats" h="100vh" p="2%">
          
<Box  m="auto" mb="40px"  w="fit-content" color="#dc143c"  mt={{sm:"50px", md: "30px", xl:"10px"  }}><Text fontSize='3xl' as="b">Github Stats & Calander</Text> </Box>

<Box  w="fit-content" p="17px" m="auto" border="2px" borderRadius="10px" borderColor="#dc143c"  borderBottom={"none"} display={{ md: 'flex' }} borderBottomRadius="0px" >
  <Box  w="fit-content" m="auto">
  <img align="center" src="https://github-readme-stats.vercel.app/api?username=mukulsomukesh&show_icons=true&include_all_commits=true&count_private=true&hide=issues,contribs&border_radius=0&locale=en&theme=dark" alt="mukulsomukesh" height={"139px"}  />
  </Box>
  <Box ml={{ md: "15px" }}  pt="5px" w="fit-content" m="auto">
  <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=mukulsomukesh&layout=compact&exclude_repo=Lybrate-Website-Clone-Version-2.0,Lybrate-Website-Clone,Adidas-Clone&hide=Shell&border_radius=0&theme=dark" alt="mukulsomukesh"  height={"139px"} />
  </Box>
</Box>

        {/* <Box   m="auto" mb="50px" borderBottom={"4px"} w="fit-content" color="#dc143c" borderColor="#dc143c" mt={{sm:"150px", md: "125px", xl:"50px"  }}><Text fontSize='3xl' as="b" >Github Calander </Text> </Box> */}
        <Box  w="fit-content"  p="25px" m="auto" border="2px" borderRadius="10px" borderColor="#dc143c" borderTopStyle="dashed" borderTopRadius="0px"> 
         <Text mb="10px" color="#dc143c"> My Github Calander </Text> 
        <GitHubCalendar  color="#dc143c" username="mukulsomukesh"/> </Box>
      

</Box>
        </>
    );
}

export default Stats