import React from "react";
import { CoinsProvider } from "./CoinsProvider";
import { CollapsiblenavigationProvider } from "./CollapsibleNavigation";

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <CoinsProvider>
      <CollapsiblenavigationProvider>{children}</CollapsiblenavigationProvider>
    </CoinsProvider>
  );
};
