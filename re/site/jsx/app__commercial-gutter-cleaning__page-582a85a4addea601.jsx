(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6497],
  {
    523: (e, t, r) => {
      "use strict";

      r.d(t, {
        A: () => n,
      });
      var a = r(5155),
        s = r(6766),
        i = r(351);
      let n = () => (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 xl:gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Commercial Pressure Washing</h2>
              <h3 className="text-xl text-[#00c6f9] font-semibold mb-4">Revitalize Your Business Exterior With Expert Pressure Washing</h3>
              <p className="text-gray-600 text-lg mb-8">
                A tidy commercial space makes a strong impact on customers and clients. Our pressure washing service for commercial
                properties in Cincinnati. Our expert team eliminates dirt, grease, mold, and stains. We renew sidewalks, storefronts,
                parking areas, and building exteriors. Utilizing advanced machinery and environmentally safe methods, we rejuvenate surfaces
                without harming them, guaranteeing a clean and polished look.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Overlooked commercial areas can gather dirt, diminishing curb appeal and posing safety risks. Consistent pressure washing
                avoids accumulation, extends surface longevity, and ensures your business maintains its optimal appearance. Suppose you have
                a retail shop, office space, or manufacturing plant. In that case, our skilled team provides comprehensive, effective
                cleaning customized to your requirements
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Maintain a clean and welcoming business facade with expert pressure washing services.
              </p>
              <a
                href="tel:513-570-0355"
                className="mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-[#00c6f9] to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <C_i.wnV className="w-5 h-5" />
                513-570-0355
              </a>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <C_s.default
                  src="/images/8.png"
                  alt="Building washing process"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                  <C_s.default
                    src="/images/15-1024x683-1.png"
                    alt="Building washing process"
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                  <C_s.default
                    src="/images/1252.jpg"
                    alt="Building washing process"
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    },
    4436: (e, t, r) => {
      "use strict";

      r.d(t, {
        k5: () => d,
      });
      var a = r(2115),
        s = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        i = a.createContext && a.createContext(s),
        n = ["attr", "size", "title"];
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
              }
              return e;
            }).apply(this, arguments);
      }
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          (t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a));
        }
        return r;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), true).forEach(function (t) {
                var a, s, i;
                ((a = e),
                  (s = t),
                  (i = r[t]),
                  (s = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var a = r.call(e, t || "default");
                        if ("object" != typeof a) return a;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(s)) in a
                    ? Object.defineProperty(a, s, {
                        value: i,
                        enumerable: true,
                        configurable: true,
                        writable: true,
                      })
                    : (a[s] = i));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : o(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      function d(e) {
        return (t) =>
          a.createElement(
            u,
            l(
              {
                attr: c({}, e.attr),
              },
              t,
            ),
            (function e(t) {
              return (
                t &&
                t.map((t, r) =>
                  a.createElement(
                    t.tag,
                    c(
                      {
                        key: r,
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
      function u(e) {
        var t = (t) => {
          var r,
            { attr: s, size: i, title: o } = e,
            d = (function (e, t) {
              if (null == e) return {};
              var r,
                a,
                s = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                      if (t.indexOf(a) >= 0) continue;
                      r[a] = e[a];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++)
                  ((r = i[a]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]));
              }
              return s;
            })(e, n),
            u = i || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            a.createElement(
              "svg",
              l(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                s,
                d,
                {
                  className: r,
                  style: c(
                    c(
                      {
                        color: e.color || t.color,
                      },
                      t.style,
                    ),
                    e.style,
                  ),
                  height: u,
                  width: u,
                  xmlns: "http://www.w3.org/2000/svg",
                },
              ),
              o && a.createElement("title", null, o),
              e.children,
            )
          );
        };
        return void 0 !== i ? a.createElement(i.Consumer, null, (e) => t(e)) : t(s);
      }
    },
    8673: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 9970));
    },
    9970: (e, t, r) => {
      "use strict";

      (r.r(t),
        r.d(t, {
          default: () => o,
        }));
      var a = r(5155),
        s = r(1741);
      r(523);
      var i = r(6766),
        n = r(351);
      let l = () => (
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 xl:gap-16">
              <div className="lg:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Commercial Gutter Cleaning</h2>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900">Drains Stay Clear Commercial Gutter Cleaning Here</h3>
                  <p className="text-gray-600">
                    Blocked gutters lead to water damage and expensive repairs. We clean them to ensure your business’s safety. Our gutter
                    cleaning service removes leaves, dirt, and debris. It guarantees seamless water movement and avoids blocks. Clogged
                    gutters result in leaks and problems with the foundation.
                  </p>
                  <p className="text-gray-600">
                    Consistent cleaning protects your structure from significant harm. We provide quick, reliable, and expert service. Our
                    team operates securely and does not disturb your business. Clean gutters improve drainage and prevent overflow, keeping
                    your property dry and in top condition.
                  </p>
                  <p className="text-gray-600">
                    We serve offices, warehouses, and retail spaces. Our experts handle all types of commercial buildings. Routine
                    maintenance extends the life of your gutters. It also saves money on future repairs. Our team uses the best tools for
                    the job. We ensure a thorough and effective cleaning process. Don’t wait for problems to start. Book your Commercial
                    Gutter Cleaning today and protect your property.
                  </p>
                </div>
                <a
                  href="tel:513-570-0355"
                  className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-[#00c6f9] to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-fit"
                >
                  <C_n.wnV className="w-5 h-5" />
                  513-570-0355
                </a>
              </div>
              <div className="lg:w-1/2">
                <div className="grid grid-cols-1 gap-8">
                  <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 grid grid-cols-2">
                      <div className="relative border-r-4 border-white">
                        <C_i.default
                          src="/images/WhatsApp-Image-2025-02-10-at-9.16.29-PM-5.jpeg"
                          alt="Before cleaning"
                          layout="fill"
                          objectFit="cover"
                        />
                        <div className="absolute bottom-4 left-4 bg-black/80 text-white px-4 py-2 rounded-md">Before Service</div>
                      </div>
                      <div className="relative">
                        <C_i.default
                          src="/images/WhatsApp-Image-2025-02-10-at-9.16.29-PM-7.jpeg"
                          alt="After cleaning"
                          layout="fill"
                          objectFit="cover"
                        />
                        <div className="absolute bottom-4 right-4 bg-blue-600/90 text-white px-4 py-2 rounded-md">After Service</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ),
        o = () => (
          <div className="bg-white">
            <div className="relative flex items-center justify-center min-h-[60vh] bg-[#00C6F9] to-white bg-center bg-no-repeat bg-cover z-0">
              <div className="absolute inset-0 bg-[url('/images/pages-bg.jpg')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300" />
              <div className="relative z-10 text-center">
                <C_s.P.h1
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
                  Commercial Pressure Washing Services in Cincinnati, Ohio
                </C_s.P.h1>
                <C_s.P.div
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
                  <div className="flex gap-2 items-center ">
                    <C_s.P.span
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
                </C_s.P.div>
              </div>
            </div>
            <C_l />
          </div>
        );
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [844, 1741, 6766, 8441, 1684, 7358], () => t(8673)), (_N_E = e.O()));
  },
]);
