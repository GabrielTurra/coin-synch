import { CoinProps } from "./Coins";

export interface WalletProps {
  coin: CoinProps;
  quantity: number;
  holdings: number;
}
