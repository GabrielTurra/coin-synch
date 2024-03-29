import { styled } from "@/stitches.config";
import Image from "next/image";

export const Icon = styled(Image, {
  marginLeft: "$2",

  variants: {
    onlyIcon: {
      true: {
        marginLeft: "0",

        "@sm": {
          marginLeft: "$2",
        },
      },
    },
  },
});

export const ButtonComponent = styled("button", {
  all: "unset",

  background: "$primary",
  boxSizing: "border-box",
  padding: "$3 $6",
  borderRadius: "$xl",
  cursor: "pointer",
  transition: "all 0.2s ease",
  fontSize: "$md",
  minWidth: "128px",
  textAlign: "center",
  display: "static",

  span: {
    marginLeft: "0 !important",
    color: "$white !important",
  },

  "&:hover": {
    background: "$orange700",
  },

  "&:disabled": {
    background: "$gray500",
    opacity: 0.7,
    cursor: "not-allowed",
  },

  variants: {
    color: {
      white: {
        background: "$white",
        span: {
          color: "$textBase !important",
        },

        "&:hover": {
          background: "$gray300",
        },
      },
      green: {
        background: "$green700",
        span: {
          color: "$white !important",
        },

        "&:hover": {
          background: "$green900",
        },
      },
    },
    sizeWidth: {
      small: {
        padding: "$2 $4",
        fontSize: "$sm",
        width: "auto",
        minWidth: "50px",
      },
      big: {
        padding: "$3 $6",
        fontSize: "$sm",
        width: "230px",
        textTransform: "uppercase",
        fontWeight: "bold",
      },
      full: {
        padding: "$3 $6",
        fontSize: "$md",
        width: "100%",
      },
    },
    onlyIcon: {
      true: {
        width: "30px",
        height: "30px",

        minHeight: "auto",
        minWidth: "auto",

        padding: "0",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",

        span: {
          display: "none",
        },

        "@sm": {
          width: "auto",
          height: "auto",

          padding: "10px $6",

          minWidth: "128px",
          display: "flex",
          alignItems: "center",

          span: {
            display: "block",
          },
        },
      },
    },
  },
});
