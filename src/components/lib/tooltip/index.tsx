import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import React from "react";
import * as TooltipBase from "./Tooltip.styles";
import { TooltipContentProps } from "./Tooltip.types";

export const Content = React.forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ side, ...props }, forwardedRef) => {
    return (
      <TooltipBase.Content side={side} {...props} ref={forwardedRef}>
        Lorem Ipsum
        <TooltipPrimitive.Arrow className="TooltipArrow" />
      </TooltipBase.Content>
    );
  },
);

Content.displayName = "TooltipContent";
export const Root = TooltipPrimitive.Root;
export const Provider = TooltipPrimitive.Provider;
export const Portal = TooltipPrimitive.Portal;
export const Trigger = TooltipPrimitive.Trigger;
