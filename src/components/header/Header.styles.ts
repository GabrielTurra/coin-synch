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

  zIndex: "9",

  "@lg": {
    borderBottom: "none",
  },
});

export const HeaderContainer = styled(Container, {});

export const HeaderRow = styled(Row, {
  alignItems: "center",
});

export const HeaderLoggedRow = styled(Row, {
  alignItems: "center",
  justifyContent: "space-between",
  textAlign: "start",

  img: {
    float: "unset",
  },
});

export const CollapsibleMenuIcon = styled(Image, {
  alignItems: "center",
  justifyContent: "space-between",
  textAlign: "start",

  img: {
    float: "unset",
  },
});

export const LogoCol = styled(Col, {
  textAlign: "center",

  "@lg": {
    textAlign: "start",
  },
});

export const SignSectionLogged = styled("div", {
  textAlign: "end",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  cursor: "pointer",
});

export const UserComponent = styled("div", {
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "$2 0",
  cursor: "pointer",
  transition: "all 0.3s ease",
  borderRadius: "$md",
  position: "relative",

  "&:hover": {
    ".icon": {
      transform: "rotate(180deg)",
    },

    ul: {
      display: "block",
    },
  },

  img: {
    borderRadius: "$full",
  },

  ".icon": {
    marginRight: "0px",
    marginLeft: "5px",
    transition: "all 0.3s ease",
  },
});

export const ListMenu = styled("ul", {
  position: "absolute",
  display: "none",
  top: "35px",
  right: "20px",
  padding: "$2 0",
  listStyle: "none",
  boxShadow: "0px 4px 8px 0px rgba(77, 77, 77, 0.10)",
  borderRadius: "$md",
  zIndex: "4",
  transition: "all 0.3s ease",
  background: "$white",

  li: {
    padding: "$2 $8",
    color: "$gray500",

    "&:hover": {
      background: "$gray100",
    },
  },
});

export const Name = styled("span", {
  fontSize: "$sm",
  display: "none",
  marginLeft: "8px",

  "@sm": {
    display: "block",
  },
});

export const HeaderLogo = styled(Image, {
  width: "124px",
  height: "auto",
});

export const Navigation = styled("ul", {
  listStyle: "none",
  margin: "0",
  fontSize: "$sm",
  alignItems: "center",
  display: "none",

  "@sm": {
    display: "flex",
  },

  "@md": {
    margin: "0 32px",
  },

  li: {
    margin: "0 10px",
    cursor: "pointer",
    transition: "all 0.2s ease",

    "&:hover": {
      color: "$primary",
    },
  },
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
    },
  },
});

export const BarsIconStatic = styled(Image, {
  display: "block",
  float: "right",

  "@sm": {
    display: "none",
  },
});
