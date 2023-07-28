import {
  Flex,
  Link,
  HStack,
  IconButton,
  Box,
  Heading,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Home() {
  return (
      <Box
        pt={{ base: "45%", md: "40%", lg: "15%" }}
        id="Home"
        w="fit-content"
        m="auto"
        minH={"100vh"}
        h="fit-content"
        pr="10%"
        pl="10%"
        textAlign={"center"}
      >
        {/* welcome text  */}
        <Flex gap="20px" w="fit-content" m="auto" mb="15px">
          <Heading as="h2" fontSize={{ base: "25px", md: "50px", lg: "65px" }}>
            Hi, I am
          </Heading>
          <Heading
            as="h2"
            fontSize={{ base: "25px", md: "50px", lg: "65px" }}
            color="#dc143c">
            Mukul Jatav
          </Heading>
        </Flex>

        {/* full stack heading */}
        <Heading as="h2" fontSize={{ base: "20px", md: "40px", lg: "45px" }}>
          {" "}
          Full Stack Web Developer{" "}
        </Heading>

        {/* resume button */}
        <Link
          href="https://drive.google.com/file/d/1Z-3FKH_AuRn-iV936-kWonl5io1OgoBE/view"
          isExternal
        >
          <Button
            _hover={{ border: "2px", background: "#0f1624", color: "#dc143c" }}
            bg="#dc143c"
            color="white"
            w="130px"
            h="45px"
            mt="40px"
          >
            Resume
          </Button>
        </Link>

        {/* linkdin & github icon button */}
        <HStack
          w="fit-content"
          pt="30px"
          m="auto"
          spacing={5}
          alignItems="flex-start"
        >
          {/* linkdin icon button */}
          <Tooltip label="Let's Connect on Linkedin" hasArrow bg="#dc143c" color='white' fontSize='md'>
          <Link href="https://www.linkedin.com/in/mukul-jatav/" isExternal>
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

          {/* github icon button */}
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
      </Box>
  );
}

export default Home;
