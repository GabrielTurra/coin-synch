import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Roboto } from "next/font/google";
import { AppProvider } from "../hooks/AppProvider";

import { SessionProvider } from "next-auth/react";

const roboto = Roboto({ 
  weight: [ "400", "700" ],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ 
  Component, 
  pageProps: { session, ...pageProps }
}: AppProps) {
  globalStyles();
  return (
    <SessionProvider session={session}>
      <AppProvider>
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </AppProvider>
    </SessionProvider>
  );
}
