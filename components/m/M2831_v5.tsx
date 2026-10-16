// @ts-nocheck
/* eslint-disable */
"use client";
// Unbundled from igtpw.com chunk app__restaurant__page-95f67de0569366c3.js, webpack module 2831 (variant 2831_v5).
import Image from "next/image";
import { FiCheckCircle, FiPhoneCall } from "react-icons/fi";

let i = () => (
  <section className="py-16 px-4 sm:px-6 lg:py-24 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 xl:gap-12 items-center">
      <div className="w-full lg:w-1/2 relative group order-1 lg:order-none">
        <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl transition-shadow duration-300">
          <Image
            src="/images/resturant.jpg"
            alt="Commercial window cleaning"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
            priority={!0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <span className="bg-blue-600 text-sm font-semibold px-3 py-1.5 rounded-full">{"Certified Professionals"}</span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{"Restaurant"}</h2>
        <p className="text-xl text-[#00c6f9] font-semibold">{"Restaurant Cleaning That Keeps Your Space Sparkling"}</p>
        <div className="space-y-6">
          <div className="space-y-4">
            {[
              "Maintaining a restaurant entails more than just cleaning tables and sweeping floors. A sanitized, clean setting provides a more secure space for visitors and employees. Our restaurant cleaning removes grease, dirt, and bacteria, ensuring a spotless kitchen and dining area. Our team deep-cleans floors, utensils, and surfaces for a fresh, welcoming space. We emphasize cleanliness, remove odors, maintain hygiene, and ensure your restaurant complies with health regulations and delights patrons. Every cleaning session tackles high-traffic areas, kitchen grease, and hard-to-reach spots",
              "You will enjoy a fresher atmosphere, improved food safety, and a five-star shine that guests notice. A well-maintained restaurant enhances customer confidence and keeps them coming back. We work efficiently with minimal disruption so your business runs smoothly. With routine cleaning, you prevent buildup, reduce health risks, and create a welcoming space for everyone",
            ].map((e, t) => (
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" key={t}>
                <FiCheckCircle className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
                <p className="text-gray-600 text-base lg:text-lg">{e}</p>
              </div>
            ))}
          </div>
          <a
            href="tel:513-570-0355"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00c6f9] to-cyan-600 text-white px-6 py-4 lg:px-8 lg:py-5 rounded-xl text-base lg:text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <FiPhoneCall className="w-5 h-5 lg:w-6 lg:h-6" />
            {"513-570-0355"}
          </a>
        </div>
      </div>
    </div>
  </section>
);

export { i as A };
