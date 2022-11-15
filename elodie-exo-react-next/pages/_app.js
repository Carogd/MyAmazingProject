import "../styles/globals.css";
import { PersoProvider } from "../components/UI/context/contextperso";

function MyApp({ Component, pageProps }) {
  return (
    <PersoProvider>
      <Component {...pageProps} />
    </PersoProvider>
  );
}

export default MyApp;
