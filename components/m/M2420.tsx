// @ts-nocheck
/* eslint-disable */
"use client";
// Unbundled from igtpw.com chunk app__page-c32512ff13036244.js, webpack module 2420.
import { _taggedTemplateLiteral } from "@/lib/tagged-template";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import JSXStyle from "styled-jsx/style";
import { FaMinus, FaPlus, FaPhoneAlt } from "react-icons/fa";
import { useAnimation, motion } from "framer-motion";
import Image from "next/image";
import { A as M7743_A } from "./M7743";
import { A as M6725_A } from "./M6725";
import SplashLoader from "@/components/site/SplashLoader";

let Q = {
    src: "/media/01 (1).jpg",
    height: 683,
    width: 1024,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAACBP/aAAwDAQACEAMQAAAAoEJ//8QAHhAAAgEDBQAAAAAAAAAAAAAAAgQBABESAwUTISP/2gAIAQEAAT8Af3ZpxYNZjjPzghHG0DlHdq//xAAbEQACAQUAAAAAAAAAAAAAAAABAgADESIxUf/aAAgBAgEBPwCqzXGR12f/xAAVEQEBAAAAAAAAAAAAAAAAAAAxAP/aAAgBAwEBPwAL/9k=",
    blurWidth: 8,
    blurHeight: 5,
  },
  V = {
    src: "/media/302-e1738968818248.png",
    height: 800,
    width: 1199,
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEVmdpBHS1F5iqF8fGZhY2RbXFotLTZfbYJpb3lrbWU7MzJ4f4iFl6yFqdqbuNhoi8N1m9abwO5of6KZtthRY3dFRD6Yjj20qVDeeSXHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAXBiQGAIAwAsQMKbUXlU9l/UxNQ5ertQatxjwkhmp0rJopkl5A2h2d5i38/HgQBXqXn1DoAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5,
  },
  h = {
    src: "/media/gutter.png",
    height: 800,
    width: 1200,
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAOVBMVEWXl5lpZ2YqPBu3ubx6eXZfXFlzbm2srK6goaKDgYDT1NdBUDpoZWNYVVM2Ridsd2kVJA8MHwbBxMXVgErIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC5JREFUeJwFwQkCABAIAMGlqNz8/7FmKFUVXZlRquA9k5IYti/TWjh+8BZh8foHFVoBIneWHhgAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5,
  },
  D = {
    src: "/media/Untitled-4 (1).jpg",
    height: 800,
    width: 1200,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAACoD//EAB4QAAEBCQAAAAAAAAAAAAAAAAEEAAIDBRITFHGB/9oACAEBAAE/AJiVWWtoUl0XohA11v/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",
    blurWidth: 8,
    blurHeight: 5,
  },
  z = {
    src: "/media/roofing-washing.png",
    height: 800,
    width: 1200,
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAM1BMVEWrqatvaWidnJ9hfaW1pJaZlpnKyMqvra+ppaRMREF7dne8urtdVlSomo+Wi4IQVa9fbX9mOo+LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC1JREFUeJwFwYkBwCAMA7EDAnb42v2nRaJrDJvORMsGdpXkMFlQbRFklvt/7TwUswD/ifMu7gAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5,
  },
  n = {
    src: "/media/2-1.jpg",
    height: 800,
    width: 1200,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/9oADAMBAAIQAxAAAACSC0//xAAbEAAABwEAAAAAAAAAAAAAAAAAAQIDBBEiQf/aAAgBAQABPwAozVqzwf/EABgRAAIDAAAAAAAAAAAAAAAAAAACAREx/9oACAECAQE/AJZr0//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/AAL/2Q==",
    blurWidth: 8,
    blurHeight: 5,
  };
