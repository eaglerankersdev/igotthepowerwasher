// @ts-nocheck
/* eslint-disable */
"use client";
// Unbundled from igtpw.com chunk app__residential-gallery__page-2c6e6f93fb8c1ac9.js, webpack module 4611 (variant 4611_v1).
import { motion } from "framer-motion";
import { A as M6851_v6_A } from "./M6851_v6";

let i = () => (
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
      <M6851_v6_A
        images={[
          {
            before: "/images/ssde.png",
            after: "/images/fjdsh.png",
          },
          {
            before: "/images/Before_Wall.jpg",
            after: "/images/After_Wall.jpg",
          },
          {
            before: "/images/2.png",
            after: "/images/2s.png",
          },
          {
            before: "/images/1.png",
            after: "/images/1s.png",
          },
          {
            before: "/images/media_20250224_200900_44446008399370510.jpg",
            after: "/images/media_20250224_200900_1923208072107551546.jpg",
          },
          {
            before: "/images/20.jpg",
            after: "/images/18.jpg",
          },
          {
            before: "/images/20.png",
            after: "/images/21.png",
          },
        ]}
      />
    </div>
  </section>
);

export { i as A };
