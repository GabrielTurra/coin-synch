import React from "react";
import { InputContainer, TextInputComponent, LabelError } from "./TextInput.styles";
import { TextInputProps } from "./TextInput.types";

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, sizeWidth, className, ...props }, forwardedRef) => (
    <TextInputComponent className={className}>
      {label && (<label>{label}</label>)}
      
      <InputContainer sizeWidth={sizeWidth}>
        <input ref={forwardedRef} {...props} />
      </InputContainer>

    </TextInputComponent>
  )
);
