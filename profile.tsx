import Image from "next/image";

export const Profile = () => {
  return (
    <>
      <h3>著者情報</h3>
      <div>
        <Image src="/profile.jpg" alt="profile icon" width={100} height={100} />
        <p>nemog（ねもぐ）</p>
      </div>
    </>
  );
};
