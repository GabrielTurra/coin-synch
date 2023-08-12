import { styled } from "@/stitches.config";
import { CryptosTableComponent } from "../crypto-table/CryptosTable.styles";
import { AccordionCryptosComponent } from "../accordion-cryptos/AccordionCryptos.styles";

export const TopCryptosSectionComponent = styled("div", {
  textAlign: "center",
  padding: "$30 0",

  h2: {
    marginBottom: "$10",
  },

  [`${CryptosTableComponent}`]: {
    display: "none",

    "@md": {
      display: "table",
    },
  },

  [`${AccordionCryptosComponent}`]: {
    display: "block",

    "@md": {
      display: "none",
    },
  },
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
    color: "$orange700",
  },
});
