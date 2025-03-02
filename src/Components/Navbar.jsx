import { Text, Box, Flex, HStack, IconButton, Stack, Spacer, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";

const Links = ["Home", "About", "Work Experiance", "Skill's", "Projects", "Contact"];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={4} pl="3%" pr="3%" as="header" style={{ position: 'fixed', zIndex: '1', right: "8px" }} w="full" bg="inherit">
      {/* Flex containing all the options */}
      <Flex h={16} alignItems={'center'}>
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
            fontWeight={"bold"}
            as={'nav'}
            spacing={8}
            display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <Link
                style={{
                  color: "#ececed",
                  fontWeight: "semibold",
                  cursor: "pointer",
                  fontSize: "15px",
                }}
                activeClass="active"
                key={link}
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <Text
                  _hover={{
                    borderBottom: "3px solid #dc143c",
                    color: "#dc143c",
                    transition: "all 0.5s ease",
                  }}
                >
                  {link.toUpperCase()}
                </Text>
              </Link>
            ))}
          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <Link key={link} to={link} spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <Text
                  _hover={{
                    borderBottom: "2px solid #dc143c",
                    color: "#dc143c",
                    transition: "all 0.3s ease",
                  }}
                >
                  {link}
                </Text>
              </Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
