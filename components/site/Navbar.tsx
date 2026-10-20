"use client";

// UX-refined navbar. Same look as the original (module 9501, kept in components/m for reference):
// logo, cyan links, chevron dropdowns, "Free Estimate" button, bubbles Lottie background.
// Changes: desktop menu from lg (no cramped two-line wrap at 768–1023px), dropdowns open on hover
// and click with aria-expanded, Escape closes, chevrons rotate, current page is highlighted,
// mobile menu toggles between bars/close with a correct label.
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { FaBars, FaChevronDown, FaChevronRight, FaTimes } from "react-icons/fa";
import bubbles from "@/lib/lottie/m/M7842-bubbles-09.json";
import { NAV, type NavItem, type NavLink } from "./nav-data";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const isActive = (path: string, href?: string) => !!href && (href === "/" ? path === "/" : path === href || path.startsWith(href + "/"));
const containsActive = (path: string, links?: NavLink[]): boolean => !!links?.some((l) => isActive(path, l.href) || containsActive(path, l.children));

export default function Navbar() {
  const path = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = useId();

  const closeAll = useCallback(() => {
    setOpenMenu(null);
    setOpenSub(null);
  }, []);

  // Publish the real header height so first-screen layouts (homepage hero) can fit below it.
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const set = () => document.documentElement.style.setProperty("--nav-h", `${el.offsetHeight}px`);
    set();
    const ro = new ResizeObserver(set);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // composedPath() keeps nodes that a re-render detached during this click (e.g. the icon swap).
      if (navRef.current && !e.composedPath().includes(navRef.current)) {
        setMobileOpen(false);
        closeAll();
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeAll();
        setMobileOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [closeAll]);

  // Desktop hover intent: open immediately, close after a short grace period.
  const hoverOpen = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (window.matchMedia("(min-width: 1024px) and (hover: hover)").matches) {
      setOpenMenu(key);
      setOpenSub(null);
    }
  };
  const hoverClose = () => {
    if (!window.matchMedia("(min-width: 1024px) and (hover: hover)").matches) return;
    closeTimer.current = setTimeout(closeAll, 180);
  };

  const linkBase = "flex items-center py-2 px-3 rounded-md transition-colors duration-150";
  const linkColor = (active: boolean) => (active ? "text-[#027BBA] font-semibold" : "text-[#027BBA] hover:text-[#80a2d4]");

  const renderDropdown = (item: NavItem) => (
    <div
      id={`${menuId}-${item.key}`}
      role="menu"
      className={`absolute z-30 mt-1 text-sm bg-white border border-sky-300 rounded-lg shadow-md nav-pop ${item.key === "commercial" ? "min-w-[200px]" : "w-auto"}`}
    >
      <ul className="p-4 space-y-4 text-[#027BBA] whitespace-nowrap">
        {item.children!.map((c) =>
          c.children ? (
            <li key={c.href} className="relative" role="none">
              <div className="flex items-center w-full text-left gap-2">
                <a role="menuitem" href={c.href} className={`hover:underline underline-offset-4 ${isActive(path, c.href) ? "font-semibold" : ""}`}>
                  {c.label}
                </a>
                <button
                  type="button"
                  aria-label={`Show ${c.label} services`}
                  aria-expanded={openSub === c.href}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenSub(openSub === c.href ? null : c.href);
                  }}
                  onMouseEnter={() => setOpenSub(c.href)}
                  className="p-1 -m-1 rounded hover:bg-sky-50"
                >
                  <FaChevronRight aria-hidden className={`transition-transform duration-200 ${openSub === c.href ? "rotate-90 lg:rotate-0" : ""}`} />
                </button>
              </div>
              {openSub === c.href && (
                <div className="lg:absolute lg:left-full lg:top-0 z-30 mt-3 lg:mt-0 lg:ml-4 min-w-[220px] bg-white border border-sky-300 rounded-lg shadow-md nav-pop">
                  <ul className="p-4 space-y-4 text-[#027BBA] whitespace-nowrap">
                    {c.children.map((g) => (
                      <li key={g.href} role="none">
                        <a role="menuitem" href={g.href} className={`hover:underline underline-offset-4 ${isActive(path, g.href) ? "font-semibold" : ""}`} aria-current={isActive(path, g.href) ? "page" : undefined}>
                          {g.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li key={c.href} role="none">
              <a role="menuitem" href={c.href} className={`hover:underline underline-offset-4 ${isActive(path, c.href) ? "font-semibold" : ""}`} aria-current={isActive(path, c.href) ? "page" : undefined}>
                {c.label}
              </a>
            </li>
          ),
        )}
      </ul>
    </div>
  );

  return (
    <nav ref={navRef} className="bg-white relative" aria-label="Main">
      <div className="absolute inset-0 z-0 opacity-50 overflow-hidden" aria-hidden>
        <Lottie
          animationData={bubbles}
          loop
          style={{ width: "100%", height: "100%", transform: "scale(2)" }}
          rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
          className="hidden lg:block"
        />
        <Lottie animationData={bubbles} loop style={{ width: "100%", height: "100%", transform: "scale(2)" }} className="lg:hidden" />
      </div>
      <div className="relative z-10 flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <a href="/" className="w-32 h-auto rounded-lg" aria-label="I Got The Power Washer, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/uft.png" className="w-full h-full object-contain" alt="I Got The Power Washer logo" width={128} height={152} />
        </a>
        <div className="flex items-center lg:order-2 space-x-1 lg:space-x-2 rtl:space-x-reverse">
          <a
            href="/get-estimate"
            className="text-white bg-[#027BBA] hover:bg-blue-600 active:scale-[0.98] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 focus:outline-none transition"
          >
            Free Estimate
          </a>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setMobileOpen(!mobileOpen);
            }}
            aria-expanded={mobileOpen}
            aria-controls={`${menuId}-mobile`}
            className="inline-flex items-center p-2 w-11 h-11 justify-center text-sm text-[#027BBA] rounded-lg lg:hidden hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <span className="sr-only">{mobileOpen ? "Close main menu" : "Open main menu"}</span>
            {mobileOpen ? <FaTimes className="w-5 h-5" aria-hidden /> : <FaBars className="w-5 h-5" aria-hidden />}
          </button>
        </div>
        <div id={`${menuId}-mobile`} className={`${mobileOpen ? "block" : "hidden"} items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}>
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:mt-0 lg:space-x-6 xl:space-x-8 rtl:space-x-reverse">
            {NAV.map((item) => {
              const active = isActive(path, item.href) || containsActive(path, item.children);
              if (!item.children)
                return (
                  <li key={item.key}>
                    <a href={item.href} className={`${linkBase} ${linkColor(active)}`} aria-current={active ? "page" : undefined}>
                      {item.label}
                    </a>
                  </li>
                );
              const open = openMenu === item.key;
              return (
                <li key={item.key} className="lg:relative" onMouseEnter={() => hoverOpen(item.key)} onMouseLeave={hoverClose}>
                  <div className={`${linkBase} ${linkColor(active)} gap-2`}>
                    {item.href ? (
                      <a href={item.href} aria-current={isActive(path, item.href) ? "page" : undefined}>
                        {item.label}
                      </a>
                    ) : (
                      <button type="button" onClick={(e) => { e.stopPropagation(); setOpenMenu(open ? null : item.key); setOpenSub(null); }} aria-expanded={open} aria-haspopup="menu" aria-controls={`${menuId}-${item.key}`}>
                        {item.label}
                      </button>
                    )}
                    <button
                      type="button"
                      aria-label={`${open ? "Hide" : "Show"} ${item.label} menu`}
                      aria-expanded={open}
                      aria-haspopup="menu"
                      aria-controls={`${menuId}-${item.key}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenMenu(open ? null : item.key);
                        setOpenSub(null);
                      }}
                      className="p-1 -m-1 rounded"
                    >
                      <FaChevronDown aria-hidden className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  {open && renderDropdown(item)}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
