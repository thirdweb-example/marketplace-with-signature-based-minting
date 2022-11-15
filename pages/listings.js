import React, { useState } from "react";
import {
  useContract,
  useActiveListings,
  useContractMetadata,
  ThirdwebNftMedia,
} from "@thirdweb-dev/react";
import { MARKETPLACE_ADDRESS } from "../const/contractAddresses";
import styles from "../styles/Theme.module.css";

export default function Listings() {
  const { contract: marketplace } = useContract(MARKETPLACE_ADDRESS);
  const { data: listings, isLoading } = useActiveListings(marketplace);

  // Load contract metadata
  const { data: contractMetadata, isLoading: loadingMetadata } =
    useContractMetadata(marketplace);

  const [filter, setFilter] = useState(0); // 0 = direct, auction = 1

  return (
    <div className={styles.container}>
      <div className={styles.collectionContainer}>
        <div className={styles.detailPageContainer}>
          {!loadingMetadata ? (
            <>
              <h2>Mintmatica Marketplace Listings</h2>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {!isLoading ? (
          <div className={styles.nftBoxGrid}>
            {listings
              ?.filter((listing) => listing.type === filter)
              ?.map((listing) => (
                <a
                  className={styles.nftBox}
                  key={listing.id.toString()}
                  href={`/listing/${listing.id}`}
                >
                 <h4>{listing.asset.name}</h4>
                  <ThirdwebNftMedia
                    metadata={{ ...listing.asset }}
                    className={styles.nftMedia}
                  />
                  <div className={styles.nftBoxDescription}>
                  <h5>{listing.asset.description}</h5>
                  <p>
                    {listing.buyoutCurrencyValuePerToken.displayValue}{" "}
                    {listing.buyoutCurrencyValuePerToken.symbol}
                  </p>
                  </div>
                </a>
              ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
