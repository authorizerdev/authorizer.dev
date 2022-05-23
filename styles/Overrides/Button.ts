import { COLORS } from "../colors";

export const AButton = {
  baseStyle: {},
  sizes: {
    small: {
      px: 5,
      h: { base: "70px", md: "50px", lg: "50px", xl: "50px" },
      w: { base: "300px", md: "240px", lg: "220px", xl: "220px" },
      fontSize: { base: "1rem" },
    },
  },
  variants: {
    outline: {
      border: "2px solid",
      borderColor: COLORS.primary,
      color: COLORS.primary,
      _hover: {
        bg: COLORS.primaryLight,
      },
    },
    primary: {
      width: { base: "300px" },
      bg: COLORS.primary,
      color: COLORS.appWhite,
      _hover: {
        color: COLORS.appWhite,
        bg: COLORS.primaryDark,
      },
    },
    ghost: {
      bg: COLORS.transparent,
      color: COLORS.primary,
      _hover: {
        bg: COLORS.primaryLight,
        textDecoration: "none",
      },
    },
    circular: {
      borderRadius: "40px",
      bg: COLORS.primary,
      color: COLORS.appWhite,
      w: "40px",
      h: "40px",
      textAlign: "center",
      padding: 0,
      margin: 0,
      boxShadow: "-1px 4px 11px 7px rgba(0,0,0,0.17)",
    },
  },
};

// export const overrides = {
//   components: {

//     Heading: {
//       baseStyle: {
//         fontFamily: "Inter",
//         fontWeight: "600",
//       },
//       sizes: {
//         small: {
//           fontSize: "20px",
//         },
//         medium: { fontSize: "25px" },
//         large: { fontSize: "30px" },
//       },
//     },
//   },
// };
