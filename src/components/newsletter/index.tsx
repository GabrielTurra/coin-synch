import React from "react";
import {
  Category,
  Description,
  NewsletterComponent,
  NewsletterRow,
  Title,
  WavyCurve,
} from "./Newsletter.styles";
import { NewsletterProps } from "./Newsletter.types";
import { Col, Container } from "@/src/styles/grid";

import NewsletterCurve from "@/public/curves/newsletter-curve.svg";
import { NewsletterForm } from "../newsletter-form";

export const Newsletter: React.FC<NewsletterProps> = () => {
  return (
    <NewsletterComponent>
      <Container>
        <NewsletterRow>
          <Col
            size={{
              "@initial": 12,
              "@md": 6,
              "@lg": 4,
            }}
          >
            <Category>Lorem ipsum</Category>
            <Title>Lorem ipsum</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </Description>
          </Col>
          <Col
            size={{
              "@initial": 0,
              "@lg": 1,
            }}
          />
          <Col
            size={{
              "@initial": 12,
              "@md": 5,
              "@lg": 4,
            }}
          >
            <NewsletterForm />
          </Col>
        </NewsletterRow>
      </Container>

      <WavyCurve src={NewsletterCurve.src} />
    </NewsletterComponent>
  );
};
