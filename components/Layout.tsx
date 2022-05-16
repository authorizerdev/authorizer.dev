import { Box, Container } from "@chakra-ui/react";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <Container maxWidth={{ base: "100%", md: "100%", lg: "100%", xl: "100%" }} padding="0">
        <Box margin={{ base: "20% auto", md: "20% auto", lg: "20% auto", xl: "10% auto" }}>
          <main className="container mx-auto">{children}</main>
        </Box>
      </Container>
    </>
  );
}
