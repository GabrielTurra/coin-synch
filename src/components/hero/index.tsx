import React, { useEffect } from "react";
import {
  CustomSwiperSlide,
  Description,
  HeroComponent,
  HeroContainer,
  HeroRow,
  SliderCol,
  Tag,
  TagsRow,
  Title,
} from "./Hero.styles";
import { HeroProps } from "./Hero.types";
import { Button, Modal } from "../lib";
import { Col } from "@/src/styles/grid";
import { A11y, Mousewheel } from "swiper/modules";
import { Swiper } from "swiper/react";

import RightArrowIcon from "@/public/icons/right-arrow.svg";
import HeroImage from "@/public/banner.png";
import Image from "next/image";

import "swiper/css";
import { SignUpForm } from "../sign-up-form";

export const Hero: React.FC<HeroProps> = () => {
  return (
    <HeroComponent>
      <HeroContainer>
        <HeroRow>
          <Col
            size={{
              "@initial": 12,
              "@md": 6,
              "@lg": 5,
              "@xl": 4,
            }}
          >
            <Title>Lorem ipsum dolor sit amet, consectetur</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </Description>

            <Modal.Root>
              <Modal.Trigger asChild>
                <Button
                  text="Sign up now"
                  sizeWidth="big"
                  icon={RightArrowIcon}
                />
              </Modal.Trigger>
              <Modal.Content>
                <SignUpForm />
              </Modal.Content>
            </Modal.Root>

            <TagsRow>
              <Tag>Cryptos</Tag>
              <Tag>NFTs</Tag>
              <Tag>Games</Tag>
            </TagsRow>
          </Col>
          <SliderCol
            size={{
              "@initial": 0,
              "@md": 6,
              "@xl": 7,
            }}
          >
            <Swiper
              modules={[A11y, Mousewheel]}
              mousewheel={true}
              spaceBetween={50}
              slidesPerView={1.4}
              loop={true}
              freeMode={true}
              breakpoints={{
                768: {
                  spaceBetween: 70,
                },
                992: {
                  spaceBetween: 100,
                },
                1300: {
                  spaceBetween: 0,
                },
              }}
            >
              {[1, 2, 3, 4, 5].map((index) => (
                <CustomSwiperSlide key={index}>
                  <Image
                    quality={100}
                    src={HeroImage.src}
                    height={600}
                    width={600}
                    alt=""
                    priority
                  />
                </CustomSwiperSlide>
              ))}
            </Swiper>
          </SliderCol>
        </HeroRow>
      </HeroContainer>
    </HeroComponent>
  );
};
