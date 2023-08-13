import React from "react";
import {
  BalanceData,
  BalanceRow,
  BalanceSectionComponent,
  BalanceValue,
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

export const BalanceSection: React.FC<BalanceSectionProps> = () => {
  const controlTransactions = useTransactions();

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
        <Col></Col>
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
