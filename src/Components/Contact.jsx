import {
    Container, Flex, Box, Heading,Link, Text, IconButton, Button, VStack, HStack, Wrap, WrapItem, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Textarea, } from '@chakra-ui/react';
  import { MdPhone, MdEmail, MdLocationOn, MdFacebook, MdOutlineEmail, } from 'react-icons/md';
  import { BsGithub, BsLinkedin, BsPerson } from 'react-icons/bs';
  import AOS from 'aos';
import 'aos/dist/aos.css';

  export default function contact() {
    return (
      <Container  id="Contact"  bg="#0f1624" maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box color="white" borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem >
                  <Box>
                    <Heading>Take A Coffee And Chat With Me</Heading>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="fit-content"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #dc143c' }}
                          leftIcon={<MdPhone color="#dc143c" size="20px"></MdPhone>}>
                          +91-8630580027
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="fit-content"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #dc143c' }}
                          leftIcon={<MdEmail color="#dc143c" size="20px" />}>
                          mukuljatav1010@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="fit-content"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #dc143c' }}
                          leftIcon={<MdLocationOn color="#dc143c" size="20px" />}>
                          Saharanpur, Utter Pradesh, India
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
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
                  </Box>
                </WrapItem>
                <WrapItem >
                  <Box color="white" border="2px" borderColor="#dc143c" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl  id="name">
                          <FormLabel  color="white">Your Name</FormLabel>
                          <InputGroup  color="white" borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel  color="white" >Mail</FormLabel>
                          <InputGroup  color="white"  borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel  color="white" >Message</FormLabel>
                          <Textarea
                           color="white" 
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl >
                          <Button
                           w="full"
                            variant="solid"
                            bg="#dc143c"
                            color="white"
                            _hover={{}}>
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }