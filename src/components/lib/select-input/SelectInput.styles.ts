import * as Select from "@radix-ui/react-select";
import { styled } from "@stitches/react";

export const SelectIcon = styled(Select.SelectIcon, {
  color: "$primary",
  transition: "all 0.3s ease",

  img: {
    marginRight: "0 !important",
  },
});

export const Error = styled("label", {
  height: "5px",
  marginTop: "2px",
  color: "$red300 !important",
  fontSize: "$xs !important",
});

export const SelectTrigger = styled(Select.SelectTrigger, {
  display: "grid",
  justifyContent: "space-between",
  gridTemplateColumns: "auto 50px",

  width: "100%",
  padding: "calc($2 + 4px) $4",

  color: "$textBase",
  backgroundColor: "white",
  fontSize: "$sm",

  borderRadius: "$sm",
  border: "1px solid $gray300",

  "span img": {
    marginRight: "$2",
    borderRadius: "$full",
  },

  small: {
    marginLeft: "5px",
    color: "$secondary",
    fontSize: "$sm",
  },

  "&[data-state='open']": {
    [`${SelectIcon}`]: {
      transform: "rotate(180deg)",
    },
  },
});

export const DisplayItem = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "$3 $8",
  borderRadius: "$sm",
  cursor: "pointer",
  borderBottom: "1px solid $gray100",

  "&:hover": {
    outline: "none",
    backgroundColor: "$orange100",
    color: "$primary",
  },
});

export const SelectContent = styled(Select.Content, {
  backgroundColor: "white",
  zIndex: "12",
  display: "block",
  borderRadius: "$sm",
  overflow: "hidden",
  padding: "0 !important",
  border: "1px solid $gray300",
  maxHeight: "300px",
  maxWidth: "100% !important",
  width: "100% !important",
  marginTop: "10px",
});

export const SelectViewport = styled(Select.Viewport, {
  width: "250px",
});

export const SelectLabel = styled(Select.Label, {});

export const SelectSeparator = styled(Select.Separator, {});

export const SelectPortal = styled(Select.Portal, {
  padding: "0",
});

export const StyledItemIndicator = styled(Select.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

export const scrollButtonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 25,
  backgroundColor: "white",
  cursor: "default",
};

export const SelectScrollUpButton = styled(
  Select.ScrollUpButton,
  scrollButtonStyles,
);

export const SelectScrollDownButton = styled(
  Select.ScrollDownButton,
  scrollButtonStyles,
);

export const StyledItem = styled(Select.Item, {
  fontSize: "$sm",
  color: "$textBase",
  display: "flex",
  position: "relative",
  userSelect: "none",
  margin: "0",

  "&[data-disabled]": {
    color: "$gray500",
    pointerEvents: "none",
  },

  img: {
    marginRight: "$2",
    borderRadius: "$full",
  },

  small: {
    fontSize: "$sm",
    marginLeft: "5px",
    color: "$secondary",
  },
});
