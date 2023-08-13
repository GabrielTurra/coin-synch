import React, { useState } from "react";
import {
  CryptosTableWalletComponent,
  HoldingContent,
} from "./CryptosTableWallet.styles";
import { CryptosTableWalletProps } from "./CryptosTableWallet.types";
import Image from "next/image";
import TradeIcon from "@/public/icons/trade.svg";
import { convertToDolarFormat } from "@/src/utils/convertToDolarFormat";
import { Modal, Tooltip } from "@/src/components/lib";
import { TransferForm } from "../transfer-form";
import { CoinProps } from "@/src/@types/Coins";

export const CryptosTableWallet: React.FC<CryptosTableWalletProps> = ({
  walletData,
}) => {
  const [transferModalIsOpen, setTransferModalIsOpen] = useState(false);
  const [modalCoin, setModalCoin] = useState({} as CoinProps);

  const openTransferModal = (coin: CoinProps) => {
    setModalCoin(coin);
    setTransferModalIsOpen(true);
  };

  return (
    <CryptosTableWalletComponent>
      <Modal.Root
        open={transferModalIsOpen}
        onOpenChange={setTransferModalIsOpen}
      >
        <Modal.Trigger asChild></Modal.Trigger>
        <Modal.Content>
          <TransferForm
            coin={modalCoin}
            modalController={setTransferModalIsOpen}
          />
        </Modal.Content>
      </Modal.Root>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Crypto</th>
          <th scope="col">Holdings</th>
          <th scope="col">Change</th>
          <th scope="col">Trade</th>
        </tr>
      </thead>
      <tbody>
        {walletData.map((walletItem, index) => {
          return (
            <tr key={index}>
              <td>{String(index + 1).padStart(2, "0")}</td>
              <td>
                <div>
                  <Image
                    src={walletItem.coin?.image || ""}
                    width={32}
                    height={32}
                    alt=""
                  />
                  {walletItem.coin?.name}
                  <span>{walletItem.coin?.acronym}</span>
                </div>
              </td>
              <td>
                <HoldingContent>
                  <div>US {convertToDolarFormat(walletItem.holdings)}</div>
                  <span>
                    {walletItem.quantity} {walletItem.coin.acronym}
                  </span>
                </HoldingContent>
              </td>
              {Number(walletItem.coin?.variation) > 0 ? (
                <td className="positive">+{walletItem.coin?.variation}%</td>
              ) : (
                <td className="negative">{walletItem.coin?.variation}%</td>
              )}
              <td>
                <Tooltip.Provider>
                  <Tooltip.Root delayDuration={100}>
                    <Tooltip.Trigger asChild>
                      <Image
                        src={TradeIcon.src}
                        width={16}
                        height={16}
                        alt=""
                        onClick={() => openTransferModal(walletItem.coin)}
                      />
                    </Tooltip.Trigger>
                    <Tooltip.Content
                      size="small"
                      text="Transfer Crypto"
                      side="bottom"
                    />
                  </Tooltip.Root>
                </Tooltip.Provider>
              </td>
            </tr>
          );
        })}
      </tbody>
    </CryptosTableWalletComponent>
  );
};
