"use client";

// Phone-only quick actions for a local service business: call or request an estimate from anywhere
// on the page. Appears after the visitor scrolls past the first screen, hides on the estimate page.
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCalendarCheck, FaPhoneAlt } from "react-icons/fa";
import { PHONE_DISPLAY, PHONE_TEL } from "./nav-data";

export default function MobileActionBar() {
  const path = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (path === "/get-estimate") return null;

  return (
    <div
      className={`mobile-action-bar md:hidden fixed inset-x-0 bottom-0 z-40 bg-white/95 border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] transition-transform duration-300 ease-out ${visible ? "translate-y-0" : "translate-y-full"}`}
      aria-hidden={!visible}
    >
      <div className="grid grid-cols-2 gap-2">
        <a
          href={PHONE_TEL}
          tabIndex={visible ? 0 : -1}
          className="flex items-center justify-center gap-2 h-12 rounded-lg border border-[#027BBA] text-[#027BBA] font-semibold text-sm active:scale-[0.98] transition"
          aria-label={`Call ${PHONE_DISPLAY}`}
        >
          <FaPhoneAlt aria-hidden /> Call now
        </a>
        <a
          href="/get-estimate"
          tabIndex={visible ? 0 : -1}
          className="flex items-center justify-center gap-2 h-12 rounded-lg bg-[#027BBA] text-white font-semibold text-sm active:scale-[0.98] transition"
        >
          <FaCalendarCheck aria-hidden /> Free Estimate
        </a>
      </div>
    </div>
  );
}
