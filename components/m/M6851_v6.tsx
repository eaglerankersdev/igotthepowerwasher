// @ts-nocheck
/* eslint-disable */
"use client";
// Unbundled from igtpw.com chunk app__residential-gallery__page-2c6e6f93fb8c1ac9.js, webpack module 6851 (variant 6851_v6).
import { useState, useRef, useEffect } from "react";

let CL_ = (e) => {
  let { beforeImage: t, afterImage: s } = e,
    [l, i] = useState(50),
    [o, n] = useState(400),
    c = useRef(null),
    d = useRef(null),
    u = useRef(null),
    g = useRef(null),
    f = () => {
      var e;
      let t = c.current,
        s = (null === (e = d.current) || void 0 === e ? void 0 : e.complete) ? d.current : u.current;
      if (t && (null == s ? void 0 : s.naturalWidth) > 0) {
        let e = s.naturalWidth / s.naturalHeight,
          a = t.offsetWidth / e;
        Math.abs(o - a) > 1 && n(a);
      }
    };
  useEffect(
    () => (
      f(),
      (g.current = new ResizeObserver(() => {
        f();
      })),
      c.current && g.current.observe(c.current),
      () => {
        g.current && g.current.disconnect();
      }
    ),
    [],
  );
  let m = () => {
    f();
  };
  return (
    <div
      ref={c}
      className="relative w-full rounded-lg shadow-lg bg-gray-100 transition-all duration-300"
      style={{
        height: "".concat(o, "px"),
      }}
    >
      <img
        ref={d}
        src={s}
        alt="After transformation"
        className="absolute inset-0 w-full h-full object-cover"
        onLoad={m}
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
          ref={u}
          src={t}
          alt="Before transformation"
          className="absolute inset-0 w-full h-full object-cover"
          onLoad={m}
          onError={(e) => {
            (console.error("Before image failed to load"), (e.target.style.display = "none"));
          }}
        />
      </div>
      <div className="absolute top-2 left-2 bg-[#00C6F9] text-white text-xs px-2 py-1 rounded z-10">{"Before"}</div>
      <div className="absolute top-2 right-2 bg-[#00C6F9] text-white text-xs px-2 py-1 rounded z-10">{"After"}</div>
      <div className="absolute inset-0 z-20">
        <input
          type="range"
          min="0"
          max="100"
          value={l}
          onChange={(e) => i(Number(e.target.value))}
          className="absolute top-1/2 left-0 w-full h-full opacity-0 cursor-ew-resize"
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
  let { images: t } = e;
  return (
    <section className="p-8 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {t.map((e, t) => (
          <CL_ beforeImage={e.before} afterImage={e.after} key={t} />
        ))}
      </div>
    </section>
  );
};

export { i as A };
