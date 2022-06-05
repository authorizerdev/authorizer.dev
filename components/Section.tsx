import { Box, ChakraStyledOptions } from "@chakra-ui/react";
import React from "react";

interface SectionArgs {
  children: React.ReactNode;
  padding?: ChakraStyledOptions;
}

export const Section = ({ children, padding }: SectionArgs) => {
  return (
    <Box width="80%" margin="0 auto" padding={padding}>
      {children}
    </Box>
  );
};

export const DefaultSection = (props: SectionArgs) => {
  return (
    <Section
      {...props}
      padding={{
        base: "80px 0",
        md: "40px 0",
        lg: "60px 0",
        xl: "120px 0",
      }}
    />
  );
};
