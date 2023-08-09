import { CoinProps } from "../@types/Coins";
import { appendCoinsImage, formatCoins } from "../mappings/coins";

const baseUrl = process.env.COIN_API_BASE_URL;

const authHeaders = {
  headers: {
    "X-CMC_PRO_API_KEY": `${process.env.COIN_API_KEY}`
  }
}

export const getCoinsData = async (limit = 10) => {
  const coinsDataWithoutImage = await getGeneralCoins(limit);
  const coinsDataWithImage = await getCoinsImage(coinsDataWithoutImage);

  return coinsDataWithImage;
};

const getGeneralCoins = async (limit: number): Promise<CoinProps[]> => {
  const rawCoinsData = await fetch (
    `${baseUrl}/v1/cryptocurrency/listings/latest?limit=${limit}`, 
    authHeaders
  ).then((data) => data.json());

  return formatCoins(rawCoinsData);
};

const getCoinsImage = async (coins: CoinProps[]): Promise<CoinProps[]> => {
  const rawImagesData = await fetch(
    `${baseUrl}/v2/cryptocurrency/info?id=${coins.map(coin => coin.id)}`, 
    authHeaders
  ).then((data) => data.json());

  return appendCoinsImage(rawImagesData, coins);
};



