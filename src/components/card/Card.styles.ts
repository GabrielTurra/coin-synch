import { styled } from "@/stitches.config";

export const CardComponent = styled("div", {
  background: "$white",
  boxShadow: "0px 12px 24px 0px rgba(0, 0, 0, 0.05)",
  padding: "$8",
  borderRadius: "$sm",
  transition: "all 0.3s ease",

  img: {
    marginBottom: "$4",
  },

  "@md": {
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
});

export const Category = styled("p", {
  color: "$primary",
  fontWeight: "$bold",
});

export const Title = styled("h4", {
  fontWeight: "$bold",
  margin: "$1 0",

  "@lg": {
    margin: "$3 0",
  },
});

export const Description = styled("p", {
  fontSize: "$sm",
});
