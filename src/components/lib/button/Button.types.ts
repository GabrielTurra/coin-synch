import { StaticImageData } from "next/image";

export interface ButtonProps {
    text: string;
    color?: "white";
    size?: "small" | "big";
    icon?: StaticImageData;
}