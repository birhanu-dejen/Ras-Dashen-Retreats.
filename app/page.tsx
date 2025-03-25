import Link from "next/link";
import Image from "next/image";
import background from "../public/background.jpg";
export default function Home() {
  return (
    <main>
      <Image
        src={background}
        alt="ras dashen luxury cabin"
        fill
        priority
        placeholder="blur"
        quality={80}
        className="brightness-75"
        sizes="100vw"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-light text-primary-50 mb-8 leading-tight tracking-wider text-center">
          <span className="block text-2xl md:text-3xl font-serif italic text-primary-200 mb-3">
            Welcome to your
          </span>
          Luxury Mountain Cabin
          <span className="block text-xl md:text-2xl font-normal mt-4 text-primary-100">
            Nestled in Simien Mountains National Park
          </span>
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
