// @ts-nocheck
/* eslint-disable */
"use client";
// Unbundled from igtpw.com chunk app__services__page-b525856fd5d50cec.js, webpack module 9822.
import Image from "next/image";
import { FiUserCheck, FiTool, FiCheckCircle } from "react-icons/fi";
import { A as M6725_A } from "./M6725";
import { motion } from "framer-motion";

let CL_ = () => (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24">
      <div className="max-w-7xl mx-auto text-center mb-16" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6">
        {[
          {
            id: 1,
            name: "House Washing",
            about:
              "As a homeowner, you want to do everything you can to keep your property well-maintained. This includes removing dirt, debris and grime from your home’s exterior.",
            imageSrc: "/images/302-e1738968818248.png",
            link: "/house-washing",
          },
          {
            id: 2,
            name: "Fence Washing",
            about:
              "Is your dirty, weathered fence ruining your curb appeal? IGotThePowerWasher offers professional and reliable fence washing services for home and business owners.",
            imageSrc: "/images/19.png",
            link: "/fence-washing",
          },
          {
            id: 3,
            name: "Roof Washing",
            about:
              "Do you remember what the original color of your roof was? If not, then it’s time to call IGotThePowerWasher for expert roof washing services that restore its beauty...",
            imageSrc: "/images/roofing-washing.png",
            link: "/roof-washing",
          },
          {
            id: 4,
            name: "Gutter Cleaning",
            about: "Save the hassle and risk by calling us for maintenance gutter cleaning.",
            imageSrc: "/images/gutter.png",
            link: "/gutter-cleaning",
          },
          {
            id: 5,
            name: "Concrete Sealing",
            about: "Seal your concrete prolong your service and protect it from salt damage",
            imageSrc: "/images/5 (1).jpg",
            link: "/concrete-sealing",
          },
          {
            id: 6,
            name: "Concrete Pressure Washing",
            about: "When your concrete is covered in dirt and debris, turn to IGotThePowerWasher ",
            imageSrc: "/images/1 (1).jpg",
            link: "/concrete-pressure-washing",
          },
          {
            id: 7,
            name: "Window Cleaning",
            about: "Window Cleaning Cincinnati is performing the procedures of washing and cleaning glass windows.",
            imageSrc: "/images/Untitled-3.jpg",
            link: "/window-cleaning-cincinnati",
          },
          {
            id: 8,
            name: "Commercial Pressure Washing",
            about: "To get pressure washing or to get power washing?",
            imageSrc: "/images/300-1024x683-1.png",
            link: "/commercial-pressure-washing",
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
                <a href={e.link}>{" Learn More"}</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  ),
  CC_ = () => (
    <section className="py-12 px-4 sm:px-6 lg:py-20 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <CL_ />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{"Why Choose Us"}</h2>
          <p className="text-xl text-[#00c6f9] font-semibold mb-6">{"Why should you hire a professional power washing company?"}</p>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {
              "Everyone is looking for ways to save money. However, power washing your property yourself shouldn’t be one of them. You’re better off hiring our power washing company to save time, money and energy when you get professional power washing services. Call today to schedule your service in Cincinnati, OH or the surrounding area."
            }
          </p>
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: FiUserCheck,
              title: "Are highly trained and qualified",
            },
            {
              icon: FiTool,
              title: "Own all the necessary equipment",
            },
            {
              icon: FiCheckCircle,
              title: "Understand how to complete the job the right way",
            },
          ].map((e, i) => (
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100" key={i}>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#00c6f9]/10 rounded-lg">
                  <e.icon className="w-8 h-8 text-[#00c6f9]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{e.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <M6725_A />
    </section>
  ),
  d = () => (
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
            {"Services"}
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
      <CC_ />
    </div>
  );

export default d;
