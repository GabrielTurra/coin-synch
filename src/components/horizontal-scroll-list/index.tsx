import React from "react";
import { HorizontalContent, HorizontalScrollListComponent, ListContainer } from "./HorizontalScrollList.styles";
import { HorizontalScrollListProps } from "./HorizontalScrollList.types";
import { CoinProps } from "@/src/@types/Coins";

const mockedCoins = [
  {
    acronym: "BIT",
    conversion_value: "R$ 23,62",
    name: "BitCoin",
    variation: 7.082,
  },
  {
    acronym: "DOG",
    conversion_value: "R$ 63,62",
    name: "DogCoin",
    variation: -12.082,
  },
  {
    acronym: "ETH",
    conversion_value: "R$ 13,62",
    name: "Etherium",
    variation: 16.082,
  },
  {
    acronym: "BIT",
    conversion_value: "R$ 23,62",
    name: "BitCoin",
    variation: 7.082,
  },
  {
    acronym: "DOG",
    conversion_value: "R$ 63,62",
    name: "DogCoin",
    variation: -12.082,
  },
  {
    acronym: "ETH",
    conversion_value: "R$ 13,62",
    name: "Etherium",
    variation: 16.082,
  },
] as CoinProps[];

export const HorizontalScrollList:React.FC<HorizontalScrollListProps> = () => {
  return (
    <HorizontalScrollListComponent>
      <ListContainer>
        <HorizontalContent>
          {mockedCoins.map((item) => (
            <span className="content" key="">
              <span className="title">{item.acronym}</span>
              <span className="value">{item.conversion_value}</span>     
              {item.variation > 0 
                ? (<span className="positive_variation">+{item.variation}</span>)
                : (<span className="negative_variation">{item.variation}</span>)
              }
            </span>
          ))}
        </HorizontalContent>
        <HorizontalContent>
          {mockedCoins.map((item) => (
            <span className="content" key="">
              <span className="title">{item.acronym}</span>
              <span className="value">{item.conversion_value}</span>     
              {item.variation > 0 
                ? (<span className="positive_variation">+{item.variation}</span>)
                : (<span className="negative_variation">{item.variation}</span>)
              }
            </span>
          ))}
        </HorizontalContent>
      </ListContainer>

    </HorizontalScrollListComponent>
  );
};