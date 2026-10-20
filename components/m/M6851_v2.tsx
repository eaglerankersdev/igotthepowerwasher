// @ts-nocheck
/* eslint-disable */
"use client";
// Unbundled from igtpw.com chunk app__gallery__page-2bbb9c325becdad6.js, webpack module 6851 (variant 6851_v2).
import { useState, useRef, useEffect } from "react";

let CL_ = (e) => {
  let { beforeImage: s, afterImage: a } = e,
    [l, i] = useState(50),
    [o, n] = useState(400),
    d = useRef(null),
    c = useRef(null),
    g = useRef(null),
    m = useRef(null),
    x = () => {
      var e;
      let s = d.current,
        a = (null === (e = c.current) || void 0 === e ? void 0 : e.complete) ? c.current : g.current;
      if (s && (null == a ? void 0 : a.naturalWidth) > 0) {
        let e = a.naturalWidth / a.naturalHeight,
          t = s.offsetWidth / e;
        Math.abs(o - t) > 1 && n(t);
      }
    };
  useEffect(
    () => (
      x(),
      (m.current = new ResizeObserver(() => {
        x();
      })),
      d.current && m.current.observe(d.current),
      () => {
        m.current && m.current.disconnect();
      }
    ),
    [],
  );
  let u = () => {
    x();
  };
  return (
    <div
      ref={d}
      className="relative w-full rounded-lg shadow-lg bg-gray-100 transition-all duration-300"
      style={{
        height: "".concat(o, "px"),
      }}
    >
      <img
        ref={c}
        src={a}
        alt="After transformation"
        className="absolute inset-0 w-full h-full object-cover"
        onLoad={u}
        onError={(e) => {
          (console.error("After image failed to load"), (e.target.style.display = "none"));
        }}
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          width: "".concat(l, "%"),
        }}
      >
        <img
          ref={g}
          src={s}
          alt="Before transformation"
          className="absolute inset-0 w-full h-full object-cover"
          onLoad={u}
          onError={(e) => {
            (console.error("Before image failed to load"), (e.target.style.display = "none"));
          }}
        />
      </div>
      <div className="absolute top-2 left-2 bg-[#00C6F9] text-white text-xs px-2 py-1 rounded z-10">{"Before"}</div>
      <div className="absolute top-2 right-2 bg-[#00C6F9] text-white text-xs px-2 py-1 rounded z-10">{"After"}</div>
      <div className="absolute inset-0 z-20">
        <input aria-label="Drag to compare before and after" type="range"
          min="0"
          max="100"
          value={l}
          onChange={(e) => i(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize touch-pan-y"
        />
        <div
          className="absolute top-0 left-0 w-1 bg-white h-full pointer-events-none"
          style={{
            left: "".concat(l, "%"),
            transform: "translateX(-50%)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        />
        <div
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white w-8 h-8 rounded-full shadow-lg flex items-center justify-center pointer-events-none"
          style={{
            left: "".concat(l, "%"),
          }}
        >
          <span className="text-gray-700 text-lg select-none">{"↔"}</span>
        </div>
      </div>
    </div>
  );
};
let i = (e) => {
  let { images: s } = e;
  return (
    <section className="p-8 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {s.map((e, s) => (
          <CL_ beforeImage={e.before} afterImage={e.after} key={s} />
        ))}
      </div>
    </section>
  );
};

export { i as A };
