// @ts-nocheck
/* eslint-disable */
"use client";
// Unbundled from igtpw.com chunk app__gutter-cleaning__page-b3c8b827031243df.js, webpack module 6851 (variant 6851_v3).
import { useState, useRef, useEffect } from "react";

let CN_ = (e) => {
  let { beforeImage: t, afterImage: r } = e,
    [n, l] = useState(50),
    [i, o] = useState(400),
    c = useRef(null),
    u = useRef(null),
    d = useRef(null),
    f = useRef(null),
    g = () => {
      var e;
      let t = c.current,
        r = (null === (e = u.current) || void 0 === e ? void 0 : e.complete) ? u.current : d.current;
      if (t && (null == r ? void 0 : r.naturalWidth) > 0) {
        let e = r.naturalWidth / r.naturalHeight,
          a = t.offsetWidth / e;
        Math.abs(i - a) > 1 && o(a);
      }
    };
  useEffect(
    () => (
      g(),
      (f.current = new ResizeObserver(() => {
        g();
      })),
      c.current && f.current.observe(c.current),
      () => {
        f.current && f.current.disconnect();
      }
    ),
    [],
  );
  let m = () => {
    g();
  };
  return (
    <div
      ref={c}
      className="relative w-full rounded-lg shadow-lg bg-gray-100 transition-all duration-300"
      style={{
        height: "".concat(i, "px"),
      }}
    >
      <img
        ref={u}
        src={r}
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
          width: "".concat(n, "%"),
        }}
      >
        <img
          ref={d}
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
        <input aria-label="Drag to compare before and after" type="range"
          min="0"
          max="100"
          value={n}
          onChange={(e) => l(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize touch-pan-y"
        />
        <div
          className="absolute top-0 left-0 w-1 bg-white h-full pointer-events-none"
          style={{
            left: "".concat(n, "%"),
            transform: "translateX(-50%)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        />
        <div
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white w-8 h-8 rounded-full shadow-lg flex items-center justify-center pointer-events-none"
          style={{
            left: "".concat(n, "%"),
          }}
        >
          <span className="text-gray-700 text-lg select-none">{"↔"}</span>
        </div>
      </div>
    </div>
  );
};
let l = (e) => {
  let { images: t } = e;
  return (
    <section className="p-8 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {t.map((e, t) => (
          <CN_ beforeImage={e.before} afterImage={e.after} key={t} />
        ))}
      </div>
    </section>
  );
};

export { l as A };
