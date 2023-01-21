import Image from "next/image";
import styles from "./Profile.module.css";
import { siteMetaData } from "@/data/siteMetaData";
import Link from "next/link";
import { IconLink } from "./IconLink";

export const Profile = () => {
  return (
    <div className={styles.container}>
      <h2>著者情報</h2>
      <div className={styles.twoColumn}>
        <Image src="/profile.jpg" alt="profile icon" width={100} height={100} />
        <div>
          {siteMetaData.author && <h3>{siteMetaData.author}</h3>}
          {siteMetaData.profileMessage && <p>{siteMetaData.profileMessage}</p>}
          {/* TODO: IconLinks コンポーネントみたいなので外にする（長いので） */}
          <div className={styles.iconsContainer}>
            {/* TODO: ここをSNSリンク、みたいな感じでコンポーネント化する */}
            {/* {siteMetaData.twitterUrl && (
              <Link href={siteMetaData.twitterUrl}>
                <Image
                  src="twitter.svg"
                  alt="twitter icon"
                  width={24}
                  height={24}
                />
              </Link>
            )} */}
            {siteMetaData.twitterUrl && (
              <IconLink
                imgPath="twitter.svg"
                linkUrl={siteMetaData.twitterUrl}
                altText="twitter icon"
              />
            )}
            {siteMetaData.zennUrl && (
              <IconLink
                imgPath="zenn.svg"
                linkUrl={siteMetaData.zennUrl}
                altText="zenn icon"
              />
            )}
            {siteMetaData.wordpressUrl && (
              <IconLink
                imgPath="wordpress.svg"
                linkUrl={siteMetaData.wordpressUrl}
                altText="wordpress icon"
              />
            )}
            {siteMetaData.githubUrl && (
              <IconLink
                imgPath="github.svg"
                linkUrl={siteMetaData.githubUrl}
                altText="github icon"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
