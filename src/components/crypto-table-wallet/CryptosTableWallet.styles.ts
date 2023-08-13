import { styled } from "@/stitches.config";

export const CryptosTableWalletComponent = styled("table", {
  width: "100%",
  textAlign: "start",
  borderCollapse: "collapse",

  ".positive": {
    color: "$green500",
  },

  ".negative": {
    color: "$red500",
  },

  thead: {
    tr: {
      height: "auto",
    },

    th: {
      paddingLeft: "$8",
      textAlign: "start",
      color: "$gray500",
      fontSize: "$sm",
      fontWeight: "$regular",
    },
  },

  tbody: {
    tr: {
      height: "64px",

      "&:nth-child(even)": {
        background: "$gray100",
      },

      td: {
        paddingLeft: "$8",
        verticalAlign: "middle",
      },

      img: {
        borderRadius: "$full",
        marginRight: "$4",
        display: "inline-block",
      },

      div: {
        display: "flex",
        alignItems: "center",
      },

      span: {
        display: "inline-block",
        marginLeft: "$1",
        color: "$gray500",
      },
    },
  },
});

export const Title = styled("h5", {
  fontSize: "$xl",
  margin: "$2 0",
});

export const Description = styled("p", {
  fontSize: "$sm",
});

export const HoldingContent = styled("div", {
  fontSize: "$sm",
  display: "grid !important",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr 1fr",

  span: {
    marginLeft: "0 !important",
    color: "$primary !important",
  },
});
