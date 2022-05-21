import { extendTheme } from "@chakra-ui/react";
import { AButton } from "./Overrides/Button";

export const authorizerTheme = extendTheme({
  colors: {
    textStyles: {},
  },

  components: {
    Button: AButton,
  },
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Open Sans, sans-serif",
  },
});
