(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2920],
  {
    760: (e, t, s) => {
      "use strict";
      s.d(t, { N: () => j });
      var a = s(5155),
        n = s(2115),
        i = s(869),
        r = s(2885),
        l = s(7494),
        c = s(845),
        o = s(1508);
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
          l = (0, n.useRef)(null),
          c = (0, n.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
          { nonce: h } = (0, n.useContext)(o.Q);
        return (
          (0, n.useInsertionEffect)(() => {
            let { width: e, height: t, top: a, left: n, right: o } = c.current;
            if (s || !l.current || !e || !t) return;
            l.current.dataset.motionPopId = r;
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
                    .concat("left" === i ? "left: ".concat(n) : "right: ".concat(o), "px !important;\n            top: ")
                    .concat(a, "px !important;\n          }\n        "),
                ),
              () => {
                document.head.removeChild(d);
              }
            );
          }, [s]),
          (0, a.jsx)(d, { isPresent: s, childRef: l, sizeRef: c, children: n.cloneElement(t, { ref: l }) })
        );
      }
      let x = (e) => {
        let { children: t, initial: s, isPresent: i, onExitComplete: l, custom: o, presenceAffectsLayout: d, mode: x, anchorX: u } = e,
          p = (0, r.M)(m),
          f = (0, n.useId)(),
          j = (0, n.useCallback)(
            (e) => {
              for (let t of (p.set(e, !0), p.values())) if (!t) return;
              l && l();
            },
            [p, l],
          ),
          g = (0, n.useMemo)(
            () => ({ id: f, initial: s, isPresent: i, custom: o, onExitComplete: j, register: (e) => (p.set(e, !1), () => p.delete(e)) }),
            d ? [Math.random(), j] : [i, j],
          );
        return (
          (0, n.useMemo)(() => {
            p.forEach((e, t) => p.set(t, !1));
          }, [i]),
          n.useEffect(() => {
            i || p.size || !l || l();
          }, [i]),
          "popLayout" === x && (t = (0, a.jsx)(h, { isPresent: i, anchorX: u, children: t })),
          (0, a.jsx)(c.t.Provider, { value: g, children: t })
        );
      };
      function m() {
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
      let j = (e) => {
        let {
            children: t,
            custom: s,
            initial: c = !0,
            onExitComplete: o,
            presenceAffectsLayout: d = !0,
            mode: h = "sync",
            propagate: m = !1,
            anchorX: j = "left",
          } = e,
          [g, w] = (0, u.xQ)(m),
          y = (0, n.useMemo)(() => f(t), [t]),
          N = m && !g ? [] : y.map(p),
          v = (0, n.useRef)(!0),
          b = (0, n.useRef)(y),
          C = (0, r.M)(() => new Map()),
          [E, P] = (0, n.useState)(y),
          [M, k] = (0, n.useState)(y);
        (0, l.E)(() => {
          ((v.current = !1), (b.current = y));
          for (let e = 0; e < M.length; e++) {
            let t = p(M[e]);
            N.includes(t) ? C.delete(t) : !0 !== C.get(t) && C.set(t, !1);
          }
        }, [M, N.length, N.join("-")]);
        let F = [];
        if (y !== E) {
          let e = [...y];
          for (let t = 0; t < M.length; t++) {
            let s = M[t],
              a = p(s);
            N.includes(a) || (e.splice(t, 0, s), F.push(s));
          }
          return ("wait" === h && F.length && (e = F), k(f(e)), P(y), null);
        }
        let { forceRender: R } = (0, n.useContext)(i.L);
        return (0, a.jsx)(a.Fragment, {
          children: M.map((e) => {
            let t = p(e),
              n = (!m || !!g) && (y === M || N.includes(t));
            return (0, a.jsx)(
              x,
              {
                isPresent: n,
                initial: (!v.current || !!c) && void 0,
                custom: s,
                presenceAffectsLayout: d,
                mode: h,
                onExitComplete: n
                  ? void 0
                  : () => {
                      if (!C.has(t)) return;
                      C.set(t, !0);
                      let e = !0;
                      (C.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (null == R || R(), k(b.current), m && (null == w || w()), o && o()));
                    },
                anchorX: j,
                children: e,
              },
              t,
            );
          }),
        });
      };
    },
    2752: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 8334));
    },
    8334: (e, t, s) => {
      "use strict";
      (s.r(t), s.d(t, { default: () => o }));
      var a = s(5155),
        n = s(1741),
        i = s(351),
        r = s(7743),
        l = s(9911);
      let c = () =>
          (0, a.jsx)("section", {
            className: "bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:py-24 lg:px-8",
            children: (0, a.jsx)("div", {
              className: "max-w-7xl mx-auto",
              children: (0, a.jsxs)("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 lg:gap-12",
                children: [
                  (0, a.jsxs)("div", {
                    className: "bg-white rounded-2xl shadow-xl ",
                    children: [
                      (0, a.jsx)("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Contact Us Today" }),
                      (0, a.jsx)(r.A, {}),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "space-y-8",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "bg-white rounded-2xl shadow-xl p-8",
                        children: [
                          (0, a.jsx)("h3", { className: "text-xl font-semibold text-gray-900 mb-6", children: "Get in Touch" }),
                          (0, a.jsxs)("div", {
                            className: "space-y-4",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                  (0, a.jsx)(i.QFc, { className: "w-6 h-6 text-[#00C6F9] mr-3" }),
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("p", { className: "font-medium", children: "Phone" }),
                                      (0, a.jsx)("p", { className: "text-gray-600", children: "513-570-0355" }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                  (0, a.jsx)(i.pHD, { className: "w-6 h-6 text-[#00C6F9] mr-3" }),
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("p", { className: "font-medium", children: "Email" }),
                                      (0, a.jsx)("p", { className: "text-gray-600", children: "contact@igotthepowerwasher.com" }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                  (0, a.jsx)(i.HzC, { className: "w-6 h-6 text-[#00C6F9] mr-3" }),
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("p", { className: "font-medium", children: "Address" }),
                                      (0, a.jsx)("p", { className: "text-gray-600", children: "Cincinnati, OH and surrounding areas" }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "bg-white rounded-2xl shadow-xl p-8",
                        children: [
                          (0, a.jsx)("h3", { className: "text-xl font-semibold text-gray-900 mb-6", children: "Store Hours" }),
                          (0, a.jsxs)("div", {
                            className: "space-y-3",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex justify-between",
                                children: [
                                  (0, a.jsx)("span", { className: "text-gray-600", children: "Monday - Friday" }),
                                  (0, a.jsx)("span", { className: "font-medium", children: "8:00 AM - 4:00 PM" }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex justify-between",
                                children: [
                                  (0, a.jsx)("span", { className: "text-gray-600", children: "Saturday - Sunday" }),
                                  (0, a.jsx)("span", { className: "font-medium", children: "Closed" }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "bg-white rounded-2xl shadow-xl p-8",
                        children: [
                          (0, a.jsx)("h3", { className: "text-xl font-semibold text-gray-900 mb-6", children: "Follow Us" }),
                          (0, a.jsxs)("div", {
                            className: "flex space-x-4",
                            children: [
                              (0, a.jsx)("a", {
                                href: "https://www.facebook.com/tony.werner.94402?mibextid=LQQJ4d",
                                className: "text-gray-600 hover:text-[#00C6F9] transition-colors",
                                children: (0, a.jsx)(i.spH, { className: "w-6 h-6" }),
                              }),
                              (0, a.jsx)("a", {
                                href: "https://www.instagram.com/igotthepowerwasher/",
                                className: "text-gray-600 hover:text-[#00C6F9] transition-colors",
                                children: (0, a.jsx)(i.eCe, { className: "w-6 h-6" }),
                              }),
                              (0, a.jsx)("a", {
                                href: "https://www.tiktok.com/@igotthepowerwasher",
                                className: "text-gray-600 hover:text-[#00C6F9] transition-colors",
                                children: (0, a.jsx)(l.kkU, { className: "w-6 h-6" }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        o = () =>
          (0, a.jsxs)("div", {
            children: [
              (0, a.jsxs)("div", {
                className:
                  "relative flex items-center justify-center min-h-[60vh] bg-[#00C6F9] to-white bg-center bg-no-repeat bg-cover z-0",
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
                        children: "Contact Us",
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
              (0, a.jsx)(c, {}),
            ],
          });
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [844, 6711, 1741, 7612, 7743, 8441, 1684, 7358], () => t(2752)), (_N_E = e.O()));
  },
]);
