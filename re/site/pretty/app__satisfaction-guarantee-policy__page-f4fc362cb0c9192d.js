(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4741],
  {
    6654: (e, t, s) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let a = s(2115);
      function i(e, t) {
        let s = (0, a.useRef)(null),
          i = (0, a.useRef)(null);
        return (0, a.useCallback)(
          (a) => {
            if (null === a) {
              let e = s.current;
              e && ((s.current = null), e());
              let t = i.current;
              t && ((i.current = null), t());
            } else (e && (s.current = n(e, a)), t && (i.current = n(t, a)));
          },
          [e, t],
        );
      }
      function n(e, t) {
        if ("function" != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let s = e(t);
          return "function" == typeof s ? s : () => e(null);
        }
      }
      ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
    },
    7473: (e, t, s) => {
      "use strict";
      (s.r(t), s.d(t, { default: () => n }));
      var a = s(5155),
        i = s(1741);
      s(6725);
      let n = () =>
        (0, a.jsxs)("div", {
          children: [
            (0, a.jsxs)("div", {
              className: "relative flex items-center justify-center min-h-[60vh] bg-[#00C6F9] to-white bg-center bg-no-repeat bg-cover z-0",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "absolute inset-0 bg-[url('/images/pages-bg.jpg')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300",
                }),
                (0, a.jsxs)("div", {
                  className: "relative z-10 text-center",
                  children: [
                    (0, a.jsx)(i.P.h1, {
                      className: "text-white text-5xl font-bold mb-4",
                      initial: { opacity: 0, y: -50 },
                      whileInView: { opacity: 1, y: 0 },
                      transition: { duration: 1, ease: "easeOut" },
                      viewport: { once: !0 },
                      children: "Our Satisfaction Guarantee Policy",
                    }),
                    (0, a.jsx)(i.P.div, {
                      className: "flex justify-center text-white text-md font_barlow font-semibold text-opacity-85",
                      initial: { opacity: 0, y: 50 },
                      whileInView: { opacity: 1, y: 0 },
                      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
                      viewport: { once: !0 },
                      children: (0, a.jsx)("div", {
                        className: "flex gap-2 items-center",
                        children: (0, a.jsx)(i.P.span, {
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
            (0, a.jsxs)("div", {
              className: "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24",
              children: [
                (0, a.jsxs)("div", {
                  className: "text-center mb-16",
                  children: [
                    (0, a.jsx)("h2", {
                      className: "text-4xl font-bold bg-gradient-to-r from-[#00C6F9] to-cyan-600 bg-clip-text text-transparent mb-4",
                      children: "Our Commitment to Excellence",
                    }),
                    (0, a.jsx)("p", {
                      className: "text-xl text-gray-600 max-w-2xl mx-auto",
                      children: "Your satisfaction is our top priority. Here's our promise and transparency about what we can achieve:",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "bg-white rounded-2xl shadow-xl p-8 border-2 border-[#00C6F9]/20",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-3 mb-6",
                          children: [
                            (0, a.jsx)("div", {
                              className: "p-3 bg-[#00C6F9]/10 rounded-full",
                              children: (0, a.jsx)("svg", {
                                className: "w-6 h-6 text-[#00C6F9]",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: (0, a.jsx)("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                  d: "M5 13l4 4L19 7",
                                }),
                              }),
                            }),
                            (0, a.jsx)("h3", { className: "text-2xl font-bold text-gray-900", children: "Our Guarantees" }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "space-y-6",
                          children: [
                            {
                              icon: "\uD83D\uDCA7",
                              title: "Complete Organic Removal",
                              content: "100% removal of algae, moss, and dirt through our professional cleaning services",
                            },
                            { icon: "✨", title: "Streak-Free Windows", content: "Crystal-clear results guaranteed for pristine views" },
                            {
                              icon: "\uD83C\uDF00",
                              title: "Fully Functional Gutters",
                              content: "Complete debris removal while preserving gutter integrity",
                            },
                          ].map((e, t) =>
                            (0, a.jsxs)(
                              "div",
                              {
                                className: "flex gap-4",
                                children: [
                                  (0, a.jsx)("span", { className: "text-2xl", children: e.icon }),
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("h4", { className: "text-lg font-semibold text-gray-900", children: e.title }),
                                      (0, a.jsx)("p", { className: "text-gray-600", children: e.content }),
                                    ],
                                  }),
                                ],
                              },
                              t,
                            ),
                          ),
                        }),
                        (0, a.jsxs)("div", {
                          className: "mt-8 p-6 bg-[#00C6F9]/5 rounded-xl border-l-4 border-[#00C6F9]",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex items-center gap-3 mb-2",
                              children: [
                                (0, a.jsx)("svg", {
                                  className: "w-5 h-5 text-[#00C6F9]",
                                  fill: "currentColor",
                                  viewBox: "0 0 20 20",
                                  children: (0, a.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                    clipRule: "evenodd",
                                  }),
                                }),
                                (0, a.jsx)("h4", {
                                  className: "text-lg font-semibold text-gray-900",
                                  children: "Driveway Sealing Protection",
                                }),
                              ],
                            }),
                            (0, a.jsx)("p", {
                              className: "text-gray-600",
                              children:
                                "Our premium sealer provides minimum 2-year protection with up to 5 years defense against Ohio's harsh weather, maintaining deep concrete protection even as surface layers wear.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "bg-white rounded-2xl shadow-xl p-8 border-2 border-red-100/50",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-3 mb-6",
                          children: [
                            (0, a.jsx)("div", {
                              className: "p-3 bg-red-100/20 rounded-full",
                              children: (0, a.jsx)("svg", {
                                className: "w-6 h-6 text-red-500",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: (0, a.jsx)("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                  d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                                }),
                              }),
                            }),
                            (0, a.jsx)("h3", { className: "text-2xl font-bold text-gray-900", children: "Important Considerations" }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "space-y-6",
                          children: [
                            {
                              title: "Stubborn Biological Stains",
                              content: "Shotgun fungus and artillery fungus spots that bond with surfaces",
                            },
                            { title: "Permanent Discolorations", content: "Aged oil stains and deep-set chemical marks" },
                            {
                              title: "Natural Material Variations",
                              content: "Wood surfaces and climbing vine residues with unique cleaning challenges",
                            },
                            {
                              title: "Stain Improvement Promise",
                              content: "Minimum 75% improvement target with potential discounts if unmet",
                            },
                          ].map((e, t) =>
                            (0, a.jsxs)(
                              "div",
                              {
                                className: "flex gap-4",
                                children: [
                                  (0, a.jsx)("span", { className: "text-2xl text-red-500", children: "⚠️" }),
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("h4", { className: "text-lg font-semibold text-gray-900", children: e.title }),
                                      (0, a.jsx)("p", { className: "text-gray-600", children: e.content }),
                                    ],
                                  }),
                                ],
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "mt-12 text-center",
                  children: (0, a.jsxs)("div", {
                    className: "inline-flex items-center gap-3 bg-[#00C6F9]/10 px-6 py-3 rounded-full",
                    children: [
                      (0, a.jsx)("span", { className: "text-2xl", children: "✅" }),
                      (0, a.jsx)("span", { className: "font-semibold text-[#00C6F9]", children: "Satisfaction Guaranteed" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
    },
    9285: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 7473));
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [1741, 6874, 6725, 8441, 1684, 7358], () => t(9285)), (_N_E = e.O()));
  },
]);
