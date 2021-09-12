import "@styles/globals.css";
import "react-phone-input-2/lib/style.css";
import "react-multi-carousel/lib/styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Payhere, AccountCategory } from "payhere-js-sdk";
import theme from "../theme";
import Layout from "../layout";
function Application({ Component, pageProps }) {
  Payhere.init("1218521", AccountCategory.SANDBOX);
  switch (Component.name) {
    case "SignIn":
      return (
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      );
    default:
      return (
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      );
  }
}

export default Application;
