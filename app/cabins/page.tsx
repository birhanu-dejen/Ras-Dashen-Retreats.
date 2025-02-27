import Counter from "@/app/_components/Counter";
import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";

export const metadata = {
  title: "Ras Dashen Retreats",
};

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Ras Dashen Retreats
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Experience the breathtaking beauty of Semain Mountain National Park at
        Ras Dashen Retreats. Nestled in the heart of Ethiopia&apos;s majestic
        highlands, our cabins offer a perfect blend of adventure and
        tranquility. Wake up to awe-inspiring views of Africa’s fourth highest
        peak, explore ancient trails, and immerse yourself in the rich
        biodiversity of the region. After a day of hiking and wildlife
        encounters, unwind in the comfort of your private retreat, under a
        starlit sky.
      </p>

      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}
