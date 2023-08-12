// External Dependencies
import React from "react";
import Link from "next/link";

// Internal Dependencies
import { Logo } from "./logo";
import { Navigation } from "./navigation";
import { Col } from "@/src/styles/grid";
import { SignSection } from "./sign-section";
import { HeaderProps } from "./Header.types";
import { HorizontalScrollList } from "../horizontal-scroll-list";

// Images
import BarsIcon from "@/public/icons/bars.svg";

// Providers
import { useSession } from "next-auth/react";
import { useCoins } from "@/src/hooks/CoinsProvider";

// Styles
import {
  LogoCol,
  SignRow,
  HeaderRow,
  HeaderContainer,
  HeaderComponent,
  HeaderLoggedRow,
  SignHorizontalCol,
  CollapsibleMenuIcon,
} from "./Header.styles";
import { CollapsibleNavigation } from "../collapsible-navigation";

export const Header: React.FC<HeaderProps> = () => {
  const controlCoins = useCoins();
  const { status } = useSession();

  const isAuthenticated = status === "authenticated";

  if (isAuthenticated) {
    return (
      <HeaderComponent>
        <HeaderContainer>
          <HeaderLoggedRow>
            <Col size={{ "@initial": 3, "@lg": 0 }}>a</Col>
            <LogoCol>
              <Link href="/dashboard">
                <Logo />
              </Link>
            </LogoCol>
            <Col size={{ "@initial": 3, "@lg": 6 }}>
              <SignSection />
            </Col>
          </HeaderLoggedRow>
        </HeaderContainer>
        <CollapsibleNavigation />
      </HeaderComponent>
    );
  }

  return (
    <HeaderComponent>
      <HeaderContainer>
        <HeaderRow>
          <Col size={{ "@initial": 8, "@lg": 6 }}>
            <HeaderRow>
              <Link href="/">
                <Logo />
              </Link>
              <Navigation />
            </HeaderRow>
          </Col>
          <Col size={{ "@initial": 4, "@lg": 6 }}>
            <SignRow>
              <SignHorizontalCol size={{ "@initial": 0, "@lg": 7 }}>
                <HorizontalScrollList coins={controlCoins.getCoins(4)} />
              </SignHorizontalCol>

              <Col size={{ "@initial": 12, "@lg": 5 }}>
                <CollapsibleMenuIcon
                  src={BarsIcon.src}
                  width={24}
                  height={24}
                  alt={"bars"}
                />
                <SignSection />
              </Col>
            </SignRow>
          </Col>
        </HeaderRow>
      </HeaderContainer>
    </HeaderComponent>
  );
};
