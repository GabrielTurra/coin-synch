import { Row } from "@/src/styles/grid";
import { styled } from "@/stitches.config";

export const HeroComponent = styled("div", {
  height: "70vh"
});

export const HeroContainer = styled("div", {
//   margin: "0 auto",
  padding: "0 $4",
  height: "100%",

  marginLeft: "auto",
  width: "calc(100vw - ((100vw - 272px) / 2))",
    
  "@xs": { 
    width: "calc(100vw - ((100vw - 460px) / 2))",
  }, 
    
  "@sm": { 
    padding: "0",
    width: "calc(100vw - ((100vw - 540px) / 2))",
  }, 
  
  "@md": { 
    width: "calc(100vw - ((100vw - 672px) / 2))",
  }, 
    
  "@lg": {
    width: "calc(100vw - ((100vw - 960px) / 2))",
  },
    
  "@xl": {
    width: "calc(100vw - ((100vw - 1216px) / 2))",
  },
});

export const Title = styled("h1", {
  color: "$primary"
});

export const Description = styled("p", {
  fontSize: "$xl",
  margin: "32px 0"
});

export const HeroRow = styled(Row, {
  alignItems: "center"
});

export const TagsRow = styled(Row, {
  marginTop: "50px"
});

export const Tag = styled("div", {
  marginRight: "10px",
  background: "$orange100",
  padding: "$2 $4",
  fontSize: "$xl",
  color: "$primary"
});
