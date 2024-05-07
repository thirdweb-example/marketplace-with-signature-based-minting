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
            src={`/logo.png`}
            alt="Thirdweb Logo"
            className={styles.headerLogo}
          />
        </Link>
        <Link href="/listings">
          <p className={styles.headerItem}>Listings</p>
        </Link>
      </div>

      <div className={styles.right}>
        {address ? (
          <>
            <a
              className={styles.secondaryButton}
              onClick={() => disconnectWallet()}
            >
              Disconnect
            </a>
            <p className={styles.verticalSpacer}>|</p>
            <p>{address.slice(0, 6).concat("...").concat(address.slice(-4))}</p>
          </>
        ) : (
          <ConnectWallet accentColor="#5204BF" colorMode="dark" />
        )}
      </div>
    </div>
  );
}
