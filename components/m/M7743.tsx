// @ts-nocheck
/* eslint-disable */
"use client";
// Unbundled from igtpw.com chunk 7743-87efd38f77d379ee.js, webpack module 7743.
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiBriefcase, FiUser, FiPhone, FiMail, FiMapPin, FiMessageSquare, FiClock } from "react-icons/fi";

let CC_ = (e) => {
    let { value: s, current: a, onChange: t, icon: l, label: i } = e;
    return (
      <button
        type="button"
        onClick={() => t(s)}
        className={"p-4 rounded-xl border-2 transition-all ".concat(
          a === s ? "border-[#00C6F9] bg-[#00C6F9]/10" : "border-gray-200 hover:border-gray-300",
        )}
      >
        <div className="flex items-center gap-3">
          <span className={"text-xl ".concat(a === s ? "text-[#00C6F9]" : "text-gray-500")}>{l}</span>
          <span className={"font-medium ".concat(a === s ? "text-[#00C6F9]" : "text-gray-700")}>{i}</span>
        </div>
      </button>
    );
  },
  CM_ = (e) => {
    let { label: s, icon: a, type: t, placeholder: l, error: i, ...n } = e;
    return (
      <div className="space-y-1">
        <label className="flex items-center gap-2 text-gray-700 font-medium">
          {a && <span className="text-[#00C6F9]">{a}</span>}
          {s}
        </label>
        <input
          type={t}
          placeholder={l}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all"
          {...n}
        />
        {i && <p className="text-red-500 text-sm mt-1">{i.message}</p>}
      </div>
    );
  },
  CX_ = (e) => {
    let { label: s, icon: a, placeholder: t, error: l, ...i } = e;
    return (
      <div className="space-y-1">
        <label className="flex items-center gap-2 text-gray-700 font-medium">
          {a && <span className="text-[#00C6F9]">{a}</span>}
          {s}
        </label>
        <textarea
          placeholder={t}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all h-32"
          {...i}
        />
        {l && <p className="text-red-500 text-sm mt-1">{l.message}</p>}
      </div>
    );
  },
  CU_ = (e) => {
    let { label: s, icon: a, options: t, ...l } = e;
    return (
      <div className="space-y-1">
        <label className="flex items-center gap-2 text-gray-700 font-medium">
          {a && <span className="text-[#00C6F9]">{a}</span>}
          {s}
        </label>
        <select
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00C6F9] focus:border-transparent transition-all appearance-none"
          {...l}
        >
          {t.map((e, s) => (
            <option value={e} key={s}>
              {e}
            </option>
          ))}
        </select>
      </div>
    );
  },
  p = () => {
    let [e, s] = useState("residential"),
      [p, h] = useState(!1),
      [b, y] = useState(!1),
      {
        register: g,
        handleSubmit: N,
        formState: { errors: j },
        reset: f,
      } = useForm();
    useEffect(() => {
      h(!0);
    }, []);
    let v = async (e, s) => (await import("@/lib/emailjs").then((e) => e.default)).send("service_hfg808d", s, e, "lXocWKHRdG0LTuRkR"),
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
            (await v(r, "template_c3946rq"), f(), toast.success("Estimate request sent successfully!"));
          } catch (e) {
            (console.error("Submission Error:", e), toast.error(e.message || "Failed to send estimate. Please try again."));
          } finally {
            y(!1);
          }
        }
      };
    return p ? (
      <section className="min-h-screen flex items-center justify-center py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <motion.div
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
          className="max-w-3xl w-full p-8 bg-white rounded-2xl shadow-2xl border border-gray-100"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00C6F9] to-cyan-600 bg-clip-text text-transparent">
              {"Request Your Free Estimate"}
            </h2>
            <p className="text-gray-600 mt-3">{"Get started with our professional services in 3 easy steps"}</p>
          </div>
          <form onSubmit={N(C)} className="space-y-6">
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-700 mb-4">{"Customer Type *"}</label>
              <div className="grid grid-cols-2 gap-4">
                <CC_ value="residential" current={e} onChange={s} icon={<FiHome />} label="Residential" />
                <CC_ value="commercial" current={e} onChange={s} icon={<FiBriefcase />} label="Commercial" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CM_
                  label="Full Name *"
                  icon={<FiUser />}
                  type="text"
                  placeholder="John Doe"
                  {...g("fullName", {
                    required: "Full name is required",
                  })}
                  error={j.fullName}
                />
                <CM_
                  label="Phone Number *"
                  icon={<FiPhone />}
                  type="tel"
                  placeholder="(555) 123-4567"
                  {...g("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\+?[1-9]\d{1,14}$/,
                      message: "Invalid phone number",
                    },
                  })}
                  error={j.phoneNumber}
                />
                <CM_
                  label="Email Address *"
                  icon={<FiMail />}
                  type="email"
                  placeholder="john@example.com"
                  {...g("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  error={j.email}
                />
              </div>
              <AnimatePresence mode="wait">
                {"residential" === e ? (
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: 20,
                    }}
                    className="space-y-6"
                    key={"residential"}
                  >
                    <CM_
                      label="Address *"
                      icon={<FiMapPin />}
                      type="text"
                      placeholder="123 Main St"
                      {...g("address", {
                        required: "Address is required",
                      })}
                      error={j.address}
                    />
                    <CM_ label="Suite/Unit" type="text" placeholder="Apt 4B" {...g("suite")} />
                    <CX_
                      label="Message *"
                      icon={<FiMessageSquare />}
                      placeholder="Tell us about your project..."
                      {...g("message", {
                        required: "Message is required",
                      })}
                      error={j.message}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -20,
                    }}
                    className="space-y-6"
                    key={"commercial"}
                  >
                    <CM_
                      label="Business Name *"
                      type="text"
                      placeholder="Company Inc."
                      {...g("businessName", {
                        required: "Business name is required",
                      })}
                      error={j.businessName}
                    />
                    <CM_
                      label="Company Address *"
                      icon={<FiMapPin />}
                      type="text"
                      placeholder="456 Business Ave"
                      {...g("companyAddress", {
                        required: "Company address is required",
                      })}
                      error={j.companyAddress}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CU_
                  label="Preferred Contact Time"
                  icon={<FiClock />}
                  options={["Any Time", "Morning (8am-12pm)", "Afternoon (12pm-5pm)", "Evening (5pm-8pm)"]}
                  {...g("contactTime")}
                />
                <CM_ label="How did you hear about us?" type="text" placeholder="Referral, Social Media, etc." {...g("reference")} />
              </div>
              <motion.button
                type="submit"
                disabled={b}
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="w-full bg-gradient-to-r from-[#00C6F9] to-cyan-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                {b ? "Sending Request..." : "Send Free Estimate Request"}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </section>
    ) : null;
  };

export { p as A };
