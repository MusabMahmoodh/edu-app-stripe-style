import React from "react";
import OtpInput from "react-otp-input";
import { Text, Stack, Button } from "@chakra-ui/react";
const OTPForm = ({ OTP, setOTP, confirmOTP }) => {
  return (
    <React.Fragment>
      <Text align={"center"}>Enter the OTP send to your mobile number</Text>
      <Stack spacing={12} align={"center"}>
        {/* <form style={{ zIndex: "9999" }}> */}
        <OtpInput
          value={OTP}
          onChange={(val) => {
            setOTP(val);
            console.log(val);
          }}
          numInputs={6}
          separator={<span> </span>}
          isInputNum="true"
          shouldAutoFocus="true"
          containerStyle={{
            maxWidth: "600px",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          inputStyle={{
            height: "52px",
            fontSize: "14px",
            paddingLeft: "10px",
            paddingRight: "10px",
            width: "100%",
            marginLeft: "10px",
            borderRadius: "16px",
            outline: "none",

            caretColor: "red",

            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
            borderTopRightRadius: "16px",
            borderBottomRightRadius: "16px",
            backgroundColor: "#fff",
          }}
          focusStyle={{
            backgroundColor: "#F3F5F9",
          }}
        />
        {/* </form> */}
        <Button mt="3" onClick={() => confirmOTP()} colorScheme="blue">
          Next
        </Button>
      </Stack>
    </React.Fragment>
  );
};

export default OTPForm;
