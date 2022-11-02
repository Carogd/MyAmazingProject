import "../styles/globals.css";
import contextPersoProvider from "../components/UI/context/contextperso";

function MyApp({ Component, pageProps }) {
  return (
    <contextPersoProvider>
      <Component {...pageProps} />
    </contextPersoProvider>
  );
}

export default MyApp;
