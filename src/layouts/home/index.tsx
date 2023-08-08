import { HomeComponent, WavyCurve } from "./HomeLayout.styles";
import { HomeLayoutProps } from "./HomeLayout.types";
import { Hero } from "@/src/components/hero";
import Image from "next/image";

import CurveImage from "@/public/curves/hero-curve.svg";

export const HomeLayout: React.FC<HomeLayoutProps> = () => {
  return (
    <HomeComponent>
      <Hero />

      <WavyCurve>
        <Image
          src={CurveImage.src}
          width={1000}
          height={1000}
          alt=""
        />
      </WavyCurve>
      
    </HomeComponent>
  );
};