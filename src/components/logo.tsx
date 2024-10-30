import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-1 select-none">
        {" "}
        <Image src="/logo.svg" alt="Ordo" width={50} height={50} />
        <h1 className="text-2xl font-bold font-sans">ORDO</h1>
      </div>
    </Link>
  );
};
