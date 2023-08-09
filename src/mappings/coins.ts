import { CoinProps } from "../@types/Coins";

export const formatCoins = (rawCoins: any): CoinProps[] => {
  const formatedCoins = rawCoins.data.map((coinInfo: any) => {
    const coin = {
      id: coinInfo.id,
      name: coinInfo.name,
      acronym: coinInfo.symbol,
      price_usd: coinInfo.quote.USD.price.toFixed(2).replace('.', ','),
      variation: coinInfo.quote.USD.percent_change_24h.toFixed(2),
    } as CoinProps;
    return coin;
  });

  return formatedCoins;
};

export const appendCoinsImage = (rawCoins: any, coins: CoinProps[]): CoinProps[] => {
  const formatedCoins = coins.map((coin) => {
    coin.image = rawCoins.data[coin.id].logo;

    return coin;
  });

  return formatedCoins;
};
