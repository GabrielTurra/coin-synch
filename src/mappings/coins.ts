import { CoinProps } from "../@types/Coins";

export const formatCoins = (rawCoins: any): CoinProps[] => {
  const formatedCoins = rawCoins.map((rawData: any) => (
    {
      name: rawData.name,
      acronym: rawData.asset_id,
      price_usd: rawData.price_usd,
    } as CoinProps
  ));

  return formatedCoins;
};

export const appendCoinsImage = (rawCoins: any, coins: CoinProps[]): CoinProps[] => {
  const formatedCoins = coins.map((coin) => {
    const image = rawCoins.find((imageData: any) => imageData.asset_id === coin.acronym);

    if(image){
      coin.image = image.url;
    }

    return coin;
  });

  return formatedCoins;
};

export const appendCoinVariation = (rawVariation: any, coin: CoinProps): CoinProps => {
  const variation = ((rawVariation.rate_open - rawVariation.rate_close) / rawVariation.rate_open) * 100;

  return {
    ...coin,
    variation 
  } as CoinProps;
};
