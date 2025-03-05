import CabinList from "../_components/CabinList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
export const metadata = {
  title: "Ras Dashen Retreats",
};
export const revalidate = 3600;
export default async function Page() {
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
      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </div>
  );
}
