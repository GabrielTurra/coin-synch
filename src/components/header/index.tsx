import { Col } from "@/src/styles/grid";
import { HorizontalScrollList } from "../horizontal-scroll-list";
import { Button } from "../lib";
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
import { HeaderProps } from "./Header.types";

import BarsIcon from "@/public/icons/bars.svg";
import LogoImage from "@/public/logo-coin-synch.png";
import Link from "next/link";
import * as Dialog from "../modal";
import { useCoins } from "@/src/hooks/CoinsProvider";

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
                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <Button text="Sign in" sizeWidth="small" color="white" />
                    </Dialog.Trigger>

                    <Dialog.Content>
                      <Dialog.Title className="DialogTitle">
                        AO ENTRAR
                      </Dialog.Title>

                      <fieldset className="Fieldset">
                        <label className="Label" htmlFor="name">
                          Name
                        </label>
                        <input
                          className="Input"
                          id="name"
                          defaultValue="Gabriel Turra"
                        />
                      </fieldset>
                      <fieldset className="Fieldset">
                        <label className="Label" htmlFor="username">
                          Username
                        </label>
                        <input
                          className="Input"
                          id="username"
                          defaultValue="@gabrielturra"
                        />
                      </fieldset>
                    </Dialog.Content>
                  </Dialog.Root>

                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <Button text="Sign up" sizeWidth="small" />
                    </Dialog.Trigger>

                    <Dialog.Content>
                      <Dialog.Title className="DialogTitle">
                        AO CADASTRAR
                      </Dialog.Title>

                      <fieldset className="Fieldset">
                        <label className="Label" htmlFor="name">
                          Name
                        </label>
                        <input
                          className="Input"
                          id="name"
                          defaultValue="Gabriel Turra"
                        />
                      </fieldset>
                      <fieldset className="Fieldset">
                        <label className="Label" htmlFor="username">
                          Username
                        </label>
                        <input
                          className="Input"
                          id="username"
                          defaultValue="@gabrielturra"
                        />
                      </fieldset>
                    </Dialog.Content>
                  </Dialog.Root>
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
