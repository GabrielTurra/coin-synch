import { styled } from "@/stitches.config";

export const ListCryptosWalletComponent = styled("div", {
  "> div": {
    justifyContent: "center",
    gap: "32px",
  },

  display: "block",

  "@md": {
    display: "none",
  },
});

export const CoinCard = styled("div", {
  boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.10)",
  borderRadius: "$md",
  overflow: "hidden",
  background: "$white",
});

export const CoinCardHeader = styled("div", {
  padding: "$4",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "$orange100",
  fontSize: "$xs",

  div: {
    display: "flex",
    alignItems: "center",
  },

  img: {
    borderRadius: "$full",
    marginRight: "$2",
    display: "inline-block",
  },

  span: {
    display: "inline-block",
    marginLeft: "$1",
    color: "$gray500",
  },
});

export const CoinCardBody = styled("div", {
  padding: "$6 $4",

  "> div": {
    textAlign: "start",
  },

  span: {
    fontSize: "$xs",
    color: "$gray500",
  },

  small: {
    color: "$primary",

    span: {
      color: "$primary",
      marginRight: "3px",
    },
  },

  ".positive": {
    fontSize: "$sm",
    color: "$green500",
  },

  ".negative": {
    fontSize: "$sm",
    color: "$red500",
  },
});

export const Separator = styled("div", {
  height: "1px",
  width: "100%",
  background: "$gray100",
  margin: "$2 0",
});

export const ShowMore = styled("span", {
  display: "block",
  color: "$primary",
  padding: "$8",
  width: "100px",
  margin: "0 auto",
  cursor: "pointer",
  transition: "all 0.3s ease",

  "&:hover": {
    color: "$orange700",
  },
});
