import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  useColorModeValue,
  Text,
  Button,
  Image,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { memo, useEffect, useRef, useState } from "react";
import {
  onAuthStateChanged,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../firebase/initFirebase";
import PhoneNumberForm from "../containers/PhoneNumber";
import OTPForm from "../containers/OTPForm";
import RegisterForm from "../containers/RegisterForm";
import { useRouter } from "next/router";
import currentUser from "../models/user.models";

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
export default function SignIn() {
  const router = useRouter();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [mobNumber, setMobNumber] = useState();
  const [formState, setFormState] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const [OTP, setOTP] = useState("");
  const [regData, setRegData] = useState({
    firstName: "",
    lastName: "",
  });
  const element = useRef(null);

  const setUpRecaptcha = async () => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            onSignInSubmit((next = true));
          },
        },
        auth
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onSignInSubmit = async (next) => {
    setIsLoading(true);

    // e.preventDefault();
    if (!next) {
      setUpRecaptcha();
    }

    const phoneNumber = `+${mobNumber}`;
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setFormState(2);
        // ...
        // const code = getCodeFromUserInput();
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        window.recaptchaVerifier?.render().then(function (widgetId) {
          grecaptcha.reset(widgetId);
        });
        console.log(error);
      });

    setIsLoading(false);
  };

  const onOTPsubmit = () => {
    setIsLoading(true);
    window.confirmationResult
      .confirm(OTP)
      .then(async (result) => {
        // User signed in successfully.

        currentUser.userId(result.user.uid);
        setFormState(3);
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        window.recaptchaVerifier?.render().then(function (widgetId) {
          grecaptcha.reset(widgetId);
        });
        console.log(error);
      });
    setIsLoading(false);
  };

  const registerUser = async (values) => {
    setIsLoading(true);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        currentUser.userId = uid;
        currentUser.updateUserAllFields(values);
        await currentUser.save();
        await router.push("/");
      } else {
      }
    });
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setMobNumber(user.phoneNumber);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        currentUser.userId = uid;
        const isUserCreated = await currentUser.getUserById();

        if (isUserCreated) {
          setIsLoading(false);
          try {
            await router.push("/");
          } catch (err) {
            alert(err.message);
          }
        } else {
          setFormState(3);
          setIsLoading(false);
        }
        // ...
      } else {
        // User is signed out
        // ...
        setIsLoading(false);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const animation = prefersReducedMotion
    ? undefined
    : `${gradientAnimation}  6s ease infinite`;
  return (
    <Box width="100%" position={"relative"}>
      {/* Potrait */}
      <Box
        width="100%"
        height="100vh"
        position="absolute"
        top="0"
        left="0"
        zIndex="-234"
        // opacity=".8"
        // backgroundSize="180% 180%"
        d={{ base: "block", md: "none" }}
        clipPath=" polygon(0 0, 100% 0, 100% 36%, 0 50%)"
        animation={animation}
        bgGradient="linear(#B4BFF8 0%, #F8b4b4 25%, #f8e9b4 50%)"></Box>
      {/* Landsacape */}
      <Box
        width="100%"
        height="100vh"
        position="absolute"
        top="0"
        left="0"
        zIndex="-234"
        // opacity=".8"
        // backgroundSize="180% 180%"
        d={{ base: "none", md: "block" }}
        clipPath="polygon(0 0, 100% 0, 100% 30%, 0 67%)"
        animation={animation}
        bgGradient="linear(#B4BFF8 0%, #F8b4b4 25%, #f8e9b4 50%)"></Box>
      <Container maxW={"5xl"}>
        <Box p="2">
          <Heading size="md">App Name</Heading>
        </Box>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Box
              role={"group"}
              p={6}
              maxW={"330px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}>
              <Heading size="md" align={"center"} p={8}>
                Ready to rock’in the class?
              </Heading>
              {isLoading ? (
                <h5>Loading...</h5>
              ) : formState === 1 ? (
                <PhoneNumberForm
                  mobNumber={mobNumber}
                  setMobNumber={setMobNumber}
                  onSignInSubmit={onSignInSubmit}
                  ref={element}
                />
              ) : formState === 2 ? (
                <OTPForm OTP={OTP} setOTP={setOTP} confirmOTP={onOTPsubmit} />
              ) : formState === 3 ? (
                <RegisterForm
                  regData={regData}
                  setRegData={setRegData}
                  onRegisterSubmit={registerUser}
                  mobNumber={mobNumber}
                />
              ) : (
                <h3>User logged in</h3>
              )}
            </Box>
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