function m() {
  let A = _taggedTemplateLiteral([
    "\n  background: #fff;\n  padding: 4rem 2rem;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n",
  ]);
  return (
    (m = function () {
      return A;
    }),
    A
  );
}
function f() {
  let A = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  gap: 1px;\n  margin-bottom: 3rem;\n"]);
  return (
    (f = function () {
      return A;
    }),
    A
  );
}
function s() {
  let A = _taggedTemplateLiteral([
    "\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  gap: 2rem;\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  \n  @media (min-width: 768px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  @media (min-width: 1024px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n",
  ]);
  return (
    (s = function () {
      return A;
    }),
    A
  );
}
function c() {
  let A = _taggedTemplateLiteral([
    "\n  .card {\n    width: 320px;\n    height: 380px; /* Increased from 320px */\n    background: white;\n    border-radius: 32px;\n    padding: 3px;\n    position: relative;\n    box-shadow: rgba(96, 75, 74, 0.188) 0px 70px 30px -50px;\n    transition: all 0.5s ease-in-out;\n    margin: 0 auto;\n\n    @media (max-width: 768px) {\n      width: 280px;\n      height: 340px; /* Increased from 280px */\n    }\n  }\n\n  .profile-pic {\n    position: absolute;\n    width: calc(100% - 6px);\n    height: 65%; /* Increased from full height */\n    top: 3px;\n    left: 3px;\n    border-radius: 29px;\n    z-index: 1;\n    border: 0px solid #00C6F9;\n    overflow: hidden;\n    transition: all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s;\n    background: #ffffff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .lottie-animation {\n    width: 100%;\n    height: 100%;\n    transform: scale(1); /* Reduced from 1.2 */\n  }\n\n  .lottie-loading {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #00C6F9;\n    font-size: 0.8rem;\n  }\n\n  .bottom {\n    position: absolute;\n    bottom: 3px;\n    left: 3px;\n    right: 3px;\n    background: #00C6F9;\n    top: 80%;\n    border-radius: 29px;\n    z-index: 2;\n    box-shadow: rgba(96, 75, 74, 0.188) 0px 5px 5px 0px inset;\n    overflow: hidden;\n    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  }\n\n  /* Keep all hover effects and other styles the same below */\n  .content {\n    position: absolute;\n    bottom: 0;\n    left: 1.5rem;\n    right: 1.5rem;\n    height: 160px;\n  }\n\n  .name {\n    display: block;\n    font-size: 1.4rem;\n    color: white;\n    font-weight: bold;\n  }\n\n  .about-me {\n    display: block;\n    font-size: 1rem;\n    color: white;\n    margin-top: 8px;\n  }\n\n  .bottom-bottom {\n    position: absolute;\n    bottom: 1rem;\n    left: 1.5rem;\n    right: 1.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .service-name-container {\n    background: white;\n    padding: 8px 15px;\n    border-radius: 20px;\n    flex-grow: 1;\n    margin-right: 1rem;\n  }\n\n  .service-name {\n    color: #00C6F9;\n    font-weight: bold;\n    font-size: 0.9rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .button {\n    background: white;\n    color: #00C6F9;\n    border: none;\n    border-radius: 20px;\n    font-size: 0.8rem;\n    padding: 0.5rem 1rem;\n    box-shadow: rgba(96, 75, 74, 0.133) 0px 5px 5px 0px;\n    transition: all 0.3s ease;\n    cursor: pointer;\n    white-space: nowrap;\n    text-decoration: none;\n    display: inline-block;\n\n    &:hover {\n      background: #00A3CC;\n      color: white;\n    }\n  }\n\n  .card:hover {\n    border-top-left-radius: 55px;\n  }\n\n  .card:hover .bottom {\n    top: 25%;\n    border-radius: 80px 29px 29px 29px;\n    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;\n  }\n\n  .card:hover .profile-pic {\n    width: 120px;\n    height: 120px;\n    aspect-ratio: 1;\n    top: 15px;\n    left: 15px;\n    border-radius: 50%;\n    z-index: 3;\n    border: 7px solid #00C6F9;\n    box-shadow: rgba(96, 75, 74, 0.188) 0px 5px 5px 0px;\n    transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;\n  }\n\n  .card:hover .profile-pic:hover {\n    transform: scale(1.3);\n    border-radius: 0px;\n  }\n\n  .card:hover .lottie-animation {\n    transform: scale(1.5);\n    transition: all 0.5s ease-in-out 0.5s;\n  }\n.bottom-bottom {\n  position: absolute;\n  bottom: 1rem;\n  left: 1.5rem;\n  right: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  \n  /* Add mobile-specific fixes */\n  @media (max-width: 768px) {\n    flex-wrap: nowrap;\n    gap: 8px;\n    bottom: 0.5rem;\n  }\n}\n\n.service-name-container {\n  background: white;\n  padding: 8px 15px;\n  border-radius: 20px;\n  flex-grow: 1;\n  margin-right: 1rem;\n  \n  /* Add text overflow handling */\n  @media (max-width: 768px) {\n    min-width: 60%;\n    white-space: normal; /* Allow text wrapping */\n    overflow: visible;\n    margin-right: 0;\n  }\n}\n\n.button {\n  background: white;\n  color: #00C6F9;\n  border: none;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  padding: 0.5rem 1rem;\n  box-shadow: rgba(96, 75, 74, 0.133) 0px 5px 5px 0px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  white-space: nowrap;\n  text-decoration: none;\n  display: inline-block;\n  \n  /* Mobile-specific button fixes */\n  @media (max-width: 768px) {\n    flex-shrink: 0;\n    padding: 8px 12px;\n    font-size: 0.9rem;\n    min-width: 100px;\n  }\n\n  &:hover {\n    background: #00A3CC;\n    color: white;\n  }\n}\n\n/* Add this new media query at bottom */\n@media (max-width: 480px) {\n  .service-name {\n    font-size: 0.8rem;\n  }\n  \n  .button {\n    font-size: 0.8rem;\n    padding: 6px 10px;\n  }\n}\n  \n\n\n  .card:hover .profile-pic {\n    width: 120px;\n    height: 120px;\n    aspect-ratio: 1;\n    top: 15px;\n    left: 15px;\n    border-radius: 50%;\n    z-index: 3;\n    border: 7px solid #00C6F9;\n    box-shadow: rgba(96, 75, 74, 0.188) 0px 5px 5px 0px;\n    transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;\n  }\n\n  .card:hover .profile-pic:hover {\n    transform: scale(1.3);\n    border-radius: 0px;\n  }\n\n  .card:hover .profile-image {\n    transform: scale(1.5);\n    transition: all 0.5s ease-in-out 0.5s;\n  }\n",
  ]);
  return (
    (c = function () {
      return A;
    }),
    A
  );
}
dynamic(() => import("lottie-react"), {
  loadableGenerated: {
    webpack: () => [3770],
  },
  ssr: !1,
  loading: () => <div className="lottie-loading">{"Loading..."}</div>,
});
let P = (A) => {
    let { imageUrl: I, name: i, about: Z, link: y } = A,
      [q, M] = useState(!1);
    return (useEffect(() => {
      M(!0);
    }, []),
    q) ? (
      <CB_>
        <div className="card">
          <div className="profile-pic">
            <img src={I.src} alt={i} className="profile-image" loading="lazy" />
          </div>
          <div className="bottom">
            <div className="content">
              <span className="name">{i}</span>
              <span className="about-me">{Z}</span>
            </div>
            <div className="bottom-bottom">
              <div className="service-name-container">
                <span className="service-name">{i}</span>
              </div>
              <Link href={y || "#"} className="button">
                {"Learn More"}
              </Link>
            </div>
          </div>
        </div>
      </CB_>
    ) : null;
  },
  O = styled.section(m()),
  CT_ = styled.div(f()),
  CE_ = styled.div(s()),
  CB_ = styled.div(c()),
  H = () => {
    let [A, I] = useState(!1);
    return (useEffect(() => {
      I(!0);
    }, []),
    A) ? (
      <O>
        <CT_>
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00C6F9] to-blue-800 tracking-tight mb-6 pb-4 relative group">
            {"Our Residential Services"}
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-500 group-hover:w-full" />
          </h2>
        </CT_>
        <CE_>
          {[
            {
              id: 1,
              name: "Pressure Washing",
              about: "Professional Pressure Washing for Homes & Driveways",
              link: "/pressure-washing",
              imageUrl: Q,
            },
            {
              id: 2,
              name: "House Washing",
              about: "Revive Your Home’s Curb Appeal!",
              imageUrl: V,
              link: "/house-washing",
            },
            {
              id: 3,
              name: "Gutter Cleaning",
              about: "Complete gutter cleaning and protection solutions",
              link: "/gutter-cleaning",
              imageUrl: h,
            },
            {
              id: 4,
              name: "Window Cleaning",
              about: "Streak-free window cleaning services",
              link: "/window-cleaning-cincinnati",
              imageUrl: D,
            },
            {
              id: 5,
              name: "Roof Washing",
              about: "Revitalize & Protect Your Roof – Expert Roof Washing!",
              link: "/roof-washing",
              imageUrl: z,
            },
            {
              id: 6,
              name: "Seal Solutions",
              about: "Durable Seal Solutions – Protect & Preserve Surfaces!",
              link: "/seal-solutions",
              imageUrl: n,
            },
          ].map((A) => (
            <P name={A.name} about={A.about} imageUrl={A.imageUrl} link={A.link} key={A.id} />
          ))}
        </CE_>
      </O>
    ) : null;
  };
