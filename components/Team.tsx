import { Box, Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { COLORS } from "../styles/colors";

export const Team = () => {
  const contributors = [
    {
      name: "Lakhan Samani",
      img: "https://lakhan.me/images/profile.jpg",
      github: "https://github.com/lakhansamani",
      username: "lakhansamani",
    },
    {
      name: "Yash Joshi",
      img: "https://mir-s3-cdn-cf.behance.net/user/115/f8602e40061729.594049a0c06d5.jpg",
      github: "https://github.com/jyash97",
      username: "jyash97",
    },
    {
      name: "Anik Gosh",
      img: "https://avatars.githubusercontent.com/u/59804102?v=4",
      github: "https://github.com/anik-ghosh-au7",
      username: "anik-ghosh-au7",
    },
    {
      name: "Nikhil Varma",
      img: "https://avatars.githubusercontent.com/u/8639235?v=4",
      github: "https://github.com/nikhil-varma",
      username: "nikhil-varma",
    },
    {
      name: "Samyak Bhuta",
      img: "https://avatars.githubusercontent.com/u/738746?v=4",
      github: "https://github.com/samyakbhuta/",
      username: "samyakbhuta",
    },
  ];
  return (
    <Box
      backgroundColor={COLORS.appWhite}
      textAlign={{ base: "left", md: "left", lg: "left", xl: "center" }}
      width={{ base: "280px", md: "520px", lg: "520px", xl: "100%" }}
      margin="100px auto"
    >
      <Box marginBottom="20px">
        <Heading fontWeight="semibold" fontSize="3xl">
          Our team
        </Heading>
      </Box>
      <Center>
        <Box width={{ base: "280px", md: "80%", lg: "520px", xl: "60%" }} margin="o auto">
          <Text fontWeight="normal" fontSize="xl">
            Developers behind this project. We’ve spent many sleepless nights worrying about
            security, authentication, authorization performance in our career. Now, we want to take
            care of that for you, so you can focus on building a great product instead.
          </Text>
        </Box>
      </Center>

      <Box
        margin="90px auto 10px auto"
        width={{ base: "280px", md: "520px", lg: "520px", xl: "75%" }}
        textAlign={{ base: "left", md: "center" }}
      >
        <Flex justify="space-around" wrap="wrap" marginTop="90px">
          {contributors.map((contributor) => {
            return (
              <Box
                width="240px"
                height="240px"
                borderRadius="20px"
                paddingTop="30px"
                key={contributor.github}
                marginBottom="50px"
                marginLeft={contributors.length === 1 ? "0px" : "20px"}
              >
                <Center justifyContent={{ base: "left", md: "center" }}>
                  <Box
                    borderRadius="50%"
                    width="100px"
                    height="100px"
                    textAlign={{ base: "left", md: "center" }}
                    overflow="hidden"
                  >
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
                </Center>
                <Box marginTop="20px">
                  <Heading fontSize="xl" marginBottom="5px">
                    {contributor.name}
                  </Heading>
                  <Link
                    fontWeight="semibold"
                    fontSize="sm"
                    target="_blank"
                    textAlign={{ base: "left", md: "center" }}
                    href={contributor.github}
                    _hover={{
                      color: COLORS.primary,
                    }}
                  >
                    <Flex justify={{ base: "flex-start", md: "center" }}>
                      <Box position="relative" top="5px" paddingRight="10px">
                        <FaGithub fontSize="1.2rem" />
                      </Box>
                      <Text marginTop="5px">{contributor.username}</Text>
                      <Box paddingLeft="3px">
                        <MdOpenInNew size="1rem" />
                      </Box>
                    </Flex>
                  </Link>
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Box>
      <Box marginBottom="50px">
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
            width="250px"
            height="60px"
            alt="Buy Me A Coffee"
          />
        </Link>
      </Box>
    </Box>
  );
};
