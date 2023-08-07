import { ButtonProps } from "./Button.types";
import { ButtonComponent, Icon } from "./Button.styles";

export const Button:React.FC<ButtonProps> = ({ text = "", color, size, icon }) => {
  return (
    <ButtonComponent color={color} size={size}>
      {text}
      {icon && (
        <Icon
          src={icon.src} 
          width={12} 
          height={12} 
          alt="" 
        /> 
      )}
    </ButtonComponent>
  );
};