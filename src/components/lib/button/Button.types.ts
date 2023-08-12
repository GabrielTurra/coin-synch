import { ButtonHTMLAttributes } from "react";
import { StaticImageData } from "next/image";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: "white" | "green";
  sizeWidth?: "small" | "big" | "full";
  icon?: StaticImageData;
}
