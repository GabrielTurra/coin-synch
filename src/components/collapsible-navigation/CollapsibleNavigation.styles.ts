import { styled } from "@/stitches.config";

export const CollapsibleNavigationComponent = styled("div", {
  position: "fixed",
  top: "64px",
  left: 0,
  height: "calc(100vh - 128px)",
  width: "86px",
  background: "$white",
  paddingTop: "64px",
});

export const NavigationItem = styled("div", {
  width: "100%",
  textAlign: "center",
  cursor: "pointer",
  padding: "$4 0",
  transition: "all 0.2s ease",

  "&:hover": {
    background: "$orange100",
  },
});
