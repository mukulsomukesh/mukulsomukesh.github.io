import AOS from 'aos';
import 'aos/dist/aos.css';
import {Center,Image, Box, Text, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import html from "../Assets/html.png"
import bootstrap from "../Assets/bootstrap.png"
import canva from "../Assets/canva.png"
import chakra from "../Assets/chakra.png"
import css from "../Assets/css.png"
import express from "../Assets/express.png"
import git from "../Assets/git.png"
import javascript from "../Assets/javascript.png"
import material from "../Assets/material.png"
import mongodb from "../Assets/mongodb.png"
import node from "../Assets/node.png"
import npm from "../Assets/npm.png"
import postman from "../Assets/postman.png"
import react from "../Assets/react.png"
import redux from "../Assets/redux.png"
import tailwind from "../Assets/tailwind.png"


export default function Skills() {
  return (
    <>

      <Box id="Skill's" w="100%" pr="10%" pl="10%" p="7%"  minH="fit-content">
      <Box  m="auto" mb="50px" borderBottom={"4px"} w="fit-content" color="#dc143c" borderColor="#dc143c" ><Text fontSize='3xl' as="b">Skills</Text> </Box>

      <SimpleGrid  minChildWidth='120px'  spacing='15px' >

      <Box bg="#1a202c" borderRadius="10px" h="150px"   p="15px">
        <Image src={html} h="90px" m="auto" w="75px"></Image>
        <Text fontSize='lg' align={"center"}  mt="10px">Html</Text>
      </Box>

      <Box bg="#1a202c" borderRadius="10px" h="150px"   p="15px">
        <Image src={css} h="90px" m="auto" w="75px"></Image>
        <Text fontSize='lg' align={"center"} mt="10px">Css</Text>
      </Box>

      <Box bg="#1a202c" borderRadius="10px" h="150px"   p="15px">
        <Image src={javascript} h="90px" m="auto" w="75px"></Image>
        <Text fontSize='lg' align={"center"} mt="10px">JavaScript</Text>
      </Box>

      <Box bg="#1a202c" borderRadius="10px" h="150px"   p="15px">
        <Image src={react} h="80px" m="auto" mt="10px" w="90px"></Image>
        <Text fontSize='lg' align={"center"} mt="10px">React</Text>
      </Box>
      
      <Box bg="#1a202c" borderRadius="10px" h="150px"   p="15px">
        <Image src={node} h="85px" m="auto" mt="5px"  w="85px"></Image>
        <Text fontSize='lg' align={"center"} mt="10px">Node Js</Text>
      </Box>

      <Box bg="#1a202c" borderRadius="10px" h="150px"   p="15px">
        <Image src={express} h="70px" m="auto" mt="15px" w="90px"></Image>
        <Text fontSize='lg' align={"center"} mt="15px">Express Js</Text>
      </Box>
      
      <Box bg="#1a202c" borderRadius="10px" h="150px"   p="15px">
        <Image src={redux} h="100px" m="auto" w="100px"></Image>
        <Text fontSize='lg' align={"center"} >Redux</Text>
      </Box>

      <Box bg="#1a202c" borderRadius="10px" h="150px"   p="15px">
        <Image src={chakra} h="100px" m="auto"  w="100px"></Image>
        <Text fontSize='lg' align={"center"}>Chakra UI</Text>
      </Box>

      <Box bg="#1a202c" borderRadius="10px" h="150px"   p="15px">
        <Image src={tailwind} h="70px" m="auto" mt="15px" w="90px"></Image>
        <Text fontSize='lg' align={"center"} mt="15px">Tailwind</Text>
      </Box>

      <Box bg="#1a202c" borderRadius="10px" h="150px"   p="15px">
        <Image src={bootstrap} h="80px" m="auto" mt="10px" w="90px"></Image>
        <Text fontSize='lg' align={"center"} mt="10px">Bootstrap</Text>
      </Box>

      <Box bg="#1a202c" borderRadius="10px" h="150px"   p="15px">
        <Image src={git} h="80px" m="auto" mt="10px" w="80px"></Image>
        <Text fontSize='lg' align={"center"} mt="10px">Git</Text>
      </Box>
      <Box bg="#1a202c" borderRadius="10px" h="150px"   p="15px">
        <Image src={material} h="100px" m="auto" w="90px"></Image>
        <Text fontSize='lg' align={"center"}>Material UI</Text>
      </Box>
      <Box bg="#1a202c" borderRadius="10px" h="150px"   p="15px">
        <Image src={mongodb}  h="90px" m="auto" mt="5px" w="70px"></Image>
        <Text fontSize='lg' align={"center"} mt="5px">Mongodb</Text>
      </Box>
      <Box bg="#1a202c" borderRadius="10px" h="150px"   p="15px">
        <Image src={npm}  h="90px" m="auto" mt="5px" w="90px"></Image>
        <Text fontSize='lg' align={"center"} mt="5px">Npm</Text>
      </Box>

      <Box bg="#1a202c" borderRadius="10px" h="150px"   p="15px">
        <Image src={postman}  h="90px" m="auto" mt="5px" w="90px"></Image>
        <Text fontSize='lg' align={"center"} mt="5px">Postman</Text>
      </Box>

</SimpleGrid>

      </Box>

    </>
  )
}
