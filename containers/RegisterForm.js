import React from "react";
import PhoneInput from "react-phone-input-2";
import {
  Box,
  Text,
  Stack,
  Image,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
const RegisterForm = ({ regData, setRegData, onRegisterSubmit }) => {
  return (
    <React.Fragment>
      <Text>Register yourself with us!</Text>
      <Stack spacing={4}>
        <FormControl id="firstname">
          <FormLabel>First Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="lastname">
          <FormLabel>Last Name</FormLabel>
          <Input type="text" />
        </FormControl>
        {/* <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl> */}
        <Stack spacing={10}>
          <Stack
            direction={{ base: "column", sm: "row" }}
            align={"start"}
            justify={"space-between"}>
            {/* <Checkbox>Remember me</Checkbox> */}
            {/* <Link color={"blue.400"}>Forgot password?</Link> */}
          </Stack>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}>
            Register
          </Button>
        </Stack>
      </Stack>

      {/* <Box
        as="form"
        onSubmit={(e) => {
          e.preventDefault();
          onRegisterSubmit();
        }}>
        <Label htmlFor="firstname"></Label>
        <Input
          name="firstname"
          id="firstname"
          mb={3}
          value={regData.firstName}
          onChange={(e) =>
            setRegData({
              firstName: e.target.value,
              lastName: regData.lastName,
            })
          }
        />
        <Label htmlFor="lastname">Last Name</Label>
        <Input
          name="lastname"
          id="lastname"
          mb={3}
          value={regData.lastName}
          onChange={(e) => {
            setRegData({
              lastName: e.target.value,
              firstName: regData.firstName,
            });
          }}
        />

        <Button>Register</Button>
      </Box> */}
    </React.Fragment>
  );
};

export default RegisterForm;
