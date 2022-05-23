import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Image as ChakraImageTag,
  Link,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { MdCheckCircleOutline, MdPlayCircleOutline, MdSend } from "react-icons/md";
import { COLORS } from "../styles/colors";

export const USPSection = () => {
  const uspList = [
    "Build Secure Apps 10x faster",
    "Low code tool and low cost deployment",
    "Own your user data in your preferred database",
    "Authenticate users with multiple auth recipes",
    "Authorize Users Based on your business roles",
    "OAuth2 and OpenID compatible APIs",
  ];
  return (
    <Box paddingTop="120px">
      <Flex justify="space-around">
        <Box as="span" width={{ base: "280px", md: "520px" }}>
          <Link
            href="https://www.producthunt.com/posts/authorizer?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-authorizer"
            target="_blank"
            rel="noreferrer"
          >
            <ChakraImageTag
              src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=321526&theme=light&period=daily"
              alt="Authorizer - Open source authentication and authorization solution | Product Hunt"
              marginBottom={10}
            />
          </Link>
          <Heading
            fontSize="4xl"
            color="rgba(62, 62, 62, 1)"
            width="100%"
            marginBottom={"20px"}
            lineHeight={1.5}
          >
            Your{" "}
            <Text
              as="span"
              background="#4666E5"
              color="white"
              borderBottom="5px solid #4EBDEF"
              padding="0 8px"
              boxShadow="inset 0px -5px 8px -3px #223689"
            >
              Data
            </Text>{" "}
            in your{" "}
            <Text
              as="span"
              background="#0A7100"
              color="white"
              borderBottom="5px solid #52912E"
              padding="0 8px"
              boxShadow="inset 0px -5px 8px -3px #053600"
            >
              Control
            </Text>
          </Heading>
          <Text lineHeight={1.5} fontSize="large" color="#3e3e3e" width="100%">
            Open Source Authentication and Authorization solution for your business. Easy to deploy,
            and easy to integrate
          </Text>
          <Box marginTop="40px">
            {uspList.map((usp) => {
              return (
                <Flex marginTop="10px" key={usp}>
                  <Box as="span" padding="3px">
                    <MdCheckCircleOutline color={COLORS.success} />
                  </Box>
                  <Text
                    width="820px"
                    lineHeight={1.5}
                    fontSize="l"
                    fontWeight={"semibold"}
                    marginLeft={"5px"}
                    color="#3e3e3e"
                  >
                    {usp}
                  </Text>
                </Flex>
              );
            })}
          </Box>
          <Flex justify={{ base: "center", md: "left" }} wrap="wrap">
            <Button
              marginTop="40px"
              variant="primary"
              size="small"
              marginRight={{ md: "20px", lg: "0", xl: "0" }}
              rightIcon={<MdSend size="1.2rem" color={COLORS.appWhite} />}
              as="a"
              href="https://railway.app/new/template?template=https://github.com/authorizerdev/authorizer-railway&amp;plugins=postgresql,redis"
              target="_blank"
            >
              Deploy your instance
            </Button>
            <Box display={{ base: "none", md: "none", lg: "none", xl: "inherit" }} marginTop="40px">
              <Center height="45px" position="relative" width="50px">
                <Text
                  position="absolute"
                  backgroundColor={COLORS.appWhite}
                  fontSize="0.7rem"
                  fontWeight="semibold"
                  padding="5px 0"
                >
                  OR
                </Text>
                <Divider orientation="vertical" borderColor="#77779c" opacity="1" />
              </Center>
            </Box>
            <Button
              variant="outline"
              marginTop="40px"
              size="small"
              leftIcon={<MdPlayCircleOutline fontSize="1.2rem" color={COLORS.primary} />}
              textTransform="uppercase"
              as="a"
              href="https://www.youtube.com/watch?v=uQka5O2RwpU"
              target="_blank"
            >
              Watch a demo
            </Button>
          </Flex>
        </Box>
        <Box
          display={{ base: "none", md: "none", lg: "none", xl: "inherit" }}
          padding="0"
          marginTop="-60px"
          width={{ xl: "540px" }}
          height={{ xl: "868px" }}
          position="relative"
          zIndex="10"
        >
          <Image src="/images/login.png" alt="Login" layout="fill" />
        </Box>
      </Flex>
    </Box>
  );
};
