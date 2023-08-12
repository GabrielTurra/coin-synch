import { StaticImageData } from "next/image";

export interface CardProps {
  category: string;
  title: string;
  description: string;
  icon: StaticImageData;
}
