import React, { useEffect, useState } from "react";
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
import { Swiper, useSwiper } from "swiper/react";

import RightArrowIcon from "@/public/icons/right-arrow.svg";
import HeroImage from "@/public/banner.png";
import Image from "next/image";

import "swiper/css";
import { SignUpForm } from "../sign-up-form";
import { SignInForm } from "../sign-in-form";
import { debounce } from "@/src/utils/debounce";

export const Hero: React.FC<HeroProps> = () => {
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      debounce(() => {
        if (window.scrollY > lastScrollPosition) {
          const nextController =
            document.querySelector<HTMLButtonElement>(".next-slider");

          if (nextController) {
            nextController.click();
          }
        } else {
          const prevController =
            document.querySelector<HTMLButtonElement>(".prev-slider");

          if (prevController) {
            prevController.click();
          }
        }

        setLastScrollPosition(window.scrollY);
      }, 70),
    );
  }, []);

  function handleOpenSignUp() {
    setOpenSignUp(true);
  }

  function handleOpenSignIn() {
    setOpenSignIn(true);
  }

  const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return (
      <button className="next-slider" onClick={() => swiper.slideNext()} />
    );
  };

  const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    return (
      <button className="prev-slider" onClick={() => swiper.slidePrev()} />
    );
  };

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

            <Modal.Root onOpenChange={setOpenSignIn} open={openSignIn}>
              <Modal.Content>
                <SignInForm onOpenSignUp={handleOpenSignUp} />
              </Modal.Content>
            </Modal.Root>

            <Modal.Root onOpenChange={setOpenSignUp} open={openSignUp}>
              <Modal.Trigger asChild>
                <Button
                  text="Sign up now"
                  sizeWidth="big"
                  icon={RightArrowIcon}
                />
              </Modal.Trigger>
              <Modal.Content>
                <SignUpForm onOpenSignIn={handleOpenSignIn} />
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
              <SwiperButtonNext />
              <SwiperButtonPrev />
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
