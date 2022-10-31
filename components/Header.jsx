import { useAddress, useDisconnect, ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";
import React from "react";
import styles from "../styles/Theme.module.css";

export default function Header() {
  // Helpful thirdweb hooks to connect and manage the wallet from metamask.
  const address = useAddress();
  const disconnectWallet = useDisconnect();

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Link href="/" passHref>
          <img
            src={`/mmlogonobg.svg`}
            alt="Mintmatica Logo"
            className={styles.headerLogo}
          />
        </Link>
        <Link legacyBehavior href="/listings">
          <a className={styles.headerItem}>Listings</a>
        </Link>
      </div>

      <div className={styles.right}>

          <ConnectWallet accentColor="#041635" colorMode="dark" />
        
      </div>
    </div>
  );
}
