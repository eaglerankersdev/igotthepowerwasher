"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7743],
  {
    7743: (e, s, a) => {
      a.d(s, { A: () => p });
      var r = a(5155),
        t = a(2115),
        l = a(1741),
        i = a(760),
        n = a(351),
        d = a(2177),
        o = a(8543);
      let c = (e) => {
          let { value: s, current: a, onChange: t, icon: l, label: i } = e;
          return (0, r.jsx)("button", {
            type: "button",
            onClick: () => t(s),
            className: "p-4 rounded-xl border-2 transition-all ".concat(
              a === s ? "border-[#00C6F9] bg-[#00C6F9]/10" : "border-gray-200 hover:border-gray-300",
            ),
            children: (0, r.jsxs)("div", {
              className: "flex items-center gap-3",
              children: [
                (0, r.jsx)("span", { className: "text-xl ".concat(a === s ? "text-[#00C6F9]" : "text-gray-500"), children: l }),
                (0, r.jsx)("span", { className: "font-medium ".concat(a === s ? "text-[#00C6F9]" : "text-gray-700"), children: i }),
              ],
            }),
          });
        },
        m = (e) => {
          let { label: s, icon: a, type: t, placeholder: l, error: i, ...n } = e;
          return (0, r.jsxs)("div", {
            className: "space-y-1",
            children: [
              (0, r.jsxs)("label", {
                className: "flex items-center gap-2 text-gray-700 font-medium",
                children: [a && (0, r.jsx)("span", { className: "text-[#00C6F9]", children: a }), s],
              }),
              (0, r.jsx)("input", {
                type: t,
                placeholder: l,
                className:
                  "w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all",
                ...n,
              }),
              i && (0, r.jsx)("p", { className: "text-red-500 text-sm mt-1", children: i.message }),
            ],
          });
        },
        x = (e) => {
          let { label: s, icon: a, placeholder: t, error: l, ...i } = e;
          return (0, r.jsxs)("div", {
            className: "space-y-1",
            children: [
              (0, r.jsxs)("label", {
                className: "flex items-center gap-2 text-gray-700 font-medium",
                children: [a && (0, r.jsx)("span", { className: "text-[#00C6F9]", children: a }), s],
              }),
              (0, r.jsx)("textarea", {
                placeholder: t,
                className:
                  "w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all h-32",
                ...i,
              }),
              l && (0, r.jsx)("p", { className: "text-red-500 text-sm mt-1", children: l.message }),
            ],
          });
        },
        u = (e) => {
          let { label: s, icon: a, options: t, ...l } = e;
          return (0, r.jsxs)("div", {
            className: "space-y-1",
            children: [
              (0, r.jsxs)("label", {
                className: "flex items-center gap-2 text-gray-700 font-medium",
                children: [a && (0, r.jsx)("span", { className: "text-[#00C6F9]", children: a }), s],
              }),
              (0, r.jsx)("select", {
                className:
                  "w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all appearance-none",
                ...l,
                children: t.map((e, s) => (0, r.jsx)("option", { value: e, children: e }, s)),
              }),
            ],
          });
        },
        p = () => {
          let [e, s] = (0, t.useState)("residential"),
            [p, h] = (0, t.useState)(!1),
            [b, y] = (0, t.useState)(!1),
            {
              register: g,
              handleSubmit: N,
              formState: { errors: j },
              reset: f,
            } = (0, d.mN)();
          (0, t.useEffect)(() => {
            h(!0);
          }, []);
          let v = async (e, s) =>
              (
                await a
                  .e(5518)
                  .then(a.bind(a, 5518))
                  .then((e) => e.default)
              ).send("service_hfg808d", s, e, "lXocWKHRdG0LTuRkR"),
            C = async (s) => {
              if (p) {
                y(!0);
                try {
                  let a = "commercial" === e,
                    r = {
                      customer_name: s.fullName || "Not provided",
                      customer_email: s.email || "Not provided",
                      phone_number: s.phoneNumber || "Not provided",
                      customer_type: a ? "COMMERCIAL" : "RESIDENTIAL",
                      message: s.message || "No message provided",
                      contact_time: s.contactTime || "Not specified",
                      reference: s.reference || "Not specified",
                      address_label: a ? "Business Address" : "Residential Address",
                      address_value: a ? s.companyAddress || "Not provided" : s.address || "Not provided",
                      business_name: a ? s.businessName || "Not provided" : "N/A",
                      suite_unit: a ? "N/A" : s.suite || "None",
                    };
                  (await v(r, "template_c3946rq"), f(), o.oR.success("Estimate request sent successfully!"));
                } catch (e) {
                  (console.error("Submission Error:", e), o.oR.error(e.message || "Failed to send estimate. Please try again."));
                } finally {
                  y(!1);
                }
              }
            };
          return p
            ? (0, r.jsx)("section", {
                className: "min-h-screen flex items-center justify-center py-12 bg-gradient-to-br from-gray-50 to-blue-50",
                children: (0, r.jsxs)(l.P.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5 },
                  className: "max-w-3xl w-full p-8 bg-white rounded-2xl shadow-2xl border border-gray-100",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "text-center mb-8",
                      children: [
                        (0, r.jsx)("h2", {
                          className: "text-3xl font-bold bg-gradient-to-r from-[#00C6F9] to-cyan-600 bg-clip-text text-transparent",
                          children: "Request Your Free Estimate",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-gray-600 mt-3",
                          children: "Get started with our professional services in 3 easy steps",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("form", {
                      onSubmit: N(C),
                      className: "space-y-6",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "mb-8",
                          children: [
                            (0, r.jsx)("label", {
                              className: "block text-lg font-semibold text-gray-700 mb-4",
                              children: "Customer Type *",
                            }),
                            (0, r.jsxs)("div", {
                              className: "grid grid-cols-2 gap-4",
                              children: [
                                (0, r.jsx)(c, {
                                  value: "residential",
                                  current: e,
                                  onChange: s,
                                  icon: (0, r.jsx)(n.V5Y, {}),
                                  label: "Residential",
                                }),
                                (0, r.jsx)(c, {
                                  value: "commercial",
                                  current: e,
                                  onChange: s,
                                  icon: (0, r.jsx)(n.qYx, {}),
                                  label: "Commercial",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "space-y-6",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                              children: [
                                (0, r.jsx)(m, {
                                  label: "Full Name *",
                                  icon: (0, r.jsx)(n.JXP, {}),
                                  type: "text",
                                  placeholder: "John Doe",
                                  ...g("fullName", { required: "Full name is required" }),
                                  error: j.fullName,
                                }),
                                (0, r.jsx)(m, {
                                  label: "Phone Number *",
                                  icon: (0, r.jsx)(n.QFc, {}),
                                  type: "tel",
                                  placeholder: "(555) 123-4567",
                                  ...g("phoneNumber", {
                                    required: "Phone number is required",
                                    pattern: { value: /^\+?[1-9]\d{1,14}$/, message: "Invalid phone number" },
                                  }),
                                  error: j.phoneNumber,
                                }),
                                (0, r.jsx)(m, {
                                  label: "Email Address *",
                                  icon: (0, r.jsx)(n.pHD, {}),
                                  type: "email",
                                  placeholder: "john@example.com",
                                  ...g("email", {
                                    required: "Email is required",
                                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" },
                                  }),
                                  error: j.email,
                                }),
                              ],
                            }),
                            (0, r.jsx)(i.N, {
                              mode: "wait",
                              children:
                                "residential" === e
                                  ? (0, r.jsxs)(
                                      l.P.div,
                                      {
                                        initial: { opacity: 0, x: -20 },
                                        animate: { opacity: 1, x: 0 },
                                        exit: { opacity: 0, x: 20 },
                                        className: "space-y-6",
                                        children: [
                                          (0, r.jsx)(m, {
                                            label: "Address *",
                                            icon: (0, r.jsx)(n.HzC, {}),
                                            type: "text",
                                            placeholder: "123 Main St",
                                            ...g("address", { required: "Address is required" }),
                                            error: j.address,
                                          }),
                                          (0, r.jsx)(m, { label: "Suite/Unit", type: "text", placeholder: "Apt 4B", ...g("suite") }),
                                          (0, r.jsx)(x, {
                                            label: "Message *",
                                            icon: (0, r.jsx)(n.mEP, {}),
                                            placeholder: "Tell us about your project...",
                                            ...g("message", { required: "Message is required" }),
                                            error: j.message,
                                          }),
                                        ],
                                      },
                                      "residential",
                                    )
                                  : (0, r.jsxs)(
                                      l.P.div,
                                      {
                                        initial: { opacity: 0, x: 20 },
                                        animate: { opacity: 1, x: 0 },
                                        exit: { opacity: 0, x: -20 },
                                        className: "space-y-6",
                                        children: [
                                          (0, r.jsx)(m, {
                                            label: "Business Name *",
                                            type: "text",
                                            placeholder: "Company Inc.",
                                            ...g("businessName", { required: "Business name is required" }),
                                            error: j.businessName,
                                          }),
                                          (0, r.jsx)(m, {
                                            label: "Company Address *",
                                            icon: (0, r.jsx)(n.HzC, {}),
                                            type: "text",
                                            placeholder: "456 Business Ave",
                                            ...g("companyAddress", { required: "Company address is required" }),
                                            error: j.companyAddress,
                                          }),
                                        ],
                                      },
                                      "commercial",
                                    ),
                            }),
                            (0, r.jsxs)("div", {
                              className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                              children: [
                                (0, r.jsx)(u, {
                                  label: "Preferred Contact Time",
                                  icon: (0, r.jsx)(n.Ohp, {}),
                                  options: ["Any Time", "Morning (8am-12pm)", "Afternoon (12pm-5pm)", "Evening (5pm-8pm)"],
                                  ...g("contactTime"),
                                }),
                                (0, r.jsx)(m, {
                                  label: "How did you hear about us?",
                                  type: "text",
                                  placeholder: "Referral, Social Media, etc.",
                                  ...g("reference"),
                                }),
                              ],
                            }),
                            (0, r.jsx)(l.P.button, {
                              type: "submit",
                              disabled: b,
                              whileHover: { scale: 1.02 },
                              whileTap: { scale: 0.98 },
                              className:
                                "w-full bg-gradient-to-r from-[#00C6F9] to-cyan-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all",
                              children: b ? "Sending Request..." : "Send Free Estimate Request",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : null;
        };
    },
  },
]);
