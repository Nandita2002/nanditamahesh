import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight"
        >
          Nandita Mahesh
        </Link>

        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-black/70 transition hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}