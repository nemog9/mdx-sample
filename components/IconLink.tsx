import { siteMetaData } from "@/data/siteMetaData";
import Link from "next/link";
import Image from "next/image";

type IconLinkProps = {
  imgPath: string;
  linkUrl: string;
  altText: string;
  width?: number;
  height?: number;
};

export const IconLink = ({
  imgPath,
  linkUrl,
  altText,
  width = 24,
  height = 24,
}: IconLinkProps) => {
  return (
    <Link href={linkUrl}>
      <Image src={imgPath} alt={altText} width={width} height={height} />
    </Link>
  );
};
