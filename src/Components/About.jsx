import { Box, Button,Flex, Center, Text, List, ListItem, ListIcon, OrderedList, UnorderedList, color, } from '@chakra-ui/react'
import { ArrowForwardIcon } from "@chakra-ui/icons"

function About() {
  return (
    <>
      <Box h="100vh" bg="#1a202c" p="7%" pl="10%" pr="10%">
        {/* <Button m="auto"> here </Button> */}

        <Box m="auto" mb="50px" borderBottom={"4px"} w="fit-content" color="#dc143c" borderColor="#dc143c"><Text fontSize='3xl' as="b">About me</Text> </Box>

        <Flex  fontSize='xl' gap="10px">
  <ArrowForwardIcon color='#dc143c' mt="5px" />
 My Name is Mukul Jatav. I am  From Saharanpur, Uttar Pradesh, India. 
</Flex>


<Flex  fontSize='xl' mt="10px" gap="10px">
  <ArrowForwardIcon color='#dc143c' mt="5px" />
  Currently Learning Full Stack Web Development.
</Flex>


<Flex  fontSize='xl'  mt="10px" gap="10px">
  <ArrowForwardIcon color='#dc143c' mt="5px" />
  Ability To Write Efficient Code Using MERN Stack. 
</Flex>

<Flex  fontSize='xl'  mt="10px" gap="10px">
  <ArrowForwardIcon color='#dc143c' mt="5px" />
  I Built a Number of Web Application & Some Major Projects.
</Flex>

<Flex  fontSize='xl'  mt="10px" gap="10px">
  <ArrowForwardIcon color='#dc143c' mt="5px" />
  My Intreast in Web Development Started Back Last Year When I Was Trying To Edit Things On The Web, That Taugh Me A Lot About HTML & CSS. 
</Flex>


<Flex  fontSize='xl'  mt="10px" gap="10px">
  <ArrowForwardIcon color='#dc143c' mt="5px" />
  After months of rigorous traning, here I am looking for an opportunity as a full stack web developers.      
</Flex>
  
      </Box>
    </>
  )
}

export default About;