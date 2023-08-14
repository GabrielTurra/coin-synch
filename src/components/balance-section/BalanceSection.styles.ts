import { Col, Row } from "@/src/styles/grid";
import { styled } from "@/stitches.config";

export const BalanceSectionComponent = styled("div", {
  marginBottom: "$3",
});

export const BalanceRow = styled(Row, {
  gap: "16px",

  "> div": {
    boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.10)",
    background: "$white",
    borderRadius: "$md",
    overflow: "hidden",
  },
});

export const IconContainer = styled("div", {
  padding: "$2",
  background: "$orange100",
  borderRadius: "$full",
  marginRight: "$4",
});

export const BalanceData = styled("div", {
  display: "flex",
  alignItems: "center",
  padding: "$8",

  span: {
    color: "$gray500",
  },

  h4: {
    fontSize: "$xl",
    fontWeight: "$regular",
  },
});

export const BalanceValue = styled(Col, {
  background: "$orange100",
  padding: "$2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  p: {
    fontSize: "32px",
    fontWeight: "$bold",
  },
});

export const NewsSection = styled(Col, {});

export const NewsContainer = styled(Col, {
  padding: "$4 !important",
  boxSizing: "border-box !important",
  display: "grid !important",
  gridTemplateColumns: "1fr",
  alignItems: "center",
  justifyContent: "center",

  label: {
    fontSize: "$sm",
    fontWeight: "$bold",
    display: "block",
  },

  span: {
    fontSize: "$xs",
    color: "$gray500",
    display: "block",
    margin: "$1 0",
  },

  a: {
    fontSize: "$xs",
    color: "$primary",
  },
});

export const CoinInfoVariation = styled("div", {
  display: "flex",
  alignItems: "center",
  padding: "5px 0",

  div: {
    display: "flex",
    alignItems: "center",
    margin: "$2 0",
    fontSize: "$sm",

    "&.positive, &.negative": {
      marginLeft: "5px",
    },
  },

  "@md": {
    display: "unset",

    ".positive, .negative": {
      marginLeft: "0",
    },
  },
});

export const CoinContainer = styled(Col, {
  padding: "$4 !important",
  boxSizing: "border-box !important",

  span: {
    fontSize: "$xs",
    color: "$gray500",
  },

  ".positive": {
    color: "$green500",
    fontSize: "$md",
  },

  ".negative": {
    color: "$red500",
    fontSize: "$md",
  },
});

export const ImageNews = styled(Col, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  img: {
    flexShrink: 0,
    minWidth: "100%",
    minHeight: "100%",
    objectFit: "cover",
  },
});
