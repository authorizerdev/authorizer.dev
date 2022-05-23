import { Box, Center, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { COLORS } from "../styles/colors";

export const Logo = () => {
  return (
    <Flex>
      <Center>
        <Image
          src="/images/logo.png"
          alt="Authorizer Logo"
          layout="fixed"
          width="40px"
          height="40px"
        />
        <Box
          textStyle={"logo"}
          fontWeight="600"
          marginLeft="10px"
          fontSize="xl"
          color={COLORS.appBlack}
        >
          Authorizer
        </Box>
      </Center>
    </Flex>
  );
};
