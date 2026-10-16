(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [254],
  {
    760: (e, t, s) => {
      "use strict";
      s.d(t, { N: () => x });
      var a = s(5155),
        n = s(2115),
        i = s(869),
        r = s(2885),
        o = s(7494),
        l = s(845),
        c = s(1508);
      class d extends n.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = t.offsetParent,
              s = (e instanceof HTMLElement && e.offsetWidth) || 0,
              a = this.props.sizeRef.current;
            ((a.height = t.offsetHeight || 0),
              (a.width = t.offsetWidth || 0),
              (a.top = t.offsetTop),
              (a.left = t.offsetLeft),
              (a.right = s - a.width - a.left));
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function h(e) {
        let { children: t, isPresent: s, anchorX: i } = e,
          r = (0, n.useId)(),
          o = (0, n.useRef)(null),
          l = (0, n.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
          { nonce: h } = (0, n.useContext)(c.Q);
        return (
          (0, n.useInsertionEffect)(() => {
            let { width: e, height: t, top: a, left: n, right: c } = l.current;
            if (s || !o.current || !e || !t) return;
            o.current.dataset.motionPopId = r;
            let d = document.createElement("style");
            return (
              h && (d.nonce = h),
              document.head.appendChild(d),
              d.sheet &&
                d.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(r, '"] {\n            position: absolute !important;\n            width: ')
                    .concat(e, "px !important;\n            height: ")
                    .concat(t, "px !important;\n            ")
                    .concat("left" === i ? "left: ".concat(n) : "right: ".concat(c), "px !important;\n            top: ")
                    .concat(a, "px !important;\n          }\n        "),
                ),
              () => {
                document.head.removeChild(d);
              }
            );
          }, [s]),
          (0, a.jsx)(d, { isPresent: s, childRef: o, sizeRef: l, children: n.cloneElement(t, { ref: o }) })
        );
      }
      let m = (e) => {
        let { children: t, initial: s, isPresent: i, onExitComplete: o, custom: c, presenceAffectsLayout: d, mode: m, anchorX: u } = e,
          p = (0, r.M)(g),
          f = (0, n.useId)(),
          x = (0, n.useCallback)(
            (e) => {
              for (let t of (p.set(e, !0), p.values())) if (!t) return;
              o && o();
            },
            [p, o],
          ),
          w = (0, n.useMemo)(
            () => ({ id: f, initial: s, isPresent: i, custom: c, onExitComplete: x, register: (e) => (p.set(e, !1), () => p.delete(e)) }),
            d ? [Math.random(), x] : [i, x],
          );
        return (
          (0, n.useMemo)(() => {
            p.forEach((e, t) => p.set(t, !1));
          }, [i]),
          n.useEffect(() => {
            i || p.size || !o || o();
          }, [i]),
          "popLayout" === m && (t = (0, a.jsx)(h, { isPresent: i, anchorX: u, children: t })),
          (0, a.jsx)(l.t.Provider, { value: w, children: t })
        );
      };
      function g() {
        return new Map();
      }
      var u = s(2082);
      let p = (e) => e.key || "";
      function f(e) {
        let t = [];
        return (
          n.Children.forEach(e, (e) => {
            (0, n.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      let x = (e) => {
        let {
            children: t,
            custom: s,
            initial: l = !0,
            onExitComplete: c,
            presenceAffectsLayout: d = !0,
            mode: h = "sync",
            propagate: g = !1,
            anchorX: x = "left",
          } = e,
          [w, v] = (0, u.xQ)(g),
          y = (0, n.useMemo)(() => f(t), [t]),
          j = g && !w ? [] : y.map(p),
          b = (0, n.useRef)(!0),
          N = (0, n.useRef)(y),
          _ = (0, r.M)(() => new Map()),
          [k, C] = (0, n.useState)(y),
          [I, E] = (0, n.useState)(y);
        (0, o.E)(() => {
          ((b.current = !1), (N.current = y));
          for (let e = 0; e < I.length; e++) {
            let t = p(I[e]);
            j.includes(t) ? _.delete(t) : !0 !== _.get(t) && _.set(t, !1);
          }
        }, [I, j.length, j.join("-")]);
        let A = [];
        if (y !== k) {
          let e = [...y];
          for (let t = 0; t < I.length; t++) {
            let s = I[t],
              a = p(s);
            j.includes(a) || (e.splice(t, 0, s), A.push(s));
          }
          return ("wait" === h && A.length && (e = A), E(f(e)), C(y), null);
        }
        let { forceRender: W } = (0, n.useContext)(i.L);
        return (0, a.jsx)(a.Fragment, {
          children: I.map((e) => {
            let t = p(e),
              n = (!g || !!w) && (y === I || j.includes(t));
            return (0, a.jsx)(
              m,
              {
                isPresent: n,
                initial: (!b.current || !!l) && void 0,
                custom: s,
                presenceAffectsLayout: d,
                mode: h,
                onExitComplete: n
                  ? void 0
                  : () => {
                      if (!_.has(t)) return;
                      _.set(t, !0);
                      let e = !0;
                      (_.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (null == W || W(), E(N.current), g && (null == v || v()), c && c()));
                    },
                anchorX: x,
                children: e,
              },
              t,
            );
          }),
        });
      };
    },
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
    2831: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => r });
      var a = s(5155),
        n = s(6766),
        i = s(351);
      let r = () =>
        (0, a.jsx)("section", {
          className: "py-16 px-4 sm:px-6 lg:py-24 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50",
          children: (0, a.jsxs)("div", {
            className: "max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 xl:gap-12 items-center",
            children: [
              (0, a.jsx)("div", {
                className: "w-full lg:w-1/2 relative group order-1 lg:order-none",
                children: (0, a.jsxs)("div", {
                  className:
                    "relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl transition-shadow duration-300",
                  children: [
                    (0, a.jsx)(n.default, {
                      src: "/images/resturant.jpg",
                      alt: "Commercial window cleaning",
                      layout: "fill",
                      objectFit: "cover",
                      className: "transition-transform duration-500 group-hover:scale-105",
                      priority: !0,
                    }),
                    (0, a.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" }),
                    (0, a.jsx)("div", {
                      className: "absolute bottom-4 left-4 text-white",
                      children: (0, a.jsx)("span", {
                        className: "bg-blue-600 text-sm font-semibold px-3 py-1.5 rounded-full",
                        children: "Certified Professionals",
                      }),
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)("div", {
                className: "w-full lg:w-1/2 space-y-6 lg:space-y-8",
                children: [
                  (0, a.jsx)("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 leading-tight", children: "Restaurant" }),
                  (0, a.jsx)("p", {
                    className: "text-xl text-[#00c6f9] font-semibold",
                    children: "Restaurant Cleaning That Keeps Your Space Sparkling",
                  }),
                  (0, a.jsxs)("div", {
                    className: "space-y-6",
                    children: [
                      (0, a.jsx)("div", {
                        className: "space-y-4",
                        children: [
                          "Maintaining a restaurant entails more than just cleaning tables and sweeping floors. A sanitized, clean setting provides a more secure space for visitors and employees. Our restaurant cleaning removes grease, dirt, and bacteria, ensuring a spotless kitchen and dining area. Our team deep-cleans floors, utensils, and surfaces for a fresh, welcoming space. We emphasize cleanliness, remove odors, maintain hygiene, and ensure your restaurant complies with health regulations and delights patrons. Every cleaning session tackles high-traffic areas, kitchen grease, and hard-to-reach spots",
                          "You will enjoy a fresher atmosphere, improved food safety, and a five-star shine that guests notice. A well-maintained restaurant enhances customer confidence and keeps them coming back. We work efficiently with minimal disruption so your business runs smoothly. With routine cleaning, you prevent buildup, reduce health risks, and create a welcoming space for everyone",
                        ].map((e, t) =>
                          (0, a.jsxs)(
                            "div",
                            {
                              className: "flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow",
                              children: [
                                (0, a.jsx)(i.A3x, { className: "w-6 h-6 text-sky-500 flex-shrink-0 mt-1" }),
                                (0, a.jsx)("p", { className: "text-gray-600 text-base lg:text-lg", children: e }),
                              ],
                            },
                            t,
                          ),
                        ),
                      }),
                      (0, a.jsxs)("a", {
                        href: "tel:513-570-0355",
                        className:
                          "inline-flex items-center gap-3 bg-gradient-to-r from-[#00c6f9] to-cyan-600 text-white px-6 py-4 lg:px-8 lg:py-5 rounded-xl text-base lg:text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
                        children: [(0, a.jsx)(i.wnV, { className: "w-5 h-5 lg:w-6 lg:h-6" }), "513-570-0355"],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
    },
    5872: (e, t, s) => {
      "use strict";
      (s.r(t), s.d(t, { default: () => r }));
      var a = s(5155),
        n = s(1741);
      (s(7887), s(2831), s(5983));
      var i = s(7743);
      let r = () =>
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
                    (0, a.jsx)(n.P.h1, {
                      className: "text-white text-5xl font-bold mb-4",
                      initial: { opacity: 0, y: -50 },
                      whileInView: { opacity: 1, y: 0 },
                      transition: { duration: 1, ease: "easeOut" },
                      viewport: { once: !0 },
                      children: "Get Estimate",
                    }),
                    (0, a.jsx)(n.P.div, {
                      className: "flex justify-center text-white text-md font_barlow font-semibold text-opacity-85",
                      initial: { opacity: 0, y: 50 },
                      whileInView: { opacity: 1, y: 0 },
                      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
                      viewport: { once: !0 },
                      children: (0, a.jsx)("div", {
                        className: "flex gap-2 items-center",
                        children: (0, a.jsx)(n.P.span, {
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
            (0, a.jsx)(i.A, {}),
          ],
        });
    },
    5983: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => r });
      var a = s(5155),
        n = s(6766),
        i = s(351);
      let r = () =>
        (0, a.jsx)("section", {
          className: "py-16 px-4 sm:px-6 lg:py-24 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50",
          children: (0, a.jsxs)("div", {
            className: "max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 xl:gap-12 items-center",
            children: [
              (0, a.jsx)("div", {
                className: "w-full lg:w-1/2 relative group order-1 lg:order-none",
                children: (0, a.jsxs)("div", {
                  className:
                    "relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl transition-shadow duration-300",
                  children: [
                    (0, a.jsx)(n.default, {
                      src: "/images/gas-station.jpg",
                      alt: "Commercial window cleaning",
                      layout: "fill",
                      objectFit: "cover",
                      className: "transition-transform duration-500 group-hover:scale-105",
                      priority: !0,
                    }),
                    (0, a.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" }),
                    (0, a.jsx)("div", {
                      className: "absolute bottom-4 left-4 text-white",
                      children: (0, a.jsx)("span", {
                        className: "bg-blue-600 text-sm font-semibold px-3 py-1.5 rounded-full",
                        children: "Certified Professionals",
                      }),
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)("div", {
                className: "w-full lg:w-1/2 space-y-6 lg:space-y-8",
                children: [
                  (0, a.jsx)("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 leading-tight", children: "Gas Station" }),
                  (0, a.jsx)("p", {
                    className: "text-xl text-[#00c6f9] font-semibold",
                    children: "Gas Station Cleaning for a Spotless, Safe Environment",
                  }),
                  (0, a.jsxs)("div", {
                    className: "space-y-6",
                    children: [
                      (0, a.jsx)("div", {
                        className: "space-y-4",
                        children: [
                          "A clean gas station leaves a lasting impression on customers. Our Gas Station Cleaning service removes dirt, oil stains, and debris, keeping your station looking fresh and inviting.",
                          "Our team deep-cleans fuel pumps, concrete surfaces, store entrances, and restrooms to maintain hygiene and safety. We eliminate spills, grime, and trash buildup to create a cleaner and safer experience for customers and employees",
                          "High-traffic areas, fuel spills, and weather exposure can make gas stations look worn down. Regular cleaning prevents stains, improves curb appeal, and helps maintain a professional image. Clean surroundings also reduce slip hazards and promote a better customer experience.",
                          "We work efficiently with minimal disruption, using top-quality equipment to tackle tough stains and buildup. A well-maintained gas station attracts more customers, enhances safety, and ensures compliance with cleanliness standards. With consistent cleaning, your station remains spotless, welcoming, and safe for everyone.",
                        ].map((e, t) =>
                          (0, a.jsxs)(
                            "div",
                            {
                              className: "flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow",
                              children: [
                                (0, a.jsx)(i.A3x, { className: "w-6 h-6 text-sky-500 flex-shrink-0 mt-1" }),
                                (0, a.jsx)("p", { className: "text-gray-600 text-base lg:text-lg", children: e }),
                              ],
                            },
                            t,
                          ),
                        ),
                      }),
                      (0, a.jsxs)("a", {
                        href: "tel:513-570-0355",
                        className:
                          "inline-flex items-center gap-3 bg-gradient-to-r from-[#00c6f9] to-cyan-600 text-white px-6 py-4 lg:px-8 lg:py-5 rounded-xl text-base lg:text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
                        children: [(0, a.jsx)(i.wnV, { className: "w-5 h-5 lg:w-6 lg:h-6" }), "513-570-0355"],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
    },
    7630: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 5872));
    },
    7887: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => o });
      var a = s(5155),
        n = s(6766),
        i = s(1505),
        r = s.n(i);
      let o = () =>
        (0, a.jsxs)("section", {
          className: r().section,
          children: [
            (0, a.jsxs)("div", {
              className: r().imageGrid,
              children: [
                (0, a.jsx)("div", {
                  className: r().mainImage,
                  children: (0, a.jsx)(n.default, {
                    src: "/images/unnamed.jpg",
                    alt: "Roof cleaning process",
                    layout: "fill",
                    objectFit: "cover",
                    className: r().image,
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: r().sideImages,
                  children: [
                    (0, a.jsx)("div", {
                      className: r().sideImage,
                      children: (0, a.jsx)(n.default, {
                        src: "/images/RoofWashing-1040x520-1.jpg",
                        alt: "Before cleaning",
                        layout: "fill",
                        objectFit: "cover",
                        className: r().image,
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: r().sideImage,
                      children: (0, a.jsx)(n.default, {
                        src: "/images/IMG-20250116-WA0019-1536x1152.jpg",
                        alt: "After cleaning",
                        layout: "fill",
                        objectFit: "cover",
                        className: r().image,
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: r().strongLine,
                      children: "Here is a close up of our detergent breaking down the organic material",
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: r().content,
              children: [
                (0, a.jsx)("h2", { className: r().heading, children: "Why Should You Get a Roof Wash?" }),
                (0, a.jsxs)("div", {
                  className: r().textContent,
                  children: [
                    (0, a.jsx)("p", {
                      className: r().paragraph,
                      children:
                        "lifespan, and functionality. Over time, dirt, algae, moss, and other debris can accumulate, not only making your roof look unsightly but also causing long-term damage. Algae, for instance, can eat away at roofing materials, while moss holds moisture that can lead to leaks and structural issues.",
                    }),
                    (0, a.jsx)("p", {
                      className: r().paragraph,
                      children:
                        "By scheduling a roof washing service in Cincinnati, OH, you can prevent these problems and extend the life of your roof, saving you from costly repairs or replacements. A professional *roof washing service* also boosts your home’s curb appeal, increasing its value and giving it a fresh, well-maintained look. Whether you’re protecting your investment or preparing to sell, roof washing is a simple yet impactful way to keep your property in top condition.",
                    }),
                    (0, a.jsx)("p", {
                      className: "".concat(r().paragraph, " ").concat(r().callout),
                      children: (0, a.jsx)("strong", { children: "Have a question on your roof wash? Call Us! 513-5700355" }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [2634, 844, 1741, 6766, 7612, 7743, 8441, 1684, 7358], () => t(7630)), (_N_E = e.O()));
  },
]);
