"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sprout } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Certificates" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between rounded-2xl border border-green-100 bg-white px-6 py-4 shadow-sm">

            {/* Logo */}
            <Link href="/" className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-tight">
                Nandita Mahesh
              </span>

              <span className="text-sm font-medium text-green-700">
                Software Engineer
              </span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-1">
              {links.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-xl px-5 py-3 text-base font-medium transition-all ${
                      active
                        ? "bg-green-50 text-green-700"
                        : "text-zinc-700 hover:bg-green-50 hover:text-green-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <a
              href="mailto:nanditam2029@gmail.com"
              className="hidden lg:flex items-center rounded-xl bg-green-700 px-5 py-3 text-base font-semibold text-white transition hover:bg-green-800"
            >
              Let&apos;s Connect
            </a>

            {/* Mobile Sprout Button */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="lg:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-green-100 bg-green-50 text-green-700 transition hover:bg-green-100"
            >
              <Sprout size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/20 backdrop-blur-sm">
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl">
            <div className="border-b border-green-100 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-50 p-2 text-green-700">
                  <Sprout size={22} />
                </div>

                <div>
                  <h3 className="font-bold">
                    Nandita Mahesh
                  </h3>

                  <p className="text-sm text-green-700">
                    Software Engineer
                  </p>
                </div>
              </div>
            </div>

            <nav className="flex flex-col p-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-4 text-lg font-medium text-zinc-700 transition hover:bg-green-50 hover:text-green-700"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto p-4">
              <a
                href="mailto:nanditam2029@gmail.com"
                className="block rounded-xl bg-green-700 px-4 py-4 text-center font-semibold text-white"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute left-0 top-0 h-full w-full"
          ></button>
        </div>
      )}
    </>
  );
}