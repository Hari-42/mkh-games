"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "/about", label: "About" },
  { href: "/story", label: "Story" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07070c]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/gameicons/MKH-LOGO.png"
            alt="MKH-LOGO"
            width={44}
            height={44}
            className="h-11 w-auto object-contain"
            priority
          />
          <span className="hidden text-lg font-bold tracking-tight text-white sm:block">
            MKH<span className="gradient-text">-GAMES</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium ${active ? "current" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Open mobile menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-200 transition hover:bg-white/10 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            {menuOpen ? (
              <>
                <line x1="6" x2="18" y1="6" y2="18" className="stroke-current" strokeWidth="2" />
                <line x1="6" x2="18" y1="18" y2="6" className="stroke-current" strokeWidth="2" />
              </>
            ) : (
              <>
                <line x1="4" x2="20" y1="12" y2="12" className="stroke-current" strokeWidth="2" />
                <line x1="4" x2="20" y1="6" y2="6" className="stroke-current" strokeWidth="2" />
                <line x1="4" x2="20" y1="18" y2="18" className="stroke-current" strokeWidth="2" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`${menuOpen ? "block" : "hidden"} border-t border-white/10 bg-[#07070c]/95 backdrop-blur-xl md:hidden`}
      >
        <nav className="mx-auto flex w-full max-w-5xl flex-col px-4 py-3">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-3 text-base font-medium transition ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
