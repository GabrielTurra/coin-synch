import React from "react";
import { Header } from "@/src/components/header";
import { PageComponent } from "./Page.styles";
import { PageProps } from "./Page.types";

export const Page:React.FC<PageProps> = ({children}) => {
  return (
    <PageComponent>
      <Header />
      {children}
      {/* footer here */}
    </PageComponent>
  );
};
