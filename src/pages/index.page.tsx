import { HomeLayout } from "@/src/layouts/home";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<{
  object: null
}> = async () => {
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