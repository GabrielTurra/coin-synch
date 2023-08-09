import { styled } from "@/stitches.config";

export const TopCryptosSectionComponent = styled("div", {  
  textAlign: "center",
  padding: "$20 0",

  h2: {
    marginBottom: "$10",
  }
});

export const ShowMore = styled("span", {
  display: "block",
  color: "$primary",
  padding: "$8",
  width: "100px",
  margin: "0 auto",
  cursor: "pointer",
  transition: "all 0.3s ease",

  "&:hover": {
    color: "$orange700"
  }
});
