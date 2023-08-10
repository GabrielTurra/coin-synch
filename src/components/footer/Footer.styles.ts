import { Row } from "@/src/styles/grid";
import { styled } from "@/stitches.config";

export const FooterComponent = styled("div", {
  height: "64px"
});

export const FooterRow = styled(Row, {
  alignItems: "center",
  justifyContent: "center",
  
  "@md": {
    justifyContent: "space-between",
  },

  span: {
    fontSize: "$sm",
    display: "none",

    "@md": {
      display: "block",
    }
  }
});
