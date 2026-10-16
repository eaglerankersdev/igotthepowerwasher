(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7520],
  {
    1505: (e) => {
      e.exports = {
        section: "roofwashing_section__g3_31",
        imageGrid: "roofwashing_imageGrid__q3bxs",
        mainImage: "roofwashing_mainImage__wUx67",
        sideImages: "roofwashing_sideImages__tkJKj",
        sideImage: "roofwashing_sideImage__rhe0X",
        image: "roofwashing_image__5Ihun",
        content: "roofwashing_content__EhSot",
        heading: "roofwashing_heading__hI9ZJ",
        textContent: "roofwashing_textContent__AEzzt",
        paragraph: "roofwashing_paragraph__yb15w",
        callout: "roofwashing_callout__VWFdS",
        strongLine: "roofwashing_strongLine__BADgs",
        ctaButton: "roofwashing_ctaButton__khlYA",
        phoneIcon: "roofwashing_phoneIcon__G88Wn",
        phoneNumber: "roofwashing_phoneNumber__xA4WJ",
      };
    },
    2831: (e, a, t) => {
      "use strict";

      t.d(a, {
        A: () => n,
      });
      var s = t(5155),
        r = t(6766),
        i = t(351);
      let n = () => (
        <section className="py-16 px-4 sm:px-6 lg:py-24 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 xl:gap-12 items-center">
            <div className="w-full lg:w-1/2 relative group order-1 lg:order-none">
              <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl transition-shadow duration-300">
                <C_r.default
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Restaurant</h2>
              <p className="text-xl text-[#00c6f9] font-semibold">Restaurant Cleaning That Keeps Your Space Sparkling</p>
              <div className="space-y-6">
                <div className="space-y-4">
                  {[
                    "Maintaining a restaurant entails more than just cleaning tables and sweeping floors. A sanitized, clean setting provides a more secure space for visitors and employees. Our restaurant cleaning removes grease, dirt, and bacteria, ensuring a spotless kitchen and dining area. Our team deep-cleans floors, utensils, and surfaces for a fresh, welcoming space. We emphasize cleanliness, remove odors, maintain hygiene, and ensure your restaurant complies with health regulations and delights patrons. Every cleaning session tackles high-traffic areas, kitchen grease, and hard-to-reach spots",
                    "You will enjoy a fresher atmosphere, improved food safety, and a five-star shine that guests notice. A well-maintained restaurant enhances customer confidence and keeps them coming back. We work efficiently with minimal disruption so your business runs smoothly. With routine cleaning, you prevent buildup, reduce health risks, and create a welcoming space for everyone",
                  ].map((e, a) => (
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" key={a}>
                      <C_i.A3x className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-600 text-base lg:text-lg">{e}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="tel:513-570-0355"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00c6f9] to-cyan-600 text-white px-6 py-4 lg:px-8 lg:py-5 rounded-xl text-base lg:text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <C_i.wnV className="w-5 h-5 lg:w-6 lg:h-6" />
                  513-570-0355
                </a>
              </div>
            </div>
          </div>
        </section>
      );
    },
    4436: (e, a, t) => {
      "use strict";

      t.d(a, {
        k5: () => d,
      });
      var s = t(2115),
        r = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        i = s.createContext && s.createContext(r),
        n = ["attr", "size", "title"];
      function o() {
        return (o = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var a = 1; a < arguments.length; a++) {
                var t = arguments[a];
                for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
              }
              return e;
            }).apply(this, arguments);
      }
      function l(e, a) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          (a &&
            (s = s.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable;
            })),
            t.push.apply(t, s));
        }
        return t;
      }
      function c(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? l(Object(t), true).forEach(function (a) {
                var s, r, i;
                ((s = e),
                  (r = a),
                  (i = t[a]),
                  (r = (function (e) {
                    var a = (function (e, a) {
                      if ("object" != typeof e || !e) return e;
                      var t = e[Symbol.toPrimitive];
                      if (void 0 !== t) {
                        var s = t.call(e, a || "default");
                        if ("object" != typeof s) return s;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === a ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof a ? a : a + "";
                  })(r)) in s
                    ? Object.defineProperty(s, r, {
                        value: i,
                        enumerable: true,
                        configurable: true,
                        writable: true,
                      })
                    : (s[r] = i));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : l(Object(t)).forEach(function (a) {
                  Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
                });
        }
        return e;
      }
      function d(e) {
        return (a) =>
          s.createElement(
            g,
            o(
              {
                attr: c({}, e.attr),
              },
              a,
            ),
            (function e(a) {
              return (
                a &&
                a.map((a, t) =>
                  s.createElement(
                    a.tag,
                    c(
                      {
                        key: t,
                      },
                      a.attr,
                    ),
                    e(a.child),
                  ),
                )
              );
            })(e.child),
          );
      }
      function g(e) {
        var a = (a) => {
          var t,
            { attr: r, size: i, title: l } = e,
            d = (function (e, a) {
              if (null == e) return {};
              var t,
                s,
                r = (function (e, a) {
                  if (null == e) return {};
                  var t = {};
                  for (var s in e)
                    if (Object.prototype.hasOwnProperty.call(e, s)) {
                      if (a.indexOf(s) >= 0) continue;
                      t[s] = e[s];
                    }
                  return t;
                })(e, a);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (s = 0; s < i.length; s++)
                  ((t = i[s]), !(a.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
              }
              return r;
            })(e, n),
            g = i || a.size || "1em";
          return (
            a.className && (t = a.className),
            e.className && (t = (t ? t + " " : "") + e.className),
            s.createElement(
              "svg",
              o(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                a.attr,
                r,
                d,
                {
                  className: t,
                  style: c(
                    c(
                      {
                        color: e.color || a.color,
                      },
                      a.style,
                    ),
                    e.style,
                  ),
                  height: g,
                  width: g,
                  xmlns: "http://www.w3.org/2000/svg",
                },
              ),
              l && s.createElement("title", null, l),
              e.children,
            )
          );
        };
        return void 0 !== i ? s.createElement(i.Consumer, null, (e) => a(e)) : a(r);
      }
    },
    4912: (e, a, t) => {
      Promise.resolve().then(t.bind(t, 9045));
    },
    7887: (e, a, t) => {
      "use strict";

      t.d(a, {
        A: () => o,
      });
      var s = t(5155),
        r = t(6766),
        i = t(1505),
        n = t.n(i);
      let o = () => (
        <section className={n().section}>
          <div className={n().imageGrid}>
            <div className={n().mainImage}>
              <C_r.default src="/images/unnamed.jpg" alt="Roof cleaning process" layout="fill" objectFit="cover" className={n().image} />
            </div>
            <div className={n().sideImages}>
              <div className={n().sideImage}>
                <C_r.default
                  src="/images/RoofWashing-1040x520-1.jpg"
                  alt="Before cleaning"
                  layout="fill"
                  objectFit="cover"
                  className={n().image}
                />
              </div>
              <div className={n().sideImage}>
                <C_r.default
                  src="/images/IMG-20250116-WA0019-1536x1152.jpg"
                  alt="After cleaning"
                  layout="fill"
                  objectFit="cover"
                  className={n().image}
                />
              </div>
              <div className={n().strongLine}>Here is a close up of our detergent breaking down the organic material</div>
            </div>
          </div>
          <div className={n().content}>
            <h2 className={n().heading}>Why Should You Get a Roof Wash?</h2>
            <div className={n().textContent}>
              <p className={n().paragraph}>
                lifespan, and functionality. Over time, dirt, algae, moss, and other debris can accumulate, not only making your roof look
                unsightly but also causing long-term damage. Algae, for instance, can eat away at roofing materials, while moss holds
                moisture that can lead to leaks and structural issues.
              </p>
              <p className={n().paragraph}>
                By scheduling a roof washing service in Cincinnati, OH, you can prevent these problems and extend the life of your roof,
                saving you from costly repairs or replacements. A professional *roof washing service* also boosts your home’s curb appeal,
                increasing its value and giving it a fresh, well-maintained look. Whether you’re protecting your investment or preparing to
                sell, roof washing is a simple yet impactful way to keep your property in top condition.
              </p>
              <p className={"".concat(n().paragraph, " ").concat(n().callout)}>
                <strong>Have a question on your roof wash? Call Us! 513-5700355</strong>
              </p>
            </div>
          </div>
        </section>
      );
    },
    7989: (e, a, t) => {
      "use strict";

      t.d(a, {
        A: () => n,
      });
      var s = t(5155),
        r = t(6766),
        i = t(351);
      let n = () => (
        <section className="py-16 px-4 sm:px-6 lg:py-24 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 xl:gap-12 items-center">
            <div className="w-full lg:w-1/2 relative group order-1 lg:order-none">
              <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl transition-shadow duration-300">
                <C_r.default
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
                  ].map((e, a) => (
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" key={a}>
                      <C_i.A3x className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-600 text-base lg:text-lg">{e}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="tel:513-570-0355"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00c6f9] to-cyan-600 text-white px-6 py-4 lg:px-8 lg:py-5 rounded-xl text-base lg:text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <C_i.wnV className="w-5 h-5 lg:w-6 lg:h-6" />
                  513-570-0355
                </a>
              </div>
            </div>
          </div>
        </section>
      );
    },
    9045: (e, a, t) => {
      "use strict";

      (t.r(a),
        t.d(a, {
          default: () => n,
        }));
      var s = t(5155),
        r = t(1741);
      (t(7887), t(2831));
      var i = t(7989);
      let n = () => (
        <div>
          <div className="relative flex items-center justify-center min-h-[60vh] bg-[#00C6F9] to-white bg-center bg-no-repeat bg-cover z-0">
            <div className="absolute inset-0 bg-[url('/images/pages-bg.jpg')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300" />
            <div className="relative z-10 text-center">
              <C_r.P.h1
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
                Oil Stain Removal Services in Cincinnati, OH
              </C_r.P.h1>
              <C_r.P.div
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
                  <C_r.P.span
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
              </C_r.P.div>
            </div>
          </div>
          <C_i.A />
        </div>
      );
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    (e.O(0, [2634, 844, 1741, 6766, 8441, 1684, 7358], () => a(4912)), (_N_E = e.O()));
  },
]);
