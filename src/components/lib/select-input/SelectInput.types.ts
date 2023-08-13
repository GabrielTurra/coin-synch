import { InputHTMLAttributes } from "react";

export interface SelectInputProps
  extends InputHTMLAttributes<HTMLSelectElement> {
  showArrowIcon?: boolean;
  error?: string;
  children: React.ReactNode;
}

export interface SelectItemProps {
  children: React.ReactNode;
  value: string;
  icon?: string;
  showIcon?: boolean;
}
