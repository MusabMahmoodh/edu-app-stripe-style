import "@styles/globals.css";
import "react-phone-input-2/lib/style.css";
import "react-multi-carousel/lib/styles.css";
import { ChakraProvider } from "@chakra-ui/react";
function Application({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default Application;
