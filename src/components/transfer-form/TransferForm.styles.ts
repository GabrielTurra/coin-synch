import { styled } from "@/stitches.config";

export const TransferFormComponent = styled("form", {
  fieldset: {
    marginTop: "$6",
    border: "none",

    "> div": {
      marginTop: "$4",
    },

    a: {
      color: "$gray500",
      fontSize: "$xs",
      height: "100%",
      display: "block",
      textAlign: "end",
      margin: "$2 0 $4 0",
      textDecoration: "none",
      transition: "all 0.3s ease",

      "&:hover": {
        color: "$primary",
      },
    },

    button: {
      marginTop: "$4",
    },
  },

  p: {
    textAlign: "center",
    marginTop: "$4",

    strong: {
      cursor: "pointer",
    },
  },

  strong: {
    span: {
      color: "$primary",
    },
  },
});

export const Title = styled("h4", {
  fontWeight: "$bold",
  textAlign: "center",
});

export const ErrorMessage = styled("p", {
  width: "100%",
  height: "5px",
  display: "block",
  marginBottom: "$6",
  color: "$red300 !important",
  fontSize: "$xs !important",
  textAlign: "center",
});

export const CoinSection = styled("div", {
  margin: "$6 0",
  color: "$gray500 !important",
  fontSize: "$sm !important",
  textAlign: "center",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const CoinContent = styled("div", {
  textAlign: "center",
  marginLeft: "10px",
  display: "flex",
  alignItems: "center",
  color: "$textBase",

  img: {
    borderRadius: "$full",
    marginRight: "5px",
  },

  span: {
    small: {
      marginLeft: "5px",
      color: "$gray500 !important",
    },
  },
});

export const Separator = styled("div", {
  height: "1px",
  width: "100%",
  background: "$gray100",
  marginTop: "$4",
});
