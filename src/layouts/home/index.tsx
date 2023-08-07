import { Container } from "@/src/styles/grid";
import { HomeComponent } from "./HomeLayout.styles";
import { HomeLayoutProps } from "./HomeLayout.types";

export const HomeLayout: React.FC<HomeLayoutProps> = () => {
  return (
    <HomeComponent>
      <Container>
        <h1>Desktop header!</h1>
        <h2>Desktop header!</h2>
        <h3>Desktop header!</h3>
        <h4>Desktop header!</h4>
        <h5>Desktop header!</h5>
        <h6>Desktop header!</h6>
        <p>Desktop text</p>
        <label>Desktop label</label><br />
        <small>Desktop small</small>
      </Container>
    </HomeComponent>
  );
};