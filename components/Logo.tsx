import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { COLORS } from "../styles/colors";

export const Logo = () => {
  return (
    <Flex>
      <Center>
        <Box
          textStyle={"logo"}
          height={10}
          width={10}
          display="flex"
          alignItems="center"
          justifyContent="center"
          rounded={"full"}
          bg={COLORS.appPrimary}
          color={COLORS.appWhite}
          fontSize="2xl"
        >
          <Text marginTop={-1}>A</Text>
        </Box>
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
