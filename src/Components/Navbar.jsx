import { ReactNode } from 'react';
import { Box, Flex, Avatar, HStack,  IconButton, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue, Stack, Spacer,Portal } from '@chakra-ui/react';
import {HamburgerIcon, CloseIcon, SunIcon, MoonIcon} from "@chakra-ui/icons"
import { BsFillSunFill,BsFillMoonFill } from 'react-icons/bs';
import { Link, animateScroll as scroll } from "react-scroll";
import { MdDownloadForOffline } from 'react-icons/md';

const Links = ["Home","About","Skill's","Projects","Contact"];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box   px={4} pl="3%" pr="3%"  as="header" style={{ position: 'fixed', zIndex: '1' }}  bg="inherit" w="full">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
        <Spacer/>
          <IconButton
            size={'md'}
            bg="#dc143c"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
            // color=""
              _hover={{color:"white"}} 
              // color="#dc143c"
              fontWeight={"bold"}
              as={'nav'}
              spacing={5}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Link
                key={link} to={link}  spy={true}
    smooth={true}
    offset={-70}
    duration={500}>
      <Box p="10px"  _hover={{ cursor: "pointer", borderBottom:"4px solid #dc143c", color:"#dc143c", transform: "scale(1.1,1.1)"}}>{link}</Box></Link>
              ))}


              {/* <a href={require("../Assets/Mukul-Jatav-Resume.pdf")} download="Mukul-Jatav-Resume"> */}
              {/* <Box p="10px"  _hover={{ cursor: "pointer", borderBottom:"4px solid #dc143c", color:"#dc143c", transform: "scale(1.1,1.1)"}}>Resume</Box> */}

              {/* <Button size="md"  height="48px"  width="fit-content" variant="ghost" color="#dc143c" */}
                        {/* _hover={{ color:"white",cursor: "pointer", borderBottom:"4px solid #dc143c", transform: "scale(1.1,1.1)" }} */}
                        {/* rightIcon={<MdDownloadForOffline  size="25px" ></MdDownloadForOffline>}> */}
                        {/* Resume */}
                      {/* </Button> */}

              {/* </a> */}

            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link key={link} as="b" to="link" spy={true}
                smooth={true}
                offset={-70}
                duration={500}>{link}</Link>
              ))}

            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}