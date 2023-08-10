import { styled } from "@/stitches.config";

export const CheckboxComponent = styled("div", {
  display: "flex",

  p: {
    fontSize: "$sm",
    a: {
      float: "unset",
      fontSize: "$sm",
      fontWeight: "$bold",
      color: "$textBase"
    }
  }
});

export const Error = styled("label", {
  height: "5px",
  marginTop: "2px",
  color: "$red300 !important",
  fontSize: "$xs !important",
});import { fontWeights } from './../../../styles/tokens/font-weights';



export const CheckboxItem = styled("label", {
  display: "block",
  position: "relative",
  cursor: "pointer",
  userSelect: "none",
  height: "$4",
  width: "$4",
  marginTop: "$4",
  marginRight: "$2",
    
  "input:checked ~ span": {
    backgroundColor: "$primary",
  },

  "input:checked ~ span:after": {
    display: "block"
  },

  input: {
    position: "absolute",
    opacity: 0,
    height: 0,
    width: 0,
  },

  span: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "$4",
    width: "$4",
    border: "1px solid $primary",
    borderRadius: "$sm",

    "&:after": {
      content: "",
      position: "absolute",
      display: "none",
      left: "4px",
      top: "2px",
      width: "4px",
      height: "7px",
      border: "solid white",
      borderWidth: "0 3px 3px 0",
      transform: "rotate(45deg)",
    }
  }
});
