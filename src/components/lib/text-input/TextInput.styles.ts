import { styled } from "@/stitches.config";

export const TextInputComponent = styled("div", {
  label: {
    color: "$white",
    fontSize: "$sm",
    display: "block",
    marginBottom: "5px",
  }
});

export const InputContainer = styled("div", {
  background: "$white",
  padding: "$2 $4",
  maxWidth: "100%",
  borderRadius: '$sm',
  boxSizing: "border-box",

  input: {
    border: 0,
    width: "100%",
    outline: "none",

    "&::placeholder": {
      color: "$gray400",
      
    }
  },

  variants: {
    sizeWidth: {
      full: {
        width: "100%"
      }
    }
  }
});
