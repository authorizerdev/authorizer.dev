import {
  Box,
  Center,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { COLORS } from "../styles/colors";

const NavItems = [
  {
    id: "features",
    label: "Features",
    link: "#features",
  },
  {
    id: "resources",
    label: "Resources",
    link: "https://www.youtube.com/watch?v=uQka5O2RwpU&list=PLSQGbUjHc6bpaAgCiQPzNxiUPr7SkDAFR&ab_channel=LakhanSamani",
  },
  {
    id: "documentation",
    label: "Documentation",
    link: "https://docs.authorizer.dev/getting-started",
  },
  {
    id: "github",
    iconOnly: true,
    label: "Github",
    icon: <FaGithub />,
    link: "https://github.com/authorizerdev/authorizer",
  },
  {
    id: "discord",
    iconOnly: true,
    label: "Discord",
    icon: <FaDiscord />,
    link: "https://discord.gg/Zv2D5h6kkK",
  },
];

export default function Nav() {
  return (
    <>
      <Box
        maxWidth="90%"
        padding="0"
        display={{ base: "none", md: "none", lg: "inherit", xl: "inherit" }}
      >
        <Flex justify="flex-end">
          <Center height="120px">
            {NavItems.map((item) => (
              <Box as="div" marginLeft="50px" key={item.link}>
                {item.iconOnly ? (
                  <Link href={item.link}>
                    <Box fontSize="2rem">{item.icon}</Box>
                  </Link>
                ) : (
                  <Link href={item.link}>
                    <Text textTransform="uppercase" fontWeight="semibold">
                      {item.label}
                    </Text>
                  </Link>
                )}
              </Box>
            ))}
          </Center>
        </Flex>
      </Box>
      <Box
        width="100%"
        height="60px"
        borderBottom={`1px solid ${COLORS.primaryDark}`}
        padding="0"
        display={{ base: "inherit", md: "inherit", lg: "none", xl: "none" }}
      >
        <Menu preventOverflow gutter={0} matchWidth>
          <MenuButton
            width="100%"
            margin="0"
            paddingLeft="20px"
            height="60px"
            borderRadius="0"
            as={IconButton}
            icon={<MdMenu fontSize="2rem" />}
            variant="ghost"
            display={{ base: "inherit", md: "inherit", lg: "none", xl: "none" }}
          />
          <MenuList width="100%" borderRadius="0">
            {NavItems.map((item) => (
              <>
                <MenuItem width="100%" height="50px" borderRadius="0">
                  <Link href={item.link} target="_blank">
                    <Text textTransform="uppercase" fontWeight="semibold">
                      <Flex>
                        {item.icon && (
                          <Box fontSize="1.4rem" marginRight="10px" position="relative" top="2px">
                            {item.icon}
                          </Box>
                        )}
                        {item.label}
                      </Flex>
                    </Text>
                  </Link>
                </MenuItem>
              </>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}
