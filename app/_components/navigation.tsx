import Link from "next/link";
export default function Navigation() {
  return (
    <nav className="text-xl z-10 text-white font-bold">
      <ul className="flex items-center gap-16">
        <li>
          <Link href="/cabins">Cabins</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          {" "}
          <Link href="/account"> Guest Area</Link>
        </li>
      </ul>
    </nav>
  );
}
