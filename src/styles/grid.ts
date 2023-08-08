import { styled } from "@/stitches.config";

export const Container = styled("div", {
  margin: "0 auto",
  maxWidth: "272px",
  padding: "0 $4",
  height: "100%",
  
  "@xs": { 
    maxWidth: "460px",
  }, 

  "@sm": { 
    padding: "0",
    maxWidth: "540px",
  }, 

  "@md": { 
    maxWidth: "672px",
  }, 
  
  "@lg": {
    maxWidth: "960px",
  },
  
  "@xl": {
    maxWidth: "1216px",
  },
});

export const Row = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  height: "100%", 
});

export const Col = styled("div", {
  flexBasis: 0,
  flexGrow: 1,
  maxWidth: "100%",

  variants: {
    size: {
      0: {
        all: "unset",

        flex: "0 0 0",
        maxWidth:"0%",
      },
      1: {
        all: "unset",

        flex: "0 0 8.33333333%",
        maxWidth:"8.33333333%",
      },
      
      2: {
        all: "unset",

        flex: "0 0 16.66666667%",
        maxWidth:"16.66666667%",
      },

      3: {
        all: "unset",

        flex: "0 0 25%",
        maxWidth:"25%",
      },  

      4: {
        all: "unset",

        flex: "0 0 33.3333333%",
        maxWidth:"33.3333333%",
      }, 

      5: {
        all: "unset",

        flex: "0 0 41.66666667%",
        maxWidth:"41.66666667%",
      },     

      6: {
        all: "unset",

        flex: "0 0 50%",
        maxWidth:"50%",
      },  

      7: {
        all: "unset",

        flex: "0 0 58.33333333%",
        maxWidth:"58.33333333%",
      },      
      8: {
        all: "unset",

        flex: "0 0 66.66666667%",
        maxWidth:"66.66666667%",
      },      
      9: {
        all: "unset",

        flex: "0 0 75%",
        maxWidth:"75%",
      },      

      10: {
        all: "unset",

        flex: "0 0 83.33333333%",
        maxWidth:"83.33333333%",
      },   

      11: {
        all: "unset",

        flex: "0 0 91.66666667%",
        maxWidth:"91.66666667%",
      },

      12: {
        all: "unset",

        flex: "0 0 100%",
        maxWidth:"100%",
      },      
    },
  }
});
