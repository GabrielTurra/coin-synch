import { keyframes, styled } from "@/stitches.config";
import { Container } from "@/src/styles/grid";

const scrollText = keyframes({
  "0%": { transform: "translate3d(0, 0, 0)" },
  "100%": { transform: "translate3d(-100%, 0, 0)" },
});

export const HorizontalContent = styled("div", {
  animation: `${scrollText} 40s linear infinite`,
});

export const HorizontalScrollListComponent = styled("div", {
  ".content": {
    margin: "0 15px",
    fontSize: "$sm",
  },

  ".title": {
    color: "$black",
  },

  ".variation": {
    color: "$black",
  },

  ".positive_variation": {
    color: "$green500",
  },

  ".negative_variation": {
    color: "$red500",
  },

  ".value": {
    margin: "0 $2",
  },

  [`&:hover ${HorizontalContent}`]: {
    animationPlayState: "paused",
  },
});

export const ListContainer = styled(Container, {
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  display: "flex",
  whiteSpace: "nowrap",
  alignItems: "center",

  "@sm": {
    maxWidth: "352px",
  },
});
