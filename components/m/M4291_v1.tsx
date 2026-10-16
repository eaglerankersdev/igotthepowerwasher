// @ts-nocheck
/* eslint-disable */
"use client";
// Unbundled from igtpw.com chunk app__gallery__page-2bbb9c325becdad6.js, webpack module 4291 (variant 4291_v1).
import { motion } from "framer-motion";
import { A as M6851_v2_A } from "./M6851_v2";
import Image from "next/image";

let o = () => (
  <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 mb-20">
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="lg:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {"Press the Bar-Button and Slide to See Before and After Result Visuals"}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {
              "We have created before and after result visuals for you to get an idea about our professional pressure washing services. Just press the bar button and slide to see before and after result visuals."
            }
          </p>
          <div className="border-l-4 border-[#00C6F9] pl-4" />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="lg:w-1/2"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
            <video className="w-full h-full object-cover" autoPlay={!0} muted={!0} loop={!0} playsInline={!0} controls={!1}>
              <source src="/images/captured-media-3-mp4.mp4" type="video/mp4" />
              {"Your browser does not support the video tag."}
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>
      </div>
      <M6851_v2_A
        images={[
          {
            before: "/images/7.png",
            after: "/images/8 (1).png",
          },
          {
            before: "/images/9 (1).jpg",
            after: "/images/6-1.jpg",
          },
          {
            before: "/images/6-1.png",
            after: "/images/6s.png",
          },
          {
            before: "/images/ImportedPhoto_1740409654948.jpg",
            after: "/images/ImportedPhoto_1740409654948 (1).jpg",
          },
        ]}
      />
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">{"Our Commercial Work Portfolio"}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "/images/1252.jpg",
            "/images/Untitled-2.jpg",
            "/images/ImportedPhoto_1740409854627.jpg",
            "/images/300-1024x683-1.png",
            "/images/1530.png",
            "/images/06 (2).jpg",
            "/images/16.jpg",
            "/images/05 (2).jpg",
            "/images/ImportedPhoto_1739380373586-1536x1152.jpg",
          ].map((e, s) => (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.4,
                delay: 0.1 * s,
              }}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              key={s}
            >
              <Image
                src={e}
                alt={"Commercial project ".concat(s + 1)}
                fill={!0}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                <span className="text-white text-lg font-medium">
                  {"Project "}
                  {s + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export { o as A };
