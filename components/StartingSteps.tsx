import { Box, Button, Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { sortBy } from "lodash";
import { MdOpenInNew } from "react-icons/md";
import { COLORS } from "../styles/colors";

export const StartingSteps = () => {
  const steps = [
    {
      label: "Get Authorizer instance",
      description:
        "Deploy production ready Authorizer instance using one click deployment options available below",
      link: "https://www.google.com",
      position: 1,
    },
    {
      label: "Setup instance",
      description:
        "Open authorizer instance endpoint in browser.Sign up as an admin with a secure password. Configure environment variables from dashboard",
      link: "https://www.google.com",
      position: 2,
    },
    {
      label: "Integrate with your application",
      description:
        "Load the @authorizerdev/authorizer-js library and initialize the authorizer object. Authorizer object can be instantiated with JSON object with following keys in its constructor.",
      link: "https://www.google.com",
      position: 3,
    },
  ];
  return (
    <Box
      backgroundColor={COLORS.primaryExtraLight}
      padding="50px 0 150px 0"
      position="relative"
      top={{ base: "50px", md: "100px", lg: "100px", xl: "-100px" }}
      zIndex="-1"
    >
      <Box
        width={{ base: "280px", md: "520px", lg: "520px", xl: "85%", "2xl": "70%" }}
        marginTop={{ base: "100px", md: "80px" }}
        margin="0 auto"
      >
        <Heading fontSize="4xl" fontWeight="semibold">
          Start in{" "}
          <Text as="span" color={COLORS.successDark}>
            3 simple steps
          </Text>
        </Heading>
        <Box marginTop="80px">
          {sortBy(steps, (step) => step.position).map((step, index) => (
            <Box paddingBottom={{ base: "60px", md: "100px" }} key={step.label}>
              <Flex>
                <Center>
                  <Box
                    border="2px solid"
                    borderColor={COLORS.primary}
                    width="50px"
                    height="50px"
                    borderRadius="50px"
                    padding="1px"
                    display={{ base: "none", md: "block", lg: "block" }}
                    marginRight={{ base: "0", md: "60px", lg: "60px" }}
                  >
                    <Button variant="circular" margin="2px">
                      <Heading fontSize="2xl" padding="0" margin="0">
                        {index + 1}
                      </Heading>
                    </Button>
                  </Box>
                </Center>

                <Box>
                  <Heading
                    fontSize={{ base: "xl", md: "2xl" }}
                    color="#3E3E3E"
                    fontWeight="semibold"
                  >
                    {step.label}
                  </Heading>
                  <Text
                    fontSize="sm"
                    width={{ base: "280px", md: "380px" }}
                    color="#132641"
                    marginTop="10px"
                  >
                    {step.description}
                  </Text>
                  <Box marginTop="15px">
                    <Link
                      color={COLORS.primary}
                      fontWeight="bold"
                      fontSize="xl"
                      fontStyle="italic"
                      target="_blank"
                      href={step.link}
                    >
                      <Flex>
                        <Box>Step {index + 1} </Box>
                        <Box paddingLeft="10px">
                          <MdOpenInNew size="1rem" />
                        </Box>
                      </Flex>
                    </Link>
                  </Box>
                </Box>
              </Flex>
            </Box>
          ))}
        </Box>
        <Box
          backgroundColor={COLORS.appWhite}
          borderRadius="10px"
          width="500px"
          height="200px"
          boxShadow="0px 3px 15px -3px #0000001f"
        >
          <Center>
            <Heading fontSize="2xl" fontWeight="semibold" marginTop="40px" letterSpacing="1px">
              Deploy your instance
            </Heading>
          </Center>
        </Box>
      </Box>
    </Box>
  );
};
