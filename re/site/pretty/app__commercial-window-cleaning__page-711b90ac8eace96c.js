(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6228],
  {
    1896: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 6945));
    },
    4436: (e, t, r) => {
      "use strict";
      r.d(t, { k5: () => d });
      var i = r(2115),
        a = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
        n = i.createContext && i.createContext(a),
        s = ["attr", "size", "title"];
      function o() {
        return (o = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
              }
              return e;
            }).apply(this, arguments);
      }
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          (t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, i));
        }
        return r;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                var i, a, n;
                ((i = e),
                  (a = t),
                  (n = r[t]),
                  (a = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var i = r.call(e, t || "default");
                        if ("object" != typeof i) return i;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(a)) in i
                    ? Object.defineProperty(i, a, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                    : (i[a] = n));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : l(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      function d(e) {
        return (t) =>
          i.createElement(
            m,
            o({ attr: c({}, e.attr) }, t),
            (function e(t) {
              return t && t.map((t, r) => i.createElement(t.tag, c({ key: r }, t.attr), e(t.child)));
            })(e.child),
          );
      }
      function m(e) {
        var t = (t) => {
          var r,
            { attr: a, size: n, title: l } = e,
            d = (function (e, t) {
              if (null == e) return {};
              var r,
                i,
                a = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                      if (t.indexOf(i) >= 0) continue;
                      r[i] = e[i];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                for (i = 0; i < n.length; i++)
                  ((r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
              }
              return a;
            })(e, s),
            m = n || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            i.createElement(
              "svg",
              o({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, t.attr, a, d, {
                className: r,
                style: c(c({ color: e.color || t.color }, t.style), e.style),
                height: m,
                width: m,
                xmlns: "http://www.w3.org/2000/svg",
              }),
              l && i.createElement("title", null, l),
              e.children,
            )
          );
        };
        return void 0 !== n ? i.createElement(n.Consumer, null, (e) => t(e)) : t(a);
      }
    },
    6945: (e, t, r) => {
      "use strict";
      (r.r(t), r.d(t, { default: () => l }));
      var i = r(5155),
        a = r(1741),
        n = r(6766),
        s = r(351);
      let o = () =>
          (0, i.jsx)("section", {
            className: "py-16 px-4 sm:px-6 lg:py-24 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50",
            children: (0, i.jsxs)("div", {
              className: "max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 xl:gap-12 items-center",
              children: [
                (0, i.jsx)("div", {
                  className: "w-full lg:w-1/2 relative group order-1 lg:order-none",
                  children: (0, i.jsxs)("div", {
                    className:
                      "relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl transition-shadow duration-300",
                    children: [
                      (0, i.jsx)(n.default, {
                        src: "/images/Untitled-3.jpg",
                        alt: "Commercial window cleaning",
                        layout: "fill",
                        objectFit: "cover",
                        className: "transition-transform duration-500 group-hover:scale-105",
                        priority: !0,
                      }),
                      (0, i.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" }),
                      (0, i.jsx)("div", {
                        className: "absolute bottom-4 left-4 text-white",
                        children: (0, i.jsx)("span", {
                          className: "bg-blue-600 text-sm font-semibold px-3 py-1.5 rounded-full",
                          children: "Certified Professionals",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: "w-full lg:w-1/2 space-y-6 lg:space-y-8",
                  children: [
                    (0, i.jsx)("h2", {
                      className: "text-3xl md:text-4xl font-bold text-gray-900 leading-tight",
                      children: "Commercial Window Cleaning",
                    }),
                    (0, i.jsx)("p", {
                      className: "text-xl text-[#00c6f9] font-semibold",
                      children: "Commercial Window Cleaning For A Clearer Business View",
                    }),
                    (0, i.jsxs)("div", {
                      className: "space-y-6",
                      children: [
                        (0, i.jsx)("div", {
                          className: "space-y-4",
                          children: [
                            "Commercial window cleaning involves more than simply cleaning glass surfaces. It improves your business’s look and establishes an inviting atmosphere. Our skilled team removes dirt, marks, and scum, making your windows spotless and fresh.",
                            "Our expert cleaners use modern methods to guarantee spotless outcomes. Whether you run an office or retail space, we manage windows of every size with accuracy and attention. Every session entails thorough cleaning, streak removal, and a shiny finish. You will enjoy brighter interiors, better natural light, and a more professional look. Clean windows also improve energy efficiency by maximizing sunlight.",
                            "We prioritize efficiency, safety, and quality in every job. Our team works quickly with minimal disturbance to your business. Regular maintenance lets your windows stay clean longer, saving you time and effort. Want spotless windows that impress customers? Book your commercial window cleaning today. Contact us now to get a quote and experience the difference!",
                          ].map((e, t) =>
                            (0, i.jsxs)(
                              "div",
                              {
                                className: "flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow",
                                children: [
                                  (0, i.jsx)(s.A3x, { className: "w-6 h-6 text-sky-500 flex-shrink-0 mt-1" }),
                                  (0, i.jsx)("p", { className: "text-gray-600 text-base lg:text-lg", children: e }),
                                ],
                              },
                              t,
                            ),
                          ),
                        }),
                        (0, i.jsxs)("a", {
                          href: "tel:513-570-0355",
                          className:
                            "inline-flex items-center gap-3 bg-gradient-to-r from-[#00c6f9] to-cyan-600 text-white px-6 py-4 lg:px-8 lg:py-5 rounded-xl text-base lg:text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
                          children: [(0, i.jsx)(s.wnV, { className: "w-5 h-5 lg:w-6 lg:h-6" }), "513-570-0355"],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        l = () =>
          (0, i.jsxs)("div", {
            className: "bg-white",
            children: [
              (0, i.jsxs)("div", {
                className:
                  "relative flex items-center justify-center min-h-[60vh] bg-[#00C6F9] to-white bg-center bg-no-repeat bg-cover z-0",
                children: [
                  (0, i.jsx)("div", {
                    className:
                      "absolute inset-0 bg-[url('/images/pages-bg.jpg')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300",
                  }),
                  (0, i.jsxs)("div", {
                    className: "relative z-10 text-center",
                    children: [
                      (0, i.jsx)(a.P.h1, {
                        className: "text-white text-5xl font-bold mb-4",
                        initial: { opacity: 0, y: -50 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { duration: 1, ease: "easeOut" },
                        viewport: { once: !0 },
                        children: "Commercial Window Cleaning Services in Cincinnati, Ohio",
                      }),
                      (0, i.jsx)(a.P.div, {
                        className: "flex justify-center text-white text-md font_barlow font-semibold text-opacity-85",
                        initial: { opacity: 0, y: 50 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { duration: 1, ease: "easeOut", delay: 0.5 },
                        viewport: { once: !0 },
                        children: (0, i.jsx)("div", {
                          className: "flex gap-2 items-center ",
                          children: (0, i.jsx)(a.P.span, {
                            initial: { opacity: 0, y: 50 },
                            whileInView: { opacity: 1, y: 0 },
                            transition: { duration: 1, ease: "easeOut", delay: 0.8 },
                            viewport: { once: !0 },
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(o, {}),
            ],
          });
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [844, 1741, 6766, 8441, 1684, 7358], () => t(1896)), (_N_E = e.O()));
  },
]);
