import { Box, Text } from "@chakra-ui/react";
import { COLORS } from "../styles/colors";

export const Footer = () => {
  const contributor = {
    name: "Lakhan Samani",
    img: "https://lakhan.me/images/profile.jpg",
    github: "https://github.com/lakhansamani",
    username: "lakhansamani",
  };
  return (
    <Box
      backgroundColor={COLORS.teritiary}
      textAlign={{ base: "left", md: "left", lg: "left", xl: "center" }}
      padding="0 0 50px 0"
      position="relative"
      width="100%"
      margin="0 auto"
    >
      <Text
        position="absolute"
        color={COLORS.appWhite}
        width="100%"
        bottom="10px"
        textAlign="center"
      >
        ©Copyright 2022 authorizer.dev
      </Text>
    </Box>
  );
};
