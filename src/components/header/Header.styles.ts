import { Container, Row, Col } from "@/src/styles/grid";
import { styled } from "@/stitches.config";
import Image from "next/image";

export const HeaderComponent = styled("div", {
  position: "fixed",
  top: 0,
  
  background: "$white",
  
  width: "100%",
  height: "64px",

  borderBottom: "1px solid $gray200",

  "@lg": {
    borderBottom: "none",
  }
});

export const HeaderContainer = styled(Container, {
});

export const HeaderRow = styled(Row, {
  alignItems: "center",
});

export const HeaderLogo = styled(Image, {
  width: "124px",
  height: "auto",
});

export const Navigation = styled("ul", {
  listStyle: "none",
  margin: "0 32px",
  fontSize: "$sm",
  alignItems: "center",
  display: "none",

  "@sm": {
    display: "flex",
  },

  li: {
    margin: "0 10px",
    cursor: "pointer",
    transition: "all 0.2s ease",

    "&:hover": {
      color: "$primary"
    }
  }
});

export const SignSection = styled("div", {
  textAlign: "end",
  position: "relative", 
  display: "none",

  "@sm": {
    display: "block",
  },

  "> button:first-child": {
    marginRight: "$1",
  },
});

export const SignRow = styled(Row, {
  justifyContent: "end",
  alignItems: "center",
});

export const SignHorizontalCol = styled(Col, {
  "> div": {
    position: "absolute",
    background: "$white",

    left: 0,
    top: "65px",
    width: "100%",
    height: "30px",
    display: "flex",
    alignItems: "center",
    boxShadow: "0px 4px 8px 0px rgba(77, 77, 77, 0.10)",
    
    "@lg": {
      position: "relative",
      background: "unset",
      top: "inherit",
      boxShadow: "none",
    }
  }
});

export const CollapsibleMenuIcon = styled(Image, {
  display: "block",
  float: "right",

  "@sm": {
    display: "none"
  }
});


