// @ts-nocheck
/* eslint-disable */
"use client";
// Unbundled from igtpw.com chunk 1584-cb8050b93062eb82.js, webpack module 6605.
import Image from "next/image";
import { FiCheckCircle, FiPhoneCall } from "react-icons/fi";

let CO_ = () => (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24">
      <div className="max-w-7xl mx-auto text-center mb-16" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6">
        {[
          {
            id: 1,
            name: "Graffiti Removal",
            about:
              "Quickly remove graffiti and restore your surfaces. Our experts use effective cleaning solutions to erase unwanted marks, ensuring your property is clean.",
            imageSrc: "/images/Graffiti-removal-services.jpg",
            link: "/graffiti-removal",
          },
          {
            id: 2,
            name: "Rust Removal",
            about:
              "Eliminate rust stains from various surfaces. We ensure rust removal without damaging your property, enhancing its appearance ",
            imageSrc: "/images/Rust-Removal.png",
            link: "/rust-removal",
          },
          {
            id: 3,
            name: "Efflorescence Removal",
            about:
              "We use safe and effective methods to remove mineral buildup, restoring your brick, stone, or concrete surfaces to their original and perfect condition.",
            imageSrc: "/images/Efflorescence-Removal.png",
            link: "/efflorescence-removal",
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
  n = () => (
    <section className="py-12 px-4 sm:px-6 lg:py-20 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 xl:gap-8 items-start">
        <div className="w-full lg:w-1/2 order-1 lg:order-none space-y-4">
          <div className="relative h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/Stain-Removal.png"
              alt="Stain removal process"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
              priority={!0}
            />
            <div className="absolute bottom-2 left-2" />
          </div>
          <div className="relative h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/WhatsApp-Image-2025-02-10-at-9.16.29-PM-6-1024x768.jpeg"
              alt="Clean results"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
              priority={!0}
            />
            <div className="absolute bottom-2 left-2" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-5 lg:space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{"Stain Removal"}</h2>
            <p className="text-lg sm:text-xl text-[#00c6f9] font-semibold">
              {"Make Stains Disappear With Precision Power Washing Services"}
            </p>
          </div>
          <div className="space-y-4">
            {[
              "Persistent marks on your driveway, patio, siding, or roof can give your property an overlooked and aged appearance. Our expert stain removal service efficiently removes oil, rust, mildew, mold, and various stubborn stains, rejuvenating the original appearance of your surfaces in Cincinnati. Utilizing innovative power washing methods and environmentally safe products, we focus on the toughest stains without inflicting harm.",
              "Various surfaces demand distinct methods, and our skilled team knows how to handle concrete, brick, wood, and additional materials safely and efficiently. Whether it’s a residential or commercial space, we guarantee a comprehensive, detailed clean that boosts curb appeal and safeguards your investment. Our professional cleaning services will ensure your surfaces are immaculate and invigorated.",
            ].map((e, t) => (
              <div className="flex items-start gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow" key={t}>
                <FiCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-sky-500 flex-shrink-0 mt-1" />
                <p className="text-gray-600 text-sm sm:text-base">{e}</p>
              </div>
            ))}
          </div>
          <a
            href="tel:513-570-0355"
            className="mt-2 inline-flex items-center gap-2 bg-gradient-to-r from-[#00c6f9] to-cyan-600 text-white px-5 py-3 sm:px-6 sm:py-4 rounded-lg text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition-all"
          >
            <FiPhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
            {"513-570-0355"}
          </a>
        </div>
      </div>
      <CO_ />
    </section>
  );

export { n as A };
