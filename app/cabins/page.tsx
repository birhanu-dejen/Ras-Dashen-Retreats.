import CabinList from "../_components/CabinList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
export const metadata = {
  title: "Ras Dashen Retreats",
};
export const revalidate = 3600;
export default async function Page({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const filter = resolvedSearchParams?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Ras Dashen Retreats
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Discover Your Perfect Mountain Escape 🌄 Nestled in the heart of
        Ethiopia’s Simien Mountains, Ras Dashen Retreats offers an unforgettable
        blend of rugged adventure and serene comfort. Whether you seek sunrise
        treks to soaring peaks or evenings by the fire under a sky full of
        stars, your dream getaway starts here. Choose your retreat:
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
