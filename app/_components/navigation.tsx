import Link from "next/link";
import { auth } from "../_lib/Auth";
export default async function Navigation() {
  const session = await auth();
  return (
    <nav className="text-xl z-10 text-white font-bold">
      <ul className="flex items-center gap-16">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-4"
            >
              <img
                className="rounded-full h-8"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />{" "}
              <span>Guest Area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              {" "}
              <span>Guest Area</span>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
