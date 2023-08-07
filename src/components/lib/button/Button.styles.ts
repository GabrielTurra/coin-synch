import { styled } from "@/stitches.config";

export const ButtonComponent = styled("button", {
  all: "unset",
  
  background: "$primary",
  color: "white",
  padding: "$2 $4",
  borderRadius: "$xl",
  cursor: "pointer",
  transition: "all 0.2s ease",
  fontSize: "$sm",

  "&:hover": {
    background: "$orange600",
  },

  variants: {
    color: {
      white: {
        background: "$white",
        color: "$textBase",

        "&:hover": {
          background: "$gray300",
        }
      }
    }
  }
});