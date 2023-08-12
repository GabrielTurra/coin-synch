import { Navigation as NavigationComponent } from "../Header.styles";
import { LogoProps } from "../Header.types";

export const Navigation: React.FC<LogoProps> = () => {
  return (
    <NavigationComponent>
      <li>About us</li>
      <li>Top Cryptos</li>
    </NavigationComponent>
  );
};
