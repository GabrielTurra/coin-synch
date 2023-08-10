import { styled } from "@/stitches.config";

export const TextInputComponent = styled("div", {
  label: {
    color: "$white",
    fontSize: "$sm",
    display: "block",
    marginBottom: "5px",
  }
});

export const LabelError = styled("p", {
  color: "$red500"
});

export const InputContainer = styled("div", {
  background: "$white",
  padding: "$2 $4",
  maxWidth: "100%",
  borderRadius: '$sm',
  boxSizing: "border-box",
  border: "3px solid $white",
  transition: "all 0.2s ease",

  "&:has(input:focus)": {
    borderColor: "$orange500"
  },

  "&:has(input:disabled)": {
    opacity: 0.7,
    cursor: "not-allowed"
  },
  
  input: {
    border: 0,
    width: "100%",
    outline: "none",
    color: "$gray600",

    "&::placeholder": {
      color: "$gray400",
    },

    "&:disabled": {
      cursor: "not-allowed"
    },
  },

  variants: {
    sizeWidth: {
      full: {
        width: "100%"
      }
    },
  }
});
