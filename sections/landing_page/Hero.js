import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import Link from "next/link";
import { PhoneIcon } from "@chakra-ui/icons";
import LandinPageHeader from "../../components/Header.LandingPage";
const gradientAnimation = keyframes`
     0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
`;
export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${gradientAnimation}  6s ease infinite`;
  return (
    <Box width="100%" position={"relative"}>
      <Box
        width="100%"
        height="100vh"
        position="absolute"
        top="0"
        left="0"
        zIndex="-234"
        // opacity=".8"
        // backgroundSize="180% 180%"
        clipPath="polygon(0 0, 100% 0, 100% 29%, 0 85%)"
        animation={animation}
        bgGradient="linear(#B4BFF8 0%, #F8b4b4 25%, #f8e9b4 50%)"></Box>
      <Container maxW={"5xl"}>
        <LandinPageHeader />
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
              <Text as={"span"} position={"relative"}>
                Learn Anywhere,
              </Text>
              <br />
              <Text as={"span"} color={"blue.400"}>
                use everywhere!
              </Text>
            </Heading>
            <Text color={"gray.500"}>
              Snippy is a rich coding snippets app that lets you create your own
              code snippets, categorize them, and even sync them in the cloud so
              you can use them anywhere. All that is free!
            </Text>
            <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: "row" }}>
              <Link href="https://6138d7873a0d100007664956--eduappdashboard.netlify.app/signin">
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                  colorScheme={"blue"}
                  _hover={{ bg: "blue.100" }}>
                  Login Now
                </Button>
              </Link>
              <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
                Call Us
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}>
            <Box
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}>
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
