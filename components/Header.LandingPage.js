import { ReactNode } from "react";
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
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Blogs", "About", "Contact Us"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}>
    {children}
  </Link>
);

export default function HeaderLanding() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box p="2">
            <Heading size="md">App Name</Heading>
          </Box>
          <Spacer />
          <Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </Box>
          <IconButton
            size="md"
            width="80px"
            fontWeight={"normal"}
            colorScheme={"blue"}
            // bg={"blue.400"}
            _hover={{ bg: "blue.100" }}
            icon={
              isOpen ? (
                <CloseIcon color={"gray.300"} />
              ) : (
                <HamburgerIcon color={"gray.300"} />
              )
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            rounded={"full"}
            onClick={isOpen ? onClose : onOpen}
          />

          <Flex alignItems={"center"}>
            <Menu>
              <MenuList>
                <MenuItem>Blogs</MenuItem>
                <MenuItem>Courses</MenuItem>
                <MenuDivider />
                <MenuItem>Contact Us</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
