import { HeaderLogo } from "../Header.styles";
import { LogoProps } from "../Header.types";

import LogoImage from "@/public/logo-coin-synch.png";

export const Logo: React.FC<LogoProps> = () => {
  return (
    <HeaderLogo
      quality={100}
      src={LogoImage.src}
      width={LogoImage.width}
      height={LogoImage.height}
      alt="Coin Synch Image Logo"
      priority
    />
  );
};
