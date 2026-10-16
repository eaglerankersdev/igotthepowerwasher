// @ts-nocheck
/* eslint-disable */
"use client";
// Unbundled from igtpw.com chunk app__gutter-cleaning__page-b3c8b827031243df.js, webpack module 3866.
import { FiCheck, FiPhoneCall } from "react-icons/fi";
import Image from "next/image";
import { A as M6851_v3_A } from "./M6851_v3";
import { motion } from "framer-motion";

let CO_ = () => (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {"Arrange for professional gutter cleaning services in Cincinnati OH"}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {
                "To protect your home from water damage and flooding, you should have your gutters cleaned on a regular basis. That way, you won’t have to worry about hazardous debris clogs that can cause leaks and rust. If you need gutter cleaning services in Cincinnati OH area, turn to IGotThePowerWasher. We’ll blast away leaves, twigs and other debris that can prevent your gutters from functioning properly. Ask us about our gutter polish! It will bring back old stained gutter to life!"
              }
            </p>
            <p className="text-lg text-gray-600 mb-8">
              {
                "Make sure your gutters stay in tip-top shape. Reach out to us now to arrange for gutter cleaning services in Cincinnati OH."
              }
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{"Let our pros clean and shine your gutters"}</h3>
            <p className="text-lg text-gray-600 mb-8">
              {
                "You’ll find that there are many benefits to having your gutters professionally detailed. By hiring us to power wash and polish your gutters, you can"
              }
            </p>
            <div className="mb-8">
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <FiCheck className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{"Save time and money"}</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiCheck className="w-6 h-6 text-green-500  flex-shrink-0" />
                  <span className="text-gray-700">{"Avoid injury and property damage"}</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiCheck className="w-6 h-6 text-green-500  flex-shrink-0" />
                  <span className="text-gray-700">{"Enjoy peace of mind knowing that your gutters are clog-free"}</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-600 mb-8">
              {"Be confident that you’re getting top-notch gutter services – contact us today for a free estimate."}
            </p>
            <a
              href="tel:513-570-0355"
              className="inline-flex items-center gap-3 bg-[#00c6f9] hover:bg-sky-700 text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FiPhoneCall className="w-5 h-5" />
              <span className="text-lg font-semibold">{"513-570-0355"}</span>
            </a>
          </div>
          <div className="md:w-1/2 space-y-6">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/08 (1).jpg"
                alt="Gutter cleaning process"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/21.jpg"
                alt="Gutter maintenance"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        <div className="mt-20">
          <M6851_v3_A
            images={[
              {
                before: "/images/151.png",
                after: "/images/152.png",
              },
              {
                before: "/images/b7823a34-ce69-4d5a-94fd-c19791c099d1 (1).png",
                after: "/images/b7823a34-ce69-4d5a-94fd-c19791c099d1 (2).png",
              },
            ]}
          />
        </div>
      </div>
    </section>
  ),
  c = () => (
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
            {"Gutter Cleaning Services in Cincinnati, Ohio"}
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
              {"Keep Your Gutters in Tip-Top Shape"}
            </div>
          </motion.div>
        </div>
      </div>
      <CO_ />
    </div>
  );

export default c;
