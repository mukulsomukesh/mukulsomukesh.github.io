import { Text, Box, Flex, HStack, IconButton, Button, useDisclosure, Stack, Spacer } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { Link, animateScroll as scroll } from "react-scroll";
import { MdDownloadForOffline } from 'react-icons/md';

const Links = ["Home", "About", "Skill's", "Projects", "Contact"];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
      <Box px={4} pl="3%" pr="3%" as="header" style={{ position: 'fixed', zIndex: '1', right: "8px" }} w="full" bg="inherit">

        {/* flex that contain all the options */}
        <Flex h={16} alignItems={'center'} >
          <Spacer />
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
              // color="#dc143c"
              fontWeight={"bold"}
              as={'nav'}
              spacing={8}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Link
                  style={{ color: "#ececed", fontWeight: "semibold", cursor: "pointer", fontSize: "15px", }}
                  activeClass="active"
                  key={link} to={link} spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  <Text > {link.toUpperCase()} </Text>
                </Link>
              ))}



              <a href={require("../Assets/Mukul-Jatav-Resume.pdf")} download="Mukul-Jatav-Resume">

                <Button ml="-15px" size="md" variant="ghost"
                  _hover={{ borderBottom: "4px solid #dc143c", }}
                  rightIcon={<MdDownloadForOffline size="20px" color="#dc143c"  ></MdDownloadForOffline>}>
                  RESUME
                </Button>

              </a>


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
  );
}