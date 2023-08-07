import { ButtonProps } from "./Button.types";
import { ButtonComponent } from "./Button.styles";

export const Button:React.FC<ButtonProps> = ({ text = "", link, color }) => {
  return (
    <ButtonComponent color={color}>
      {link ? 
        <a 
          href={link.href} 
          rel={link.rel || ""}
          target={link.target}
        >
          {link.text}
        </a> : text}
    </ButtonComponent>
  );
};