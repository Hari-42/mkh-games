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
    <header className="sticky top-0 z-50 border-b-2 border-[var(--coral)] bg-[#000000]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/gameicons/MKH-LOGO.png"
            alt="MKH-LOGO"
            width={40}
            height={40}
            className="h-10 w-auto object-contain [image-rendering:pixelated]"
            priority
          />
          <span className="hidden font-pixel text-sm text-white sm:block">
            MKH<span className="glow-coral">-GAMES</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${active ? "current" : ""}`}
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
          className="border-2 border-[var(--teal)] px-2 py-1 font-pixel text-xs text-[var(--teal)] md:hidden"
        >
          {menuOpen ? "X" : "="}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`${menuOpen ? "block" : "hidden"} border-t-2 border-[var(--teal)] bg-[#000000]/95 md:hidden`}
      >
        <nav className="mx-auto flex w-full max-w-5xl flex-col gap-1 px-4 py-4">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`nav-link px-2 py-3 ${active ? "current" : ""}`}
              >
                {"> "}
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
