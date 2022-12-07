import {Flex,Link ,Box, Text, SimpleGrid, Image, Spacer, IconButton   } from '@chakra-ui/react'
import { GiAerialSignal } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";
import cri from "../Assets/cri.PNG"
import giva from "../Assets/giva.PNG"
import shop from "../Assets/shop.PNG"
import lyst from "../Assets/lyst.PNG"
import findImages from "../Assets/findImages.PNG"
import portfolio from "../Assets/portfolio.PNG"

import {useEffect} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';

const projectData= [
  {
    name:"Find Images",
    img:findImages,
    desc:`A lightweight, Responsive free image downloading website. Here I implemented some functionality like Search images and Filtering.`,
    github:"https://github.com/mukulsomukesh/find-images",
    deploy:"https://inquisitive-vacherin-2422cd.netlify.app/",
    TechStack:"React JS, Chakra UI, Axios, Firebase"
  },
  {
    name:"CriCinfo Clone",
    img:cri,
    desc:`This website is a clone of "cricinfo.com". Here user can read articles, cricket news and watch cricket highlights.`,
    github:"https://github.com/mukulsomukesh/youthful-dogs-6115",
    deploy:"https://lucky-genie-8ba011.netlify.app/",
    TechStack:"React-Js, Chakra-Ui"
  },
  {
    name:"Giva Clone",
    img:giva,
    desc:`This website is a clone of "Giva.org". Here I implemented some functionality like Sorting, Filtering, Wishlist, & Cart.`,
    github:"https://github.com/mukulsomukesh/GIva",
    deploy:"https://stunning-fox-567983.netlify.app/",
    TechStack:"Html, CSS, JavaScript"
  },
  {
    name:"Shop Clone",
    img:shop,
    desc:`This website is a clone of "Shop.org". Here I implemented some functionality like Search products by name, Sorting, Filtering, & Cart.`,
    github:"https://github.com/dikshaa2000/shop.com",
    deploy:"https://stirring-babka-e9aa79.netlify.app/",
    TechStack:"Html, CSS, JavaScript"
  },
  {
    name:"Lyst Clone ",
    img:lyst,
    desc:`This website is a clone of "Lyst.com". Here I implemented some functionality like Search products by name or category, Filtering, Add to Cart, & Wishlist .`,
    github:"https://github.com/mukulsomukesh/numerous-school-7400/tree/main/lyst-clone",
    deploy:"https://stirring-babka-e9aa79.netlify.app/",
    TechStack:"React JS, Chakra UI, Axios"
  },
  // {
  //   name:"My Portfolio",
  //   img:portfolio,
  //   desc:`This is my "portfolio" Here I implemented some functionality Contact me form with firebase, and Responsiveness.  `,
  //   github:"https://github.com/mukulsomukesh/numerous-school-7400/tree/main/lyst-clone",
  //   deploy:"https://stirring-babka-e9aa79.netlify.app/",
  //   TechStack:"React JS, Chakra UI"
  // },
]

function Project() {

  

  return (
    <div>
      <Box id="Projects"  mb="50px" minH="100vh" h="fit-content" w="100%" pr="10%" pl="10%" p="7%" pt="5%"  >
          <Box   m="auto" mb="50px" w="fit-content" color="#dc143c"  ><Text fontSize='3xl'  as="b"> My Creative Projects Section</Text> </Box>

      <SimpleGrid minChildWidth='270px' spacing='45px'>
    {projectData?.map((item)=>(
    <Box key={item.id}  bg="#1a202c" minH="fit-content"  p="12px"  borderRadius="10px">
    <Image w="full" borderRadius={"10px"} src={item.img} alt='Dan Abramov' />
    <Flex w="100%" mt="20px" >   <Text  as="b" fontSize='xl'> {item.name} </Text> 
    <Spacer />
    <Link href={item.deploy} isExternal>  
    <IconButton variant="ghost" size="sm"
    isRound={true} _hover={{ bg: '#dc143c' }} icon={<GiAerialSignal  size={"20px"} />} />
    </Link>
    <Link href={item.github} isExternal>   
    {/* <BsGithub size="20px" />  */}
    <IconButton variant="ghost" size="sm"
    isRound={true} _hover={{ bg: '#dc143c' }} icon={<BsGithub  size={"20px"} />} />
    </Link>
    </Flex>
    <Text mt="10px" textAlign={"justify"} > {item.desc} </Text>  
    <Flex fontSize="sm" mt="10px">
    <Text color={"#dc143c"} mr="10px" as="b"> Tect Stack: </Text> <Text> {item.TechStack} </Text>
  </Flex>
    </Box>
  
  ))}


</SimpleGrid>

      </Box>

    </div>
  )
}

export default Project