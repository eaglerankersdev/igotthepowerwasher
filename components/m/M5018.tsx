// @ts-nocheck
/* eslint-disable */
"use client";
// Unbundled from igtpw.com chunk app__window-cleaning-cincinnati__page-be0e0aa0de4af481.js, webpack module 5018.
import dynamic from "next/dynamic";
import styles from "@/styles/windowCleaning.module.css";
import { FaPhone } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import lottie_comp_5_1 from "@/lib/lottie/m/M5018-comp-5.json";

let x = lottie_comp_5_1,
  CU_ = dynamic(
    () =>
      n
        .e(3078)
        .then(n.bind(n, 8153))
        .then((i) => i.Player),
    {
      loadableGenerated: {
        webpack: () => [8153],
      },
      ssr: !1,
    },
  ),
  CK_ = () => (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>{"Crystal-Clear Windows, Made Simple"}</h2>
          <div className={styles.textContent}>
            <p className={styles.paragraph}>
              {
                "At I Got The Power Washer, we’re here to make your windows shine—whether you’re in Cincinnati or beyond. Our goal is simple: to provide you with clean, streak-free windows that enhance your property’s look and let in more light."
              }
            </p>
            <p className={styles.paragraph}>
              {
                "We use high-quality detergents, modern equipment, and proven techniques to remove dirt, dust, and grime from all types of glass surfaces. From homes and apartments to offices, schools, and commercial buildings, we handle it all. And for those hard-to-reach or high-rise windows? No problem. Our team is fully trained in safety protocols to ensure a smooth and secure cleaning process."
              }
            </p>
            <p className={styles.paragraph}>
              {
                "We understand that window cleaning isn’t just about aesthetics—it’s about maintaining your property and protecting your investment. That’s why we take the time to do it right, so you can enjoy clear views and a polished look without the hassle."
              }
            </p>
            <p className={styles.paragraph}>
              {
                "If you’re looking for reliable, professional window cleaning services that go the extra mile, we’ve got you covered. Let us help you see the difference clean windows can make!"
              }
            </p>
            <a href="tel:513-5700355" className={styles.ctaButton}>
              <FaPhone className={styles.phoneIcon} />
              <span className={styles.phoneNumber}>{"(513) 570-0355"}</span>
            </a>
          </div>
        </div>
        <div className={styles.imageColumn}>
          <div className={styles.lottieWrapper}>
            <CU_
              autoplay={!0}
              loop={!0}
              src={x}
              className={styles.lottieAnimation}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/IMG-20250116-WA0037-e1738018013242.jpg"
              alt="Residential window cleaning"
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  ),
  p = () => (
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
            {"Window Cleaning Services in Cincinnati, Ohio"}
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
      <CK_ />
    </div>
  );

export default p;
