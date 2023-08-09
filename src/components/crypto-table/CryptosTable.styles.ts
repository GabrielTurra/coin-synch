import { styled } from "@/stitches.config";

export const CryptosTableComponent = styled("table", {
  width: "100%",
  textAlign: "start",
  borderCollapse: "collapse",

  '.positive': {
    color: "$green500"
  },

  '.negative': {
    color: "$red500"
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
      fontWeight: "$regular"
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
        display: "inline-block"
      },

      div: {
        display: "flex",
        alignItems: "center",
      },

      span: {
        display: "inline-block",
        marginLeft: "$1",
        color: "$gray500",
      }
    }
  }
});
