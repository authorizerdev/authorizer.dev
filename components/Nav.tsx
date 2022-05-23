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
import { Logo } from "./Logo";

const NavItems = [
  {
    id: "features",
    label: "Features",
    link: "#features",
    target: "_self",
  },
  {
    id: "resources",
    label: "Resources",
    link: "https://www.youtube.com/watch?v=uQka5O2RwpU&list=PLSQGbUjHc6bpaAgCiQPzNxiUPr7SkDAFR&ab_channel=LakhanSamani",
    target: "_blank",
  },
  {
    id: "documentation",
    label: "Documentation",
    link: "https://docs.authorizer.dev/getting-started",
    target: "_blank",
  },
  {
    id: "github",
    iconOnly: true,
    label: "Github",
    icon: <FaGithub />,
    link: "https://github.com/authorizerdev/authorizer",
    target: "_blank",
  },
  {
    id: "discord",
    iconOnly: true,
    label: "Discord",
    icon: <FaDiscord />,
    link: "https://discord.gg/Zv2D5h6kkK",
    target: "_blank",
  },
];

export default function Nav() {
  return (
    <>
      <Box
        maxWidth="80%"
        margin="0 auto"
        padding="0"
        display={{ base: "none", md: "none", lg: "inherit", xl: "inherit" }}
      >
        <Flex justify="space-between">
          <Logo />
          <Center height="120px">
            {NavItems.map((item) => (
              <Box as="div" marginLeft="50px" key={item.link}>
                {item.iconOnly ? (
                  <Link href={item.link} target={item.target}>
                    <Box fontSize="2rem">{item.icon}</Box>
                  </Link>
                ) : (
                  <Link href={item.link} target={item.target}>
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
        height="80px"
        borderBottom={`1px solid ${COLORS.primaryDark}`}
        padding="0"
        display={{ base: "inherit", md: "inherit", lg: "none", xl: "none" }}
      >
        <Menu preventOverflow gutter={0} matchWidth>
          <MenuButton
            width="100%"
            margin="0"
            paddingLeft="20px"
            height="80px"
            borderRadius="0"
            as={IconButton}
            icon={
              <Flex justify="space-between">
                <Logo />
                <Box marginRight="30px">
                  <MdMenu fontSize="2rem" />
                </Box>
              </Flex>
            }
            variant="ghost"
            display={{ base: "inherit", md: "inherit", lg: "none", xl: "none" }}
          />
          <MenuList width="100%" borderRadius="0">
            {NavItems.map((item) => (
              <>
                <MenuItem width="100%" height="50px" borderRadius="0" key={item.link}>
                  <Link href={item.link} target={item.target}>
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
