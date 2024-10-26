import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <Image src="/logo.svg" alt="Ordo" width={50} height={50} />
      <h1 className="text-2xl font-bold font-sans">ORDO</h1>
    </div>
  );
};
