import {
  Flex,
  Link,
  Box,
  Text,
  SimpleGrid,
  Image,
  Spacer,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { GiAerialSignal } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";

import chatApp from "../Assets/chatApp.png";
import fileSharingApp from "../Assets/fileSharing.png";
import nnnow from "../Assets/nnnow.png";

import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const projectData = [
  {
    name: "Chat Application",
    img: chatApp,
    desc: `The application provides an user-friendly interface for users to engage in real-time conversations with others. It incorporates a range of features such as sign up, sign in, logout, profile image customization, user search, one-to-one chat, group creation, group chat, group administration, and message notifications.`,
    github: "https://github.com/mukulsomukesh/chat-application/",
    deploy: "https://chat-app-ca.netlify.app/",
    TechStack: "React JS | Node JS | Express JS | MongoDB | Redux | Socket.io | Tailwind CSS"
  }, {
    name: "File Sharing App",
    img: fileSharingApp,
    desc: `This File Sharing App enable user to signup, login, upload a file from his device, setting a password to protect it, and share this file with others. with genarated link, anyone can access the file and download the file with shared link. Additionally, users can modify, delete, change or remove the password for his uploaded file. `,
    github: "https://github.com/mukulsomukesh/file-sharing-app",
    deploy: "https://file-sharing-application.netlify.app/",
    TechStack: "React JS | Node JS | Express JS | MongoDB | Redux | Chakkra UI"
  }, {
    name: "Nnnow Clone",
    img: nnnow,
    desc: `This project is a clone of “nnnow.com” with backend integration, which is an e-commerce store & here we implemented some functionalities like sign up, sign in, logout, product search by name or category, filters, sorting, add to cart, add to wishlist, and Admin panel to add or remove products etc`,
    github: "https://github.com/mukulsomukesh/trendy-vibes",
    deploy: "https://trendy-vibes-imdebabrata-imdebabrata.vercel.app/",
    TechStack: "React JS | Node JS | Express JS | MongoDB | Redux | Chakkra UI"
  },
]

function Project() {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <Box
      data-aos="fade-up"
      id="Projects"
      mb="50px"
      minH="100vh"
      h="fit-content"
      w="100%"
      pr="10%"
      pl="10%"
      p="7%"
      pt="5%"
    >
      <Box m="auto" mb="50px" w="fit-content" color="#dc143c">
        <Text fontSize="3xl" as="b">
          My Creative Projects Section
        </Text>
      </Box>

      <SimpleGrid minChildWidth="290px" spacing="30px">
        {projectData?.map((item) => (
          <Box
            data-aos="fade-up"
            h="fit-content"
            key={item.id}
            bg="#0b111b"
            p="12px"
            minH="fit-content"
            borderRadius="10px"
          >

            <Image
              w="full"
              h="200px"
              borderRadius={"10px"}
              src={item.img}
              alt="Dan Abramov"
            />

            {/* this flex contain name, live-preview & github button */}
            <Flex w="100%" mt="20px" >
              {/* name */}
              <Text color={"#dc143c"} fontSize="2xl">
                {item.name}
              </Text>
              <Spacer />

              {/* live preview */}
              <Tooltip label='Live Preview Link' hasArrow bg="#dc143c" color='white' fontSize='md'>
                <Link href={item.deploy} isExternal>
                  <IconButton
                    variant="ghost"
                    size="md"
                    isRound={true}
                    _hover={{ bg: "#dc143c" }}
                    icon={<GiAerialSignal size={"30px"} />}
                  />
                </Link>
              </Tooltip>

              {/* github */}
              <Tooltip label='Github Link' hasArrow bg="#dc143c" color='white' fontSize='md'>
                <Link href={item.github} isExternal>
                  {/* <BsGithub size="20px" />  */}
                  <IconButton
                    variant="ghost"
                    size="md"
                    isRound={true}
                    _hover={{ bg: "#dc143c" }}
                    icon={<BsGithub size={"30px"} />}
                  />
                </Link>
              </Tooltip>
            </Flex>

            <Text mt="10px" textAlign={"justify"} >
              {item.desc}
            </Text>
            <Flex flexWrap={"wrap"} mt="10px" >
              <Text color={"#dc143c"} mr="10px" as="b">
                Tect Stack:
              </Text>
              <Text> {item.TechStack} </Text>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Project;
