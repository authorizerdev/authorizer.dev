import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { sortBy } from "lodash";
import Image from "next/image";
import { COLORS } from "../styles/colors";
import { DefaultSection } from "./Section";

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
    {
      label: "MySQL",
      img: "/images/mysql.svg",
      position: 5,
    },
    {
      label: "SQLite",
      img: "/images/SQLite.svg",
      position: 6,
    },
    {
      label: "SQL Server",
      img: "/images/sqlServer.svg",
      position: 7,
    },
    {
      label: "YugaByte",
      img: "/images/yugabyteLogo.png",
      position: 8,
    },
    {
      label: "MariaDB",
      img: "/images/mariadb.svg",
      position: 9,
    },
  ];
  return (
    <Box
      backgroundColor={COLORS.successLight}
      textAlign={{ base: "left", md: "left", lg: "left", xl: "center" }}
    >
      <DefaultSection>
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
        <Box margin="0 auto" width={{ base: "100%", md: "100%", lg: "100%", xl: "90%" }}>
          <Flex justify="space-around" wrap="wrap">
            {sortBy(databases, (database) => database.position).map((database) => {
              return (
                <Box
                  key={database.label}
                  width={{
                    base: "300px",
                    md: "300px",
                    lg: "250px",
                    xl: "500px",
                  }}
                  marginTop={{
                    base: "100px",
                    md: "100px",
                    lg: "100px",
                    xl: "150px",
                  }}
                >
                  <Image
                    src={database.img}
                    width="200px"
                    height="100px"
                    alt={database.label}
                    loading="eager"
                  />
                </Box>
              );
            })}
          </Flex>
        </Box>
      </DefaultSection>
    </Box>
  );
};
