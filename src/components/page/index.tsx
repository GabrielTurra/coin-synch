import React from "react";
import { Header } from "@/src/components/header";
import { PageComponent } from "./Page.styles";
import { PageProps } from "./Page.types";
import { Footer } from "../footer";

export const Page = React.forwardRef<HTMLDivElement, PageProps>(
  ({ children }, forwardedRef) => {
    return (
      <PageComponent ref={forwardedRef}>
        <Header />
        {children}
        <Footer />
      </PageComponent>
    );
  },
);
