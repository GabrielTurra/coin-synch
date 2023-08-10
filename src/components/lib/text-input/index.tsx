import React, { useState } from "react";
import { InputContainer, TextInputComponent, Error } from "./TextInput.styles";
import { TextInputProps } from "./TextInput.types";
import Image from "next/image";

import EyeIcon from "@/public/icons/eye.svg";

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps> (
  ({ icon, label, type, error, sizeWidth, className, ...props }, forwardedRef) => {
    const [inputType, setinputType] = useState(type);

    return (
      <TextInputComponent className={className}>
        {label && (<label>{label}</label>)}

        <InputContainer sizeWidth={sizeWidth}>
          {icon && (
            <Image 
              src={icon}
              width={16}
              height={16}
              alt=""
              className="icon"
            />
          )}

          <input type={inputType} ref={forwardedRef} {...props} />

          {type === "password" && (
            <Image 
              src={EyeIcon.src}
              width={16}
              height={16}
              alt=""
              className="type-selector"
              onClick={() => setinputType((value) => {
                if(value === "password") return "text"
                return "password"
              })}
            />
          )}
        </InputContainer>
        {error && <Error>{error}</Error>}
      </TextInputComponent>
    )
  }
);
