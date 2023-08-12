import React from "react";
import { FooterComponent, FooterRow } from "./Footer.styles";
import { FooterProps } from "./Footer.types";
import { Container } from "@/src/styles/grid";

import Logo from "@/public/logo-coin-synch.png";
import Image from "next/image";

export const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterComponent>
      <Container>
        <FooterRow>
          <span>Copyright © 2022 - All rights reserved</span>
          <Image src={Logo.src} width={94} height={16} alt="" />
        </FooterRow>
      </Container>
    </FooterComponent>
  );
};
