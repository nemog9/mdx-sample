import Image from "next/image";
import styles from "./Profile.module.css";
import { siteMetaData } from "@/data/siteMetaData";
import { IconLinks } from "./IconLinks";

export const Profile = () => {
  return (
    <div className={styles.container}>
      <h2>著者情報</h2>
      <div className={styles.twoColumn}>
        <Image src="/profile.jpg" alt="profile icon" width={100} height={100} />
        <div className={styles.rightContainer}>
          {siteMetaData.author && <h3>{siteMetaData.author}</h3>}
          {siteMetaData.profileMessage && <p>{siteMetaData.profileMessage}</p>}
          <IconLinks />
        </div>
      </div>
    </div>
  );
};
