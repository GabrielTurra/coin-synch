import { HomeComponent, WavyCurve } from "./HomeLayout.styles";
import { HomeLayoutProps } from "./HomeLayout.types";
import { Hero } from "@/src/components/hero";

import CurveImage from "@/public/curves/hero-curve.svg";
import { CardsSection } from "@/src/components/cards-section";

export const HomeLayout: React.FC<HomeLayoutProps> = () => {
  return (
    <HomeComponent>
      <Hero />
      <WavyCurve src={CurveImage.src} alt="" />
      <CardsSection />
    </HomeComponent>
  );
};