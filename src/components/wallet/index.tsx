import React, { useState } from "react";
import {
  Description,
  Title,
  WalletBody,
  WalletComponent,
  WalletHeader,
} from "./Wallet.styles";
import { WalletProps } from "./Wallet.types";
import { Button, Modal } from "../lib";

import WalletIcon from "@/public/icons/wallet.svg";
import EmptyWalletIcon from "@/public/icons/empty-wallet.svg";
import PlusIcon from "@/public/icons/plus.svg";
import Image from "next/image";
import { AddCryptoForm } from "../add-crypto-form";

export const Wallet: React.FC<WalletProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WalletComponent>
      <WalletHeader>
        <div>
          <Image src={WalletIcon.src} width={32} height={32} alt="" />
          <h4>My Wallet</h4>
        </div>
        <Modal.Root open={isOpen} onOpenChange={setIsOpen}>
          <Modal.Trigger asChild>
            <Button
              icon={PlusIcon}
              text="Add Crypto"
              sizeWidth="small"
            ></Button>
          </Modal.Trigger>
          <Modal.Content>
            <AddCryptoForm modalController={setIsOpen} />
          </Modal.Content>
        </Modal.Root>
      </WalletHeader>
      <WalletBody>
        <Image src={EmptyWalletIcon.src} width={82} height={68} alt="" />
        <Title>Nothing here yet...</Title>
        <Description>Add a crypto and start earning</Description>
      </WalletBody>
    </WalletComponent>
  );
};
