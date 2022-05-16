import { AuthorizerProvider } from "@authorizerdev/authorizer-react";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../components/Fonts";
import { AUTHORIZER_CONFIG } from "../constants/authorizer";
import "../styles/globals.css";
import { authorizerTheme } from "../styles/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* @ts-ignore */}
      <AuthorizerProvider config={AUTHORIZER_CONFIG}>
        <ChakraProvider theme={authorizerTheme} resetCSS={true}>
          <Fonts />
          <Component {...pageProps} />
        </ChakraProvider>
      </AuthorizerProvider>
    </>
  );
}

export default MyApp;
//
