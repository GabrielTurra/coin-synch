import React from "react";
import { CardComponent, Category, Description, Title } from "./Card.styles";
import { CardProps } from "./Card.types";
import Image from "next/image";

export const Card: React.FC<CardProps> = ({
  category,
  title,
  description,
  icon,
}) => {
  return (
    <CardComponent>
      <Image src={icon.src} width={64} height={64} alt="" />
      <Category>{category}</Category>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardComponent>
  );
};
