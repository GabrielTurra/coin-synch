import { globalCss } from "@/stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
    fontFamily: "$default",
    fontWeight: "$regular",
    color: "$textBase"
  },

  h1: {
    fontSize: "$6xl",
    lineHeight: "56px",
    letterSpacing: "-1",
  },

  h2: {
    fontSize: "$5xl",
    lineHeight: "48px",
    letterSpacing: "-1",
  },
  
  h3: {
    fontSize: "$4xl",
    lineHeight: "40px",
  },

  h4: {
    fontSize: "$2xl",
    lineHeight: "32px",
  },

  h5: {
    fontSize: "$xl",
    lineHeight: "24px",
  },

  h6: {
    fontSize: "$lg",
    lineHeight: "22px",
  },

  "p, input, textarea": {
    fontSize: "$md",
    lineHeight: "24px",
  },

  label: {
    fontSize: "$sm",
    lineHeight: "16px",
  },

  small: {
    fontSize: "$xs",
    lineHeight: "14px",
  }
});