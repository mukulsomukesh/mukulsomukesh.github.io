import { Flex,Link, HStack,IconButton, Box, SimpleGrid, Heading, Button, Image } from '@chakra-ui/react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function Home() {
    return (
        <>
            < SimpleGrid id="home" w="100%" minH={"100vh"} h="fit-content" columns={[1, 1, 2]} pr="10%" pl="10%">
                <Box pt="130px" minH={"80vh"}>
                    <Box h="fit-content"> <Heading as='h2' fontSize={{ sm: "40px", md: '50px', lg: '65px' }} > Hi, </Heading></Box>
                    <Flex h="fit-content" >  <Heading as='h2' fontSize={{ sm: "40px", md: '50px', lg: '65px' }} >  I am  Mukul Jatav </Heading> </Flex>
                    <Box h="fit-content" mt="8px">  <Heading as='h2' fontSize={{ sm: "25px", md: '35px', lg: '40px' }} >  Full Stack Web Developer </Heading> </Box>
                      <Button bg='#dc143c' color="white" w="130px" h="45px" mt="40px" >  <Link align="center" p="12px" w="full" h="full" href='https://drive.google.com/file/d/1Z-3FKH_AuRn-iV936-kWonl5io1OgoBE/view' isExternal> Resume </Link> </Button> 
                    
                    <HStack
                    mt="40px"
                      spacing={5}
                      alignItems="flex-start">
                    <Link href='https://www.linkedin.com/in/mukul-jatav/' isExternal>                        
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#dc143c' }}
                        icon={<BsLinkedin size="28px" />}
                      />
                      </Link>

                       <Link href='https://github.com/mukulsomukesh' isExternal>
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#dc143c' }}
                        icon={<BsGithub size="28px" />}
                      />
                      </Link>
                    </HStack>

                    {/* <Flex gap="3" mt="50px" >
                        <BsLinkedin size={"25px"} />
                        <BsGithub mr="5" ml="5" size={"25px"} />
                    </Flex> */}
                </Box>

                <Box mt="8%" >
                    <Image src='https://shiny-torte-03f744.netlify.app/assets/img/perfil.png' h="100%" w="100%" alt='Dan Abramov' />
                </Box>
            </SimpleGrid>
        </>
    )
}

export default Home