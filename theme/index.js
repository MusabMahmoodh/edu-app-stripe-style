import { extendTheme } from "@chakra-ui/react";
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        // bg: "gray.400",
        // color: "white",
      },
      // styles for the `a`
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
  colors: {
    blue: {
      100: "#3F5CE7",
      // ...
      500: "#556DF6",
      900: "#08253F",
    },
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        bg: "blue.500", // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      //   sizes: {
      //     xl: {
      //       h: "56px",
      //       fontSize: "lg",
      //       px: "32px",
      //     },
      //   },
      //   // 3. We can add a new visual variant
      //   variants: {
      //     "with-shadow": {
      //       bg: "red.400",
      //       boxShadow: "0 0 2px 2px #efdfde",
      //     },
      //     // 4. We can override existing variants
      //     solid: (props) => ({
      //       bg: props.colorMode === "dark" ? "red.300" : "red.500",
      //     }),
      //   },
    },
  },
});

export default theme;
