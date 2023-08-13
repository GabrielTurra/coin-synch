import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { TransactionProps } from "../@types/Transaction";
import { useSession } from "next-auth/react";
import { getTransactionsUserData } from "../data/transactions";
import { useCoins } from "./CoinsProvider";
import { WalletProps } from "../@types/Wallet";

interface TransactionsContextProps {
  transactions: TransactionProps[];
  appendTransaction: (transaction: TransactionProps) => void;
  getWallet: () => WalletProps[];
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

const TransactionsContext = createContext<TransactionsContextProps>(
  {} as TransactionsContextProps,
);

export const TransactionsProvider: React.FC<TransactionsProviderProps> = ({
  children,
}) => {
  const { data } = useSession();
  const controlCoins = useCoins();

  const [transactions, setTransactionsData] = useState<TransactionProps[]>([]);

  useEffect(() => {
    if (transactions.length === 0 && data?.user.id) {
      (async () => {
        const response = await getTransactionsUserData(data?.user.id);
        setTransactionsData(response);
      })();
    }
  }, [data]);

  const appendTransaction = useCallback((transaction: TransactionProps) => {
    setTransactionsData((previous) => [...previous, transaction]);
  }, []);

  const getWallet = useCallback(() => {
    const userWallet = transactions.reduce(
      (accumulator: WalletProps[], currentTransaction: TransactionProps) => {
        const coin = controlCoins.findCoin(currentTransaction.crypto_id);

        if (!coin) return accumulator;

        const indexCoin = accumulator.findIndex(
          (item: WalletProps) =>
            item.coin.acronym === currentTransaction.crypto_id,
        );

        const costTransaction = getHoldingValue(
          currentTransaction.type,
          Number(currentTransaction.quantity) * Number(coin.price_usd),
        );

        const quantity = getHoldingValue(
          currentTransaction.type,
          currentTransaction.quantity,
        );

        if (indexCoin >= 0) {
          accumulator[indexCoin].quantity += currentTransaction.quantity;
          accumulator[indexCoin].holdings += quantity;
        } else {
          accumulator.push({
            coin,
            quantity,
            holdings: costTransaction,
          });
        }

        return accumulator;
      },
      [] as WalletProps[],
    );

    return userWallet.filter((item) => item.holdings > 0);
  }, [transactions]);

  const getHoldingValue = (type: string, value: number) => {
    if (type === "TRANSFER_OUT") {
      return Math.abs(value) * -1;
    }

    return value;
  };

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        appendTransaction,
        getWallet,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export function useTransactions(): TransactionsContextProps {
  const context = useContext(TransactionsContext);

  return context;
}
