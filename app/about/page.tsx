import Image from "next/image";
import image1 from "@/public/about-1.webp";
import image2 from "@/public/about-2.jpg";
import image3 from "@/public/about-3.jpg";
import Link from "next/link";
import { qualities, services } from "../_constant/constant";
export const metadata = {
  title: "Our Story | Ras Dashen Retreats",
  description:
    "Discover the family legacy behind Ethiopia's premier mountain retreat in the Simien Mountains",
};

export const revalidate = 604800;

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <section className="relative h-96 rounded-2xl overflow-hidden mb-20">
        <Image
          src={image1}
          fill
          alt="Panoramic view of Semien Mountains"
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-12">
          <h1 className="text-5xl font-bold text-white max-w-2xl">
            Where Ethiopian Hospitality Meets Mountain Majesty
          </h1>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-28 items-center">
        <div className="md:col-span-3 space-y-6">
          <h2 className="text-4xl font-bold text-accent-500">
            The Ras Dashen cabin Story
          </h2>
          <p className="text-xl leading-relaxed">
            What began in 1995 as a single family cabin has blossomed into
            Semien Mountains&apos; most beloved retreat. Founded by the mrx
            family, we&apos;ve spent nearly three decades perfecting the art of
            mountain hospitality.
          </p>
          <p className="text-lg text-slate-400">
            Our journey started when mrx built his dream cabin after years of
            guiding trekkers through these peaks. Today, his vision lives on
            through our collection of handcrafted lodges, each designed to honor
            both the landscape and Ethiopia&apos;s rich traditions.
          </p>
          <div className="flex gap-4 mt-8">
            <Link
              href="/cabins"
              className="bg-accent-500 hover:bg-accent-700 text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Explore Cabins
            </Link>
            <Link
              href="/contact"
              className="border-2 border-accent-500 text-accent-500 hover:bg-accent-50 px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
        <div className="md:col-span-2 relative h-96 rounded-xl overflow-hidden shadow-xl">
          <Image
            src={image2}
            fill
            alt="family photo"
            className="object-cover"
            quality={90}
          />
        </div>
      </section>
      <section className="bg-gray-50 rounded-2xl p-12 mb-28">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Guardians of the Simien Mountains
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            We don&apos;t just operate in this UNESCO World Heritage Site -
            we&apos;re committed to protecting it. For every guest who stays
            with us, we contribute to conservation efforts and local community
            projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualities.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-accent-500">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 order-2 lg:order-1">
          <h2 className="text-4xl font-bold text-accent-500">
            Crafting Unforgettable Mountain Moments
          </h2>
          <p className="text-lg text-slate-400">
            From sunrise coffee on your private deck to guided hikes to hidden
            waterfalls, we curate experiences that connect you deeply with this
            extraordinary landscape.
          </p>
          <ul className="space-y-4">
            {services.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-accent-500 mr-3 mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2">
          <Image
            src={image3}
            alt="Guests enjoying mountain experience"
            className="object-cover"
            quality={90}
          />
        </div>
      </section>

      <section className="bg-accent-500 rounded-2xl p-12 mt-28 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Write Your Mountain Story?
        </h2>
        <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
          Join generations of adventurers who&apos;ve found their perfect
          retreat in the clouds.
        </p>
        <Link
          href="/cabins"
          className="inline-block bg-white text-accent-600 hover:bg-gray-100 px-10 py-5 rounded-lg font-bold text-lg transition-colors"
        >
          Book Your Escape
        </Link>
      </section>
    </div>
  );
}
