export interface TransactionProps {
  crypto_id: string;
  quantity: number;
  type: "TRANSFER_IN" | "TRANSFER_OUT";
}
