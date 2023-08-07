import { HomeComponent } from "./HomeLayout.styles";
import { HomeLayoutProps } from "./HomeLayout.types";
import { Hero } from "@/src/components/hero";

export const HomeLayout: React.FC<HomeLayoutProps> = () => {
  return (
    <HomeComponent>
      <Hero />
    </HomeComponent>
  );
};