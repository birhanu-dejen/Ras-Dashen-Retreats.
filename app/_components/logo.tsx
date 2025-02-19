import Image from "next/image";
import Link from "next/link";
import logo from "../icon.png";
export default function Logo() {
  return (
    <Link className="flex items-center gap-4 z-10 " href="/">
      <Image
        height="60"
        width="60"
        quality={100}
        alt="Ras Dashen  logo"
        src={logo}
      />
      <span className="text-xl font-semibold text-primary-100">
        Ras Dashen Retreats
      </span>
    </Link>
  );
}
