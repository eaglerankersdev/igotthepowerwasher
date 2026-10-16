(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4257],
  {
    8222: (e, s, a) => {
      Promise.resolve().then(a.bind(a, 8261));
    },
    8261: (e, s, a) => {
      "use strict";

      a.d(s, {
        default: () => d,
      });
      var r = a(5155),
        t = a(2115),
        l = a(2177),
        i = a(351),
        n = a(1741),
        o = a(8543);
      let d = () => {
        var e, s, d;
        let {
            register: c,
            handleSubmit: m,
            formState: { errors: p },
            reset: x,
            watch: u,
          } = (0, l.mN)(),
          [f, h] = t.useState(false),
          g = u("resume"),
          N = async (e) => {
            if (!e) throw Error("No file selected");
            let s = new FormData();
            (s.append("file", e), s.append("upload_preset", "my_preset"));
            try {
              let e = await fetch("https://api.cloudinary.com/v1_1/".concat("dclk5o3ua", "/upload"), {
                method: "POST",
                body: s,
              });
              if (!e.ok) throw Error("Upload failed");
              return (await e.json()).secure_url;
            } catch (e) {
              throw (console.error("Upload error:", e), e);
            }
          },
          y = async (e) => {
            h(true);
            try {
              var s;
              let r = await a
                  .e(5518)
                  .then(a.bind(a, 5518))
                  .then((e) => e.default),
                t = null === (s = e.resume) || void 0 === s ? void 0 : s[0];
              if (!t) throw Error("Resume is required");
              if (
                ![
                  "application/pdf",
                  "application/msword",
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                ].includes(t.type)
              )
                throw Error("Only PDF and Word documents are allowed");
              if (t.size > 5242880) throw Error("File size exceeds 5MB limit");
              let l = await N(t);
              (await r.send(
                "service_hfg808d",
                "template_9fky4ce",
                {
                  first_name: e.firstName,
                  last_name: e.lastName,
                  email: e.email,
                  phone: e.phone,
                  cover_letter: e.message || "No cover letter provided",
                  resume_link: l,
                  filename: t.name,
                },
                "lXocWKHRdG0LTuRkR",
              ),
                o.oR.success("Application submitted successfully!"),
                x());
            } catch (e) {
              (console.error("Submission error:", e), o.oR.error(e.message || "Failed to submit application"));
            } finally {
              h(false);
            }
          };
        return (
          <C_n.P.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="max-w-3xl mx-auto bg-gradient-to-br from-white to-blue-50 shadow-xl rounded-2xl p-8 mt-10 border border-gray-100"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00C6F9] to-cyan-600 bg-clip-text text-transparent">
                Join Our Team
              </h2>
              <p className="text-lg text-gray-600 mt-3">
                We're expanding in Cincinnati! Whether you prefer team collaboration or independent work,
                <br />
                <span className="font-semibold text-[#00C6F9]">Find your perfect role with us</span>
              </p>
            </div>
            <form onSubmit={m(y)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium flex items-center gap-1">
                    <C_i.JXP className="text-[#00C6F9]" />
                    {"First Name "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...c("firstName", {
                      required: "First Name is required",
                    })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all"
                    placeholder="John"
                  />
                  {p.firstName && (
                    <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                      <C_i.y3G className="inline" /> {p.firstName.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium flex items-center gap-1">
                    <C_i.JXP className="text-[#00C6F9]" />
                    {"Last Name "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...c("lastName", {
                      required: "Last Name is required",
                    })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                  {p.lastName && (
                    <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                      <C_i.y3G className="inline" /> {p.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium flex items-center gap-1">
                    <C_i.pHD className="text-[#00C6F9]" />
                    {"Email Address "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...c("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                  {p.email && (
                    <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                      <C_i.y3G className="inline" /> {p.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium flex items-center gap-1">
                    <C_i.QFc className="text-[#00C6F9]" />
                    {"Phone Number "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    {...c("phone", {
                      required: "Phone Number is required",
                      pattern: {
                        value: /^\+?[1-9]\d{1,14}$/,
                        message: "Invalid phone number",
                      },
                    })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                  />
                  {p.phone && (
                    <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                      <C_i.y3G className="inline" /> {p.phone.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium flex items-center gap-1">
                  <C_i.jH2 className="text-[#00C6F9]" />
                  Cover Letter
                </label>
                <textarea
                  {...c("message")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all"
                  rows="4"
                  placeholder="Tell us why you'd be a great fit..."
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium flex items-center gap-1">
                  <C_i.jH2 className="text-[#00C6F9]" />
                  {"Upload Resume (PDF/DOC) "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#00C6F9] transition-colors">
                  <input
                    type="file"
                    {...c("resume", {
                      required: "Resume is required",
                      validate: {
                        fileSize: (e) => {
                          var s;
                          return (
                            (null == e ? void 0 : null === (s = e[0]) || void 0 === s ? void 0 : s.size) <= 5242880 ||
                            "Max file size is 5MB"
                          );
                        },
                        fileType: (e) => {
                          var s;
                          return (
                            [
                              "application/pdf",
                              "application/msword",
                              "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                            ].includes(null == e ? void 0 : null === (s = e[0]) || void 0 === s ? void 0 : s.type) ||
                            "Only PDF and DOC files are allowed"
                          );
                        },
                      },
                    })}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".pdf,.doc,.docx"
                  />
                  <p className="text-gray-500">
                    {(null == g ? void 0 : null === (e = g[0]) || void 0 === e ? void 0 : e.name) || "Drag & drop files here or"}
                    {!(null == g ? void 0 : null === (s = g[0]) || void 0 === s ? void 0 : s.name) && (
                      <C_r.Fragment>
                        {" "}
                        <span className="text-[#00C6F9] font-medium">browse</span>
                      </C_r.Fragment>
                    )}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    {(null == g ? void 0 : null === (d = g[0]) || void 0 === d ? void 0 : d.name)
                      ? "".concat((g[0].size / 1024 / 1024).toFixed(2), "MB")
                      : "Max file size: 5MB"}
                  </p>
                </div>
                {p.resume && (
                  <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                    <C_i.y3G className="inline" /> {p.resume.message}
                  </p>
                )}
              </div>
              <C_n.P.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                type="submit"
                disabled={f}
                className="w-full bg-gradient-to-r from-[#00C6F9] to-cyan-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {f ? "Submitting..." : "Submit Application"}
                {!f && <C_i.dyV className="w-5 h-5" />}
              </C_n.P.button>
            </form>
          </C_n.P.div>
        );
      };
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    (e.O(0, [844, 1741, 7612, 8441, 1684, 7358], () => s(8222)), (_N_E = e.O()));
  },
]);
