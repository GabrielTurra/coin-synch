import { styled } from "@/stitches.config";

export const CollapsibleNavigationComponent = styled("div", {
  background: "$white",
  paddingTop: "128px",
  height: "100vh",

  maxWidth: "90%",
  minWidth: "auto",

  position: "fixed",
  top: 0,
  left: "-400px",
  display: "block",

  overflowY: "auto",
  transition: "all 0.3s ease",
  zIndex: 6,

  "@lg": {
    display: "block !important",
    width: "86px",
    left: 0,

    paddingTop: "64px",
    height: "calc(100vh - 192px)",
    top: "64px",
  },

  variants: {
    isOpen: {
      true: {
        left: 0,
      },
    },
  },
});

export const NavigationItem = styled("div", {
  width: "100%",
  textAlign: "center",
  cursor: "pointer",
  padding: "$4 $12 $4 $4",
  transition: "all 0.2s ease",
  boxSizing: "border-box",

  "&:hover": {
    background: "$orange100",
  },

  "@lg": {
    alignItems: "center",
    padding: "$4 0",
    display: "flex",
  },
});

export const NavigationContent = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "100%",

  img: {
    marginRight: "$4",
  },

  span: {
    display: "block",
  },

  "@lg": {
    display: "block",

    img: {
      marginRight: 0,
    },

    span: {
      display: "none",
    },
  },
});

export const Overlay = styled("div", {
  position: "fixed",
  display: "block",
  width: "100vw",
  height: "100vh",
  background: "$black",
  opacity: 0.7,
  left: 0,
  top: 0,
  zIndex: 5,

  "@lg": {
    display: "none !important",
  },

  variants: {
    isOpen: {
      false: {
        display: "none",
      },
    },
  },
});
