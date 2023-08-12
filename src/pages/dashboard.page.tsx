// import { HomeLayout } from "@/src/layouts/home";
import { getCoinsData } from "../data/coins";
import { CoinProps } from "../@types/Coins";
import { useCoins } from "../hooks/CoinsProvider";
import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { DashboardLayout } from "../layouts/dashboard";

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

const Dashboard = ({ ...props }: RouteProps) => {
  const router = useRouter();
  const controlCoins = useCoins();
  const { status } = useSession();

  if (status === "unauthenticated") router.push("/");

  controlCoins.setCoins(props.coins);

  return <DashboardLayout />;
};

export default Dashboard;
