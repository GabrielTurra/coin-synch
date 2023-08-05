import { createStitches, defaultThemeMap } from "@stitches/react";
import { colors, fonts, fontSizes, fontWeights, radii, space, breakpoints  } from "@/src/styles/tokens";

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
    breakpoints,
    radii,
    space,
    utils: {
      m: (value) => ({
        margin: value,
      }),
      mt: (value) => ({
        marginTop: value,
      }),
      mr: (value) => ({
        marginRight: value,
      }),
      mb: (value) => ({
        marginBottom: value,
      }),
      ml: (value) => ({
        marginLeft: value,
      }),
      mx: (value) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value) => ({
        marginTop: value,
        marginBottom: value,
      }),
      p: (value) => ({
        padding: value,
      }),
      pt: (value) => ({
        paddingTop: value,
      }),
      pr: (value) => ({
        paddingRight: value,
      }),
      pb: (value) => ({
        paddingBottom: value,
      }),
      pl: (value) => ({
        paddingLeft: value,
      }),
      px: (value) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      br: (value) => ({
        borderRadius: value,
      }),
    }
  },
});