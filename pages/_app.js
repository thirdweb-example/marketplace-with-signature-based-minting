import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Header from "../components/Header";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChain = "goerli";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Header />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
