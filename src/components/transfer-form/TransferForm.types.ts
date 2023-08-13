import { CoinProps } from "@/src/@types/Coins";

export interface TransferFormProps {
  modalController: React.Dispatch<React.SetStateAction<boolean>>;
  coin: CoinProps;
}
