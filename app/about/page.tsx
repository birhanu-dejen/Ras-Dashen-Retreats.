import Image from "next/image";
import image1 from "@/public/about-1.jpg";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to Ras Dashen Retreats
        </h1>

        <div className="space-y-8">
          <p>
            Nestled in the beautiful Semien Mountains, Ras Dashen Retreats
            offers a cozy escape where you can enjoy nature and comfort. Our
            cabins are your perfect getaway, inviting you to leave behind the
            busy world and reconnect with loved ones.
          </p>
          <p>
            Each cabin provides stunning views of the mountains and lush
            landscapes. Step outside to explore Semien National Park, hike
            scenic trails, see rare wildlife, and relax in the peaceful
            outdoors.
          </p>
          <p>
            As the sun sets, gather around a campfire or unwind in your cabin
            while gazing at the stars. This is more than just a vacation; it’s a
            place to create memories, slow down, and enjoy the beauty of nature
            together.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="relative aspect-square col-span-2">
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Family-Owned Cabins Since 1995
        </h1>

        <div className="space-y-8">
          <p>
            Since 1995, we have proudly operated our cabins near Semain Mountain
            National Park, offering guests a comfortable and convenient place to
            stay. Our family-run business is dedicated to providing quality
            accommodations and exceptional service. With a focus on hospitality,
            we ensure every guest enjoys a memorable experience.
          </p>
          <p>
            Whether you’re seeking adventure in the national park or a peaceful
            retreat, our cabins are designed to meet your needs. We look forward
            to welcoming you to our community and providing a welcoming home
            away from home.
          </p>
          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
