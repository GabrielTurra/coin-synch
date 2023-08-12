import {
  CollapsibleNavigationComponent,
  Overlay,
} from "./CollapsibleNavigation.styles";
import React from "react";
import { CollapsibleNavigationProps } from "./CollapsibleNavigation.types";

import BitImage from "@/public/icons/bit.svg";
import ChartImage from "@/public/icons/chart.svg";
import CryptoImage from "@/public/icons/crypto.svg";
import Wallet from "@/public/icons/wallet.svg";
import { NavigationItem } from "./NavigationItem";
import { useCollapsiblenavigation } from "@/src/hooks/CollapsibleNavigation";

export const CollapsibleNavigation: React.FC<
  CollapsibleNavigationProps
> = () => {
  const controlCollapsible = useCollapsiblenavigation();

  return (
    <>
      <CollapsibleNavigationComponent isOpen={controlCollapsible.isOpen}>
        <NavigationItem icon={Wallet.src}></NavigationItem>
        <NavigationItem icon={CryptoImage.src}></NavigationItem>
        <NavigationItem icon={BitImage.src}></NavigationItem>
        <NavigationItem icon={ChartImage.src}></NavigationItem>
      </CollapsibleNavigationComponent>
      <Overlay
        isOpen={controlCollapsible.isOpen}
        onClick={() => controlCollapsible.closeCollapsiblenavigation()}
      />
    </>
  );
};
