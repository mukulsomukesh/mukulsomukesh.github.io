import { Box, Flex, Image, Text } from "@chakra-ui/react";
import portfolio from "../Assets/profile.png";
import React, { useEffect } from "react";
import AOS from "aos";

function About() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <Box
      minH="fit-content"
      p="3%"
      pl="9%"
      pr="9%"
      id="About"
      data-aos="ace-up"
    >
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
          w={{ base: "full", sm: "full", md: "37%", xl: "35%" }}
          boxShadow="dark-lg"
          bg="#0b111b"
          borderRadius={"80px"}
        >
          {/* my profile image */}
          <Image src={portfolio} h="100%" borderRadius={"80px"} />
        </Box>

        {/* this box contain text about me */}
        <Box
          w={{ base: "95%", sm: "95%", md: "55%", xl: "65%" }}
          fontSize="md"
          textAlign={"justify"}
          minH="fit-content"
        >
          <Text mb="15px" data-aos="fade-up">
            I am Mukul Jatav, a software developer passionate about building
            scalable and impactful applications. With a BCA degree from CCSU
            University (2021), I began my journey as a technical content writer
            for GeeksforGeeks, authoring over 150 articles that sharpened my
            ability to communicate complex ideas effectively.
          </Text>
          <Text mb="15px" data-aos="fade-up">
            I gained hands-on development experience during my internship at a
            Salesken, where I worked closely with senior developers to
            expand my skills beyond the MERN stack, mastering jQuery and
            Metronic Bootstrap. This role introduced me to professional
            development practices and allowed me to make meaningful
            contributions.
          </Text>

          <Text mb="15px" data-aos="fade-up">
            Currently, I manage the development of letsworkwise.com a B2B propcurment tool at De's Technico Limited,
            transitioning it from an outsourced project to an in-house effort
            with a dedicated team of developers. Leveraging technologies like
            Next.js, Node.js, PostgreSQL, and AWS, I drive the platform’s
            technical growth, ensuring alignment with business goals.
          </Text>

          <Text mb="15px" data-aos="fade-up">
            My long-term goal is to excel as a developer and establish a tech
            company that delivers innovative solutions and inspires the next
            generation of developers.
          </Text>

          {/* <Text mb="15px" data-aos="fade-up">
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
          </Text> */}
        </Box>
      </Flex>
      {/* close flex */}
    </Box>
  );
}

export default About;
