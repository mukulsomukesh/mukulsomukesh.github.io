import {Flex,Link ,Box, Text, SimpleGrid, Image, Spacer, IconButton   } from '@chakra-ui/react'
import { GiAerialSignal } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";
import cri from "../Assets/cri.PNG"
import giva from "../Assets/giva.PNG"
import shop from "../Assets/shop.PNG"
import lyst from "../Assets/lyst.PNG"
import {useEffect} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';

function Project() {

  return (
    <div>
      <Box id="Projects"  bg="#1a202c" mb="50px" minH="100vh" h="fit-content" w="100%" pr="10%" pl="10%" p="7%"  >
          <Box   m="auto" mb="50px" borderBottom={"4px"} w="fit-content" color="#dc143c" borderColor="#dc143c" ><Text fontSize='3xl'  as="b"> My Creative Projects Section</Text> </Box>

      <SimpleGrid minChildWidth='270px' spacing='40px'>
  <Box  bg="#0f1624" minH="fit-content"  p="12px" border="2px" borderColor={"#dc143c"} borderRadius="10px">
  <Image w="full" borderRadius={"10px"} src={giva} alt='Dan Abramov' />
  <Flex w="100%" mt="20px" >   <Text  as="b" fontSize='xl'> Giva Clone </Text> 
  <Spacer />
  <Link href='https://stunning-fox-567983.netlify.app/' isExternal>  
  {/* <GiAerialSignal size="20px" />  */}
  <IconButton variant="ghost" size="sm"
  isRound={true} _hover={{ bg: '#dc143c' }} icon={<GiAerialSignal  size={"20px"} />} />
  </Link>
  <Link href='https://github.com/mukulsomukesh/GIva' isExternal>   
  {/* <BsGithub size="20px" />  */}
  <IconButton variant="ghost" size="sm"
  isRound={true} _hover={{ bg: '#dc143c' }} icon={<BsGithub  size={"20px"} />} />
  </Link>
  </Flex>
  <Text mt="10px" textAlign={"justify"} > This website is a clone of "Giva.org". Here I implemented some functionality like Sorting, Filtering, Wishlist, & Cart. </Text>  
  <Flex fontSize="sm" mt="10px">
  <Text color={"#dc143c"} mr="10px" as="b"> Tect Stack: </Text> <Text> Html, CSS, JavaScript </Text>
</Flex>
  </Box>



  <Box  bg="#0f1624" minH="fit-content"  p="12px" border="2px" borderColor={"#dc143c"} borderRadius="10px">
  <Image w="full" borderRadius={"10px"} src={cri} alt='Dan Abramov' />
  <Flex w="100%" mt="20px" >   <Text  as="b" fontSize='xl'> CriCinfo </Text> 
  <Spacer />
  <Link href='https://lucky-genie-8ba011.netlify.app/' isExternal>  
  {/* <GiAerialSignal size="20px" /> */}
  <IconButton variant="ghost" size="sm"
  isRound={true} _hover={{ bg: '#dc143c' }} icon={<GiAerialSignal  size={"20px"} />} />
   </Link>
  <Link href='https://github.com/mukulsomukesh/youthful-dogs-6115' isExternal>
       {/* <BsGithub size="20px" />  */}
       <IconButton variant="ghost" size="sm"
  isRound={true} _hover={{ bg: '#dc143c' }} icon={<BsGithub  size={"20px"} />} />
  
  </Link>
  </Flex>
  <Text mt="10px" textAlign={"justify"} >  This website is a clone of "cricinfo.com". Here user can read articles, cricket news and watch cricket highlights. </Text>  
  <Flex fontSize="sm" mt="10px">
  <Text color={"#dc143c"} mr="10px" as="b"> Tect Stack: </Text> <Text> React-Js, Chakra-Ui </Text>
</Flex>
  </Box>


  <Box bg="#0f1624" minH="fit-content"  p="12px" border="2px" borderColor={"#dc143c"} borderRadius="10px">
  <Image w="full" borderRadius={"10px"} src={shop} alt='Dan Abramov' />
  <Flex w="100%" mt="20px" >   <Text  as="b" fontSize='xl'> Shop Clone </Text> 
  <Spacer />
  <Link href='https://stirring-babka-e9aa79.netlify.app/' isExternal>  
  {/* <GiAerialSignal size="20px" />  */}
  
  <IconButton variant="ghost" size="sm"
  isRound={true} _hover={{ bg: '#dc143c' }} icon={<GiAerialSignal  size={"20px"} />} />
  </Link>
  <Link href='https://github.com/dikshaa2000/shop.com' isExternal>   
  {/* <BsGithub size="20px" />  */}
  <IconButton variant="ghost" size="sm"
  isRound={true} _hover={{ bg: '#dc143c' }} icon={<BsGithub  size={"20px"} />} />
  </Link>
  </Flex>
  <Text mt="10px" textAlign={"justify"} > This website is a clone of "Shop.org". Here I implemented some functionality like Search products by name, Sorting, Filtering, & Cart. </Text>  
  <Flex fontSize="sm" mt="10px">
  <Text color={"#dc143c"} mr="10px" as="b"> Tect Stack: </Text> <Text> Html, CSS, JavaScript </Text>
</Flex>
  </Box>


  <Box   bg="#0f1624" minH="fit-content"  p="12px" border="2px" borderColor={"#dc143c"} borderRadius="10px">
  <Image w="full" borderRadius={"10px"} src={lyst} alt='Dan Abramov' />
  <Flex w="100%" mt="20px" >   <Text  as="b" fontSize='xl'> Lyst Clone </Text> 
  <Spacer />
  <Link href='https://stirring-babka-e9aa79.netlify.app/' isExternal>  
  
  <IconButton variant="ghost" size="sm"
  isRound={true} _hover={{ bg: '#dc143c' }} icon={<GiAerialSignal  size={"20px"} />} />
  </Link>

  <Link href='https://github.com/mukulsomukesh/numerous-school-7400/tree/main/lyst-clone' isExternal>   
  {/* <BsGithub size="20px" />  */}
  <IconButton variant="ghost" size="sm"
  isRound={true} _hover={{ bg: '#dc143c' }} icon={<BsGithub  size={"20px"} />} />
  </Link>

  </Flex>
  <Text mt="10px" textAlign={"justify"} > This website is a clone of "Lyst.com". Here I implemented some functionality like Search products by name or category, Filtering, Add to Cart, & Wishlist . </Text>  
  <Flex fontSize="sm" mt="10px">
  <Text color={"#dc143c"} mr="10px" as="b"> Tect Stack: </Text> <Text> React JS, Chakra UI, Axios </Text>
</Flex>
  </Box>


</SimpleGrid>

      </Box>

    </div>
  )
}

export default Project