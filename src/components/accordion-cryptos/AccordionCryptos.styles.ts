import { Row } from "@/src/styles/grid";
import { styled } from "@/stitches.config";
import * as Accordion from "@radix-ui/react-accordion";

export const AccordionCryptosComponent = styled("div", {});

export const AccordionItem = styled(Accordion.Item, {
  width: "100%",

  "&:nth-child(even) > button": {
    background: "$gray100",
  },

  ".AccordionTrigger": {
    background: "$white",
    border: "none",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "$4 $6",
    fontSize: "$xs",

    "> div": {
      display: "flex",
      alignItems: "center",

      img: {
        marginRight: "$2",
        transition: "all 0.3s ease",
      },

      span: {
        display: "inline-block",
        marginLeft: "$2",
        color: "$gray500",
      },
    },

    "> img": {
      transition: "all 0.3s ease",
    },

    "&[data-state='open']": {
      borderBottom: "1px solid $gray100",
      "> img": {
        transform: "rotate(180deg)",
      },
    },
  },
});

export const ContentDisplay = styled("div", {
  alignItems: "center",
  textAlign: "start",
  padding: "$2 0",
});

export const ContentHead = styled(Row, {
  justifyContent: "space-between",
  padding: "5px 0",
  color: "$gray500",

  p: {
    fontSize: "$xs",
  },
});

export const ContentItem = styled(Row, {
  padding: "5px $2",
  justifyContent: "space-between",
  fontSize: "$sm",

  p: {
    fontSize: "$xs",
  },

  ".positive": {
    color: "$green500",
  },

  ".negative": {
    color: "$red500",
  },
});
