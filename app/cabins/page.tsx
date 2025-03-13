import CabinList from "../_components/CabinList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
export const metadata = {
  title: "Ras Dashen Retreats",
};
export const revalidate = 3600;
export default async function Page({ searchParams }) {
  const filter = (await searchParams?.capacity) ?? "all";

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
      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
