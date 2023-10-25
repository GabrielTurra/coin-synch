import { createStitches, defaultThemeMap } from "@stitches/react";
import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  space,
  breakpoints,
  utils,
} from "@/src/styles/tokens";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
    utils: "space",
  },
  theme: {
    colors: {
      ...colors,
      primary: colors.orange500,
      secondary: colors.gray500,
      tertiary: colors.green500,
      quartenary: colors.red500,
      textBase: colors.textBase,
    },
    fonts,
    fontSizes,
    fontWeights,
    radii,
    space,
  },
  media: breakpoints,
  utils,
});
