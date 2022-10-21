import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Spacer,
} from '@chakra-ui/react';
import {HamburgerIcon, CloseIcon, SunIcon, MoonIcon} from "@chakra-ui/icons"
import { BsFillSunFill,BsFillMoonFill } from 'react-icons/bs';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ["Home","About","Skill's","Projects","Contact","Resume"];


export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4} pl="3%" pr="3%"  as="header" position="fixed" bg="inherit" w="full">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
        <Box as="b" fontSize={"30px"}  color="#dc143c"> Mukul Jatav </Box>

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
              as={'nav'}
              spacing={5}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Link key={link} as="b" >{link}</Link>
              ))}
            </HStack>
             {/* <BsFillSunFill size="25px" />  <BsFillMoonFill size="25px" color='black' />  */}
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link key={link} as="b">{link}</Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}