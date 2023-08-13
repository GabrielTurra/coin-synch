import { Page } from "@/src/components/page";
import { styled } from "@/stitches.config";

export const DashboardComponent = styled(Page, {
  paddingTop: "65px !important",
});

export const DashboardContent = styled("div", {
  backgroundColor: "#F9F9F9",
  minHeight: "calc(100vh - 128px)",
});

export const DashboardContainer = styled("div", {
  width: "90%",
  maxWidth: "100%",
  height: "100%",
  margin: "0 auto",
  boxSizing: "border-box",
  padding: "3% 0",

  "@lg": {
    padding: "3%",
    paddingLeft: "calc(3% + 86px)",
    width: "100%",
    maxWidth: "1340px",
    margin: "0 auto",
  },

  "@xxl": {
    paddingLeft: "3%",
  },
});
