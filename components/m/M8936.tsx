// @ts-nocheck
/* eslint-disable */
"use client";
// Unbundled from igtpw.com chunk app__efflorescence-removal__page-d3a316be5cb5ac63.js, webpack module 8936.
import Image from "next/image";
import { FiCheckCircle, FiPhoneCall } from "react-icons/fi";
import { motion } from "framer-motion";

let CL_ = () => (
    <section className="py-16 px-4 sm:px-6 lg:py-24 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 xl:gap-12 items-center">
        <div className="w-full lg:w-1/2 relative group order-1 lg:order-none">
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl transition-shadow duration-300">
            <Image
              src="/images/Efflorescence-Removal.png"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{"Efflorescence Removal"}</h2>
          <p className="text-xl text-[#00c6f9] font-semibold">{"Eliminating Efflorescence For A Cleaner, Brighter Appearance"}</p>
          <div className="space-y-6">
            <div className="space-y-4">
              {[
                "Efflorescence, white, powdery stains found on stone, concrete, and brick, can give your property an aged and neglected appearance. Our expert efflorescence removal service successfully eradicates these unsightly marks, bringing back the clean, natural look of your surfaces in Cincinnati. By employing targeted cleaning methods and environmentally safe products, we effectively eliminate mineral deposits without harming the underlying material",
                "If not addressed, efflorescence can cause additional moisture-related problems, gradually compromising your surfaces. Our skilled team knows how to identify and eliminate these deposits while assisting in preventing future accumulation. Whether it’s a home pathway, business exterior, or structural wall, we deliver comprehensive, durable outcomes.",
                "Maintain your outer surfaces in immaculate condition and devoid of mineral stains with professional efflorescence eradication. Rely on us for expert cleaning results.",
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
  ),
  o = () => (
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
            {"Efflorescence Removal Services in Cincinnati, Ohio"}
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
      <CL_ />
    </div>
  );

export default o;
