import { Row } from "@/src/styles/grid";
import { styled } from "@/stitches.config";

export const WalletComponent = styled("div", {
  background: "$white",
  borderRadius: "$md",
  padding: "$8",
});

export const WalletHeader = styled(Row, {
  justifyContent: "space-between",
  borderBottom: "1px solid $gray100",
  paddingBottom: "$8",

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

export const Title = styled("h5", {
  fontSize: "$xl",
  margin: "$2 0",
});
export const Description = styled("p", {
  fontSize: "$sm",
});
