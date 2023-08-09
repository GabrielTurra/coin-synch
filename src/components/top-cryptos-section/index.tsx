import React, { useState, useEffect } from "react";
import { ShowMore, TopCryptosSectionComponent } from "./TopCryptosSection.styles";
import { TopCryptosSectionProps } from "./TopCryptosSection.types";
import { CryptosTable } from "../crypto-table";
import { useCoins } from "@/src/hooks/CoinsProvider";
import { Container } from "@/src/styles/grid";
import { CoinProps } from "@/src/@types/Coins";

export const TopCryptosSection:React.FC<TopCryptosSectionProps> = () => {
  const controlCoins = useCoins();

  const [coins, setCoins] = useState([] as CoinProps[]);
  const [isShowingAll, setIsShowingAll] = useState(false);

  useEffect(() => {
    setCoins(controlCoins.getCoins(4));
    setIsShowingAll(false);
  }, [controlCoins.coins]);

  const toggleShowView = () => {
    setIsShowingAll((previous) => {
      updateListView(!previous);
      return !previous
    });
  }

  const updateListView = (isShowingAll: boolean) => {
    if(isShowingAll) {
      setCoins(controlCoins.getCoins(10));
      return;
    }
    
    setCoins(controlCoins.getCoins(4));
  }

  return (
    <TopCryptosSectionComponent>
      <h2>Top Cryptos</h2>

      <Container>
        <CryptosTable coins={coins} />
        <ShowMore 
          onClick={() => toggleShowView()}
        >
          {isShowingAll ? "View Less -" : "View More +"}
        </ShowMore>
      </Container>
    </TopCryptosSectionComponent>
  );
};
