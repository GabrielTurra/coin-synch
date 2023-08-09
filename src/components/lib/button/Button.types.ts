import { StaticImageData } from "next/image";

export interface ButtonProps {
    text: string;
    color?: "white" | "green";
    size?: "small" | "big";
    icon?: StaticImageData;
}
