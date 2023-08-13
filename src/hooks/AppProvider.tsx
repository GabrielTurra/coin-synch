import React from "react";
import { CoinsProvider } from "./CoinsProvider";
import { CollapsiblenavigationProvider } from "./CollapsibleNavigation";
import { TransactionsProvider } from "./TransactionsProvider";

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <CoinsProvider>
      <TransactionsProvider>
        <CollapsiblenavigationProvider>
          {children}
        </CollapsiblenavigationProvider>
      </TransactionsProvider>
    </CoinsProvider>
  );
};
