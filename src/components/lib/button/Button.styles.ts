import { styled } from "@/stitches.config";
import Image from "next/image";

export const Icon = styled(Image, {
  marginLeft: "$2",
});

export const ButtonComponent = styled("button", {
  all: "unset",
  
  background: "$primary",
  color: "white",
  padding: "$3 $6",
  borderRadius: "$xl",
  cursor: "pointer",
  transition: "all 0.2s ease",
  fontSize: "$md",
  width: "128px",
  textAlign: "center",

  "&:hover": {
    background: "$orange700",
  },

  variants: {
    color: {
      white: {
        background: "$white",
        color: "$textBase",

        "&:hover": {
          background: "$gray300",
        }
      },
      green: {
        background: "$green700",
        color: "$white",

        "&:hover": {
          background: "$green900",
        }
      },
    },
    size: {
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
        fontWeight: "bold"
      },
    },
  }
});
