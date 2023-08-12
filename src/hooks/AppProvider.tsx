import React from "react";
import { CoinsProvider } from "./CoinsProvider";

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return <CoinsProvider>{children}</CoinsProvider>;
};
