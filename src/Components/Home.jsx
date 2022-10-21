import { Flex, VStack, Box, SimpleGrid, Heading, Button, Image } from '@chakra-ui/react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function Home() {
    return (
        <>
            <SimpleGrid w="100%" minH={"100vh"} h="fit-content" columns={[1, 1, 2]} pr="10%" pl="10%">
                <Box pt="130px" minH={"80vh"}>
                    <Box h="fit-content"> <Heading as='h2' fontSize={{ sm: "40px", md: '50px', lg: '65px' }} > Hi, </Heading></Box>
                    <Flex h="fit-content" >  <Heading as='h2' fontSize={{ sm: "40px", md: '50px', lg: '65px' }} >  I am  Mukul Jatav </Heading> </Flex>
                    <Box h="fit-content" mt="8px">  <Heading as='h2' fontSize={{ sm: "25px", md: '35px', lg: '40px' }} >  Full Stack Web Developer </Heading> </Box>
                    <Box mt="45px">  <Button bg='#dc143c' color="white" w="130px" h="45px"  >Resume</Button> </Box>
                    <Flex gap="3" mt="50px" >
                        <BsLinkedin size={"25px"} />
                        <BsGithub mr="5" ml="5" size={"25px"} />
                    </Flex>
                </Box>

                <Box mt="8%" >
                    <Image src='https://shiny-torte-03f744.netlify.app/assets/img/perfil.png' h="100%" w="100%" alt='Dan Abramov' />
                </Box>
            </SimpleGrid>
        </>
    )
}

export default Home