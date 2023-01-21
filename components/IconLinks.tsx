import styles from "./IconLinks.module.css";
import { siteMetaData } from "@/data/siteMetaData";
import { IconLink } from "./IconLink";

export const IconLinks = () => {
  return (
    <div className={styles.iconsContainer}>
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
  );
};
