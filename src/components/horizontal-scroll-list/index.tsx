import React from "react";
import {
  HorizontalContent,
  HorizontalScrollListComponent,
  ListContainer,
} from "./HorizontalScrollList.styles";
import { HorizontalScrollListProps } from "./HorizontalScrollList.types";
import { CoinProps } from "@/src/@types/Coins";
import { convertToDolarFormat } from "@/src/utils/convertToDolarFormat";

export const HorizontalScrollList: React.FC<HorizontalScrollListProps> = ({
  coins,
}) => {
  return (
    <HorizontalScrollListComponent>
      <ListContainer>
        <HorizontalContent>
          {coins.map((item: CoinProps, index) => (
            <span className="content" key={index}>
              <span className="title">{item.acronym}</span>
              <span className="value">
                {convertToDolarFormat(item.price_usd)}
              </span>
              {Number(item.variation) > 0 ? (
                <span className="positive_variation">+{item.variation}</span>
              ) : (
                <span className="negative_variation">{item.variation}</span>
              )}
            </span>
          ))}
        </HorizontalContent>
        <HorizontalContent>
          {coins.map((item: CoinProps, index) => (
            <span className="content" key={index}>
              <span className="title">{item.acronym}</span>
              <span className="value">
                {convertToDolarFormat(item.price_usd)}
              </span>
              {Number(item.variation) ? (
                <span className="positive_variation">+{item.variation}</span>
              ) : (
                <span className="negative_variation">{item.variation}</span>
              )}
            </span>
          ))}
        </HorizontalContent>
      </ListContainer>
    </HorizontalScrollListComponent>
  );
};
