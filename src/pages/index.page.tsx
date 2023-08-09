import { HomeLayout } from "@/src/layouts/home";
import { GetServerSideProps } from "next";
import { getCoinsData } from "../data/coins";

export const getServerSideProps: GetServerSideProps<{
  object: null
}> = async () => {
  getCoinsData();
  return {
    props: {
      object: null
    },
  };
};

const Home = () => {
  return <HomeLayout />;
};

export default Home;
