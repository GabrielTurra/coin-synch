import { CollapsibleNavigationComponent } from "./CollapsibleNavigation.styles";
import React from "react";
import { CollapsibleNavigationProps } from "./CollapsibleNavigation.types";

import BitImage from "@/public/icons/bit.svg";
import ChartImage from "@/public/icons/chart.svg";
import CryptoImage from "@/public/icons/crypto.svg";
import Wallet from "@/public/icons/wallet.svg";
import { NavigationItem } from "./NavigationItem";

export const CollapsibleNavigation: React.FC<
  CollapsibleNavigationProps
> = () => {
  return (
    <CollapsibleNavigationComponent>
      <NavigationItem icon={Wallet.src}></NavigationItem>
      <NavigationItem icon={CryptoImage.src}></NavigationItem>
      <NavigationItem icon={BitImage.src}></NavigationItem>
      <NavigationItem icon={ChartImage.src}></NavigationItem>
    </CollapsibleNavigationComponent>
  );
};
