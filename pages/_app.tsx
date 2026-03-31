import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { AuthorizerProvider } from "@authorizerdev/authorizer-react";

import { pageview } from "../utils/ga";
import { AUTHORIZER_CONFIG } from "../constants/authorizer";
import "@authorizerdev/authorizer-react/styles.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <AuthorizerProvider config={AUTHORIZER_CONFIG}>
      <Component {...pageProps} />
    </AuthorizerProvider>
  );
}
