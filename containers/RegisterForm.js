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
  ButtonGroup,
  Radio,
} from "@chakra-ui/react";
import {
  InputControl,
  RadioGroupControl,
  ResetButton,
  SubmitButton,
} from "formik-chakra-ui";
import { Formik, Field, Form, FormErrorMessage } from "formik";
import * as Yup from "yup";
import { USER_ROLES } from "models/constants.models";

const initialValues = {
  userType: USER_ROLES.STUDENT,
  // activeUserType: USER_ROLES.STUDENT,
  mobileNumber: null,
  email: null,
  firstName: "",
  lastName: "",
  dateOfBirth: new Date(),
  profilePic: null,
};
const validationSchema = Yup.object({
  userType: Yup.string().required(),
  // activeUserType: Yup.string().required(),
  mobileNumber: Yup.string().required(),
  email: Yup.string().email().nullable(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  dateOfBirth: Yup.date().required(),
  profilePic: Yup.string().nullable(),
  // tutorQualification: String?,
});
const RegisterForm = ({ mobNumber, regData, setRegData, onRegisterSubmit }) => {
  return (
    <React.Fragment>
      <Text align={"center"}>Register yourself with us!</Text>
      <Stack>
        <Formik
          initialValues={{ ...initialValues, mobileNumber: mobNumber }}
          onSubmit={onRegisterSubmit}
          validationSchema={validationSchema}>
          {({ handleSubmit, values, errors }) => (
            <Box
              as="form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}>
              <InputControl name="firstName" label="First Name" />
              <InputControl name="lastName" label="Last Name" />
              <InputControl name="email" label="Email" type="email" />
              <RadioGroupControl name="userType" label="User Type">
                <Radio value={USER_ROLES.STUDENT}>{USER_ROLES.STUDENT}</Radio>
                <Radio value={USER_ROLES.TUTOR}>{USER_ROLES.TUTOR}</Radio>
              </RadioGroupControl>
              <InputControl name="dateOfBirth" label="DoB" type="date" />
              <InputControl name="profilePic" label="profilePic" />

              <ButtonGroup marginY={10}>
                <SubmitButton colorScheme="blue">Submit</SubmitButton>
                <ResetButton colorScheme="blue">Reset</ResetButton>
              </ButtonGroup>
            </Box>
          )}
        </Formik>
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
