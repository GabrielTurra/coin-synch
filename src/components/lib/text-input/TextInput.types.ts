import { InputHTMLAttributes } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  sizeWidth?: "full";
  icon?: string;
  error?: string;
}
