import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  sizeWidth?: "full";
}
