import { styled } from "@/stitches.config";
import * as Tooltip from "@radix-ui/react-tooltip";
import { keyframes } from "@stitches/react";

const slideUpAndFade = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(2px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const slideRightAndFade = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateX(-2px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const slideDownAndFade = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(-2px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const slideLeftAndFade = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateX(2px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateX(0)",
  },
});

export const Content = styled(Tooltip.Content, {
  background: "$primary",

  color: "$white",
  padding: "$2 $8",
  borderRadius: "$sm",

  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  userSelect: "none",

  ".TooltipArrow": {
    fill: "$primary",
  },

  "&[data-state='delayed-open'][data-side='top']": {
    animationName: `${slideUpAndFade}`,
  },

  "&[data-state='delayed-open'][data-side='right']": {
    animationName: `${slideRightAndFade}`,
  },

  "&[data-state='delayed-open'][data-side='bottom']": {
    animationName: `${slideDownAndFade}`,
  },

  "&[data-state='delayed-open'][data-side='left']": {
    animationName: `${slideLeftAndFade}`,
  },
});
