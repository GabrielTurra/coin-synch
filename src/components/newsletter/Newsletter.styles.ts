import { Row } from "@/src/styles/grid";
import { styled } from "@/stitches.config";
import { TextInput } from "../lib";

export const NewsletterComponent = styled("div", {
  padding: "$30 0",
  background: "linear-gradient(90deg, $orange500 0%, $orange700 100%)",
  position: "relative",
  overflow: "hidden",
  zIndex: "0",
});

export const WavyCurve = styled("img", {
  position: "absolute",
  bottom: 0,
  width: "100%",
  zIndex: "-1",
});

export const NewsletterRow = styled(Row, {
  justifyContent: "space-between",
  alignItems: "center",
  
  "@lg": {
    justifyContent: "center",
  },

  button: {
    boxShadow: "0px 12px 24px 0px rgba(0, 0, 0, 0.10)",
  },

  ".input": {
    marginBottom: "$4",
    boxShadow: "0px 12px 24px 0px rgba(0, 0, 0, 0.10)",
  },

  "> div": {
    padding: "$4 0"
  }
});

export const Category = styled("p", {
  color: "$orange200",
  fontSize: "$2xl",
  fontWeight: "$bold",
});
  
export const Title = styled("h2", {
  fontWeight: "$bold",
  margin: "$1 0",
  color: "$white",

  "@lg": {
    margin: "$2 0",
  },
});
  
export const Description = styled("p", {
  fontSize: "$md",
  color: "$white",
});
