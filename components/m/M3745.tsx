// @ts-nocheck
/* eslint-disable */
"use client";
// Unbundled from igtpw.com chunk 4446-865142a41f36c6df.js, webpack module 3745.
import { motion } from "framer-motion";
import { A as M3267_A } from "./M3267";

let n = () => (
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
          {"Parking Lot Washing Services in Cincinnati, Ohio"}
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
    <M3267_A />
  </div>
);

export default n;
