import React, { useState, useCallback, createContext, useContext } from 'react';
import { CoinProps } from '../@types/Coins';

interface CoinsContextProps {
	getCoins(): CoinProps[];
	setCoins(coins: CoinProps[]): void;
};

interface CoinsProviderProps {
	children: React.ReactNode;
};

const CoinsContext = createContext<CoinsContextProps>({} as CoinsContextProps);

export const CoinsProvider: React.FC<CoinsProviderProps> = ({ children }) => {
	const [coins, setCoinsData] = useState<CoinProps[]>([
    {
      acronym: '',
      id: 0,
      name: '',
      price_usd: 0,
      variation: 0
    },
  ]);

	const setCoins = useCallback((coinsToUpdate: CoinProps[]) => {
		setCoinsData(coinsToUpdate);
	}, []);

  const getCoins = useCallback(() => (coins), [coins]);

	return (
		<CoinsContext.Provider
			value={{ setCoins,  getCoins }}
		>
			{children}
		</CoinsContext.Provider>
	);
};

export function useCoins(): CoinsContextProps {
	const context = useContext(CoinsContext);

	return context;
}
