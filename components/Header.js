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
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sm:flex sm:justify-between py-3">
        <div className="px-4 lg:px-8 mx-auto w-full max-w-4xl">
          <div className="border-b relative flex h-16 items-center justify-between w-full">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-6">
                <Image
                  src="/gameicons/MKH-LOGO.png"
                  alt="MKH-LOGO"
                  width={64}
                  height={64}
                  className="h-16 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            <div className="flex items-center">
              <nav className="flex items-center hidden md:block">
                {links.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`${active ? "current font-bold" : "font-medium"} inline-flex items-center justify-center text-sm h-10 px-4 py-2`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <button
                type="button"
                aria-label="Open mobile menu"
                onClick={() => setMenuOpen(true)}
                className="md:hidden inline-block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" className="stroke-current"></line>
                  <line x1="4" x2="20" y1="6" y2="6" className="stroke-current"></line>
                  <line x1="4" x2="20" y1="18" y2="18" className="stroke-current"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`${menuOpen ? "" : "hidden"} md:hidden fixed inset-x-0 top-16 bg-white z-50 shadow-md`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-800 text-2xl"
          >
            ×
          </button>
        </div>
        <div className="flex justify-center">
          <div className="space-y-2 px-4 py-2">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2 text-lg ${active ? "font-bold" : "font-semibold"} text-gray-800`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
