import { CoinProps } from "../@types/Coins";
import { appendCoinVariation, appendCoinsImage, formatCoins } from "../mappings/coins";

const authHeaders = {
  headers: {
    "X-CoinAPI-Key": `${process.env.COIN_API_KEY}`
  }
}

export const getCoinsData = async (limit = 10) => {
  const coinsWithoutImage = await getGeneralCoins(["BTC","ETH","DOG","ADA","SOL","USDC","USDT","BNB","XRP","LTC"]);
  const coinsWithImage = await getCoinsImage(coinsWithoutImage);
  const coinsData = await getCoinsVariation(coinsWithImage);

  return coinsData;
};

const getGeneralCoins = async (coins_id: string[]): Promise<CoinProps[]> => {
  const rawCoinsData = await fetch (`https://rest.coinapi.io/v1/assets/${coins_id}`, authHeaders)
    .then((data) => data.json());

  return formatCoins(rawCoinsData);
}

const getCoinsImage = async (coins: CoinProps[]): Promise<CoinProps[]> => {
  const rawImagesData = await fetch("https://rest.coinapi.io/v1/assets/icons/32", authHeaders)
    .then((data) => data.json());

  return appendCoinsImage(rawImagesData, coins);
}

const getCoinsVariation = async (coins: CoinProps[]): Promise<CoinProps[]> => {
  const coinsWithVariation = await Promise.all(coins.map(async (coin) => {
    const rawVariationData = await fetch(
      `https://rest.coinapi.io/v1/exchangerate/${coin.acronym}/USD/history?period_id=1DAY&limit=1`, 
      authHeaders
      ).then((data) => data.json());
      
    return appendCoinVariation(rawVariationData[0], coin);
  }));

  return coinsWithVariation;
}



