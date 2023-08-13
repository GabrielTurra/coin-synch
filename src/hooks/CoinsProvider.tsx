import React, { useState, useCallback, createContext, useContext } from "react";
import { CoinProps } from "../@types/Coins";

interface CoinsContextProps {
  getCoins(quantity?: number): CoinProps[];
  setCoins(coins: CoinProps[]): void;
  findCoin(acronym: string): CoinProps | undefined;
  coins: CoinProps[];
}

interface CoinsProviderProps {
  children: React.ReactNode;
}

const CoinsContext = createContext<CoinsContextProps>({} as CoinsContextProps);

export const CoinsProvider: React.FC<CoinsProviderProps> = ({ children }) => {
  const [coins, setCoinsData] = useState<CoinProps[]>([]);

  const setCoins = useCallback((coinsToUpdate: CoinProps[]) => {
    setCoinsData(coinsToUpdate);
  }, []);

  const getCoins = useCallback(
    (quantity: number) => {
      if (quantity) return coins.slice(0, quantity);
      return coins;
    },
    [coins],
  );

  const findCoin = useCallback(
    (acronym: string) => {
      const findedCoin = coins.find((item) => item.acronym === acronym);
      return findedCoin;
    },
    [coins],
  );

  return (
    <CoinsContext.Provider value={{ setCoins, getCoins, findCoin, coins }}>
      {children}
    </CoinsContext.Provider>
  );
};

export function useCoins(): CoinsContextProps {
  const context = useContext(CoinsContext);

  return context;
}
