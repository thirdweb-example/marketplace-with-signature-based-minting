import React, { useState } from "react";
import {
  useContract,
  useActiveListings,
  useContractMetadata,
  ThirdwebNftMedia,
} from "@thirdweb-dev/react";
import styles from "../styles/Theme.module.css";

export default function Collections() {


  // Load contract metadata


  return (
    <div className={styles.container}>
      <div className={styles.collectionContainer}>
        <div className={styles.detailPageContainer}>

              <h2>NFT Collections on Mintmatica</h2>

        </div>


          <div className={styles.nftBoxGrid}>

          <iframe
    src="https://gateway.ipfscdn.io/ipfs/Qmcine1gpZUbQ73nk7ZGCcjKBVFYXrEtqrhujXk3HDQ6Nn/erc721.html?contract=0x7F8671b1E6933136935C0C65878B346A6C775cD8&chainId=137&theme=dark"
    width="500px"
    height="600px"
    frameBorder="0"
    ></iframe>
    <p>
             <iframe
    src="https://gateway.ipfscdn.io/ipfs/Qmcine1gpZUbQ73nk7ZGCcjKBVFYXrEtqrhujXk3HDQ6Nn/erc721.html?contract=0xFA001B551bEE8e4c3F96f7f5724C22cEA55B8DcD&chainId=137&theme=dark"
    width="50%"
    height="600px"
    frameBorder="0"
    ></iframe> 

<iframe
    src="https://gateway.ipfscdn.io/ipfs/Qmcine1gpZUbQ73nk7ZGCcjKBVFYXrEtqrhujXk3HDQ6Nn/erc721.html?contract=0x56Fa8BbB1ac56d91395b9Da9e048E1CB21C12E6f&chainId=137&theme=dark"
    width="50%"
    height="600px"
    frameBorder="0"
    ></iframe>
</p>
<p>
<iframe
        src="https://gateway.ipfscdn.io/ipfs/Qmcine1gpZUbQ73nk7ZGCcjKBVFYXrEtqrhujXk3HDQ6Nn/erc721.html?contract=0x72Dc7334165007b4950Ff27CC148D4e45399c6C8&chainId=137&theme=dark"
        width="50%"
    height="700px"
    frameBorder="0"
    ></iframe> 

<iframe
    src="https://gateway.ipfscdn.io/ipfs/Qmcine1gpZUbQ73nk7ZGCcjKBVFYXrEtqrhujXk3HDQ6Nn/erc721.html?contract=0x19F3908C6D02dFdbF1eB40971E9823A0aB4e67a3&chainId=137&theme=dark"
    width="50%"
    height="700px"
    frameBorder="0"
    ></iframe>
</p>

          </div>

      </div>
    </div>
  );
}
