import { extendTheme } from "@chakra-ui/react";
import { COLORS } from "./colors";
import { AButton } from "./Overrides/Button";

export const authorizerTheme = extendTheme({
  layerStyles: {
    logo: {
      fontFamily: "Major Mono Display, monospace",
    },
  },
  textStyles: {
    logo: {
      fontFamily: "Major Mono Display, monospace",
      color: COLORS.appBlack,
    },
  },
  components: {
    Button: AButton,
  },
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Open Sans, sans-serif",
  },
});
