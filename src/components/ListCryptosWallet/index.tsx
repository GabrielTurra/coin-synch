import React, { useState } from "react";
import {
  CoinCard,
  CoinCardBody,
  CoinCardHeader,
  ListCryptosWalletComponent,
  Separator,
} from "./ListCryptosWallet.styles";
import { ListCryptosWalletProps } from "./ListCryptosWallet.types";
import { CoinProps } from "@/src/@types/Coins";
import Image from "next/image";
import { Col, Row } from "@/src/styles/grid";
import { Button, Modal } from "../lib";
import { convertToDolarFormat } from "@/src/utils/toDolarFormat";
import { TransferForm } from "../transfer-form";

export const ListCryptosWallet: React.FC<ListCryptosWalletProps> = ({
  walletData,
}) => {
  const [transferModalIsOpen, setTransferModalIsOpen] = useState(false);
  const [modalCoin, setModalCoin] = useState({} as CoinProps);

  const openTransferModal = (coin: CoinProps) => {
    setModalCoin(coin);
    setTransferModalIsOpen(true);
  };

  return (
    <ListCryptosWalletComponent>
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
      <Row>
        {walletData.map((walletItem) => (
          <Col size={5}>
            <CoinCard>
              <CoinCardHeader>
                <div>
                  <Image
                    src={walletItem.coin?.image || ""}
                    width={16}
                    height={16}
                    alt=""
                  />
                  {walletItem.coin?.name}
                  <span>{walletItem.coin?.acronym}</span>
                </div>
              </CoinCardHeader>
              <CoinCardBody>
                <div>
                  <span>Holdings</span>
                  <p>{convertToDolarFormat(walletItem.holdings)}</p>
                  <small>
                    <span>{walletItem.quantity}</span>
                    {walletItem.coin.acronym}
                  </small>

                  <Separator />

                  <span>Change</span>
                  {Number(walletItem.coin?.variation) > 0 ? (
                    <div className="positive">
                      +{walletItem.coin?.variation}%
                    </div>
                  ) : (
                    <div className="negative">
                      {walletItem.coin?.variation}%
                    </div>
                  )}
                </div>
                <Button
                  onClick={() => openTransferModal(walletItem.coin)}
                  sizeWidth="small"
                  text="Trade"
                />
              </CoinCardBody>
            </CoinCard>
          </Col>
        ))}
      </Row>
    </ListCryptosWalletComponent>
  );
};
