"use client";

// Homepage intro: the original "water drop → splash" Lottie (lfvideo2lottie, 235 frames, 24 fps).
// Original problems: frames were upscaled ~3x (150vw × scale 1.5) and the page behind was blurred,
// so everything looked soft; it blocked every visit for ~10 s with no way out.
// Now: frames cover the viewport at ~1.3x, crisp solid backdrop, skippable, once per session,
// skipped under prefers-reduced-motion, faded out, never blocks longer than 12 s.
import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const SEEN_KEY = "igtpw-intro-seen";
const MAX_MS = 12000;

export default function SplashLoader() {
  const [data, setData] = useState<object | null>(null);
  const [phase, setPhase] = useState<"show" | "leaving" | "gone">("show");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const finish = useCallback(() => {
    setPhase((p) => (p === "show" ? "leaving" : p));
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {}
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {}
    if (reduce || seen) {
      setPhase("gone");
      return;
    }
    document.documentElement.classList.add("intro-lock");
    fetch("/lottie/intro-splash.json")
      .then((r) => r.json())
      .then(setData)
      .catch(finish);
    timer.current = setTimeout(finish, MAX_MS);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && finish();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (timer.current) clearTimeout(timer.current);
    };
  }, [finish]);

  useEffect(() => {
    if (phase === "show") return;
    document.documentElement.classList.remove("intro-lock");
    if (phase === "leaving") {
      const t = setTimeout(() => setPhase("gone"), 450);
      return () => clearTimeout(t);
    }
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div
      className={`intro-splash fixed inset-0 z-50 bg-white transition-opacity duration-[450ms] ease-out ${phase === "leaving" ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      role="dialog"
      aria-label="Intro animation"
      onClick={finish}
    >
      {data ? (
        <Lottie
          animationData={data}
          loop={false}
          onComplete={finish}
          rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
          className="absolute inset-0 w-full h-full"
          aria-hidden
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
          <div className="w-24 h-24 bg-gray-200 rounded-full animate-pulse" />
        </div>
      )}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          finish();
        }}
        className="absolute bottom-6 right-6 z-10 rounded-full bg-white/95 px-5 py-2.5 text-sm font-medium text-gray-800 shadow-md ring-1 ring-gray-200 hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] transition"
      >
        Skip intro
      </button>
    </div>
  );
}
