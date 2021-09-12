import { auth, db } from "../initFirebase";
import {
  onAuthStateChanged,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
export const requestOTP = ({ phoneNo, verifier }) => {
  const phoneNumber = `+${phoneNo}`;
  const appVerifier = window.recaptchaVerifier;

  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      setFormState(2);
      setIsLoading(false);
      // ...
      // const code = getCodeFromUserInput();
    })
    .catch((error) => {
      // Error; SMS not sent
      // ...
      setIsLoading(false);
      window.recaptchaVerifier?.render().then(function (widgetId) {
        grecaptcha.reset(widgetId);
      });
      console.log(error);
    });
};
export const verifyOTP = () => {};
export const registerUser = () => {};
