import { Box, Text, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

export default function Skills() {
  return (
    <>

      <Box h="100vh" w="100%" pr="10%" pl="10%" p="7%" >
      <Box m="auto" mb="50px" borderBottom={"4px"} w="fit-content" color="#dc143c" borderColor="#dc143c"><Text fontSize='3xl' as="b">Skills</Text> </Box>

      <SimpleGrid columns={{"sm":2, "md":3, "xl":7}} spacing='25px'>
  <Box bg='tomato' h="140px" w="100px" minH='140px' minW="100px"></Box>
  <Box bg='tomato'  h="140px" w="100px"  minH='140px' minW="100px"></Box>
  <Box bg='tomato'  h="140px" w="100px"  minH='140px' minW="100px"></Box>
  <Box bg='tomato'  h="140px" w="100px"  minH='140px' minW="100px"></Box>
  <Box bg='tomato'  h="140px" w="100px"  minH='140px' minW="100px"></Box>
  <Box bg='tomato'  h="140px" w="100px"  minH='140px' minW="100px"></Box>
  <Box bg='tomato'  h="140px" w="100px"  minH='140px' minW="100px"></Box>
  <Box bg='tomato'  h="140px" w="100px"  minH='140px' minW="100px"></Box>
  <Box bg='tomato'  h="140px" w="100px"  minH='140px' minW="100px"></Box>
  <Box bg='tomato'  h="140px" w="100px"  minH='140px' minW="100px"></Box>
  <Box bg='tomato'  h="140px" w="100px"  minH='140px' minW="100px"></Box>
  <Box bg='tomato'  h="140px" w="100px"  minH='140px' minW="100px"></Box>
  <Box bg='tomato'  h="140px" w="100px"  minH='140px' minW="100px"></Box>
  <Box bg='tomato'  h="140px" w="100px"  minH='140px' minW="100px"></Box>
</SimpleGrid>



      </Box>

    </>
  )
}
