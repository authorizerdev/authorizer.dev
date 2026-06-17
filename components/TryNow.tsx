import { Authorizer } from "@authorizerdev/authorizer-react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { MdLock, MdLogin } from "react-icons/md";
import { DEPLOYMENT_BUTTONS } from "../constants/deployments";
import { COLORS } from "../styles/colors";

export const TryNow = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Allow deep-linking / sharing the trial via `authorizer.dev/#try`.
  useEffect(() => {
    const syncWithHash = () => {
      if (window.location.hash === "#try") {
        onOpen();
      }
    };
    syncWithHash();
    window.addEventListener("hashchange", syncWithHash);
    return () => window.removeEventListener("hashchange", syncWithHash);
  }, [onOpen]);

  const handleOpen = () => {
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", "#try");
    }
    onOpen();
  };

  const handleClose = () => {
    if (typeof window !== "undefined" && window.location.hash === "#try") {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    onClose();
  };

  return (
    <>
      <Button
        marginTop="40px"
        variant="primary"
        size="small"
        marginRight={{ base: "0", md: "20px", lg: "20px", xl: "20px" }}
        leftIcon={<MdLogin size="1.2rem" color={COLORS.appWhite} />}
        onClick={handleOpen}
      >
        Try it now
      </Button>

      <Modal isOpen={isOpen} onClose={handleClose} isCentered scrollBehavior="inside" size="md">
        <ModalOverlay />
        <ModalContent borderRadius="20px" marginX="15px">
          <ModalHeader paddingBottom="0">
            <Heading fontSize="2xl" fontWeight="semibold">
              Try{" "}
              <Text as="span" color={COLORS.primary}>
                Authorizer
              </Text>
            </Heading>
            <Text marginTop="8px" fontSize="sm" fontWeight="normal" color={COLORS.appBlack}>
              This is the same drop-in auth component you can embed in your own app. Sign up to
              explore your dashboard &mdash; your users and data stay in your own database.
            </Text>
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody paddingBottom="25px">
            <Box className="authorizer-widget" marginTop="10px">
              <Authorizer />
            </Box>

            <Flex
              marginTop="15px"
              padding="12px 15px"
              backgroundColor={COLORS.primaryLight}
              borderRadius="10px"
              align="flex-start"
            >
              <Box as="span" marginTop="2px" marginRight="8px" flexShrink={0}>
                <MdLock color={COLORS.primary} size="1.1rem" />
              </Box>
              <Text fontSize="xs" color={COLORS.appBlack} lineHeight={1.6}>
                <Text as="span" fontWeight="bold">
                  No spam, ever.
                </Text>{" "}
                By signing up you agree to receive occasional emails about major open-source
                Authorizer releases &mdash; at most once a year. No marketing, no selling your data.
                Unsubscribe anytime.
              </Text>
            </Flex>

            <Flex align="center" marginY="20px">
              <Divider borderColor="#d1d5db" />
              <Text
                paddingX="12px"
                fontSize="xs"
                fontWeight="semibold"
                color={COLORS.appBlack}
                whiteSpace="nowrap"
              >
                OR SELF-HOST IT
              </Text>
              <Divider borderColor="#d1d5db" />
            </Flex>

            <Text fontSize="sm" color={COLORS.appBlack} marginBottom="12px" textAlign="center">
              Spin up your own production-ready instance in one click.
            </Text>
            <Flex direction="column" gap="10px">
              {DEPLOYMENT_BUTTONS.map((button) => (
                <Link
                  key={button.href}
                  href={button.href}
                  target="_blank"
                  rel="noreferrer"
                  width="100%"
                  _hover={{ textDecoration: "none" }}
                >
                  <Button
                    width="100%"
                    height="50px"
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
