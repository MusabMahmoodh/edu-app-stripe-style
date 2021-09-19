import React, { ReactNode, useEffect, useState } from "react";

import { auth } from "../firebase/initFirebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  Divider,
  MenuItem,
  MenuList,
  Button,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import currentUser from "../models/user.models";
import { LinkItems, LinkItemsConfig } from "./link.items.data";
import { SIGN_IN } from "constants/routes";
import SpinnerGlobal from "@components/Spinner.global";

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isUserChecking, setIsUserChecking] = useState(true);
  const router = useRouter();
  const userSignOut = () => {
    setIsLoggingOut(true);
    signOut(auth)
      .then(async () => {
        setIsLoggingOut(false);
        currentUser.releaseUser();
        await router.push(SIGN_IN);
      })
      .catch((error) => {
        setIsLoggingOut(false);
        alert(error);
      });
  };
  useEffect(() => {
    setIsUserChecking(true);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        currentUser.userId = uid;
        const isUserCreated = await currentUser.getUserById();

        if (isUserCreated) {
          // setIsLoading(false);
          setIsUserChecking(false);
        } else {
          try {
            await router.push(SIGN_IN);
            setIsUserChecking(false);
          } catch (err) {
            alert(err.message);
          }
          // setFormState(3);
          // setIsLoading(false);
        }
        // ...
      } else {
        try {
          await router.push(SIGN_IN);
        } catch (err) {
          alert(err.message);
        }
        setIsUserChecking(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      {isUserChecking ? (
        <SpinnerGlobal />
      ) : (
        <>
          <SidebarContent
            onClose={() => onClose}
            display={{ base: "none", md: "block" }}
          />
          <Drawer
            autoFocus={false}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full">
            <DrawerContent>
              <SidebarContent onClose={onClose} />
            </DrawerContent>
          </Drawer>
          {/* mobilenav */}
          <MobileNav
            onOpen={onOpen}
            userSignOut={userSignOut}
            isLoggingOut={isLoggingOut}
          />
          <Box ml={{ base: 0, md: 60 }} p="4">
            {children}
          </Box>
        </>
      )}
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex
        h="20"
        alignItems="center"
        px="8"
        color="white"
        justifyContent="space-between"
        bg={"blue.100"}>
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          App Name
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      <Divider />
      {LinkItemsConfig.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        m="4"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "blue.500",
          color: "white",
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ userSignOut, onOpen, isLoggingOut, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={"blue.100"}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}>
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="primary"
        aria-label="open menu"
        color="white"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        color="white"
        fontWeight="bold">
        App Name
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="primary"
          aria-label="open menu"
          color="white"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              color="white"
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}>
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  color="white"
                  ml="2">
                  <Text fontSize="sm">Azeem</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}>
              <MenuItem>Profile</MenuItem>

              <MenuItem>
                {isLoggingOut ? (
                  <SpinnerGlobal />
                ) : (
                  <Button onClick={userSignOut}>Sign out</Button>
                )}
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
