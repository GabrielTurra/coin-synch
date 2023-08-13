import { api } from "../lib/axios";

export const getTransactionsUserData = async (user_id: string) => {
  const userTransactions = await api.get(`/transactions/${user_id}`);
  return userTransactions.data;
};
