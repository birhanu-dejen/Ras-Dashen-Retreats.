import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";
import Link from "next/link";

export const metadata = {
  title: "About",
};
export const revalidate = 604800;
export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to Ras Dashen Retreats
        </h1>

        <div className="space-y-8">
          <p>
            Nestled in the breathtaking Semien Mountains, Ras Dashen Retreats
            offers a serene and idyllic escape from the hustle and bustle of
            everyday life. Our cozy cabins provide the perfect setting for a
            relaxing getaway, inviting you to unwind and reconnect with loved
            ones amidst the stunning natural beauty of Semien National Park.
          </p>
          <p>
            Each of our cabins boasts breathtaking views of the surrounding
            mountains and lush landscapes, providing the perfect backdrop for a
            tranquil retreat. Step outside and explore the park&apos;s scenic
            trails, spot rare wildlife, and bask in the peaceful atmosphere of
            the great outdoors.
          </p>
          <p>
            As the sun sets, gather around a roaring campfire or unwind in the
            comfort of your cabin, gazing up at the star-filled sky. Our
            retreats offer the perfect opportunity to slow down, recharge, and
            create lasting memories with family and friends.
          </p>
        </div>
      </div>

      <div className="col-span-2 relative aspect-square">
        <Image
          src={image1}
          fill
          alt="cabin in the mountains of semien"
          placeholder="blur"
          quality={80}
          className="object-cover"
        />
      </div>

      <div className="relative aspect-square col-span-2">
        <Image
          src={image2}
          fill
          className="object-cover"
          alt="the girl at ginbar fuafuate"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Family-Owned Cabins Since 1995
        </h1>

        <div className="space-y-8">
          <p>
            Since 1995, our family-owned and operated cabins have been welcoming
            guests to Semien Mountain National Park. We take pride in providing
            exceptional service, quality accommodations, and a warm, welcoming
            atmosphere that makes every guest feel at home.
          </p>
          <p>
            Whether your&apos;e seeking adventure, relaxation, or a mix of both,
            our cabins are designed to meet your needs. We look forward to
            welcoming you to our community and providing a memorable experience
            that will leave you feeling refreshed, renewed, and inspired.
          </p>
          <div>
            <Link
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
