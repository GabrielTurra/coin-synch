import { styled } from "@/stitches.config";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  inset: "0",
  background: "$textBase",
  opacity: "0.9",
  zIndex: "10",
});

export const Content = styled(Dialog.Content, {
  maxHeight: "80vh",
  maxWidth: "90%",
  width: "100%",
  padding: "$8",
  boxSizing: "border-box",

  "@sm": {
    maxWidth: "450px",
  },

  overflowY: "auto",
  zIndex: "11",

  background: "$white",
  boxShadow: "0px 12px 24px 0px rgba(0, 0, 0, 0.10)",
  borderRadius: "$md",

  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  display: "flex",
  flexDirection: "column",
});

export const Close = styled(Dialog.Close, {
  position: "absolute",
  lineHeight: "0",
  right: "$4",
  top: "$4",
  border: "none",
  backgroundColor: "transparent",

  "&:hover": {
    cursor: "pointer",
  },
});
