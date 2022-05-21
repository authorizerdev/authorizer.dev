import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { sortBy } from "lodash";
import Image from "next/image";
import { COLORS } from "../styles/colors";

export const DatabaseList = () => {
  const databases = [
    {
      label: "MongoDB",
      img: "/images/mongodb.svg",
      position: 1,
    },
    {
      label: "Cassandra",
      img: "/images/cassandra.svg",
      position: 2,
    },
    {
      label: "PostgreSQL",
      img: "/images/postgresql.svg",
      position: 3,
    },
    {
      label: "ArangoDB",
      img: "/images/arangodb.svg",
      position: 4,
    },
  ];
  return (
    <Box
      backgroundColor={COLORS.successLight}
      padding="50px 0 50px 0"
      position="relative"
      top={{ base: "50px", md: "100px", lg: "100px", xl: "100px" }}
    >
      <Box
        textAlign={{ base: "left", md: "left", lg: "left", xl: "center" }}
        padding="50px 0 150px 0"
        position="relative"
        top={{ base: "50px", md: "150px", lg: "150px", xl: "30px" }}
        width={{ base: "280px", md: "520px", lg: "520px", xl: "100%" }}
        margin="0 auto"
      >
        <Box marginBottom="20px">
          <Heading fontWeight="semibold" fontSize="3xl">
            Myriad Database stupport
          </Heading>
        </Box>

        <Box>
          <Text fontWeight="normal" fontSize="2xl">
            Integrate with any of these database out of the box
          </Text>
        </Box>
        <Box margin="0 auto" width={{ base: "280px", md: "520px", lg: "520px", xl: "75%" }}>
          <Flex justify="space-around" wrap="wrap" marginTop="90px">
            {sortBy(databases, (database) => database.position).map((database) => {
              return (
                <Box key={database.label} width="230px" height="150px">
                  <Image src={database.img} width="200px" height="100px" alt={database.label} />
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
