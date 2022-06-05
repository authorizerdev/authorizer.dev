import { Box, Button, Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { sortBy } from "lodash";
import { MdOpenInNew, MdPlayCircleOutline } from "react-icons/md";
import { COLORS } from "../styles/colors";
import { DefaultSection } from "./Section";

export const StartingSteps = () => {
  const steps = [
    {
      label: "Get Authorizer instance",
      description:
        "Deploy production ready Authorizer instance using one click deployment options available below",
      link: "https://docs.authorizer.dev/getting-started",
      position: 1,
    },
    {
      label: "Setup instance",
      description:
        "Open authorizer instance endpoint in browser.Sign up as an admin with a secure password. Configure environment variables from dashboard",
      link: "https://docs.authorizer.dev/getting-started",
      position: 2,
    },
    {
      label: "Integrate with your application",
      description:
        "Load the @authorizerdev/authorizer-js library and initialize the authorizer object. Authorizer object can be instantiated with JSON object with following keys in its constructor.",
      link: "https://docs.authorizer.dev/getting-started",
      position: 3,
    },
  ];

  const deploymentButtons = [
    {
      href: "https://railway.app/new/template?template=https://github.com/authorizerdev/authorizer-railway&amp;plugins=postgresql,redis",
      img: "https://railway.app/button.svg",
      label: "Deploy to Railway",
      bgColor: COLORS.railway,
    },
    {
      href: "https://heroku.com/deploy?template=https://github.com/authorizerdev/authorizer-heroku",
      img: "https://www.herokucdn.com/deploy/button.svg",
      label: "Deploy to Heroku",
      bgColor: COLORS.heroku,
    },
    {
      href: "https://render.com/deploy?repo=https://github.com/authorizerdev/authorizer-render",
      img: "https://render.com/images/deploy-to-render-button.svg",
      label: "Deploy to Render",
      bgColor: COLORS.render,
    },
  ];

  return (
    <Box backgroundColor={COLORS.primaryExtraLight}>
      <DefaultSection>
        <Flex justify="space-between" wrap="wrap">
          <Box width={{ base: "100%", md: "100%", lg: "100%", xl: "50%" }}>
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
                        position="relative"
                      >
                        <Button variant="circular" margin="2px" zIndex={100}>
                          <Heading fontSize="2xl" padding="0" margin="0">
                            {index + 1}
                          </Heading>
                        </Button>
                        {index !== steps.length - 1 && (
                          <Box
                            width="3px"
                            height="270px"
                            backgroundColor={COLORS.primary}
                            position="absolute"
                            left="49%"
                            top="30px"
                          ></Box>
                        )}
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
            <Button
              variant="outline"
              leftIcon={<MdPlayCircleOutline size="1.8rem" />}
              fontSize="l"
              padding="30px"
              width={{ base: "280px", md: "520px", lg: "520px", xl: "520px" }}
              as="a"
              href="https://www.youtube.com/watch?v=uQka5O2RwpU&list=PLSQGbUjHc6bpaAgCiQPzNxiUPr7SkDAFR&ab_channel=LakhanSamani"
              target="_blank"
            >
              Watch videos
            </Button>
          </Box>

          <Box width="520px" marginTop="100px">
            <Box
              backgroundColor={COLORS.appWhite}
              borderRadius="20px"
              maxHeight="400px"
              width="100%"
              boxShadow="0px 3px 15px -3px #0000001f"
              display={{ base: "none", md: "block", lg: "block" }}
              margin={{ base: "0 0 0 0", md: "0 0 50px 0", lg: "0 0 50px 0", xl: "0 50px 0 0" }}
              padding="50px"
            >
              <Heading fontSize="xl" fontWeight="semibold" letterSpacing="1px" marginBottom="30px">
                Deploy your instance
              </Heading>
              <Flex wrap="wrap" flexDir="column">
                {deploymentButtons.map((button) => (
                  <Link
                    key={button.href}
                    target="_blank"
                    href={button.href}
                    rel="noreferrer"
                    width={{ base: "280px", md: "520px", lg: "520px", xl: "520px" }}
                    marginTop="25px"
                  >
                    <Button
                      width="80%"
                      height="60px"
                      background={button.bgColor}
                      color="white"
                      _hover={{
                        backgroundColor: button.bgColor,
                        textDecoration: "none",
                        border: `1px solid ${button.bgColor}`,
                      }}
                    >
                      {button.label}
                    </Button>
                  </Link>
                ))}
              </Flex>
            </Box>
          </Box>
        </Flex>
      </DefaultSection>
    </Box>
  );
};
