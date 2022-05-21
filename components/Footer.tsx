import { Box, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
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
      padding="80px 0 80px 0"
      position="relative"
      top={{ base: "50px", md: "0", lg: "0", xl: "0" }}
    >
      <Box
        width={{
          base: "200px",
          md: "200px",
          lg: "400px",
          xl: "400px",
        }}
        margin="0 auto"
      >
        <Box borderRadius="50%" width="100px" height="100px" overflow="hidden">
          <Image
            loader={({ src }) => {
              return src;
            }}
            src={contributor.img}
            alt="asdf"
            layout="fixed"
            width="100px"
            height="100px"
          />
        </Box>
        <Box marginTop="20px" color={COLORS.appWhite}>
          <Heading fontSize="xl" marginBottom="5px">
            {contributor.name}
          </Heading>
          <Text marginTop="5px" marginBottom="40px">
            Software Consultant and Architect from 🇮🇳 India
          </Text>
        </Box>
        <Link
          fontWeight="semibold"
          fontSize="sm"
          target="_blank"
          href="https://www.buymeacoffee.com/lakhansamani"
          _hover={{
            color: COLORS.primary,
          }}
        >
          <Image
            loader={({ src }) => {
              return src;
            }}
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            layout="fixed"
            width="200px"
            height="60px"
            alt="Buy Me A Coffee"
          />
        </Link>
      </Box>
      <Text position="absolute" color={COLORS.appWhite} width="500px" bottom="0" margin="0 auto">
        ©Copyright 2022 authorizer.dev
      </Text>
    </Box>
  );
};
