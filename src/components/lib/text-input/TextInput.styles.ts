import { styled } from "@/stitches.config";

export const TextInputComponent = styled("div", {
  label: {
    color: "$white",
    fontSize: "$sm",
    display: "block",
    marginBottom: "5px",
  },
});

export const Error = styled("label", {
  height: "5px",
  marginTop: "2px",
  color: "$red300 !important",
  fontSize: "$xs !important",
});

export const InputContainer = styled("div", {
  background: "$white",
  padding: "$2 $4",
  maxWidth: "100%",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "1px solid $gray300",
  transition: "all 0.2s ease",
  display: "grid",
  gridTemplateColumns: "1fr",
  alignItems: "center",

  "&:has(.icon)": {
    gridTemplateColumns: "30px auto",
  },

  "&:has(input:focus)": {
    borderColor: "$orange500",
  },

  "&:has(input:disabled)": {
    opacity: 0.7,
    cursor: "not-allowed",
  },

  "&:has(.type-selector)": {
    gridTemplateColumns: "auto 30px",

    "&:has(.icon)": {
      gridTemplateColumns: "30px auto 30px",
    },
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
      cursor: "not-allowed",
    },
  },

  ".type-selector": {
    cursor: "pointer",
  },

  variants: {
    sizeWidth: {
      full: {
        width: "100%",
      },
    },
  },
});
