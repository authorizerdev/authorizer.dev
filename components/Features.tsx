import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { sortBy } from "lodash";
import Image from "next/image";
import { COLORS } from "../styles/colors";
import { DefaultSection } from "./Section";

export const Features = () => {
  const features = [
    {
      label: "MODERN STACK",
      img: "/images/modernStack.svg",
      description: "Built using modern stack with best practises. It uses Go, GraphQL, Javascript",
      position: 1,
    },
    {
      label: "SECURED AUTH & SESSION MANAGEMENT",
      img: "/images/11.svg",
      description:
        "Auth with best services baked in. Session management implemented with HTTP only cookies. JWT bearer tokens implemented with access token and refresh token.",
      position: 2,
    },
    {
      label: "AUTH RECIPES",
      img: "/images/22.svg",
      description:
        "MuLtiple auth recipes supported out of the box. Supports major social login, basic auth, magic link auth and more coming soon…",
      position: 3,
    },
    {
      label: "CONNECT TO ANY DATABASE",
      img: "/images/33.svg",
      description: "Built using modern stack with best practises. It uses Go, GraphQL, Javascript",
      position: 4,
    },
    {
      label: "INTEGRATE OR IMPLEMENT",
      img: "/images/44.svg",
      description:
        " Got a framework? We’ve it all covered. Be it javascript, react or any framework! Moresdks coming soon…",
      position: 5,
    },
    {
      label: "DEPLOY ANYWHERE",
      img: "/images/55.svg",
      description:
        "With multiple deployment options deploy your authentication and authorization serviceany where. Currently supporting Heroku, Docker and Kubernetes.",
      position: 6,
    },
  ];
  return (
    <Box
      backgroundColor={COLORS.appWhite}
      id="features"
      textAlign={{ base: "left", md: "left", lg: "left", xl: "center" }}
    >
      <DefaultSection>
        <Box marginBottom="20px">
          <Heading fontWeight="semibold" fontSize="3xl">
            Authentication <Text as="span">|</Text> Authorization <Text as="span">|</Text> Security{" "}
            <Text as="span">|</Text> Integrations
          </Heading>
        </Box>
        <Box>
          <Heading fontWeight="normal" fontSize="2xl">
            The hardest part of the application development,{" "}
            <Text color={COLORS.successDark} as="span" fontWeight="semibold">
              made simple.
            </Text>
          </Heading>
        </Box>
        <Box>
          <Text fontWeight="normal" fontSize="l" marginBottom="2px" marginTop="50px">
            You can use Authorizer off the shelf and provide an amazing digital experience in just 3
            minutes.
          </Text>
          <Text fontWeight="normal" fontSize="l">
            We rather have you focused on your core business and build stuff that matters.
          </Text>
        </Box>
        <Box margin="0 auto" width={{ base: "100%", md: "100%", lg: "100%", xl: "90%" }}>
          <Flex justify="space-around" wrap="wrap">
            {sortBy(features, (feature) => feature.position).map((feature) => {
              return (
                <Box
                  width={{
                    base: "300px",
                    md: "300px",
                    lg: "400px",
                    xl: "500px",
                  }}
                  key={feature.label}
                  marginTop={{
                    base: "100px",
                    md: "100px",
                    lg: "100px",
                    xl: "150px",
                  }}
                >
                  <Image
                    src={feature.img}
                    alt={feature.label}
                    layout="fixed"
                    width="100px"
                    height="100px"
                    loading="eager"
                  />
                  <Heading fontSize="xl" marginBottom="15px" marginTop="10px">
                    {feature.label}
                  </Heading>
                  <Text>{feature.description}</Text>
                </Box>
              );
            })}
          </Flex>
        </Box>
      </DefaultSection>
    </Box>
  );
};
