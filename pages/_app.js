import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Header from "../components/Header";
import "../styles/globals.css";
import { NextSeo } from "next-seo";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Header />
   <>
       <NextSeo
        title="Mintmatica - Mint and Sell an NFT in Seconds"
        titleTemplate="Mintmatica - Mint and Sell an NFT in Seconds"
        defaultTitle="Mintmatica - Mint and Sell an NFT in Seconds"
        description="A full stack web developer, who loves to design and develop beautiful websites. I have been coding for over a year now. One of my hobbies is writing, I love to document my journey by writing blog posts and also teach others through them."
        canonical="https://mintmatica.com/"
        openGraph={{
          url: "https://mintmatica.com/",
          title: "Mintmatica - Mint and Sell an NFT in Seconds",
          description: "Mint and instantly sell an NFT on the Ethereum blockchain with Mintmatica. Your collectible, your price all made possible with web3 tech",
          images: [
            {
              url: "/mmlogo.svg",
              width: 800,
              height: 200,
              alt: "Mintmatica - Mint and Sell an NFT in Seconds",
            },
          ],
        }}
        twitter={{
          handle: "@mintmaticnft",
          site: "@mintmaticnft",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
      </>
    </ThirdwebProvider>
  );
}

export default MyApp;
