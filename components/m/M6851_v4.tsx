// @ts-nocheck
/* eslint-disable */
"use client";
// Unbundled from igtpw.com chunk app__house-washing__page-6b7bbfb127b3f5d4.js, webpack module 6851 (variant 6851_v4).
import { useState, useRef, useEffect } from "react";

let CD_ = (A) => {
  let { beforeImage: e, afterImage: a } = A,
    [d, Q] = useState(50),
    [t, l] = useState(400),
    r = useRef(null),
    s = useRef(null),
    x = useRef(null),
    C = useRef(null),
    p = () => {
      var A;
      let e = r.current,
        a = (null === (A = s.current) || void 0 === A ? void 0 : A.complete) ? s.current : x.current;
      if (e && (null == a ? void 0 : a.naturalWidth) > 0) {
        let A = a.naturalWidth / a.naturalHeight,
          o = e.offsetWidth / A;
        Math.abs(t - o) > 1 && l(o);
      }
    };
  useEffect(
    () => (
      p(),
      (C.current = new ResizeObserver(() => {
        p();
      })),
      r.current && C.current.observe(r.current),
      () => {
        C.current && C.current.disconnect();
      }
    ),
    [],
  );
  let f = () => {
    p();
  };
  return (
    <div
      ref={r}
      className="relative w-full rounded-lg shadow-lg bg-gray-100 transition-all duration-300"
      style={{
        height: "".concat(t, "px"),
      }}
    >
      <img
        ref={s}
        src={a}
        alt="After transformation"
        className="absolute inset-0 w-full h-full object-cover"
        onLoad={f}
        onError={(A) => {
          (console.error("After image failed to load"), (A.target.style.display = "none"));
        }}
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          width: "".concat(d, "%"),
        }}
      >
        <img
          ref={x}
          src={e}
          alt="Before transformation"
          className="absolute inset-0 w-full h-full object-cover"
          onLoad={f}
          onError={(A) => {
            (console.error("Before image failed to load"), (A.target.style.display = "none"));
          }}
        />
      </div>
      <div className="absolute top-2 left-2 bg-[#00C6F9] text-white text-xs px-2 py-1 rounded z-10">{"Before"}</div>
      <div className="absolute top-2 right-2 bg-[#00C6F9] text-white text-xs px-2 py-1 rounded z-10">{"After"}</div>
      <div className="absolute inset-0 z-20">
        <input aria-label="Drag to compare before and after" type="range"
          min="0"
          max="100"
          value={d}
          onChange={(A) => Q(Number(A.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize touch-pan-y"
        />
        <div
          className="absolute top-0 left-0 w-1 bg-white h-full pointer-events-none"
          style={{
            left: "".concat(d, "%"),
            transform: "translateX(-50%)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        />
        <div
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white w-8 h-8 rounded-full shadow-lg flex items-center justify-center pointer-events-none"
          style={{
            left: "".concat(d, "%"),
          }}
        >
          <span className="text-gray-700 text-lg select-none">{"↔"}</span>
        </div>
      </div>
    </div>
  );
};
let Q = (A) => {
  let { images: e } = A;
  return (
    <section className="p-8 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {e.map((A, e) => (
          <CD_ beforeImage={A.before} afterImage={A.after} key={e} />
        ))}
      </div>
    </section>
  );
};

export { Q as A };
