import React from "react";
import { CustomSwiperSlide, Description, HeroComponent, HeroContainer, HeroRow, SliderCol, Tag, TagsRow, Title } from "./hero.styles";
import { HeroProps } from "./hero.types";
import { Button } from "../lib";
import { Col } from "@/src/styles/grid";
import { A11y } from "swiper/modules";
import { Swiper } from "swiper/react";

import RightArrowIcon from "@/public/icons/right-arrow.svg";
import HeroImage from "@/public/banner.png";
import Image from "next/image";

import "swiper/css";

export const Hero:React.FC<HeroProps> = () => {
  return (
    <HeroComponent>
      <HeroContainer>
        <HeroRow>
          <Col size={{
            "@initial": 12,
            "@md": 6,
            "@lg": 5,
            "@xl": 4,
          }}>
            <Title>Lorem ipsum dolor sit amet, consectetur</Title>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</Description>

            <Button text="Sign up now" size="big" icon={RightArrowIcon} />

            <TagsRow>
              <Tag>Cryptos</Tag>
              <Tag>NFTs</Tag>
              <Tag>Games</Tag>
            </TagsRow>
          </Col>
          <SliderCol size={{
            "@initial": 0,
            "@md": 6,
            "@xl": 7,
          }}>
            <Swiper
              modules={[A11y]}
              spaceBetween={50}
              slidesPerView={1.4}
              breakpoints={{
                768: {
                  spaceBetween: 70
                },
                992: {
                  spaceBetween: 100
                },
                1300: {
                  spaceBetween: 0
                },
              }}
            >
              {[1,2,3,4,5].map((index) => (
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