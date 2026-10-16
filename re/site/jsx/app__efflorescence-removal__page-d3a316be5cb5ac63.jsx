(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8822],
  {
    4436: (e, t, r) => {
      "use strict";

      r.d(t, {
        k5: () => d,
      });
      var a = r(2115),
        i = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        n = a.createContext && a.createContext(i),
        s = ["attr", "size", "title"];
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
                var a, i, n;
                ((a = e),
                  (i = t),
                  (n = r[t]),
                  (i = (function (e) {
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
                  })(i)) in a
                    ? Object.defineProperty(a, i, {
                        value: n,
                        enumerable: true,
                        configurable: true,
                        writable: true,
                      })
                    : (a[i] = n));
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
            { attr: i, size: n, title: o } = e,
            d = (function (e, t) {
              if (null == e) return {};
              var r,
                a,
                i = (function (e, t) {
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
                var n = Object.getOwnPropertySymbols(e);
                for (a = 0; a < n.length; a++)
                  ((r = n[a]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
              }
              return i;
            })(e, s),
            u = n || t.size || "1em";
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
                i,
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
        return void 0 !== n ? a.createElement(n.Consumer, null, (e) => t(e)) : t(i);
      }
    },
    5566: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 8936));
    },
    8936: (e, t, r) => {
      "use strict";

      (r.r(t),
        r.d(t, {
          default: () => o,
        }));
      var a = r(5155),
        i = r(1741),
        n = r(6766),
        s = r(351);
      let l = () => (
          <section className="py-16 px-4 sm:px-6 lg:py-24 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 xl:gap-12 items-center">
              <div className="w-full lg:w-1/2 relative group order-1 lg:order-none">
                <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl transition-shadow duration-300">
                  <C_n.default
                    src="/images/Efflorescence-Removal.png"
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Efflorescence Removal</h2>
                <p className="text-xl text-[#00c6f9] font-semibold">Eliminating Efflorescence For A Cleaner, Brighter Appearance</p>
                <div className="space-y-6">
                  <div className="space-y-4">
                    {[
                      "Efflorescence, white, powdery stains found on stone, concrete, and brick, can give your property an aged and neglected appearance. Our expert efflorescence removal service successfully eradicates these unsightly marks, bringing back the clean, natural look of your surfaces in Cincinnati. By employing targeted cleaning methods and environmentally safe products, we effectively eliminate mineral deposits without harming the underlying material",
                      "If not addressed, efflorescence can cause additional moisture-related problems, gradually compromising your surfaces. Our skilled team knows how to identify and eliminate these deposits while assisting in preventing future accumulation. Whether it’s a home pathway, business exterior, or structural wall, we deliver comprehensive, durable outcomes.",
                      "Maintain your outer surfaces in immaculate condition and devoid of mineral stains with professional efflorescence eradication. Rely on us for expert cleaning results.",
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
        ),
        o = () => (
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
                  Efflorescence Removal Services in Cincinnati, Ohio
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
            <C_l />
          </div>
        );
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [844, 1741, 6766, 8441, 1684, 7358], () => t(5566)), (_N_E = e.O()));
  },
]);
