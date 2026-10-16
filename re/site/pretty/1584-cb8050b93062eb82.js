"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1584],
  {
    4436: (e, t, r) => {
      r.d(t, { k5: () => m });
      var a = r(2115),
        s = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
        i = a.createContext && a.createContext(s),
        o = ["attr", "size", "title"];
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
              }
              return e;
            }).apply(this, arguments);
      }
      function l(e, t) {
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
            ? l(Object(r), !0).forEach(function (t) {
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
                    ? Object.defineProperty(a, s, { value: i, enumerable: !0, configurable: !0, writable: !0 })
                    : (a[s] = i));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : l(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      function m(e) {
        return (t) =>
          a.createElement(
            d,
            n({ attr: c({}, e.attr) }, t),
            (function e(t) {
              return t && t.map((t, r) => a.createElement(t.tag, c({ key: r }, t.attr), e(t.child)));
            })(e.child),
          );
      }
      function d(e) {
        var t = (t) => {
          var r,
            { attr: s, size: i, title: l } = e,
            m = (function (e, t) {
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
            })(e, o),
            d = i || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            a.createElement(
              "svg",
              n({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, t.attr, s, m, {
                className: r,
                style: c(c({ color: e.color || t.color }, t.style), e.style),
                height: d,
                width: d,
                xmlns: "http://www.w3.org/2000/svg",
              }),
              l && a.createElement("title", null, l),
              e.children,
            )
          );
        };
        return void 0 !== i ? a.createElement(i.Consumer, null, (e) => t(e)) : t(s);
      }
    },
    6605: (e, t, r) => {
      r.d(t, { A: () => n });
      var a = r(5155),
        s = r(6766),
        i = r(351);
      r(2115);
      let o = () =>
          (0, a.jsxs)("section", {
            className: "bg-white py-16 px-4 sm:px-6 lg:py-24",
            children: [
              (0, a.jsx)("div", { className: "max-w-7xl mx-auto text-center mb-16" }),
              (0, a.jsx)("div", {
                className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6",
                children: [
                  {
                    id: 1,
                    name: "Graffiti Removal",
                    about:
                      "Quickly remove graffiti and restore your surfaces. Our experts use effective cleaning solutions to erase unwanted marks, ensuring your property is clean.",
                    imageSrc: "/images/Graffiti-removal-services.jpg",
                    link: "/graffiti-removal",
                  },
                  {
                    id: 2,
                    name: "Rust Removal",
                    about:
                      "Eliminate rust stains from various surfaces. We ensure rust removal without damaging your property, enhancing its appearance ",
                    imageSrc: "/images/Rust-Removal.png",
                    link: "/rust-removal",
                  },
                  {
                    id: 3,
                    name: "Efflorescence Removal",
                    about:
                      "We use safe and effective methods to remove mineral buildup, restoring your brick, stone, or concrete surfaces to their original and perfect condition.",
                    imageSrc: "/images/Efflorescence-Removal.png",
                    link: "/efflorescence-removal",
                  },
                ].map((e) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      className:
                        "relative group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden",
                      children: [
                        (0, a.jsx)("div", {
                          className: "relative h-64 w-full transition-transform duration-300 group-hover:scale-105",
                          children: (0, a.jsx)(s.default, {
                            src: e.imageSrc,
                            alt: e.name,
                            layout: "fill",
                            objectFit: "cover",
                            className: "rounded-t-3xl",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "p-6 bg-[#00C6F9] text-white transition-all duration-300 group-hover:bg-[#0099cc]",
                          children: [
                            (0, a.jsx)("h3", { className: "text-2xl font-bold mb-2", children: e.name }),
                            (0, a.jsx)("p", { className: "text-lg mb-4", children: e.about }),
                            (0, a.jsx)("button", {
                              className: "bg-white text-[#00C6F9] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors",
                              children: (0, a.jsx)("a", { href: e.link, children: "Learn More" }),
                            }),
                          ],
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              }),
            ],
          }),
        n = () =>
          (0, a.jsxs)("section", {
            className: "py-12 px-4 sm:px-6 lg:py-20 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50",
            children: [
              (0, a.jsxs)("div", {
                className: "max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 xl:gap-8 items-start",
                children: [
                  (0, a.jsxs)("div", {
                    className: "w-full lg:w-1/2 order-1 lg:order-none space-y-4",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "relative h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow-lg",
                        children: [
                          (0, a.jsx)(s.default, {
                            src: "/images/Stain-Removal.png",
                            alt: "Stain removal process",
                            layout: "fill",
                            objectFit: "cover",
                            className: "transition-transform duration-300 hover:scale-105",
                            priority: !0,
                          }),
                          (0, a.jsx)("div", { className: "absolute bottom-2 left-2" }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "relative h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow-lg",
                        children: [
                          (0, a.jsx)(s.default, {
                            src: "/images/WhatsApp-Image-2025-02-10-at-9.16.29-PM-6-1024x768.jpeg",
                            alt: "Clean results",
                            layout: "fill",
                            objectFit: "cover",
                            className: "transition-transform duration-300 hover:scale-105",
                            priority: !0,
                          }),
                          (0, a.jsx)("div", { className: "absolute bottom-2 left-2" }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "w-full lg:w-1/2 space-y-5 lg:space-y-6",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "space-y-3",
                        children: [
                          (0, a.jsx)("h2", {
                            className: "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900",
                            children: "Stain Removal",
                          }),
                          (0, a.jsx)("p", {
                            className: "text-lg sm:text-xl text-[#00c6f9] font-semibold",
                            children: "Make Stains Disappear With Precision Power Washing Services",
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "space-y-4",
                        children: [
                          "Persistent marks on your driveway, patio, siding, or roof can give your property an overlooked and aged appearance. Our expert stain removal service efficiently removes oil, rust, mildew, mold, and various stubborn stains, rejuvenating the original appearance of your surfaces in Cincinnati. Utilizing innovative power washing methods and environmentally safe products, we focus on the toughest stains without inflicting harm.",
                          "Various surfaces demand distinct methods, and our skilled team knows how to handle concrete, brick, wood, and additional materials safely and efficiently. Whether it’s a residential or commercial space, we guarantee a comprehensive, detailed clean that boosts curb appeal and safeguards your investment. Our professional cleaning services will ensure your surfaces are immaculate and invigorated.",
                        ].map((e, t) =>
                          (0, a.jsxs)(
                            "div",
                            {
                              className:
                                "flex items-start gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow",
                              children: [
                                (0, a.jsx)(i.A3x, { className: "w-5 h-5 sm:w-6 sm:h-6 text-sky-500 flex-shrink-0 mt-1" }),
                                (0, a.jsx)("p", { className: "text-gray-600 text-sm sm:text-base", children: e }),
                              ],
                            },
                            t,
                          ),
                        ),
                      }),
                      (0, a.jsxs)("a", {
                        href: "tel:513-570-0355",
                        className:
                          "mt-2 inline-flex items-center gap-2 bg-gradient-to-r from-[#00c6f9] to-cyan-600 text-white px-5 py-3 sm:px-6 sm:py-4 rounded-lg text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition-all",
                        children: [(0, a.jsx)(i.wnV, { className: "w-4 h-4 sm:w-5 sm:h-5" }), "513-570-0355"],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(o, {}),
            ],
          });
    },
  },
]);
