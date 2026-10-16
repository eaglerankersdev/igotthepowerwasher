// @ts-nocheck
/* eslint-disable */
"use client";
// Unbundled from igtpw.com chunk app__contact-us__page-7b8545b4c1889694.js, webpack module 8334.
import { A as M7743_A } from "./M7743";
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

let CC_ = () => (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
          <div className="bg-white rounded-2xl shadow-xl ">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{"Contact Us Today"}</h2>
            <M7743_A />
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{"Get in Touch"}</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FiPhone className="w-6 h-6 text-[#00C6F9] mr-3" />
                  <div>
                    <p className="font-medium">{"Phone"}</p>
                    <p className="text-gray-600">{"513-570-0355"}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiMail className="w-6 h-6 text-[#00C6F9] mr-3" />
                  <div>
                    <p className="font-medium">{"Email"}</p>
                    <p className="text-gray-600">{"contact@igotthepowerwasher.com"}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiMapPin className="w-6 h-6 text-[#00C6F9] mr-3" />
                  <div>
                    <p className="font-medium">{"Address"}</p>
                    <p className="text-gray-600">{"Cincinnati, OH and surrounding areas"}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{"Store Hours"}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">{"Monday - Friday"}</span>
                  <span className="font-medium">{"8:00 AM - 4:00 PM"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{"Saturday - Sunday"}</span>
                  <span className="font-medium">{"Closed"}</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{"Follow Us"}</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/tony.werner.94402?mibextid=LQQJ4d"
                  className="text-gray-600 hover:text-[#00C6F9] transition-colors"
                >
                  <FiFacebook className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/igotthepowerwasher/" className="text-gray-600 hover:text-[#00C6F9] transition-colors">
                  <FiInstagram className="w-6 h-6" />
                </a>
                <a href="https://www.tiktok.com/@igotthepowerwasher" className="text-gray-600 hover:text-[#00C6F9] transition-colors">
                  <FaTiktok className="w-6 h-6" />
                </a>
              </div>
            </div>
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
            {"Contact Us"}
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

export default o;
