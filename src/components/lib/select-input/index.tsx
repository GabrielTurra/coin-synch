import React from "react";
import { SelectInputProps, SelectItemProps } from "./SelectInput.types";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
  DisplayItem,
  Error,
  SelectContent,
  SelectIcon,
  SelectPortal,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectViewport,
  StyledItem,
} from "./SelectInput.styles";

import ChevronDownIcon from "@/public/icons/chevron-down.svg";
import ChevronRightIcon from "@/public/icons/chevron-right-small.svg";
import Image from "next/image";

export const Input = React.forwardRef<HTMLDivElement, SelectInputProps>(
  ({ children, error, name = "", onChange, ...props }, forwardedRef) => {
    return (
      // @ts-expect-error
      <SelectPrimitive.Root
        // @ts-expect-error
        onValueChange={(value) => onChange({ target: { name, value } })}
        {...props}
        required
      >
        {/* @ts-expect-error */}
        <SelectTrigger ref={forwardedRef}>
          <SelectPrimitive.Value placeholder="Choose" />
          <SelectIcon>
            <Image src={ChevronDownIcon.src} width={16} height={16} alt="" />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectContent position="popper">
            <SelectScrollUpButton></SelectScrollUpButton>
            <SelectViewport>{children}</SelectViewport>
            <SelectScrollDownButton></SelectScrollDownButton>
          </SelectContent>
        </SelectPortal>
        {error && <Error>{error}</Error>}
      </SelectPrimitive.Root>
    );
  },
);

export const Item = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, icon, showIcon = false, ...props }, forwardedRef) => {
    return (
      <DisplayItem>
        <StyledItem {...props} ref={forwardedRef}>
          <SelectPrimitive.ItemText>
            {icon && <Image src={icon} width={16} height={16} alt="" />}
            {children}
          </SelectPrimitive.ItemText>
        </StyledItem>
        {showIcon && (
          <Image src={ChevronRightIcon.src} width={12} height={12} alt="" />
        )}
      </DisplayItem>
    );
  },
);

export const Group = SelectPrimitive.Group;
