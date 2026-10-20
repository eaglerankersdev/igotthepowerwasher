// @ts-nocheck
/* eslint-disable */
"use client";
// Unbundled from igtpw.com chunk app__pressure-washing__page-f9e1ce1f75d6445b.js, webpack module 6851 (variant 6851_v5).
import { useState, useRef, useEffect } from "react";

let CR_ = (i) => {
  let { beforeImage: a, afterImage: e } = i,
    [r, o] = useState(50),
    [s, l] = useState(400),
    m = useRef(null),
    x = useRef(null),
    u = useRef(null),
    h = useRef(null),
    p = () => {
      var i;
      let a = m.current,
        e = (null === (i = x.current) || void 0 === i ? void 0 : i.complete) ? x.current : u.current;
      if (a && (null == e ? void 0 : e.naturalWidth) > 0) {
        let i = e.naturalWidth / e.naturalHeight,
          n = a.offsetWidth / i;
        Math.abs(s - n) > 1 && l(n);
      }
    };
  useEffect(
    () => (
      p(),
      (h.current = new ResizeObserver(() => {
        p();
      })),
      m.current && h.current.observe(m.current),
      () => {
        h.current && h.current.disconnect();
      }
    ),
    [],
  );
  let k = () => {
    p();
  };
  return (
    <div
      ref={m}
      className="relative w-full rounded-lg shadow-lg bg-gray-100 transition-all duration-300"
      style={{
        height: "".concat(s, "px"),
      }}
    >
      <img
        ref={x}
        src={e}
        alt="After transformation"
        className="absolute inset-0 w-full h-full object-cover"
        onLoad={k}
        onError={(i) => {
          (console.error("After image failed to load"), (i.target.style.display = "none"));
        }}
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          width: "".concat(r, "%"),
        }}
      >
        <img
          ref={u}
          src={a}
          alt="Before transformation"
          className="absolute inset-0 w-full h-full object-cover"
          onLoad={k}
          onError={(i) => {
            (console.error("Before image failed to load"), (i.target.style.display = "none"));
          }}
        />
      </div>
      <div className="absolute top-2 left-2 bg-[#00C6F9] text-white text-xs px-2 py-1 rounded z-10">{"Before"}</div>
      <div className="absolute top-2 right-2 bg-[#00C6F9] text-white text-xs px-2 py-1 rounded z-10">{"After"}</div>
      <div className="absolute inset-0 z-20">
        <input aria-label="Drag to compare before and after" type="range"
          min="0"
          max="100"
          value={r}
          onChange={(i) => o(Number(i.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize touch-pan-y"
        />
        <div
          className="absolute top-0 left-0 w-1 bg-white h-full pointer-events-none"
          style={{
            left: "".concat(r, "%"),
            transform: "translateX(-50%)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        />
        <div
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white w-8 h-8 rounded-full shadow-lg flex items-center justify-center pointer-events-none"
          style={{
            left: "".concat(r, "%"),
          }}
        >
          <span className="text-gray-700 text-lg select-none">{"↔"}</span>
        </div>
      </div>
    </div>
  );
};
let o = (i) => {
  let { images: a } = i;
  return (
    <section className="p-8 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {a.map((i, a) => (
          <CR_ beforeImage={i.before} afterImage={i.after} key={a} />
        ))}
      </div>
    </section>
  );
};

export { o as A };
