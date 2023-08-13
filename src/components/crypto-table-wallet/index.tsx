import React, { useState } from "react";
import {
  CryptosTableWalletComponent,
  Description,
  HoldingContent,
  Title,
} from "./CryptosTableWallet.styles";
import { CryptosTableWalletProps } from "./CryptosTableWallet.types";
import Image from "next/image";
import { useTransactions } from "@/src/hooks/TransactionsProvider";
import EmptyWalletIcon from "@/public/icons/empty-wallet.svg";
import TradeIcon from "@/public/icons/trade.svg";
import { convertToDolarFormat } from "@/src/utils/toDolarFormat";
import { Modal, Tooltip } from "@/src/components/lib";
import { TransferForm } from "../transfer-form";
import { CoinProps } from "@/src/@types/Coins";

export const CryptosTableWallet: React.FC<CryptosTableWalletProps> = () => {
  const controlTransactions = useTransactions();
  const wallet = controlTransactions.getWallet();
  const [transferModalIsOpen, setTransferModalIsOpen] = useState(false);
  const [modalCoin, setModalCoin] = useState({} as CoinProps);

  if (!wallet || wallet.length <= 0) {
    return (
      <>
        <Image src={EmptyWalletIcon.src} width={82} height={68} alt="" />
        <Title>Nothing here yet...</Title>
        <Description>Add a crypto and start earning</Description>
      </>
    );
  }

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
        {wallet.map((transaction, index) => {
          return (
            <tr key={index}>
              <td>{String(index + 1).padStart(2, "0")}</td>
              <td>
                <div>
                  <Image
                    src={transaction.coin?.image || ""}
                    width={32}
                    height={32}
                    alt=""
                  />
                  {transaction.coin?.name}
                  <span>{transaction.coin?.acronym}</span>
                </div>
              </td>
              <td>
                <HoldingContent>
                  <div>US {convertToDolarFormat(transaction.holdings)}</div>
                  <span>
                    {transaction.quantity} {transaction.coin.acronym}
                  </span>
                </HoldingContent>
              </td>
              {Number(transaction.coin?.variation) > 0 ? (
                <td className="positive">+{transaction.coin?.variation}%</td>
              ) : (
                <td className="negative">{transaction.coin?.variation}%</td>
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
                        onClick={() => openTransferModal(transaction.coin)}
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