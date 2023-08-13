import { Row } from "@/src/styles/grid";
import { styled } from "@/stitches.config";

export const WalletComponent = styled("div", {
  background: "$white",
  borderRadius: "$md",
});

export const WalletHeader = styled(Row, {
  justifyContent: "space-between",
  borderBottom: "1px solid $gray100",
  padding: "$8",
  boxSizing: "border-box",

  "> div": {
    display: "flex",
    alignItems: "center",

    img: {
      marginRight: "$2",
    },
  },
});

export const WalletBody = styled("div", {
  textAlign: "center",
  padding: "$8 0",
});
