// @ts-nocheck
/* eslint-disable */
"use client";
// Unbundled from igtpw.com chunk app__gallery__page-2bbb9c325becdad6.js, webpack module 6983.
import { motion } from "framer-motion";
import { A as M4291_v1_A } from "./M4291_v1";
import { A as M4611_v0_A } from "./M4611_v0";

let o = () => (
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
          {"Gallery"}
        </motion.h1>
      </div>
    </div>
    <M4291_v1_A />
    <M4611_v0_A />
  </div>
);

export default o;
