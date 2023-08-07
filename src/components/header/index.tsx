import { Col } from "@/src/styles/grid";
import { Button } from "../lib";
import {
  HeaderContainer, 
  HeaderComponent, 
  HeaderLogo, 
  Navigation, 
  SignSection, 
  HeaderRow, 
  SignRow, 
  SignHorizontalCol,
  CollapsibleMenuIcon
} from "./Header.styles";
import { HeaderProps } from "./Header.types";
import { HorizontalScrollList } from "../horizontal-scroll-list";

import LogoImage from "@/public/logo-coin-synch.png";
import BarsIcon from "@/public/icons/bars.svg";
import Link from "next/link";

export const Header:React.FC<HeaderProps> = () => {
  return (
    <HeaderComponent>
      <HeaderContainer>
        <HeaderRow>
          <Col size={{
            "@initial": 8,
            "@lg": 6,
          }}>
            <HeaderRow>
              <Link href="/">
                <HeaderLogo 
                  quality={100}
                  src={LogoImage.src}  
                  width={LogoImage.width} 
                  height={LogoImage.height} 
                  alt="Coin Synch Image Logo"
                  priority
                />
              </Link>

              <Navigation>
                <li>About us</li>
                <li>Top Cryptos</li>
              </Navigation>
            </HeaderRow>
          </Col>
          <Col size={{
            "@initial": 4,
            "@lg": 6,
          }}>
            <SignRow>
              <SignHorizontalCol size={{
                "@initial": 0,
                "@lg": 7,
              }}>
                <HorizontalScrollList />
              </SignHorizontalCol>

              <Col size={{
                "@initial": 12,
                "@lg": 5,
              }}>
                <SignSection>
                  <Button text="Sign up" color="white" />
                  <Button text="Sign up" />
                </SignSection>

                <CollapsibleMenuIcon 
                  src={BarsIcon.src}
                  width={24}
                  height={24}
                  alt={"bars"}
                />
              </Col>
            </SignRow>
          </Col>
        </HeaderRow>
      </HeaderContainer>
    </HeaderComponent>
  );
};