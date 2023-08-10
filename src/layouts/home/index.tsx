import { HomeComponent, WavyCurve } from "./HomeLayout.styles";
import { HomeLayoutProps } from "./HomeLayout.types";
import { Hero } from "@/src/components/hero";

import CurveImage from "@/public/curves/hero-curve.svg";
import { CardsSection } from "@/src/components/cards-section";
import { TopCryptosSection } from "@/src/components/top-cryptos-section";
import { Newsletter } from "@/src/components/newsletter";

export const HomeLayout: React.FC<HomeLayoutProps> = () => {
  return (
    <HomeComponent>
      <Hero />
      <WavyCurve src={CurveImage.src} alt="" />
      <CardsSection />
      <TopCryptosSection />
      <Newsletter />
    </HomeComponent>
  );
};
