import Image from "next/image";

export const Profile = () => {
  return (
    <>
      <h2>nemog.net</h2>
      <Image src="/profile.jpg" alt="profile icon" width={300} height={300} />
      <p>エンジニアをやっています。</p>
      <p>
        Twitter:
        <a href="https://twitter.com/nemog9_">https://twitter.com/nemog9_</a>
      </p>
    </>
  );
};
