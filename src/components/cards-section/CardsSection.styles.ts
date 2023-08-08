import { Row, Container } from "@/src/styles/grid";
import { styled } from "@/stitches.config";

export const CardsSectionComponent = styled("div", {
  background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #F7F7F7 100%)",
  padding: "$20 0"
});

export const Category = styled("h5", {
  color: "$primary",
  fontWeight: "$bold",
  marginBottom: "$2"
});

export const Title = styled("h2", {
  fontWeight: "$bold"
});

export const Description = styled("p", {
  margin: "$5 0",
});

export const SectionContainer = styled(Container, {
  "@sm": { 
    width: "calc(100vw - ((100vw - 540px) / 2) + $2)",
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

export const SectionRow = styled(Row, {
  alignItems: "center",
  justifyContent: "space-between",

  ".col-text": {
    order: 1,

    "@lg": {
      order: 2,
    },
  },
  ".col-cards": {
    marginTop: "$10",
    order: 2
  },
});

export const CardsList = styled("div", {
  display: "grid",
  gap: "$4",
  paddingRight: "20px",

  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gridAutoColumns: "minmax(250px, 1fr)",
  gridAutoFlow: "column",
  overflowX: "auto",

  "> div:nth-child(n+3)": {
    "@md": {
      marginLeft: "$10",
      marginRight: "-$10",
    },

    "@lg": {
      marginLeft: "$20",
      marginRight: "-$20",
    },
  }
});