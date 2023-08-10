import React from "react";
import { Header } from "@/src/components/header";
import { PageComponent } from "./Page.styles";
import { PageProps } from "./Page.types";
import { Footer } from "../footer";

export const Page:React.FC<PageProps> = ({children}) => {
  return (
    <PageComponent>
      <Header />
      {children}
      <Footer />
    </PageComponent>
  );
};
