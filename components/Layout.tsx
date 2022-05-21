import { Container } from "@chakra-ui/react";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <Container maxWidth={{ base: "100%", md: "100%", lg: "100%", xl: "100%" }} padding="0">
        {children}
      </Container>
    </>
  );
}
