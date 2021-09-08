import "@styles/globals.css";

import "react-multi-carousel/lib/styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
function Application({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default Application;
