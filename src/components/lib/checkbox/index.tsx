import React from "react";
import { CheckboxComponent, CheckboxItem, Error } from "./Checkbox.styles";
import { CheckboxProps } from "./Checkbox.types";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps> (
  ({ children, error, ...props }, forwardedRef) => {  
    return (
      <>
        <CheckboxComponent>
          <CheckboxItem className="container">
            <input 
              type="checkbox" 
              ref={forwardedRef}
              {...props}
            />
            <span />
          </CheckboxItem>
          {children}
        </CheckboxComponent>
        <Error>{error}</Error>
      </>
    );
  });
