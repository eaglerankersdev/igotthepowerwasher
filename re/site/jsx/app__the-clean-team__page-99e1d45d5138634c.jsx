(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5092],
  {
    1424: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 6408));
    },
    3757: (e) => {
      e.exports = {
        pageContainer: "team_pageContainer__jZ8jt",
        circleWrapper: "team_circleWrapper__Ya0C5",
        centerElement: "team_centerElement__lPXuS",
        avatar: "team_avatar__b8556",
        nameTag: "team_nameTag__3rkd5",
        name: "team_name___xsLO",
        role: "team_role__iTQe9",
      };
    },
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
        s = a.createContext && a.createContext(i),
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
                var a, i, s;
                ((a = e),
                  (i = t),
                  (s = r[t]),
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
                        value: s,
                        enumerable: true,
                        configurable: true,
                        writable: true,
                      })
                    : (a[i] = s));
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
            m,
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
      function m(e) {
        var t = (t) => {
          var r,
            { attr: i, size: s, title: o } = e,
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
                var s = Object.getOwnPropertySymbols(e);
                for (a = 0; a < s.length; a++)
                  ((r = s[a]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
              }
              return i;
            })(e, n),
            m = s || t.size || "1em";
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
                  height: m,
                  width: m,
                  xmlns: "http://www.w3.org/2000/svg",
                },
              ),
              o && a.createElement("title", null, o),
              e.children,
            )
          );
        };
        return void 0 !== s ? a.createElement(s.Consumer, null, (e) => t(e)) : t(i);
      }
    },
    6408: (e, t, r) => {
      "use strict";

      (r.r(t),
        r.d(t, {
          default: () => g,
        }));
      var a = r(5155),
        i = r(1741),
        s = r(9911),
        n = r(2115),
        l = r(6896),
        o = r(6874),
        c = r.n(o),
        d = r(3757),
        m = r.n(d);
      let u = () => {
          let e = (0, n.useRef)([]),
            t = (t, r) => {
              (r.preventDefault(),
                setTimeout(() => {
                  e.current[t].checked = !e.current[t].checked;
                }, 0));
            };
          return (
            <div className={m().pageContainer}>
              <div
                className={m().circleWrapper}
                style={{
                  "--total": 6,
                }}
              >
                {" "}
                <div className={m().centerElement}>Our Team</div>
                {[
                  {
                    id: 1,
                    name: "Emily",
                    role: "Emily is a versatile and detail-oriented professional",
                    img: "/images/4-min.jpg",
                  },
                  {
                    id: 2,
                    name: "Morgan",
                    role: "Marketing Momentum Architect",
                    img: "/images/Untitled-5.jpg",
                  },
                  {
                    id: 3,
                    name: "Brandon",
                    role: "Precision-Focused Quality Perfectionist",
                    img: "/images/3-min.jpg",
                  },
                  {
                    id: 4,
                    name: "Gray",
                    role: "skilled professional",
                    img: "/images/1-min.jpg",
                  },
                  {
                    id: 5,
                    name: "John",
                    role: "Community Outreach Dynamo",
                    img: "/images/2-min.jpg",
                  },
                  {
                    id: 6,
                    name: "Brady",
                    role: "Emerging Operations Prodigy",
                    img: "/images/1 (2).jpg",
                  },
                ].map((r, i) => (
                  <C_n.Fragment key={r.id}>
                    <input type="radio" name="radio-avatar" id={"radio-avatar-".concat(r.id)} ref={(t) => (e.current[r.id] = t)} />
                    <label
                      htmlFor={"radio-avatar-".concat(r.id)}
                      className={m().avatar}
                      style={{
                        "--i": i + 1,
                      }}
                      onClick={(e) => t(r.id, e)}
                    >
                      <div className={m().nameTag}>
                        <span className={m().role}>{r.role}</span>
                        <span className={m().name}>{r.name}</span>
                      </div>
                      <img src={r.img} alt={r.name} />
                      <svg viewBox="0 0 300 300">
                        <text fill="currentColor">
                          <textPath href="#circlePath">{"".concat(r.name, " - ").concat(r.role)}</textPath>
                        </text>
                      </svg>
                    </label>
                  </C_n.Fragment>
                ))}
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="0" height="0">
                  <defs>
                    <path id="circlePath" d="M 150, 150 m -100, 0 a 100,100 0 0,1 200,0 a 100,100 0 0,1 -200,0" />
                  </defs>
                </svg>
              </div>
            </div>
          );
        },
        h = () => (
          <C_i.P.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="bg-gradient-to-r from-[#00C6F9] to-blue-600 p-8 rounded-2xl w-[90%] max-w-3xl mx-auto mt-8 shadow-xl border-2 border-white"
          >
            <div className="flex flex-col space-y-4 text-white">
              <h2 className="text-2xl font-bold mb-2">Join Our Growing Team!</h2>
              <div className="space-y-3">
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  Cincinnati area residents wanted
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  Flexible team or independent positions
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  Available any time of the week
                </p>
              </div>
              <a
                href="/career"
                className="mt-4 inline-flex items-center justify-center bg-white text-[#00C6F9] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Apply Now
              </a>
            </div>
          </C_i.P.div>
        ),
        p = () => {
          let e = (0, l.s)(),
            t = (0, l.s)(),
            [r, o] = (0, n.useState)(false),
            d = (0, n.useRef)(null);
          ((0, n.useEffect)(() => {
            (e.start("visible"), t.start("visible"));
          }, [e, t]),
            (0, n.useEffect)(() => {
              let e = new IntersectionObserver(
                (e) => {
                  let [t] = e;
                  t.isIntersecting && o(true);
                },
                {
                  threshold: 0.5,
                },
              );
              return (d.current && e.observe(d.current), () => e.disconnect());
            }, []));
          let m = {
              hidden: {
                opacity: 0,
                y: 50,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  staggerChildren: 0.2,
                },
              },
            },
            p = {
              hidden: {
                opacity: 0,
                x: -50,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                  staggerChildren: 0.2,
                },
              },
            };
          return (
            <C_a.Fragment>
              <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <C_i.P.div
                      initial="hidden"
                      animate={e}
                      variants={m}
                      className="relative group overflow-hidden rounded-2xl shadow-2xl border-4 border-[#00C6F9]"
                    >
                      <img
                        src="/images/owner-i-got.jpeg"
                        alt="Tony Werner"
                        className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </C_i.P.div>
                    <C_i.P.div initial="hidden" animate={t} variants={p} className="space-y-8">
                      <div className="pb-6 border-b-2 border-[#00C6F9]">
                        <h2 className="text-4xl font-bold text-gray-900">Hi, I'm Tony Werner</h2>
                        <p className="mt-2 text-lg text-[#00C6F9]">{"Owner & Founder of IGotThePowerWasher"}</p>
                      </div>
                      <C_i.P.p className="text-gray-600 text-lg leading-relaxed">
                        I'm passionate about making Cincinnati shine. I moved here from Hamburg, Germany, in 2012, and I've loved calling
                        this city home ever since. I started power washing six years ago, and it's been an incredible journey building
                        IGotThePowerWasher into the fastest-growing pressure washing company in the area.
                      </C_i.P.p>
                      <C_i.P.p className="text-gray-600 text-lg leading-relaxed">
                        My philosophy is simple: provide the highest quality work at the best price. I'm not happy until you are, and my
                        team and I strive for perfection on every job. We don't just clean—we take pride in transforming your property.
                      </C_i.P.p>
                      <C_i.P.p className="text-gray-600 text-lg leading-relaxed">
                        In addition to power washing, I also run Complete Seal Solutions, where we specialize in sealing a wide variety of
                        surfaces. Whether it's concrete, pavers, driveways, patios, or even pool decks, we've got you covered. Sealing is a
                        MUST, especially here in Ohio. Our freeze-and-thaw cycle can wreak havoc on surfaces, causing them to crack, chip,
                        and deteriorate over time.
                      </C_i.P.p>
                      <C_i.P.button
                        className="mt-8 inline-flex items-center bg-[#00C6F9] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0099C6] transition-colors"
                        variants={p}
                      >
                        <C_s.dRU className="mr-3 text-xl" />
                        {(0, a.jsx)(c(), {
                          href: "tel:+15135700355",
                          children: "(513) 570-0355",
                        })}
                      </C_i.P.button>
                    </C_i.P.div>
                  </div>
                </div>
              </section>
              <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto space-y-8">
                  <C_i.P.p className="text-gray-700 text-lg leading-relaxed bg-white p-8 rounded-xl shadow-sm">
                    I'm also the owner of WashingSupply, where I've designed and developed cutting-edge pressure washing equipment. Over the
                    years, we've sold hundreds of units, and it's been incredible to see how this innovation has not only improved our own
                    services but also helped our customers achieve outstanding results.
                  </C_i.P.p>
                  <C_i.P.p className="text-gray-700 text-lg leading-relaxed bg-white p-8 rounded-xl shadow-sm">
                    One of my favorite stories is from my very first customer. She actually yelled at me because my prices were too low—she
                    paid me extra and said, "Next time I hire you, you better raise your prices!" Now, she's a close friend with a spotless
                    property, and that's the kind of relationship I love building with my customers.
                  </C_i.P.p>
                  <C_i.P.p className="text-gray-700 text-lg leading-relaxed bg-white p-8 rounded-xl shadow-sm">
                    If you're looking for top-notch service, fair pricing, and a team that truly cares, give us a call or text at
                    513-570-0355 to schedule your free, no-obligation estimate. You can also visit us at 3640 Werk Rd. (right next to the
                    USPS). Mention this story, and I'll give you 10% off your first service!
                  </C_i.P.p>
                  <C_i.P.p className="text-gray-700 text-lg leading-relaxed bg-white p-8 rounded-xl shadow-sm font-semibold">
                    Let's keep it clean!
                  </C_i.P.p>
                </div>
              </section>
              <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <C_i.P.div initial="hidden" animate={t} variants={p} className="space-y-8 order-last lg:order-first">
                      <div className="pb-6 border-b-2 border-[#00C6F9]">
                        <h2 className="text-4xl font-bold text-gray-900">Meet Andrew Thompson</h2>
                        <p className="mt-2 text-lg text-[#00C6F9]">Chief Operating Officer</p>
                      </div>
                      <C_i.P.p className="text-gray-600 text-lg leading-relaxed">
                        Andrew is a committed and detail-oriented professional, consistently delivering high-quality results across all
                        areas of our operations. As Chief Operating Officer of I Got the Power Washer, he plays a pivotal role in ensuring
                        operational excellence, leading our team with a relentless commitment to quality, efficiency, and customer
                        satisfaction.
                      </C_i.P.p>
                      <C_i.P.p className="text-gray-600 text-lg leading-relaxed">
                        A native of Spring Hill, Tennessee, Andrew brings a unique blend of Southern charm and grit to our team—qualities
                        essential for the high demands of our industry. His leadership consistently drives our crew to success, delivering
                        flawless results year after year.
                      </C_i.P.p>
                      <C_i.P.p className="text-gray-600 text-lg leading-relaxed">
                        Andrew is a graduate of Mount St. Joseph University and holds a master's degree, demonstrating his dedication to
                        continuous growth and excellence. During his time at MSJ, he was a standout football player and five-year starter,
                        serving as captain of the 2024 team.
                      </C_i.P.p>
                      <C_i.P.p className="text-gray-600 text-lg leading-relaxed font-semibold">
                        "Hard work and faith pave the way to success."
                      </C_i.P.p>
                      <C_i.P.p className="text-gray-600 text-lg leading-relaxed">
                        As he always says: "Be the doer in your life and watch as God blesses you abundantly."
                      </C_i.P.p>
                    </C_i.P.div>
                    <C_i.P.div
                      initial="hidden"
                      animate={e}
                      variants={m}
                      className="relative group overflow-hidden rounded-2xl shadow-2xl border-4 border-[#00C6F9]"
                    >
                      <img
                        src="/images/andrew.jpg"
                        alt="Andrew Thompson"
                        className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </C_i.P.div>
                  </div>
                </div>
              </section>
              <div ref={d} className="bg-gray-50 pt-20 pb-28 px-4 sm:px-6 lg:px-8">
                <C_u />
                {r && <C_h />}
              </div>
            </C_a.Fragment>
          );
        },
        g = () => (
          <div>
            <div className="relative flex items-center justify-center min-h-[60vh] bg-gradient-to-r from-[#00C6F9] to-white bg-center bg-no-repeat bg-cover z-0">
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
                  The Clean Team
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
                    About Us
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
                    >
                      <C_s.eW4 className="text-lg text-sky-300" />
                    </C_i.P.span>
                    The Clean Team
                  </div>
                </C_i.P.div>
              </div>
            </div>
            <C_p />
          </div>
        );
    },
    6654: (e, t, r) => {
      "use strict";

      (Object.defineProperty(t, "__esModule", {
        value: true,
      }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: true,
          get: function () {
            return i;
          },
        }));
      let a = r(2115);
      function i(e, t) {
        let r = (0, a.useRef)(null),
          i = (0, a.useRef)(null);
        return (0, a.useCallback)(
          (a) => {
            if (null === a) {
              let e = r.current;
              e && ((r.current = null), e());
              let t = i.current;
              t && ((i.current = null), t());
            } else (e && (r.current = s(e, a)), t && (i.current = s(t, a)));
          },
          [e, t],
        );
      }
      function s(e, t) {
        if ("function" != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let r = e(t);
          return "function" == typeof r ? r : () => e(null);
        }
      }
      ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", {
          value: true,
        }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6896: (e, t, r) => {
      "use strict";

      r.d(t, {
        s: () => d,
      });
      var a = r(4331),
        i = r(8802),
        s = r(5982);
      function n(e, t) {
        [...t].reverse().forEach((r) => {
          let a = e.getVariant(r);
          (a && (0, i.U)(e, a),
            e.variantChildren &&
              e.variantChildren.forEach((e) => {
                n(e, t);
              }));
        });
      }
      function l() {
        let e = false,
          t = new Set(),
          r = {
            subscribe: (e) => (t.add(e), () => void t.delete(e)),
            start(r, i) {
              (0, a.V1)(
                e,
                "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.",
              );
              let n = [];
              return (
                t.forEach((e) => {
                  n.push(
                    (0, s._)(e, r, {
                      transitionOverride: i,
                    }),
                  );
                }),
                Promise.all(n)
              );
            },
            set: (r) => (
              (0, a.V1)(e, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),
              t.forEach((e) => {
                Array.isArray(r) ? n(e, r) : "string" == typeof r ? n(e, [r]) : (0, i.U)(e, r);
              })
            ),
            stop() {
              t.forEach((e) => {
                !(function (e) {
                  e.values.forEach((e) => e.stop());
                })(e);
              });
            },
            mount: () => (
              (e = true),
              () => {
                ((e = false), r.stop());
              }
            ),
          };
        return r;
      }
      var o = r(2885),
        c = r(7494);
      let d = function () {
        let e = (0, o.M)(l);
        return ((0, c.E)(e.mount, []), e);
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [4630, 6711, 1741, 6874, 8441, 1684, 7358], () => t(1424)), (_N_E = e.O()));
  },
]);
