import { HomeLayout } from "@/src/layouts/home";
import { GetServerSideProps } from "next";
import { getCoinsData } from "../data/coins";
import { CoinProps } from "../@types/Coins";
import { useCoins } from "../hooks/CoinsProvider";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface RouteProps {
  coins: CoinProps[];
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
  const router = useRouter();
  const controlCoins = useCoins();
  const { status } = useSession();

  if(status === "authenticated") router.push("/dashboard");
  
  controlCoins.setCoins(props.coins);

  return <HomeLayout />;
};

export default Home;
