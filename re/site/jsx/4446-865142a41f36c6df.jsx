"use strict";

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4446],
  {
    3267: (e, t, a) => {
      a.d(t, {
        A: () => l,
      });
      var r = a(5155);
      a(3745);
      var i = a(6766),
        s = a(351);
      a(2115);
      let n = () => (
          <section className="bg-white py-16 px-4 sm:px-6 lg:py-24">
            <div className="max-w-7xl mx-auto text-center mb-16" />
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6">
              {[
                {
                  id: 1,
                  name: "Parking Lot Washing",
                  about:
                    "Our parking lot washing service eliminates stains, grime, and debris, giving your lot a fresh, clean appearance. We ensure your property is very welcoming.",
                  imageSrc: "/images/Parking-Lot-Washing.png",
                  link: "/parking-lot-washing",
                },
                {
                  id: 2,
                  name: "Sweeping & Cleaning",
                  about:
                    "We provide sweeping and cleaning for parking lots, removing dirt, leaves, and trash. Keep your lot neat and safe, enhancing both curb appeal and functionality. ",
                  imageSrc: "/images/Sweeping-Cleaning.png",
                  link: "/sweeping-cleaning",
                },
              ].map((e) => (
                <div
                  className="relative group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  key={e.id}
                >
                  <div className="relative h-64 w-full transition-transform duration-300 group-hover:scale-105">
                    <C_i.default src={e.imageSrc} alt={e.name} layout="fill" objectFit="cover" className="rounded-t-3xl" />
                  </div>
                  <div className="p-6 bg-[#00C6F9] text-white transition-all duration-300 group-hover:bg-[#0099cc]">
                    <h3 className="text-2xl font-bold mb-2">{e.name}</h3>
                    <p className="text-lg mb-4">{e.about}</p>
                    <button className="bg-white text-[#00C6F9] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                      <a href={e.link}>Learn More</a>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ),
        l = () => (
          <section className="py-16 px-4 sm:px-6 lg:py-24 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 xl:gap-12 items-center">
              <div className="w-full lg:w-1/2 relative group order-1 lg:order-none">
                <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl transition-shadow duration-300">
                  <C_i.default
                    src="/images/Parking-Lot-Maintenance.png"
                    alt="Grease-Removal-pressure-washer"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="bg-blue-600 text-sm font-semibold px-3 py-1.5 rounded-full">Certified Professionals</span>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Parking Lot Maintenance</h2>
                <p className="text-xl text-[#00c6f9] font-semibold">Get Reliable Maintenance For A Pristine Parking Lot</p>
                <div className="space-y-6">
                  <div className="space-y-4">
                    {[
                      "A properly looked-after parking area boosts visual appeal, guarantees safety, and creates a memorable impact on guests. Our expert parking lot maintenance service in Cincinnati features thorough cleaning, stain extraction, debris removal, and surface safeguarding to maintain your lot in excellent shape. By utilizing innovative pressure washing techniques and environmentally safe products, we remove oil stains, grime accumulation, and unattractive blemishes that can cause your property to appear untidy.",
                      "Abandoned parking lots can create safety risks like slippery areas, fractures, and obstructed drainage. Routine upkeep avoids enduring harm, prolonging the durability of asphalt and concrete surfaces. Regardless of whether it’s for commercial properties, retail areas, or residential buildings, our skilled team provides comprehensive and efficient cleaning to ensure a clean and professional atmosphere.",
                      "Maintain your parking area to be tidy, secure, and welcoming through professional upkeep services.",
                    ].map((e, t) => (
                      <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" key={t}>
                        <C_s.A3x className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
                        <p className="text-gray-600 text-base lg:text-lg">{e}</p>
                      </div>
                    ))}
                  </div>
                  <a
                    href="tel:513-570-0355"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00c6f9] to-cyan-600 text-white px-6 py-4 lg:px-8 lg:py-5 rounded-xl text-base lg:text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <C_s.wnV className="w-5 h-5 lg:w-6 lg:h-6" />
                    513-570-0355
                  </a>
                </div>
              </div>
            </div>
            <C_n />
          </section>
        );
    },
    3745: (e, t, a) => {
      (a.r(t),
        a.d(t, {
          default: () => n,
        }));
      var r = a(5155),
        i = a(1741);
      a(7989);
      var s = a(3267);
      let n = () => (
        <div>
          <div className="relative flex items-center justify-center min-h-[60vh] bg-[#00C6F9] to-white bg-center bg-no-repeat bg-cover z-0">
            <div className="absolute inset-0 bg-[url('/images/pages-bg.jpg')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300" />
            <div className="relative z-10 text-center">
              <C_i.P.h1
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
                  once: true,
                }}
              >
                Parking Lot Washing Services in Cincinnati, Ohio
              </C_i.P.h1>
              <C_i.P.div
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
                  once: true,
                }}
              >
                <div className="flex gap-2 items-center">
                  <C_i.P.span
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
                      once: true,
                    }}
                  />
                </div>
              </C_i.P.div>
            </div>
          </div>
          <C_s.A />
        </div>
      );
    },
    4436: (e, t, a) => {
      a.d(t, {
        k5: () => d,
      });
      var r = a(2115),
        i = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        s = r.createContext && r.createContext(i),
        n = ["attr", "size", "title"];
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function o(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          (t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, r));
        }
        return a;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(a), true).forEach(function (t) {
                var r, i, s;
                ((r = e),
                  (i = t),
                  (s = a[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var a = e[Symbol.toPrimitive];
                      if (void 0 !== a) {
                        var r = a.call(e, t || "default");
                        if ("object" != typeof r) return r;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in r
                    ? Object.defineProperty(r, i, {
                        value: s,
                        enumerable: true,
                        configurable: true,
                        writable: true,
                      })
                    : (r[i] = s));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : o(Object(a)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                });
        }
        return e;
      }
      function d(e) {
        return (t) =>
          r.createElement(
            p,
            l(
              {
                attr: c({}, e.attr),
              },
              t,
            ),
            (function e(t) {
              return (
                t &&
                t.map((t, a) =>
                  r.createElement(
                    t.tag,
                    c(
                      {
                        key: a,
                      },
                      t.attr,
                    ),
                    e(t.child),
                  ),
                )
              );
            })(e.child),
          );
      }
      function p(e) {
        var t = (t) => {
          var a,
            { attr: i, size: s, title: o } = e,
            d = (function (e, t) {
              if (null == e) return {};
              var a,
                r,
                i = (function (e, t) {
                  if (null == e) return {};
                  var a = {};
                  for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                      if (t.indexOf(r) >= 0) continue;
                      a[r] = e[r];
                    }
                  return a;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++)
                  ((a = s[r]), !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a]));
              }
              return i;
            })(e, n),
            p = s || t.size || "1em";
          return (
            t.className && (a = t.className),
            e.className && (a = (a ? a + " " : "") + e.className),
            r.createElement(
              "svg",
              l(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                i,
                d,
                {
                  className: a,
                  style: c(
                    c(
                      {
                        color: e.color || t.color,
                      },
                      t.style,
                    ),
                    e.style,
                  ),
                  height: p,
                  width: p,
                  xmlns: "http://www.w3.org/2000/svg",
                },
              ),
              o && r.createElement("title", null, o),
              e.children,
            )
          );
        };
        return void 0 !== s ? r.createElement(s.Consumer, null, (e) => t(e)) : t(i);
      }
    },
    7989: (e, t, a) => {
      a.d(t, {
        A: () => n,
      });
      var r = a(5155),
        i = a(6766),
        s = a(351);
      let n = () => (
        <section className="py-16 px-4 sm:px-6 lg:py-24 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 xl:gap-12 items-center">
            <div className="w-full lg:w-1/2 relative group order-1 lg:order-none">
              <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl transition-shadow duration-300">
                <C_i.default
                  src="/images/resturant.jpg"
                  alt="Commercial window cleaning"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                  priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-blue-600 text-sm font-semibold px-3 py-1.5 rounded-full">Certified Professionals</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Oil Removal</h2>
              <p className="text-xl text-[#00c6f9] font-semibold">Eliminating Oil Buildup, Enhancing Safety and Hygiene</p>
              <div className="space-y-6">
                <div className="space-y-4">
                  {[
                    "Oil spills and buildup can cause serious safety hazards, environmental damage, and operational issues. Whether it’s in industrial sites, commercial kitchens, or driveways, do not worry. In Cincinnati, our oil removal service is designed to tackle even the toughest oil stains and residues. Using specialized cleaning agents and high-powered equipment, we remove oil efficiently, restoring surfaces to their original state.",
                    "We handle oil spill cleanups, machinery degreasing, and pavement oil stain removal. Ensuring complete compliance with safety and environmental regulations. Our eco-friendly approach eliminates harmful residues without damaging surfaces. From parking lots to factory floors, we work quickly and effectively to prevent slips, fire risks, and contamination. Regular oil removal improves workplace safety, enhances appearance, and extends the life of your property. Don’t let oil stains ruin your space—trust our expert team for a thorough, professional cleanup.",
                  ].map((e, t) => (
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" key={t}>
                      <C_s.A3x className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-600 text-base lg:text-lg">{e}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="tel:513-570-0355"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00c6f9] to-cyan-600 text-white px-6 py-4 lg:px-8 lg:py-5 rounded-xl text-base lg:text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <C_s.wnV className="w-5 h-5 lg:w-6 lg:h-6" />
                  513-570-0355
                </a>
              </div>
            </div>
          </div>
        </section>
      );
    },
  },
]);
