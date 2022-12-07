import {
  Container, Flex, Box, Heading, Link, Text, IconButton, Button, VStack, HStack, Wrap, WrapItem, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Textarea,
} from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn, MdFacebook, MdOutlineEmail, } from 'react-icons/md';
import { BsGithub, BsLinkedin, BsPerson } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState } from 'react';

export default function Contact() {

  const [response, setResponse] = useState("")
  const [data, setData] = useState({
    name: "",
    email: '',
    message: "",
    number: null,
  })


  let name
  let value

  const getData = (event) => {

    name = event.target.name
    value = event.target.value
    setData({ ...data, [name]: value })
  }




  const handelSubmitForm = async (event) => {
    event.preventDefault()
    const { name, email, message, number } = data;

    if (name && email && message && number) {
      const res = await fetch("https://portfolio-b1027-default-rtdb.firebaseio.com/contactForm.json",
        {
          method: "POST",
          header: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            name,
            email,
            message,
            number,
          }),
        });

      setResponse("Thanks for filling out our form!")
    }
    else {
      setResponse("Please Fill All The Fields")
    }

    setData({ name: "", email: "", message: "" , number:""})
  }

  return (
    <Container id="Contact"  maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box color="white" borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}>
                      {/* p={{ sm: 5, md: 5, lg: 5 }}> */}
          <Box >
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
                <Box  color="white" border="2px" borderColor="#dc143c" borderRadius="lg">
                  <Box m={6} color="#0B0E3F">
                    <VStack spacing={4} >
                      <FormControl id="name">
                        <FormLabel color="white">Your Name</FormLabel>
                        <InputGroup color="white" borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" value={data.name} name="name" onChange={getData} />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="email">
                        <FormLabel color="white" >Mail</FormLabel>
                        <InputGroup color="white" borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="email" size="md" value={data.email} name="email" onChange={getData} />
                        </InputGroup>
                      </FormControl>

                      <FormControl id="number">
                        <FormLabel color="white" >Phone No.</FormLabel>
                        <InputGroup color="white" borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdPhone color="gray.800" />}
                          />
                          <Input type="number" size="md" value={data.number} name="number" onChange={getData}  />
                        </InputGroup>
                      </FormControl>
                      
                      <FormControl id="message">
                        <FormLabel color="white" >Message</FormLabel>
                        <Textarea
                          name="message"
                          onChange={getData}
                          value={data.message}
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
                          onClick={handelSubmitForm}
                          w="full"
                          variant="solid"
                          bg="#dc143c"
                          color="white"
                          _hover={{}}>
                          Send Message
                        </Button>
                      </FormControl>

                      <Text color="white" > {response} </Text>

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