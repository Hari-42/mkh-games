"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

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
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)] backdrop-blur-xl">
      {/* thin gradient accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--coral)]/70 to-transparent" />

      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/gameicons/MKH-LOGO.png"
            alt="MKH-LOGO"
            width={36}
            height={36}
            className="h-9 w-auto object-contain"
            priority
          />
          <span className="font-pixel text-xs tracking-tight text-[var(--text)]">
            MKH<span className="text-[var(--coral)]">-GAMES</span>
          </span>
        </Link>

        <div className="flex items-center gap-3 md:gap-6">
          <nav className="hidden items-center gap-9 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-pixel text-[0.62rem] uppercase transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-[var(--coral)] after:transition-all after:duration-300 ${
                    active
                      ? "text-[var(--text)] after:w-full"
                      : "text-[var(--lav)] after:w-0 hover:text-[var(--text)] hover:after:w-full"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <ThemeToggle />

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text)] transition hover:bg-[var(--hover)] md:hidden"
          >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${menuOpen ? "block" : "hidden"} border-t border-[var(--border)] bg-[var(--surface-strong)] backdrop-blur-xl md:hidden`}
      >
        <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-3">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-3 font-pixel text-[0.62rem] uppercase transition ${
                  active
                    ? "bg-[var(--coral)]/15 text-[var(--text)]"
                    : "text-[var(--lav)] hover:bg-[var(--hover)] hover:text-[var(--text)]"
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
