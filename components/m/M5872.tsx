// @ts-nocheck
/* eslint-disable */
"use client";
// Unbundled from igtpw.com chunk app__get-estimate__page-42cd6b5a9ec7a2d5.js, webpack module 5872.
import { motion } from "framer-motion";
import { A as M7743_A } from "./M7743";

let r = () => (
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
          {"Get Estimate"}
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
    <M7743_A />
  </div>
);

export default r;
