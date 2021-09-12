import React from "react";
import PhoneInput from "react-phone-input-2";
import { Text, Stack, Button } from "@chakra-ui/react";
const PhoneNumberForm = ({ mobNumber, setMobNumber, onSignInSubmit, ref }) => {
  return (
    <Stack spacing={12}>
      <Text align={"center"}>
        Enter your mobile number to <br /> register or login App
      </Text>
      <div id="recaptcha-container" ref={ref}></div>
      <Stack spacing={12}>
        <PhoneInput
          // onlyCountries={["lk"]}
          country="lk"
          value={mobNumber}
          onChange={setMobNumber}
          // disableDropdown={true}
          countryCodeEditable={false}
          placeholder="Mobile Number"
          containerStyle={{
            maxWidth: "600px",
            width: "100%",
            borderRadius: "16px",

            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          }}
          inputStyle={{
            width: "100%",
            height: "42px",
            fontSize: "13px",
            paddingLeft: "48px",
            borderRadius: "16px",
            border: "none",
            borderTopRightRadius: "16px",
            borderBottomRightRadius: "16px",
            backgroundColor: "#fff",
          }}
          buttonStyle={{
            height: "42px",
            fontSize: "13px",
            border: "none",
            borderTopLeftRadius: "16px",
            borderBottomLeftRadius: "16px",
            backgroundColor: "#fff",
          }}
        />
        <Button mt="3" onClick={() => onSignInSubmit()} colorScheme="blue">
          Next
        </Button>
      </Stack>
    </Stack>
  );
};

export default PhoneNumberForm;
