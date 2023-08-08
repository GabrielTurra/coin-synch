import { Page } from "@/src/components/page";
import { styled } from "@/stitches.config";

export const HomeComponent = styled(Page, {
  paddingTop: "95px"
});

export const WavyCurve = styled("div", {
  position: "relative",
  width: "100%",
  display: "flex",

  "img": {
    top: "0px",
    position: "absolute",
    transform: "translateY(-50%)",
    width: "100%",

    "@md": {
      top: "120px",
    }
  }
});