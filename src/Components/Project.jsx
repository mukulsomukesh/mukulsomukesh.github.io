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
import todo from "../Assets/todo_home.png";

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
    TechStack: "React JS | Node JS | Express JS | MongoDB | Redux | chakra UI"
  }, {
    name: "Nnnow Clone",
    img: nnnow,
    desc: `This project is a clone of “nnnow.com” with backend integration, which is an e-commerce store & here we implemented some functionalities like sign up, sign in, logout, product search by name or category, filters, sorting, add to cart, add to wishlist, and Admin panel to add or remove products etc`,
    github: "https://github.com/mukulsomukesh/trendy-vibes",
    deploy: "https://trendy-vibes-imdebabrata-imdebabrata.vercel.app/",
    TechStack: "React JS | Node JS | Express JS | MongoDB | Redux | chakra UI"
  }, {
    name: "TODO Application",
    img: todo,
    desc: `Welcome to our super simple TODO app! Here, you can easily sign up and log in. Once you're in, you can create tasks, update them if things change, and even delete tasks when you're done. I make sure everything is easy to use, Let's get organized and productive together!`,
    github: "https://github.com/mukulsomukesh/TODO",
    deploy: "https://lighthearted-fox-2d89be.netlify.app/signup",
    TechStack: "React JS | Node JS | Express JS | MongoDB | Redux | chakra UI"
  },{
    name: "Tic Tac Toe",
    img: "https://camo.githubusercontent.com/7d39b4a94a79f7c0e4005268cc37b0b5e237f175bf9b446075d5b606dfc6f5dc/687474703a2f2f7265732e636c6f7564696e6172792e636f6d2f6466726879366d336d2f696d6167652f75706c6f61642f76313639323137373832312f6e73687269757932646c3138397931746f786d6b2e706e67",
    desc: `This React app is built using React.js, Redux for efficient state management, and styled with Chakra UI for a modern interface. It allows users to play friendly matches with friends or challenge the computer in solo gameplay. With its intuitive design and smooth functionality, it provides an engaging experience for all users.`,
    github: "https://github.com/mukulsomukesh/tic-tac-toe",
    deploy: "https://tic-tac-toe-mj.netlify.app/",
    TechStack: "React JS | Redux | chakra UI"
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
      <Box m="auto" mb="50px" w="fit-content" color="#dc143c"  >
        <Text fontSize="3xl" as="b">
          My Creative Projects Section
        </Text>
      </Box>

      <SimpleGrid  spacing="30px" columns={{ sm: 1, md: 2, lg: 3 }}>
        {projectData?.map((item) => (
          <Box

            data-aos="fade-up"
            h="fit-content"
            key={item.id}
            bg="#0b111b"
            p="12px"
            minH="fit-content"
            borderRadius="10px"
            style={{ transition: "box-shadow 0.3s" }} // Add transition for smooth effect
            _hover={{ boxShadow: "0 0 10px 2px crimson" }} // Define glow effect on hover

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
