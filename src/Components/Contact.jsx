import {
  Container,
  Flex,
  Box,
  Heading,
  Link,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Tooltip,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";

export default function Contact() {
  // create stats for accepting form data
  const [response, setResponse] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    number: null,
  });

  let name;
  let value;

  // get data to form
  const getData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setData({ ...data, [name]: value });
  };

  // this function handel form data post request
  const handelSubmitForm = async (event) => {
    event.preventDefault();
    const { name, email, message, number } = data;

    // check if user field all the fields
    if (name && email && message && number) {
      const res = await fetch(
        "https://portfolio-b1027-default-rtdb.firebaseio.com/contactForm.json",
        {
          method: "POST",
          header: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            message,
            number,
          }),
        }
      );

      // thanku message
      setResponse("Thanks for filling out our form!");
    } else {
      // error message
      setResponse("Please Fill All The Fields");
    }

    setData({ name: "", email: "", message: "", number: "" });
  };

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    // container
    <Container minH="100vh" h="fit-content" id="Contact" maxW="100vw" centerContent overflow="hidden" data-aos="zoom-in">
      {/* this flex contain contact info & form  */}
      <Flex>
        {/* this box contain contact info like my number, email, etc */}
        <Box borderRadius="lg" m={{ sm: 4, md: 16, lg: 10 }}>
          <Box>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  {/* message */}
                  <Heading>Take A Coffee And Chat With Me</Heading>

                  {/* this box contain my-number, email, & address  */}
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      {/* mobile number */}
                      <Button
                        size="md"
                        height="48px"
                        width="fit-content"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #dc143c" }}
                        leftIcon={
                          <MdPhone color="#dc143c" size="20px"></MdPhone>
                        }
                      >
                        +91-8630580027
                      </Button>

                      {/* email address */}
                      <Button
                        size="md"
                        height="48px"
                        width="fit-content"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #dc143c" }}
                        leftIcon={<MdEmail color="#dc143c" size="20px" />}
                      >
                        mukuljatav1010@gmail.com
                      </Button>

                      {/* my address, city & state */}
                      <Button
                        size="md"
                        height="48px"
                        width="fit-content"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #dc143c" }}
                        leftIcon={<MdLocationOn color="#dc143c" size="20px" />}
                      >
                        Saharanpur, Utter Pradesh, India
                      </Button>
                    </VStack>
                    {/* close vstack */}
                  </Box>
                  {/* close box  */}

                  {/* this HStack contain github & linkdin icon */}
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    {/* linkdin icon */}
                    <Tooltip label="Let's Connect on Linkedin" hasArrow bg="#dc143c" color='white' fontSize='md'>

                      <Link
                        href="https://www.linkedin.com/in/mukul-jatav/"
                        isExternal
                      >
                        <IconButton
                          aria-label="facebook"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: "#dc143c" }}
                          icon={<BsLinkedin size="28px" />}
                        />
                      </Link>
                    </Tooltip>

                    {/* github icon */}
                    <Tooltip label="My Github Profile" hasArrow bg="#dc143c" color='white' fontSize='md'>
                      <Link href="https://github.com/mukulsomukesh" isExternal>
                        <IconButton
                          aria-label="github"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: "#dc143c" }}
                          icon={<BsGithub size="28px" />}
                        />
                      </Link>
                    </Tooltip>
                  </HStack>
                  {/* close HStack that contain github & linkdin icon */}
                </Box>
                {/* close box */}
              </WrapItem>

              {/* contact me form */}
              <WrapItem>
                <Box
                  color="white"
                  border="2px"
                  borderColor="#dc143c"
                  borderRadius="lg"
                >
                  <Box m={6} color="#0B0E3F">
                    <VStack spacing={4}>
                      <FormControl id="name">
                        <FormLabel color="white">Your Name</FormLabel>
                        <InputGroup color="white" borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input
                            type="text"
                            size="md"
                            value={data.name}
                            name="name"
                            onChange={getData}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="email">
                        <FormLabel color="white">Mail</FormLabel>
                        <InputGroup color="white" borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input
                            type="email"
                            size="md"
                            value={data.email}
                            name="email"
                            onChange={getData}
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl id="number">
                        <FormLabel color="white">Phone No.</FormLabel>
                        <InputGroup color="white" borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdPhone color="gray.800" />}
                          />
                          <Input
                            type="number"
                            size="md"
                            value={data.number}
                            name="number"
                            onChange={getData}
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl id="message">
                        <FormLabel color="white">Message</FormLabel>
                        <Textarea
                          name="message"
                          onChange={getData}
                          value={data.message}
                          color="white"
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl>
                        <Button
                          onClick={handelSubmitForm}
                          w="full"
                          variant="solid"
                          bg="#dc143c"
                          color="white"
                          _hover={{}}
                        >
                          Send Message
                        </Button>
                      </FormControl>

                      <Text color="white"> {response} </Text>
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
