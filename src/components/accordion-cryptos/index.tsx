import React from "react";
import * as Accordion from '@radix-ui/react-accordion';
import { AccordionCryptosComponent, AccordionItem, ContentDisplay, ContentHead, ContentItem } from "./AccordionCryptos.styles";
import { AccordionCryptosProps } from "./AccordionCryptos.types";
import Image from "next/image";

import ChevronDown from '@/public/icons/chevron-down.svg';
import { Col, Container, Row } from "@/src/styles/grid";

export const AccordionCryptos:React.FC<AccordionCryptosProps> = ({ coins }) => {
  return (
    <AccordionCryptosComponent>
      <Accordion.Root className="AccordionRoot" type="single" collapsible>
      <Container>
        <ContentHead>
          <p>Crypto</p>
          <p>Actions</p>
        </ContentHead>
      </Container>
      {coins.map((coin, index) => (
        <AccordionItem className="AccordionItem" value={`item-${index}`}>
          <Accordion.Trigger className="AccordionTrigger">
            <div>
              <Image 
                src={coin.image || ''}
                width={32}
                height={32}
                alt=""
              />
              {coin.name}
              <span>{coin.acronym}</span>
            </div>

            <Image 
              src={ChevronDown.src}
              width={16}
              height={16}
              alt=""
            />
          </Accordion.Trigger>
          <Accordion.Content>
            <ContentDisplay>
              <Container>
                <ContentItem>
                  <p>Price</p>
                  US$ {coin.price_usd}
                </ContentItem>
                <ContentItem>
                  <p>Change</p>
                  {Number(coin.variation) > 0 
                    ? <span className="positive">+{coin.variation}%</span>
                    : <span className="negative">{coin.variation}%</span>
                  }
                </ContentItem>
              </Container>
            </ContentDisplay>
          </Accordion.Content>
        </AccordionItem>
      ))}
      </Accordion.Root>

    </AccordionCryptosComponent>
  );
};
