import React from "react";
import { ButtonComponent, Icon } from "./Button.styles";
import { ButtonProps } from "./Button.types";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text = "", color, size, icon, ...props }, forwardedRef) => (
    <ButtonComponent 
      color={color} 
      size={size} 
      ref={forwardedRef} 
      {...props}
    >
      {text}
      {icon && <Icon src={icon.src} width={12} height={12} alt="" />}
    </ButtonComponent>
  )
);

Button.displayName = "Button";
