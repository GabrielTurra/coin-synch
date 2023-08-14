import { Row } from "@/src/styles/grid";
import { styled } from "@/stitches.config";

export const WalletComponent = styled("div", {
  borderRadius: "$md",

  "@md": {
    background: "$white",
    boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.10)",
  },
});

export const WalletHeader = styled(Row, {
  justifyContent: "space-between",
  borderBottom: "1px solid $gray100",
  padding: "$8 0 $2",
  boxSizing: "border-box",

  "@md": {
    padding: "$8",
  },

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
  padding: "$10 0",
});

export const Title = styled("h5", {
  fontSize: "$xl",
  margin: "$2 0",
});

export const Description = styled("p", {
  fontSize: "$sm",
});
