import React from "react";
import {
  BalanceData,
  BalanceRow,
  BalanceSectionComponent,
  BalanceValue,
  CoinContainer,
  CoinInfoVariation,
  IconContainer,
  ImageNews,
  NewsContainer,
  NewsSection,
} from "./BalanceSection.styles";
import { BalanceSectionProps } from "./BalanceSection.types";
import { Col, Row } from "@/src/styles/grid";
import Image from "next/image";

import BalanceIcon from "@/public/icons/balance.svg";
import ElephantImage from "@/public/Eduphants.svg";
import { useTransactions } from "@/src/hooks/TransactionsProvider";
import { convertToDolarFormat } from "@/src/utils/convertToDolarFormat";
import { Chart } from "./chart";
import { useCoins } from "@/src/hooks/CoinsProvider";

export const BalanceSection: React.FC<BalanceSectionProps> = () => {
  const controlTransactions = useTransactions();
  const ethData = useCoins().findCoin("ETH");

  return (
    <BalanceSectionComponent>
      <BalanceRow>
        <Col
          size={{
            "@initial": 12,
            "@xl": 6,
          }}
        >
          <Row>
            <BalanceData>
              <IconContainer>
                <Image src={BalanceIcon.src} height={40} width={40} alt="" />
              </IconContainer>
              <div>
                <h4>Balance in US$</h4>
                <span>(approximately)</span>
              </div>
            </BalanceData>
            <BalanceValue>
              <p>{convertToDolarFormat(controlTransactions.getBalance())}</p>
            </BalanceValue>
          </Row>
        </Col>
        <Col>
          <Row>
            <CoinContainer
              size={{
                "@initial": 12,
                "@md": 5,
              }}
            >
              <span>Daily Variation</span>
              <CoinInfoVariation>
                <div>
                  <Image
                    src={ethData?.image || ""}
                    height={24}
                    width={24}
                    alt=""
                  />
                  {ethData?.acronym}
                </div>
                <div
                  className={
                    Number(ethData?.variation) > 0 ? "positive" : "negative"
                  }
                >
                  {ethData?.variation}%
                </div>
              </CoinInfoVariation>
            </CoinContainer>
            <Col
              size={{
                "@initial": 12,
                "@md": 7,
              }}
            >
              <Chart />
            </Col>
          </Row>
        </Col>
        <NewsSection>
          <Row>
            <NewsContainer
              size={{
                "@initial": 12,
                "@md": 6,
              }}
            >
              <label>NFT’s NEWS</label>
              <span>New ElephantX NFT to be lauched!</span>
              <a href="#">Read more +</a>
            </NewsContainer>
            <ImageNews
              size={{
                "@initial": 12,
                "@md": 6,
              }}
            >
              <Image
                src={ElephantImage.src}
                height={ElephantImage.height}
                width={ElephantImage.width}
                alt=""
              />
            </ImageNews>
          </Row>
        </NewsSection>
      </BalanceRow>
    </BalanceSectionComponent>
  );
};
