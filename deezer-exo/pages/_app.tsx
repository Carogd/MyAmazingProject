import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ProviderDeezer } from "../components/UI/context/contextalbum";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProviderDeezer>
      <Component {...pageProps} />
    </ProviderDeezer>
  );
}
