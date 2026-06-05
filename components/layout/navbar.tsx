"use client";

import Link from "next/link";
import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/learning", label: "Learning" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}

          <Link href="/" className="group">
            <div>
              <h1 className="text-xl font-bold tracking-tight text-zinc-900">
                Nandita Mahesh
              </h1>

              <p className="text-xs font-medium text-green-700">
                Building • Learning • Documenting
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-600 transition-colors duration-200 hover:text-green-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}

          <Link
            href="/contact"
            className="hidden rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700 md:inline-flex"
          >
            Let&quot;s Connect
          </Link>

          {/* Mobile Toggle

          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open ? "true" : "false"}
            onClick={() => setOpen(!open)}
            className="rounded-full border border-green-200 p-3 text-green-700 transition hover:bg-green-50 md:hidden"
          >
            {open ? (
              <HiXMark size={22} />
            ) : (
              <HiBars3 size={22} />
            )}
          </button> */}
        </div>

        {/* Mobile Menu */}

        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            open
              ? "max-h-96 border-t border-green-100 py-5"
              : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-medium text-zinc-700 transition hover:text-green-700"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-green-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-green-700"
            >
              Let&quot;s Connect
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}