// @ts-nocheck
/* eslint-disable */
"use client";
// Unbundled from igtpw.com chunk app__post-construction-clean-up__page-c4cc0ca3a63b602b.js, webpack module 692.
import Image from "next/image";
import { FiCheckCircle, FiPhoneCall } from "react-icons/fi";
import { motion } from "framer-motion";

let CO_ = () => (
    <section className="py-12 px-4 sm:px-6 lg:py-20 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 xl:gap-8 items-start">
        <div className="w-full lg:w-1/2 order-1 lg:order-none space-y-4">
          <div className="relative h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/WhatsApp-Image-2025-02-10-at-9.16.30-PM-3-1024x768.jpeg"
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
              src="/images/WhatsApp-Image-2025-02-10-at-9.16.31-PM-1-1024x768.jpeg"
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{"Post Construction Clean Up"}</h2>
            <p className="text-lg sm:text-xl text-[#00c6f9] font-semibold">{"Post Construction Cleanup for A Fresh Start"}</p>
          </div>
          <div className="space-y-4">
            {[
              "After the dust settles, your newly built or renovated space needs thorough cleaning. Our Post Construction Cleanup service ensures your property is spotless and move-in ready",
              "We remove dust, debris, and construction residues from floors, windows, and surfaces, leaving your space pristine. Our team tackles every corner, including hard-to-reach areas, and ensures that all fixtures are cleaned and polished to perfection.",
              "Construction work leaves behind sawdust, paint splatters, and other messes that can make a space feel unfinished. We provide deep cleaning services that transform your property into a clean, safe, and welcoming environment.",
              "Our expert team uses professional-grade equipment and cleaning products to eliminate construction debris and ensure every area shines. We pay attention to detail, ensuring no surface is overlooked.",
              "Whether it’s a home, office, or commercial building, our Post Construction Cleanup service is designed to give your space the perfect final touch, making it ready for occupancy and use.",
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
    </section>
  ),
  l = () => (
    <div>
      <div className="relative flex items-center justify-center min-h-[60vh] bg-[#00C6F9] to-white bg-center bg-no-repeat bg-cover z-0">
        <div className="absolute inset-0 bg-[url('/images/pages-bg.jpg')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300" />
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-white text-5xl font-bold mb-4"
            initial={{
              opacity: 0,
              y: -50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{
              once: !0,
            }}
          >
            {"Affordable Post Construction Cleanup Services in Cincinnati, Ohio"}
          </motion.h1>
          <motion.div
            className="flex justify-center text-white text-md font_barlow font-semibold text-opacity-85"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.5,
            }}
            viewport={{
              once: !0,
            }}
          >
            <div className="flex gap-2 items-center">
              <motion.span
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.8,
                }}
                viewport={{
                  once: !0,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      <CO_ />
    </div>
  );

export default l;
