import React from "react";
import { ButtonComponent, Icon } from "./Button.styles";
import { ButtonProps } from "./Button.types";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text = "", color, sizeWidth, icon, ...props }, forwardedRef) => (
    <ButtonComponent 
      color={color} 
      sizeWidth={sizeWidth}
      ref={forwardedRef}
      {...props}
    >
      {text}
      {icon && <Icon src={icon.src} width={12} height={12} alt="" />}
    </ButtonComponent>
  )
);
