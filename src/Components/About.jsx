import { Box, Flex, Image, Text } from "@chakra-ui/react";
import portfolio from "../Assets/profile.png";
import React, { useEffect } from "react";
import AOS from 'aos';

function About() {

  useEffect(() => {
    AOS.init({});
  }, [])

  return (
    <Box minH="fit-content" p="3%" pl="13%" pr="13%" id="About" data-aos="ace-up" >
      {/* about me text, box */}
      <Box m="auto" mb="50px" w="fit-content" color="#dc143c">
        <Text fontSize="3xl" as="b">
          About me
        </Text>
      </Box>

      {/* this flex contain my image & about me text */}
      <Flex
        flexDirection={{ base: "column", sm: "column", md: "row", xl: "row" }}
        gap="40px"
        h="full"
        w="fit-content"
        m="auto"
        alignItems={"center"}
      >
        {/* this box contain my profile image */}
        <Box
          data-aos="fade-up"
          h="400px"
          w={{ base: "full", sm: "full", md: "37%", xl: "37%" }}
          boxShadow="dark-lg"
          bg="#0b111b"
          borderRadius={"80px"}
        >
          {/* my profile image */}
          <Image src={portfolio} h="100%" borderRadius={"80px"} />
        </Box>

        {/* this box contain text about me */}
        <Box
          w={{ base: "95%", sm: "95%", md: "55%", xl: "55%" }}
          fontSize="md"
          textAlign={"justify"}
          minH="fit-content"
        >
          <Text mb="15px" data-aos="fade-up">
            {" "}
            Hello! My name is Mukul Jatav and I am an full stack web developer with experience in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.{" "}
          </Text>
          <Text mb="15px" data-aos="fade-up">
            {" "}
            I completed my BCA (Bachelor of Computer Applications) in 2021 from Saharanpur Institute of Advanced Studies..{" "}
          </Text>
       
          <Text mb="15px" data-aos="fade-up">
            {" "}
            I have strong problem-solving skills, and a proactive work approach, and excel in team collaboration with
            excellent communication. Committed to delivering quality work within deadlines, I am a quick learner, adaptable,
            detail-oriented, and passionate about writing optimized code.{" "}
          </Text>
        </Box>
      </Flex>
      {/* close flex */}
    </Box>
  );
}

export default About;
