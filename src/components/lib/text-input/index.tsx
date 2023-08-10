import React from "react";
import { InputContainer, TextInputComponent } from "./TextInput.styles";
import { TextInputProps } from "./TextInput.types";

export const TextInput:React.FC<TextInputProps> = ({ label, sizeWidth, className, ...props }) => {
  return (
    <TextInputComponent className={className}>
      {label && <label>{label}</label>}
      <InputContainer sizeWidth={sizeWidth}>
        <input {...props} />
      </InputContainer>
    </TextInputComponent>
  );
};
