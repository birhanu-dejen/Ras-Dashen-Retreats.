import Link from "next/link";
export default function Navigation() {
  return (
    <nav className="text-xl z-10 text-white">
      <ul className="flex items-center gap-16">
        <li>
          <Link href="/cabins">cabins</Link>
        </li>
        <li>
          {" "}
          <Link href="/account"> your account</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
}
