// @ts-nocheck
/* eslint-disable */
"use client";
// Unbundled from igtpw.com chunk app__the-clean-team__page-99e1d45d5138634c.js, webpack module 6408.
import { useRef, Fragment, useState, useEffect } from "react";
import styles from "@/styles/team.module.css";
import { motion, useAnimation } from "framer-motion";
import { FaPhoneAlt, FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

let CU_ = () => {
    let e = useRef([]),
      t = (t, r) => {
        setTimeout(() => {
          e.current[t].checked = !e.current[t].checked;
        }, 0);
      };
    return (
      <div className={styles.pageContainer}>
        <div
          className={styles.circleWrapper}
          style={{
            "--total": 6,
          }}
        >
          {" "}
          <div className={styles.centerElement}>{"Our Team"}</div>
          {[
            {
              id: 1,
              name: "Emily",
              role: "Emily is a versatile and detail-oriented professional",
              img: "/images/4-min.jpg",
            },
            {
              id: 2,
              name: "Morgan",
              role: "Marketing Momentum Architect",
              img: "/images/Untitled-5.jpg",
            },
            {
              id: 3,
              name: "Brandon",
              role: "Precision-Focused Quality Perfectionist",
              img: "/images/3-min.jpg",
            },
            {
              id: 4,
              name: "Gray",
              role: "skilled professional",
              img: "/images/1-min.jpg",
            },
            {
              id: 5,
              name: "John",
              role: "Community Outreach Dynamo",
              img: "/images/2-min.jpg",
            },
            {
              id: 6,
              name: "Brady",
              role: "Emerging Operations Prodigy",
              img: "/images/1 (2).jpg",
            },
          ].map((r, i) => (
            <Fragment key={r.id}>
              <input type="radio" name="radio-avatar" id={"radio-avatar-".concat(r.id)} ref={(t) => (e.current[r.id] = t)} />
              <label
                htmlFor={"radio-avatar-".concat(r.id)}
                className={styles.avatar}
                style={{
                  "--i": i + 1,
                }}
                onClick={(e) => t(r.id, e)}
              >
                <div className={styles.nameTag}>
                  <span className={styles.role}>{r.role}</span>
                  <span className={styles.name}>{r.name}</span>
                </div>
                <img src={r.img} alt={r.name} />
                <svg viewBox="0 0 300 300">
                  <text fill="currentColor">
                    <textPath href="#circlePath">{"".concat(r.name, " - ").concat(r.role)}</textPath>
                  </text>
                </svg>
              </label>
            </Fragment>
          ))}
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="0" height="0">
            <defs>
              <path id="circlePath" d="M 150, 150 m -100, 0 a 100,100 0 0,1 200,0 a 100,100 0 0,1 -200,0" />
            </defs>
          </svg>
        </div>
      </div>
    );
  },
  CH_ = () => (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className="bg-gradient-to-r from-[#00C6F9] to-blue-600 p-8 rounded-2xl w-[90%] max-w-3xl mx-auto mt-8 shadow-xl border-2 border-white"
    >
      <div className="flex flex-col space-y-4 text-white">
        <h2 className="text-2xl font-bold mb-2">{"Join Our Growing Team!"}</h2>
        <div className="space-y-3">
          <p className="flex items-center gap-3">
            <span className="w-2 h-2 bg-white rounded-full" />
            {"Cincinnati area residents wanted"}
          </p>
          <p className="flex items-center gap-3">
            <span className="w-2 h-2 bg-white rounded-full" />
            {"Flexible team or independent positions"}
          </p>
          <p className="flex items-center gap-3">
            <span className="w-2 h-2 bg-white rounded-full" />
            {"Available any time of the week"}
          </p>
        </div>
        <a
          href="/career"
          className="mt-4 inline-flex items-center justify-center bg-white text-[#00C6F9] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          {"Apply Now"}
        </a>
      </div>
    </motion.div>
  ),
  CP_ = () => {
    let e = useAnimation(),
      t = useAnimation(),
      [r, o] = useState(!1),
      d = useRef(null);
    (useEffect(() => {
      (e.start("visible"), t.start("visible"));
    }, [e, t]),
      useEffect(() => {
        let e = new IntersectionObserver(
          (e) => {
            let [t] = e;
            t.isIntersecting && o(!0);
          },
          {
            threshold: 0.5,
          },
        );
        return (d.current && e.observe(d.current), () => e.disconnect());
      }, []));
    let m = {
        hidden: {
          opacity: 0,
          y: 50,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            staggerChildren: 0.2,
          },
        },
      },
      p = {
        hidden: {
          opacity: 0,
          x: -50,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
            staggerChildren: 0.2,
          },
        },
      };
    return (
      <Fragment>
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate={e}
                variants={m}
                className="relative group overflow-hidden rounded-2xl shadow-2xl border-4 border-[#00C6F9]"
              >
                <img
                  src="/images/owner-i-got.jpeg"
                  alt="Tony Werner"
                  className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
              <motion.div initial="hidden" animate={t} variants={p} className="space-y-8">
                <div className="pb-6 border-b-2 border-[#00C6F9]">
                  <h2 className="text-4xl font-bold text-gray-900">{"Hi, I'm Tony Werner"}</h2>
                  <p className="mt-2 text-lg text-[#00C6F9]">{"Owner & Founder of IGotThePowerWasher"}</p>
                </div>
                <motion.p className="text-gray-600 text-lg leading-relaxed">
                  {
                    "I'm passionate about making Cincinnati shine. I moved here from Hamburg, Germany, in 2012, and I've loved calling this city home ever since. I started power washing six years ago, and it's been an incredible journey building IGotThePowerWasher into the fastest-growing pressure washing company in the area."
                  }
                </motion.p>
                <motion.p className="text-gray-600 text-lg leading-relaxed">
                  {
                    "My philosophy is simple: provide the highest quality work at the best price. I'm not happy until you are, and my team and I strive for perfection on every job. We don't just clean—we take pride in transforming your property."
                  }
                </motion.p>
                <motion.p className="text-gray-600 text-lg leading-relaxed">
                  {
                    "In addition to power washing, I also run Complete Seal Solutions, where we specialize in sealing a wide variety of surfaces. Whether it's concrete, pavers, driveways, patios, or even pool decks, we've got you covered. Sealing is a MUST, especially here in Ohio. Our freeze-and-thaw cycle can wreak havoc on surfaces, causing them to crack, chip, and deteriorate over time."
                  }
                </motion.p>
                <motion.button
                  className="mt-8 inline-flex items-center bg-[#00C6F9] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0099C6] transition-colors"
                  variants={p}
                >
                  <FaPhoneAlt className="mr-3 text-xl" />
                  <Link href="tel:+15135700355">{"(513) 570-0355"}</Link>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.p className="text-gray-700 text-lg leading-relaxed bg-white p-8 rounded-xl shadow-sm">
              {
                "I'm also the owner of WashingSupply, where I've designed and developed cutting-edge pressure washing equipment. Over the years, we've sold hundreds of units, and it's been incredible to see how this innovation has not only improved our own services but also helped our customers achieve outstanding results."
              }
            </motion.p>
            <motion.p className="text-gray-700 text-lg leading-relaxed bg-white p-8 rounded-xl shadow-sm">
              {
                "One of my favorite stories is from my very first customer. She actually yelled at me because my prices were too low—she paid me extra and said, \"Next time I hire you, you better raise your prices!\" Now, she's a close friend with a spotless property, and that's the kind of relationship I love building with my customers."
              }
            </motion.p>
            <motion.p className="text-gray-700 text-lg leading-relaxed bg-white p-8 rounded-xl shadow-sm">
              {
                "If you're looking for top-notch service, fair pricing, and a team that truly cares, give us a call or text at 513-570-0355 to schedule your free, no-obligation estimate. You can also visit us at 3640 Werk Rd. (right next to the USPS). Mention this story, and I'll give you 10% off your first service!"
              }
            </motion.p>
            <motion.p className="text-gray-700 text-lg leading-relaxed bg-white p-8 rounded-xl shadow-sm font-semibold">
              {"Let's keep it clean!"}
            </motion.p>
          </div>
        </section>
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" animate={t} variants={p} className="space-y-8 order-last lg:order-first">
                <div className="pb-6 border-b-2 border-[#00C6F9]">
                  <h2 className="text-4xl font-bold text-gray-900">{"Meet Andrew Thompson"}</h2>
                  <p className="mt-2 text-lg text-[#00C6F9]">{"Chief Operating Officer"}</p>
                </div>
                <motion.p className="text-gray-600 text-lg leading-relaxed">
                  {
                    "Andrew is a committed and detail-oriented professional, consistently delivering high-quality results across all areas of our operations. As Chief Operating Officer of I Got the Power Washer, he plays a pivotal role in ensuring operational excellence, leading our team with a relentless commitment to quality, efficiency, and customer satisfaction."
                  }
                </motion.p>
                <motion.p className="text-gray-600 text-lg leading-relaxed">
                  {
                    "A native of Spring Hill, Tennessee, Andrew brings a unique blend of Southern charm and grit to our team—qualities essential for the high demands of our industry. His leadership consistently drives our crew to success, delivering flawless results year after year."
                  }
                </motion.p>
                <motion.p className="text-gray-600 text-lg leading-relaxed">
                  {
                    "Andrew is a graduate of Mount St. Joseph University and holds a master's degree, demonstrating his dedication to continuous growth and excellence. During his time at MSJ, he was a standout football player and five-year starter, serving as captain of the 2024 team."
                  }
                </motion.p>
                <motion.p className="text-gray-600 text-lg leading-relaxed font-semibold">
                  {'"Hard work and faith pave the way to success."'}
                </motion.p>
                <motion.p className="text-gray-600 text-lg leading-relaxed">
                  {'As he always says: "Be the doer in your life and watch as God blesses you abundantly."'}
                </motion.p>
              </motion.div>
              <motion.div
                initial="hidden"
                animate={e}
                variants={m}
                className="relative group overflow-hidden rounded-2xl shadow-2xl border-4 border-[#00C6F9]"
              >
                <img
                  src="/images/andrew.jpg"
                  alt="Andrew Thompson"
                  className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </div>
          </div>
        </section>
        <div ref={d} className="bg-gray-50 pt-20 pb-28 px-4 sm:px-6 lg:px-8">
          <CU_ />
          {r && <CH_ />}
        </div>
      </Fragment>
    );
  },
  g = () => (
    <div>
      <div className="relative flex items-center justify-center min-h-[60vh] bg-gradient-to-r from-[#00C6F9] to-white bg-center bg-no-repeat bg-cover z-0">
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
            {"The Clean Team"}
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
              {"About Us"}
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
              >
                <FaLongArrowAltRight className="text-lg text-sky-300" />
              </motion.span>
              {"The Clean Team"}
            </div>
          </motion.div>
        </div>
      </div>
      <CP_ />
    </div>
  );

export default g;
