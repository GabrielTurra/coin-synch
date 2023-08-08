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
    fontSize: "$5xl",
    lineHeight: "120%",
    letterSpacing: "-1",

    "@lg": {
      fontSize: "$6xl",
      lineHeight: "56px",
    }, 
  },

  h2: {
    fontSize: "$4xl",
    lineHeight: "120%",
    letterSpacing: "-1",

    "@lg": {
      fontSize: "$5xl",
      lineHeight: "48px",
    }, 
  },
  
  h3: {
    fontSize: "$3xl",
    lineHeight: "40px",

    "@lg": {
      fontSize: "$4xl",
      lineHeight: "120%",
    }, 
  },

  h4: {
    fontSize: "$1xl",
    lineHeight: "32px",

    "@lg": {
      fontSize: "$2xl",
      lineHeight: "120%",
    }, 
  },

  h5: {
    fontSize: "$lg",
    lineHeight: "24px",

    "@lg": {
      fontSize: "$xl",
      lineHeight: "120%",
    }, 
  },

  h6: {
    fontSize: "$md",
    lineHeight: "22px",

    "@lg": {
      fontSize: "$lg",
      lineHeight: "120%",
    }, 
  },

  "p, input, textarea": {
    fontSize: "$sm",
    lineHeight: "160%",

    "@md": {
      fontSize: "$md",
      lineHeight: "24px",
    }, 
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
