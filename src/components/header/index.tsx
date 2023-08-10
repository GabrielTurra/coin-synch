// External Dependencies
import React, { useState } from "react";
import Link from "next/link";

// Internal Dependencies
import { Button } from "../lib";
import * as Modal from "../modal";
import { Col } from "@/src/styles/grid";
import { HeaderProps } from "./Header.types";
import { HorizontalScrollList } from "../horizontal-scroll-list";

// Images
import BarsIcon from "@/public/icons/bars.svg";
import LogoImage from "@/public/logo-coin-synch.png";

// Providers
import { useCoins } from "@/src/hooks/CoinsProvider";

// Styles
import {
  CollapsibleMenuIcon,
  HeaderComponent,
  HeaderContainer,
  HeaderLogo,
  HeaderRow,
  Navigation,
  SignHorizontalCol,
  SignRow,
  SignSection,
} from "./Header.styles";
import { SignInForm } from "../sign-in-form";
import { SignUpForm } from "../sign-up-form";

export const Header: React.FC<HeaderProps> = () => {
  const controlCoins = useCoins();

  return (
    <HeaderComponent>
      <HeaderContainer>
        <HeaderRow>
          <Col
            size={{
              "@initial": 8,
              "@lg": 6,
            }}
          >
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
          <Col
            size={{
              "@initial": 4,
              "@lg": 6,
            }}
          >
            <SignRow>
              <SignHorizontalCol
                size={{
                  "@initial": 0,
                  "@lg": 7,
                }}
              >
                <HorizontalScrollList coins={controlCoins.getCoins(4)} />
              </SignHorizontalCol>

              <Col
                size={{
                  "@initial": 12,
                  "@lg": 5,
                }}
              >
                <SignSection>
                  <Modal.Root>
                    <Modal.Trigger asChild>
                      <Button 
                        text="Sign in" 
                        sizeWidth="small" 
                        color="white"
                      />
                    </Modal.Trigger>
                    <Modal.Content>
                      <SignInForm />
                    </Modal.Content>
                  </Modal.Root>
                  <Modal.Root>
                    <Modal.Trigger asChild>
                      <Button 
                        text="Sign up" 
                        sizeWidth="small" 
                      />
                    </Modal.Trigger>
                    <Modal.Content>
                      <SignUpForm />
                    </Modal.Content>
                  </Modal.Root>
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
