import { Box, Button, Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdFavorite, MdOpenInNew } from "react-icons/md";
import { COLORS } from "../styles/colors";
import { DefaultSection } from "./Section";

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
      name: "Anik Ghosh",
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
    >
      <DefaultSection>
        <Box marginBottom="20px">
          <Heading fontWeight="semibold" fontSize="3xl">
            Contributors
          </Heading>
        </Box>
        <Box
          width="100%"
          margin={{
            base: "0 0",
            md: "0 0",
            lg: "0 0",
            xl: "0 auto",
          }}
        >
          <Text fontWeight="normal" fontSize="xl">
            Developers behind this project. We’ve spent many sleepless nights worrying about
            security, authentication, authorization performance in our career. Now, we want to take
            care of that for you, so you can focus on building a great product instead.
          </Text>
        </Box>

        <Flex justify="space-around" wrap="wrap" marginTop="90px">
          {contributors.map((contributor) => {
            return (
              <Box
                width="250px"
                height="220px"
                borderRadius="20px"
                paddingTop="30px"
                key={contributor.github}
                marginBottom="50px"
                marginLeft={contributors.length === 1 ? "0px" : "20px"}
              >
                <Center justifyContent={{ base: "left", md: "left", lg: "left", xl: "center" }}>
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
                      loading="eager"
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
                    textAlign={{ base: "left", md: "left", lg: "left", xl: "center" }}
                    href={contributor.github}
                    _hover={{
                      color: COLORS.primary,
                    }}
                  >
                    <Flex justify={{ base: "left", md: "left", lg: "left", xl: "center" }}>
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
        <Center>
          <Button
            variant="outline"
            size="lg"
            leftIcon={<MdFavorite color={COLORS.pink} />}
            as="a"
            href="https://github.com/sponsors/authorizerdev/"
          >
            Sponsor the project on Github
          </Button>
        </Center>
      </DefaultSection>
    </Box>
  );
};
