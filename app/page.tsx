import Link from "next/link";
import Image from "next/image";
import background from "../public/background.jpg";
export default function Home() {
  return (
    <main>
      <Image
        src={background}
        alt="limalimo luxury cabin"
        fill
        placeholder="blur"
        quality={70}
        className="brightness-75"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-6xl text-primary-50 mb-14 tracking-tight font-normal">
          {" "}
          Welcome to Your Gateway to Adventure!
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins{" "}
        </Link>
      </div>
    </main>
  );
}
