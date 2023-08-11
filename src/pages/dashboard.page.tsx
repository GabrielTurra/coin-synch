// import { HomeLayout } from "@/src/layouts/home";
// import { getCoinsData } from "../data/coins";
// import { CoinProps } from "../@types/Coins";
// import { useCoins } from "../hooks/CoinsProvider";
import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface RouteProps {
  // coins: CoinProps[];
}

export const getServerSideProps: GetServerSideProps<RouteProps> = async () => {
  return {
    props: {
      object: null
    },
  };
};

const Dashboard = ({ ...props }: RouteProps) => {
  const router = useRouter();
  const { status } = useSession();

  if(status === "unauthenticated") router.push("/");
  
  console.log(status);

  return (
    <>
      <h1>asda</h1>
      <button onClick={() => signOut()}>
      deslogar
      </button>
    </>
  );
};

export default Dashboard;
