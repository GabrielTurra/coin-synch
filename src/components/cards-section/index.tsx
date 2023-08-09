import React from "react";
import { CardsList, CardsSectionComponent, Category, Description, SectionContainer, SectionRow, Title } from "./CardsSection.styles";
import { CardsSectionProps } from "./CardsSection.types";
import { Col } from "@/src/styles/grid";
import { Button } from "../lib";
import { Card } from "../card";

import BitImage from "@/public/icons/bit.svg";
import ChartImage from "@/public/icons/chart.svg";
import CryptoImage from "@/public/icons/crypto.svg";
import PcImage from "@/public/icons/computer.svg";
import { CardProps } from "../card/Card.types";

const mockedCards = [
  {
    title: "Crypto Solutions",
    category: "For your company",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,",
    icon: BitImage,
  },
  {
    title: "Crypto Solutions",
    category: "For your company",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,",
    icon: CryptoImage,
  },
  {
    title: "Crypto Solutions",
    category: "For your company",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,",
    icon: ChartImage,
  },
  {
    title: "Crypto Solutions",
    category: "For your company",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,",
    icon: PcImage,
  },
] as CardProps[];

export const CardsSection:React.FC<CardsSectionProps> = () => {
  return (
    <CardsSectionComponent>
      <SectionContainer>
        <SectionRow>
          <Col className="col-cards" size={{
            "@initial": 12,
            "@lg": 7,
          }}>
            <CardsList>
              {mockedCards.map((item, index) => (<Card {...item} key={index} />))}
            </CardsList>
          </Col>
          <Col className="col-text" size={{
            "@initial": 12,
            "@lg": 4,
          }}>
            <Category>Lorem ipsum</Category>
            <Title>Lorem ipsum</Title>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor </Description>
            <Button text="Sign up now" />
          </Col>
        </SectionRow>
      </SectionContainer>
    </CardsSectionComponent>
  );
};
