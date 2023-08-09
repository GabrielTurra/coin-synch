import { HomeLayout } from "@/src/layouts/home";
import { GetServerSideProps } from "next";
import { getCoinsData } from "../data/coins";
import { CoinProps } from "../@types/Coins";
import { useCoins } from "../hooks/CoinsProvider";

interface RouteProps {
  coins: CoinProps[]
}

export const getServerSideProps: GetServerSideProps<RouteProps> = async () => {
  const coins = await getCoinsData();

  return {
    props: {
      coins,
    },
  };
};

const Home = ({ ...props }: RouteProps) => {
  const controlCoins = useCoins();
  controlCoins.setCoins(props.coins);

  return <HomeLayout />;
};

export default Home;
