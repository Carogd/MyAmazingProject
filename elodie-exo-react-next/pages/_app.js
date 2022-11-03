import "../styles/globals.css";
import { ContextPersoProvider } from "../components/UI/context/contextperso";

function MyApp({ Component, pageProps }) {
  return (
    <ContextPersoProvider>
      <Component {...pageProps} />
    </ContextPersoProvider>
  );
}

export default MyApp;
