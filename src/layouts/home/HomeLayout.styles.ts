import { Page } from "@/src/components/page";
import { styled } from "@/stitches.config";

export const HomeComponent = styled(Page, {
  paddingTop: "95px"
});

export const WavyCurve = styled("img", {
  position: "relative",
  zIndex: "-9999",
  width: "100%",
  height: "auto",
});