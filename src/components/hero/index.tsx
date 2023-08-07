import React from "react";
import { Description, HeroComponent, HeroContainer, HeroRow, Tag, TagsRow, Title } from "./hero.styles";
import { HeroProps } from "./hero.types";
import { Button } from "../lib";
import { Col } from "@/src/styles/grid";

import RightArrowIcon from "@/public/icons/right-arrow.svg";

export const Hero:React.FC<HeroProps> = () => {
  return (
    <HeroComponent>
      <HeroContainer>
        <HeroRow>
          <Col size={4}>
            <Title>Lorem ipsum dolor sit amet, consectetur</Title>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</Description>

            <Button text="Sign up now" size="big" icon={RightArrowIcon} />

            <TagsRow>
              <Tag>Cryptos</Tag>
              <Tag>NFTs</Tag>
              <Tag>Games</Tag>
            </TagsRow>
          </Col>
          <Col>

          </Col>
        </HeroRow>
      </HeroContainer>
    </HeroComponent>
  );
};