let CD_ = () => {
  let A = [
      {
        name: "Google Fonts",
        image: "client1.jpg",
      },
      {
        name: "Amazon",
        image: "client2.jpg",
      },
      {
        name: "Microsoft",
        image: "client3.jpg",
      },
      {
        name: "Help Scout",
        image: "client4.jpg",
      },
      {
        name: "Optimizely",
        image: "client5.jpg",
      },
      {
        name: "Breezy",
        image: "client6.jpg",
      },
      {
        name: "Attio",
        image: "client7.jpg",
      },
      {
        name: "PayPal",
        image: "client8.jpg",
      },
      {
        name: "Mparticle",
        image: "client9.jpg",
      },
      {
        name: "HubSpot",
        image: "client10.jpg",
      },
      {
        name: "Miro",
        image: "client11.jpg",
      },
      {
        name: "Company 12",
        image: "client12.jpg",
      },
      {
        name: "Company 13",
        image: "client13.jpg",
      },
      {
        name: "Company 14",
        image: "client14.jpg",
      },
      {
        name: "Company 15",
        image: "client15.jpg",
      },
      {
        name: "Company 16",
        image: "client16.jpg",
      },
      {
        name: "Company 17",
        image: "client17.png",
      },
      {
        name: "Company 18",
        image: "client18.jpg",
      },
    ],
    I = [...A.slice(0, 9)],
    i = [...A.slice(9, 18)];
  return (
    <section className="jsx-24e4647236856f51 bg-white py-12">
      <h2 className="jsx-24e4647236856f51 mb-12 text-[2.5rem]  bg-gradient-to-r from-[#00C6F9] to-blue-800 text-transparent bg-clip-text font-bold text-2xl text-center uppercase tracking-[2px] md:text-[2rem]">
        {"Some of our valuable clients"}
      </h2>
      <div className="jsx-24e4647236856f51 overflow-hidden space-y-8">
        <div className="jsx-24e4647236856f51 relative w-full overflow-hidden">
          <div className="jsx-24e4647236856f51 flex min-w-max animate-scroll-right space-x-8">
            {[...I, ...I].map((A, I) => (
              <div className="jsx-24e4647236856f51 flex items-center justify-center bg-white border rounded-lg shadow-lg px-8 py-5" key={I}>
                <img
                  src={"/images/".concat(A.image)}
                  alt={"".concat(A.name, " logo")}
                  loading="lazy"
                  className="jsx-24e4647236856f51 h-20 w-auto object-contain max-w-[160px]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="jsx-24e4647236856f51 relative w-full overflow-hidden">
          <div className="jsx-24e4647236856f51 flex min-w-max animate-scroll-left space-x-8">
            {[...i, ...i].map((A, I) => (
              <div className="jsx-24e4647236856f51 flex items-center justify-center bg-white border rounded-lg shadow-lg px-8 py-5" key={I}>
                <img
                  src={"/images/".concat(A.image)}
                  alt={"".concat(A.name, " logo")}
                  loading="lazy"
                  className="jsx-24e4647236856f51 h-20 w-auto object-contain max-w-[160px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <JSXStyle id="24e4647236856f51">
        {
          "@-webkit-keyframes scroll-left{0%{-webkit-transform:translatex(0);transform:translatex(0)}100%{-webkit-transform:translatex(-50%);transform:translatex(-50%)}}@-moz-keyframes scroll-left{0%{-moz-transform:translatex(0);transform:translatex(0)}100%{-moz-transform:translatex(-50%);transform:translatex(-50%)}}@-o-keyframes scroll-left{0%{-o-transform:translatex(0);transform:translatex(0)}100%{-o-transform:translatex(-50%);transform:translatex(-50%)}}@keyframes scroll-left{0%{-webkit-transform:translatex(0);-moz-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0)}100%{-webkit-transform:translatex(-50%);-moz-transform:translatex(-50%);-o-transform:translatex(-50%);transform:translatex(-50%)}}@-webkit-keyframes scroll-right{0%{-webkit-transform:translatex(-50%);transform:translatex(-50%)}100%{-webkit-transform:translatex(0);transform:translatex(0)}}@-moz-keyframes scroll-right{0%{-moz-transform:translatex(-50%);transform:translatex(-50%)}100%{-moz-transform:translatex(0);transform:translatex(0)}}@-o-keyframes scroll-right{0%{-o-transform:translatex(-50%);transform:translatex(-50%)}100%{-o-transform:translatex(0);transform:translatex(0)}}@keyframes scroll-right{0%{-webkit-transform:translatex(-50%);-moz-transform:translatex(-50%);-o-transform:translatex(-50%);transform:translatex(-50%)}100%{-webkit-transform:translatex(0);-moz-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0)}}.animate-scroll-left.jsx-24e4647236856f51{-webkit-animation:scroll-left 45s linear infinite;-moz-animation:scroll-left 45s linear infinite;-o-animation:scroll-left 45s linear infinite;animation:scroll-left 45s linear infinite}.animate-scroll-right.jsx-24e4647236856f51{-webkit-animation:scroll-right 45s linear infinite;-moz-animation:scroll-right 45s linear infinite;-o-animation:scroll-right 45s linear infinite;animation:scroll-right 45s linear infinite}@media(max-width:768px){.animate-scroll-left.jsx-24e4647236856f51,.animate-scroll-right.jsx-24e4647236856f51{-webkit-animation-duration:20s;-moz-animation-duration:20s;-o-animation-duration:20s;animation-duration:20s}}"
        }
      </JSXStyle>
    </section>
  );
};
let CU_ = () => {
  let [A, I] = useState(null),
    [i, Z] = useState(!1);
  return (useEffect(() => {
    Z(!0);
  }, []),
  i) ? (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00C6F9] to-[#0066FF] bg-clip-text text-transparent mb-4">
            {"Frequently Asked Questions"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {"Find answers to common questions about our pressure washing services"}
          </p>
        </div>
        <div className="space-y-6">
          {[
            {
              question: "Is pressure washing safe for all surfaces?",
              answer:
                "Pressure washing is a safe cleaning method for most surfaces, provided the pressure and technique are adjusted appropriately for each surface type. Delicate surfaces, including wood or painted areas, require lower pressure settings to avert potential damage. Conversely, more rigid surfaces like concrete or brick can withstand higher pressure levels without adverse effects. Relying on the expertise of a professional pressure washing service like IGotThePowerWasher guarantees that the optimal pressure and technique are employed for every surface, ensuring safety and effectiveness.",
            },
            {
              question: "Will pressure washing damage my plants or landscaping?",
              answer:
                "When done correctly, pressure washing should not damage your plants or landscaping. However, it’s advisable to cover delicate plants or move them away from the cleaned areas as a precaution. Water runoff from pressure washing can sometimes contain cleaning agents or debris, which may harm plants. Ensuring the protection of your landscaping is of utmost importance to a reputable pressure washing service. IGotThePowerWasher understands the significance of taking necessary precautions to minimize any potential impact, demonstrating their commitment to maintaining the integrity and aesthetics of your outdoor space.",
            },
            {
              question: "How frequently should I arrange for pressure washing services?",
              answer:
                "The optimal frequency for pressure washing services depends on various factors, including specific surfaces, prevailing weather conditions, and the level of dirt or stains. While a general recommendation is to schedule pressure washing annually to uphold the appearance and prevent long-term damage to your outdoor surfaces, it is essential to consider high-traffic areas or surfaces exposed to harsh elements, which may necessitate more frequent cleanings.",
            },
            {
              question: "Will pressure washing effectively eliminate oil stains from my driveway?",
              answer:
                "Absolutely! Pressure washing is a highly effective method for removing oil stains from driveways. However, it is essential to note that stain removal’s success depends on the stains’ severity. In some cases, additional treatments or specialized cleaning agents may be required to achieve the best results. To ensure the most appropriate approach for effective stain removal, it is recommended to consult with a professional pressure washing service. IGotThePowerWasher expertise will enable us to assess the specific stain and determine the most suitable action.",
            },
            {
              question: "Does pressure washing effectively eliminate mold and mildew from surfaces?",
              answer:
                "Undoubtedly! Pressure washing is a highly efficient method for eradicating mold and mildew from surfaces. When combined with appropriate cleaning agents, the powerful force of high-pressure water works effectively to eliminate mold and mildew and prevent their regrowth. When opting for pressure washing, hiring a professional service that has a deep understanding of the proper techniques and employs environmentally friendly cleaning agents to ensure optimal results is advisable. So, IGotThePowerWasher has got you covered for this.",
            },
            {
              question: "Should I hire a professional, or can I pressure wash my own house?",
              answer:
                "While it is possible to undertake pressure washing on your own, it is highly recommended to enlist the services of a professional. Professional pressure washing services bring valuable expertise, knowledge, and specialized equipment to the table, ensuring the safe and effective cleaning of your home’s exterior surfaces. Additionally, professionals can identify and address any underlying issues that may require attention, such as damaged or loose siding. By relying on IGotThePowerWasher professionals, you can have peace of mind knowing that your property will be treated with care, delivering superior results without risking any potential damage.",
            },
            {
              question: "How long does a typical pressure washing service take?",
              answer:
                "The duration of a pressure washing service depends on various factors, including the size of the area to be cleaned, the level of dirt or stains, and the accessibility of the surfaces. Generally, a pressure washing service can take anywhere from a few hours to a full day for residential projects. Larger-scale or commercial projects may require more time for completion. To get a precise estimate of the expected duration for your specific needs, it is advisable to consult with a pressure washing service like IGotThePowerWasher beforehand.",
            },
          ].map((i, R) => (
            <div className="group transition-all duration-300 ease-out" key={R}>
              <button
                className={"flex justify-between items-center w-full p-6 text-left rounded-xl shadow-sm transition-all duration-300 ".concat(
                  A === R ? "bg-white shadow-lg ring-2 ring-[#00C6F9]" : "bg-white hover:bg-gray-50 hover:shadow-md",
                )}
                onClick={() => I(A === R ? null : R)}
                aria-expanded={A === R}
                aria-controls={"faq-content-".concat(R)}
              >
                <span className={"text-lg md:text-xl font-semibold pr-4 ".concat(A === R ? "text-[#00c6f9]" : "text-gray-800")}>
                  {i.question}
                </span>
                <div
                  className={"flex-shrink-0 p-2 rounded-full transition-colors ".concat(
                    A === R ? "bg-[#00C6F9] text-white" : "bg-gray-100 text-gray-600 group-hover:bg-gray-200",
                  )}
                >
                  {A === R ? <FaMinus className="h-5 w-5" aria-hidden="true" /> : <FaPlus className="h-5 w-5" aria-hidden="true" />}
                </div>
              </button>
              <div
                id={"faq-content-".concat(R)}
                role="region"
                aria-hidden={A !== R}
                className={"overflow-hidden transition-all duration-500 ease-in-out ".concat(
                  A === R ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0",
                )}
              >
                <div className="p-6 bg-white/90 backdrop-blur-sm rounded-lg border-l-4 border-[#00C6F9] shadow-sm">
                  <p className="text-gray-600 leading-relaxed">{i.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            {"Still have questions?"}{" "}
            <a href="/contact-us" className="text-[#00C6F9] font-semibold hover:text-[#0066FF] transition-colors">
              {"Contact us directly"}
            </a>
          </p>
        </div>
      </div>
    </div>
  ) : null;
};
let CO_ = () => {
    let [A, I] = useState(!1),
      i = useAnimation(),
      Z = useAnimation();
    useEffect(() => {
      (I(!0), A && (i.start("visible"), Z.start("visible")));
    }, [i, Z, A]);
    let y = {
      hidden: {
        opacity: 0,
        x: -40,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
          delay: 0.2,
        },
      },
    };
    return A ? (
      <div className="bg-gradient-to-b from-white to-blue-50 min-h-[80vh] flex items-center justify-center py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] max-w-6xl w-full gap-8">
          <motion.div
            initial="hidden"
            animate={A ? "visible" : "hidden"}
            variants={{
              hidden: {
                opacity: 0,
                y: 40,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            className="flex items-center justify-center p-6"
          >
            <div className="relative group">
              <motion.img
                src="/images/WhatsApp-Image-2023-09-06-at-18.42.05.jpg"
                alt="Professional Pressure Washing"
                className="w-full h-[500px] object-cover rounded-xl shadow-2xl border-8 border-white transform transition-transform duration-500 group-hover:scale-105"
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.3,
                }}
              />
              <div className="absolute inset-0 border-2 border-blue-100/50 rounded-xl shadow-inner" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={A ? "visible" : "hidden"}
            variants={y}
            className="flex flex-col justify-center p-6 space-y-6"
          >
            <motion.h2 className="text-3xl font-bold tracking-tight text-gray-900" variants={y}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">{"Premium Pressure Washing"}</span>
              <br />
              <span className="mt-2 inline-block text-2xl text-gray-600">{"Serving Cincinnati & Surrounding Areas"}</span>
            </motion.h2>
            <div className="space-y-5">
              <motion.p className="text-lg text-gray-600 leading-relaxed" variants={y}>
                <strong className="font-semibold text-blue-600">{"IGotThePowerWasher"}</strong>{" "}
                {
                  "delivers professional exterior cleaning services for both residential and commercial properties. As a fully licensed and insured company, we guarantee top-quality results with every project."
                }
              </motion.p>
              <motion.p className="text-lg text-gray-600 leading-relaxed" variants={y}>
                {
                  "With thousands of successfully transformed properties, we're committed to making your space our next success story. Explore our verified customer reviews to see why Cincinnati trusts us for their pressure washing needs."
                }
              </motion.p>
            </div>
            <motion.div
              variants={y}
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <Link
                href="tel:+1513570-0355"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold uppercase tracking-wide transition-all hover:shadow-lg hover:shadow-blue-200"
              >
                <FaPhoneAlt className="text-xl" />
                <span>{"(513) 570-0355"}</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    ) : null;
  },
  K = {
    src: "/media/Building-Wash.png",
    height: 800,
    width: 1200,
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAS1BMVEU2NCxHR0N/k6R4qPKTufQUFROTkIWcwfeJfGooJySgtNOaveuEoLFsemx6cmZHQTZ7j61QS0BvYU+QgGp5Z1KIsfBpXk6Pm62sppzwl5e4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAXBCwKAEBBAwee7i1AU7n/SZnDOy+fFYu+ds5SLOfS0GCuvPsYALO2BlMIPIZkBcxlSbfAAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5,
  },
  C = {
    src: "/media/Untitled-3.jpg",
    height: 683,
    width: 1024,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAAAnhUH/8QAGxAAAQQDAAAAAAAAAAAAAAAABAECAyIAEUL/2gAIAQEAAT8AcdMUIQ2a6yp3ZK6z/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECMf/aAAgBAgEBPwCZT0//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8A1L//2Q==",
    blurWidth: 8,
    blurHeight: 5,
  },
  g = {
    src: "/media/Window-Gutter-Cleaning.png",
    height: 800,
    width: 1200,
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAQlBMVEVpX1m0q5xcc1G6y5iChmRMQzxwaWM1LCVdVVIsKSmjmZOGe3oYFhaShYO7tq0eFxGdtHCZnWlgh3MgSEg8kHeZqppFxJGuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nAXBBwKAIAwAsaOUDhfK+P9XTRD9tDzl4K2W3KdRR3YPgjXdPYEtSrta/BuzATiZgrqDAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 5,
  },
  a = {
    src: "/media/1-1.jpg",
    height: 800,
    width: 1200,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAAqgv/xAAbEAACAQUAAAAAAAAAAAAAAAABAgUAEhQiQv/aAAgBAQABPwBJGRTbLYgc2rX/xAAYEQACAwAAAAAAAAAAAAAAAAAAARFSkf/aAAgBAgEBPwCXZ6f/xAAXEQEAAwAAAAAAAAAAAAAAAAABABFR/9oACAEDAQE/AKMJ/9k=",
    blurWidth: 8,
    blurHeight: 5,
  },
  w = {
    src: "/media/e33ee3.png",
    height: 800,
    width: 1200,
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAQlBMVEWgdGO4tbAWKFPJsKayj4GrfGumcFaphXaia2C6mYyXWlKplZOAaF2GVUuUem1eTE2ko51JIiZHJiNMXHUhQHPQ0MLCZI84AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADFJREFUeJwFwYkBgCAMBMEFA5fgw6P23yozXLWWENARR0jkLz1nmJHf5O4Uxq+57uYbGCQBQLRkzxIAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5,
  },
  p = {
    src: "/media/Rust-Removal.png",
    height: 800,
    width: 1200,
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAMFBMVEWjfTy1s7Cxjla2mW+srKu5ubmpiFe9pYK9oHe1lGeWcTO0qJXCtaO+wMW1r6SIZy6ywWe6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAALklEQVR4nBXBiREAIAgDsJZHFFD339YzwU18iWoVERnY2yp0LhjpPUNhdB5d4wETxADkHPmFsgAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5,
  };
function B() {
  let A = _taggedTemplateLiteral([
    "\n  background: #fff;\n  padding: 4rem 2rem;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n",
  ]);
  return (
    (B = function () {
      return A;
    }),
    A
  );
}
function X() {
  let A = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  gap: 1px;\n  margin-bottom: 3rem;\n"]);
  return (
    (X = function () {
      return A;
    }),
    A
  );
}
function x() {
  let A = _taggedTemplateLiteral([
    "\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  gap: 2rem;\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  \n  @media (min-width: 768px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  @media (min-width: 1024px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n",
  ]);
  return (
    (x = function () {
      return A;
    }),
    A
  );
}
function L() {
  let A = _taggedTemplateLiteral([
    "\n  .card {\n    width: 320px;\n    height: 380px; /* Increased from 320px */\n    background: white;\n    border-radius: 32px;\n    padding: 3px;\n    position: relative;\n    box-shadow: rgba(96, 75, 74, 0.188) 0px 70px 30px -50px;\n    transition: all 0.5s ease-in-out;\n    margin: 0 auto;\n\n    @media (max-width: 768px) {\n      width: 280px;\n      height: 340px; /* Increased from 280px */\n    }\n  }\n\n  .profile-pic {\n    position: absolute;\n    width: calc(100% - 6px);\n    height: 65%; /* Increased from full height */\n    top: 3px;\n    left: 3px;\n    border-radius: 29px;\n    z-index: 1;\n    border: 0px solid #00C6F9;\n    overflow: hidden;\n    transition: all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s;\n    background: #ffffff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .lottie-animation {\n    width: 100%;\n    height: 100%;\n    transform: scale(1); /* Reduced from 1.2 */\n  }\n\n  .lottie-loading {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #00C6F9;\n    font-size: 0.8rem;\n  }\n\n  .bottom {\n    position: absolute;\n    bottom: 3px;\n    left: 3px;\n    right: 3px;\n    background: #00C6F9;\n    top: 80%;\n    border-radius: 29px;\n    z-index: 2;\n    box-shadow: rgba(96, 75, 74, 0.188) 0px 5px 5px 0px inset;\n    overflow: hidden;\n    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  }\n\n  /* Keep all hover effects and other styles the same below */\n  .content {\n    position: absolute;\n    bottom: 0;\n    left: 1.5rem;\n    right: 1.5rem;\n    height: 160px;\n  }\n\n  .name {\n    display: block;\n    font-size: 1.4rem;\n    color: white;\n    font-weight: bold;\n  }\n\n  .about-me {\n    display: block;\n    font-size: 1rem;\n    color: white;\n    margin-top: 8px;\n  }\n\n  .bottom-bottom {\n    position: absolute;\n    bottom: 1rem;\n    left: 1.5rem;\n    right: 1.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .service-name-container {\n    background: white;\n    padding: 8px 15px;\n    border-radius: 20px;\n    flex-grow: 1;\n    margin-right: 1rem;\n  }\n\n  .service-name {\n    color: #00C6F9;\n    font-weight: bold;\n    font-size: 0.9rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .button {\n    background: white;\n    color: #00C6F9;\n    border: none;\n    border-radius: 20px;\n    font-size: 0.8rem;\n    padding: 0.5rem 1rem;\n    box-shadow: rgba(96, 75, 74, 0.133) 0px 5px 5px 0px;\n    transition: all 0.3s ease;\n    cursor: pointer;\n    white-space: nowrap;\n    text-decoration: none;\n    display: inline-block;\n\n    &:hover {\n      background: #00A3CC;\n      color: white;\n    }\n  }\n\n  .card:hover {\n    border-top-left-radius: 55px;\n  }\n\n  .card:hover .bottom {\n    top: 25%;\n    border-radius: 80px 29px 29px 29px;\n    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;\n  }\n\n  .card:hover .profile-pic {\n    width: 120px;\n    height: 120px;\n    aspect-ratio: 1;\n    top: 15px;\n    left: 15px;\n    border-radius: 50%;\n    z-index: 3;\n    border: 7px solid #00C6F9;\n    box-shadow: rgba(96, 75, 74, 0.188) 0px 5px 5px 0px;\n    transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;\n  }\n\n  .card:hover .profile-pic:hover {\n    transform: scale(1.3);\n    border-radius: 0px;\n  }\n\n  .card:hover .lottie-animation {\n    transform: scale(1.5);\n    transition: all 0.5s ease-in-out 0.5s;\n  }\n.bottom-bottom {\n  position: absolute;\n  bottom: 1rem;\n  left: 1.5rem;\n  right: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  \n  /* Add mobile-specific fixes */\n  @media (max-width: 768px) {\n    flex-wrap: nowrap;\n    gap: 8px;\n    bottom: 0.5rem;\n  }\n}\n\n.service-name-container {\n  background: white;\n  padding: 8px 15px;\n  border-radius: 20px;\n  flex-grow: 1;\n  margin-right: 1rem;\n  \n  /* Add text overflow handling */\n  @media (max-width: 768px) {\n    min-width: 60%;\n    white-space: normal; /* Allow text wrapping */\n    overflow: visible;\n    margin-right: 0;\n  }\n}\n\n.button {\n  background: white;\n  color: #00C6F9;\n  border: none;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  padding: 0.5rem 1rem;\n  box-shadow: rgba(96, 75, 74, 0.133) 0px 5px 5px 0px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  white-space: nowrap;\n  text-decoration: none;\n  display: inline-block;\n  \n  /* Mobile-specific button fixes */\n  @media (max-width: 768px) {\n    flex-shrink: 0;\n    padding: 8px 12px;\n    font-size: 0.9rem;\n    min-width: 100px;\n  }\n\n  &:hover {\n    background: #00A3CC;\n    color: white;\n  }\n}\n\n/* Add this new media query at bottom */\n@media (max-width: 480px) {\n  .service-name {\n    font-size: 0.8rem;\n  }\n  \n  .button {\n    font-size: 0.8rem;\n    padding: 6px 10px;\n  }\n}\n  \n\n\n  .card:hover .profile-pic {\n    width: 120px;\n    height: 120px;\n    aspect-ratio: 1;\n    top: 15px;\n    left: 15px;\n    border-radius: 50%;\n    z-index: 3;\n    border: 7px solid #00C6F9;\n    box-shadow: rgba(96, 75, 74, 0.188) 0px 5px 5px 0px;\n    transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;\n  }\n\n  .card:hover .profile-pic:hover {\n    transform: scale(1.3);\n    border-radius: 0px;\n  }\n\n  .card:hover .profile-image {\n    transform: scale(1.5);\n    transition: all 0.5s ease-in-out 0.5s;\n  }\n",
  ]);
  return (
    (L = function () {
      return A;
    }),
    A
  );
}
dynamic(() => import("lottie-react"), {
  loadableGenerated: {
    webpack: () => [3770],
  },
  ssr: !1,
  loading: () => <div className="lottie-loading">{"Loading..."}</div>,
});
let F = (A) => {
    let { imageUrl: I, name: i, about: Z, link: y } = A,
      [q, M] = useState(!1);
    return (useEffect(() => {
      M(!0);
    }, []),
    q) ? (
      <CJ_>
        <div className="card">
          <div className="profile-pic">
            <img src={I.src} alt={i} className="profile-image" loading="lazy" />
          </div>
          <div className="bottom">
            <div className="content">
              <span className="name">{i}</span>
              <span className="about-me">{Z}</span>
            </div>
            <div className="bottom-bottom">
              <div className="service-name-container">
                <span className="service-name">{i}</span>
              </div>
              <Link href={y || "#"} className="button">
                {"Learn More"}
              </Link>
            </div>
          </div>
        </div>
      </CJ_>
    ) : null;
  },
  CR_ = styled.section(B()),
  Y = styled.div(X()),
  N = styled.div(x()),
  CJ_ = styled.div(L()),
  W = () => {
    let [A, I] = useState(!1);
    return (useEffect(() => {
      I(!0);
    }, []),
    A) ? (
      <CR_>
        <Y>
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00C6F9] to-blue-800 tracking-tight mb-6 pb-4 relative group">
            {"Our Commercial Services"}
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-500 group-hover:w-full" />
          </h2>
        </Y>
        <N>
          {[
            {
              id: 1,
              name: "Building Wash",
              about: "Revive Your Property – Expert Building Wash Services!",
              link: "/building-wash",
              imageUrl: K,
            },
            {
              id: 2,
              name: "Window Cleaning",
              about: "Professional Window Cleaning Perfection!",
              imageUrl: C,
              link: "/window-cleaning",
            },
            {
              id: 3,
              name: "Gutter Cleaning",
              about: "Prevent Clogs & Damage – Professional Gutter Cleaning ",
              link: "/gutter-cleaning",
              imageUrl: g,
            },
            {
              id: 4,
              name: "Parking Maintenance",
              about: "Enhance Durability & Cleanliness ",
              link: "/parking-lot-maintenance",
              imageUrl: a,
            },
            {
              id: 5,
              name: "Seal Solutions",
              about: "Deck cleaning and sealing services",
              link: "/seal-solutions",
              imageUrl: w,
            },
            {
              id: 6,
              name: "Stain Removal",
              about: "Advanced Stain Removal Experts!",
              link: "/stain-removal",
              imageUrl: p,
            },
          ].map((A) => (
            <F name={A.name} about={A.about} imageUrl={A.imageUrl} link={A.link} key={A.id} />
          ))}
        </N>
      </CR_>
    ) : null;
  };
let C$_ = (A) => {
    let { src: I, alt: i = "Description", priority: Z = !1, className: y = "" } = A,
      [q, k] = useState(!1);
    return (
      <div className={"relative w-full ".concat(y)}>
        {!q && <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-lg" />}
        <Image
          src={I}
          alt={i}
          fill={!0}
          priority={Z}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          className={"object-contain rounded-lg transition-opacity duration-300 ".concat(q ? "opacity-100" : "opacity-0")}
          onLoadingComplete={() => k(!0)}
          style={{
            objectPosition: "center center",
          }}
        />
      </div>
    );
  };
function AE() {
  return (
    <div className="relative">
      <SplashLoader />
      <div>
        <C$_
          src="/images/Web-1-1536x1152 (1).webp"
          alt="Professional pressure washing services in Cincinnati"
          className="aspect-[4/3] w-full home-hero"
          priority={!0}
        />
        <H />
        <W />
        <CD_ />
        <M7743_A />
        <CO_ />
        <M6725_A />
        <CU_ />
      </div>
    </div>
  );
}

export default AE;
