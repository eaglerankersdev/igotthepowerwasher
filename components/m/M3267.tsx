// @ts-nocheck
/* eslint-disable */
"use client";
// Unbundled from igtpw.com chunk 4446-865142a41f36c6df.js, webpack module 3267.
import Image from "next/image";
import { FiCheckCircle, FiPhoneCall } from "react-icons/fi";

let CN_ = () => (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24">
      <div className="max-w-7xl mx-auto text-center mb-16" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6">
        {[
          {
            id: 1,
            name: "Parking Lot Washing",
            about:
              "Our parking lot washing service eliminates stains, grime, and debris, giving your lot a fresh, clean appearance. We ensure your property is very welcoming.",
            imageSrc: "/images/Parking-Lot-Washing.png",
            link: "/parking-lot-washing",
          },
          {
            id: 2,
            name: "Sweeping & Cleaning",
            about:
              "We provide sweeping and cleaning for parking lots, removing dirt, leaves, and trash. Keep your lot neat and safe, enhancing both curb appeal and functionality. ",
            imageSrc: "/images/Sweeping-Cleaning.png",
            link: "/sweeping-cleaning",
          },
        ].map((e) => (
          <div
            className="relative group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            key={e.id}
          >
            <div className="relative h-64 w-full transition-transform duration-300 group-hover:scale-105">
              <Image src={e.imageSrc} alt={e.name} layout="fill" objectFit="cover" className="rounded-t-3xl" />
            </div>
            <div className="p-6 bg-[#00C6F9] text-white transition-all duration-300 group-hover:bg-[#0099cc]">
              <h3 className="text-2xl font-bold mb-2">{e.name}</h3>
              <p className="text-lg mb-4">{e.about}</p>
              <button className="bg-white text-[#00C6F9] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                <a href={e.link}>{"Learn More"}</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  ),
  l = () => (
    <section className="py-16 px-4 sm:px-6 lg:py-24 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 xl:gap-12 items-center">
        <div className="w-full lg:w-1/2 relative group order-1 lg:order-none">
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl transition-shadow duration-300">
            <Image
              src="/images/Parking-Lot-Maintenance.png"
              alt="Grease-Removal-pressure-washer"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{"Parking Lot Maintenance"}</h2>
          <p className="text-xl text-[#00c6f9] font-semibold">{"Get Reliable Maintenance For A Pristine Parking Lot"}</p>
          <div className="space-y-6">
            <div className="space-y-4">
              {[
                "A properly looked-after parking area boosts visual appeal, guarantees safety, and creates a memorable impact on guests. Our expert parking lot maintenance service in Cincinnati features thorough cleaning, stain extraction, debris removal, and surface safeguarding to maintain your lot in excellent shape. By utilizing innovative pressure washing techniques and environmentally safe products, we remove oil stains, grime accumulation, and unattractive blemishes that can cause your property to appear untidy.",
                "Abandoned parking lots can create safety risks like slippery areas, fractures, and obstructed drainage. Routine upkeep avoids enduring harm, prolonging the durability of asphalt and concrete surfaces. Regardless of whether it’s for commercial properties, retail areas, or residential buildings, our skilled team provides comprehensive and efficient cleaning to ensure a clean and professional atmosphere.",
                "Maintain your parking area to be tidy, secure, and welcoming through professional upkeep services.",
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
      <CN_ />
    </section>
  );

export { l as A };
