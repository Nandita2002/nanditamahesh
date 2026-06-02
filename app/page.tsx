"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {
  ArrowRight,
  Brain,
  BookOpen,
  Code2,
  Database,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

/* ─── Scroll-reveal hook ─────────────────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─── Animated section wrapper ───────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Animated number counter ────────────────────────────────── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const { ref, visible } = useReveal(0.5);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(to / 40);
    const id = setInterval(() => {
      start = Math.min(start + step, to);
      setCount(start);
      if (start >= to) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, [visible, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── Magnetic hover button ──────────────────────────────────── */
function MagneticChip({
  href,
  icon,
  label,
  external = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const btnRef = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = btnRef.current!;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 10;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 10;
    setPos({ x, y });
  };

  const onLeave = () => setPos({ x: 0, y: 0 });

  return (
    <a
      ref={btnRef}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
      }}
      className="flex items-center gap-2.5 rounded-xl border border-green-100 bg-white px-5 py-3 text-sm font-medium text-green-800 shadow-sm hover:border-green-200 hover:bg-green-50 hover:shadow-md"
    >
      {icon}
      {label}
    </a>
  );
}

/* ─── Hover-lift card ────────────────────────────────────────── */
function HoverCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-green-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── Animated underline link ────────────────────────────────── */
function AnimLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-1.5 text-sm font-medium text-green-700"
    >
      {children}
      <ArrowRight
        size={14}
        className="transition-transform duration-200 group-hover:translate-x-1"
      />
    </Link>
  );
}

/* ─── Section heading ────────────────────────────────────────── */
function SectionHead({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <h2 className="text-4xl font-bold tracking-tight">{children}</h2>
      <div className="mt-3 h-1 w-12 rounded-full bg-green-600" />
    </Reveal>
  );
}

/* ─────────────────────────────────────────────────────────────── */
/*  PAGE                                                           */
/* ─────────────────────────────────────────────────────────────── */
export default function HomePage() {
  /* Cursor glow */
  const [cursor, setCursor] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const move = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const focusAreas = [
    {
      title: "Software Engineering",
      icon: Code2,
      description:
        "Building scalable applications and learning modern engineering practices.",
    },
    {
      title: "Artificial Intelligence",
      icon: Brain,
      description:
        "Exploring AI tools, applications, and emerging technologies.",
    },
    {
      title: "Business Intelligence",
      icon: Database,
      description:
        "Understanding how data drives decision-making and business growth.",
    },
  ];

  const writings = [
    { title: "Why I Started This Website", date: "Coming Soon" },
    { title: "My Journey Into Software Engineering", date: "Coming Soon" },
    { title: "What I'm Currently Learning", date: "Coming Soon" },
  ];

  const projects = [
    {
      title: "Student Sync",
      description: "Student management and collaboration platform.",
      tag: "Platform",
    },
    {
      title: "Certificate Generator",
      description: "Automated certificate generation application.",
      tag: "Tool",
    },
    {
      title: "QR Code Generator",
      description: "Modern QR code creation and customization tool.",
      tag: "Utility",
    },
  ];

  const stats = [
    { value: 2, suffix: "+", label: "Years of coding" },
    { value: 3, suffix: "", label: "Projects shipped" },
    { value: 1, suffix: "", label: "Degree earned" },
  ];

  return (
    <>
      {/* Ambient cursor glow */}
      <div
        className="pointer-events-none fixed z-0 rounded-full bg-green-100 blur-[80px]"
        style={{
          width: 340,
          height: 340,
          left: cursor.x - 170,
          top: cursor.y - 170,
          opacity: 0.35,
          transition: "left 0.6s ease, top 0.6s ease",
        }}
      />

      <main className="relative z-10 mx-auto max-w-7xl px-6">
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative py-24 md:py-36">
          <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              {/* Tag */}
              <div
                style={{
                  opacity: 1,
                  animation: "fadeSlideIn 0.6s ease 0.1s both",
                }}
              >
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-green-700">
                  Personal Website
                </p>
              </div>

              {/* Name — each word fades in with stagger */}
              <h1 className="text-6xl font-bold tracking-tight md:text-8xl">
                {["Nandita", "Mahesh"].map((word, i) => (
                  <span
                    key={word}
                    className="block"
                    style={{
                      animation: `fadeSlideIn 0.7s cubic-bezier(0.22,1,0.36,1) ${
                        0.2 + i * 0.12
                      }s both`,
                    }}
                  >
                    {word}
                  </span>
                ))}
              </h1>

              <div
                style={{ animation: "fadeSlideIn 0.6s ease 0.48s both" }}
              >
                <p className="mt-6 text-xl font-semibold text-green-700">
                  Software Engineer
                </p>
              </div>

              <div
                style={{ animation: "fadeSlideIn 0.6s ease 0.58s both" }}
              >
                <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
                  Exploring software engineering, artificial intelligence,
                  business intelligence, and emerging technologies.
                </p>
                <p className="mt-3 max-w-xl text-base leading-7 text-zinc-500">
                  I enjoy learning, researching technology trends, documenting
                  ideas, and sharing my journey through writing and projects.
                </p>
              </div>

              {/* Social chips */}
              <div
                className="mt-10 flex flex-wrap gap-3"
                style={{ animation: "fadeSlideIn 0.6s ease 0.7s both" }}
              >
                <MagneticChip
                  href="https://linkedin.com"
                  external
                  icon={<FaLinkedin size={18} />}
                  label="LinkedIn"
                />
                <MagneticChip
                  href="https://github.com"
                  external
                  icon={<FaGithub size={18} />}
                  label="GitHub"
                />
                <MagneticChip
                  href="mailto:your@email.com"
                  icon={<HiOutlineMail size={18} />}
                  label="Email"
                />
              </div>
            </div>

            {/* Profile card */}
            <div style={{ animation: "fadeSlideIn 0.8s ease 0.5s both" }}>
              <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl">
                {/* Avatar placeholder */}
                <div className="h-28 w-28 rounded-full bg-gradient-to-br from-green-100 to-green-200 ring-4 ring-green-50" />

                <h3 className="mt-6 text-2xl font-bold">Nandita Mahesh</h3>
                <p className="mt-1 font-medium text-green-700">
                  Software Engineer
                </p>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 divide-x divide-green-100 rounded-2xl border border-green-100 bg-green-50 py-4">
                  {stats.map(({ value, suffix, label }) => (
                    <div key={label} className="px-4 text-center">
                      <p className="text-2xl font-bold text-green-800">
                        <Counter to={value} suffix={suffix} />
                      </p>
                      <p className="mt-1 text-xs text-zinc-500">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3 border-t border-green-100 pt-6">
                  {[
                    { icon: MapPin, text: "Karnataka, India" },
                    { icon: GraduationCap, text: "MBA — BI & Analytics" },
                    { icon: Brain, text: "Lifelong Learner" },
                  ].map(({ icon: Icon, text }) => (
                    <div
                      key={text}
                      className="flex items-center gap-3 text-sm text-zinc-600"
                    >
                      <Icon size={16} className="text-green-700" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CURRENTLY EXPLORING ──────────────────────────────── */}
        <section className="border-t border-green-100 py-20">
          <SectionHead>Currently Exploring</SectionHead>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {focusAreas.map(({ title, icon: Icon, description }, i) => (
              <Reveal key={title} delay={i * 100}>
                <HoverCard>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
                    <Icon size={20} className="text-green-700" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {description}
                  </p>
                </HoverCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── LEARNING & RESEARCH ───────────────────────────────── */}
        <section className="border-t border-green-100 py-20">
          <SectionHead>Learning & Research</SectionHead>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {[
              {
                icon: BookOpen,
                heading: "Currently Learning",
                items: [
                  "Java & Spring Boot",
                  "System Design",
                  "Artificial Intelligence",
                  "Backend Architecture",
                ],
              },
              {
                icon: Sparkles,
                heading: "Research Areas",
                items: [
                  "Business Intelligence",
                  "Technology Trends",
                  "AI Applications",
                  "Product Engineering",
                ],
              },
            ].map(({ icon: Icon, heading, items }, colIdx) => (
              <Reveal key={heading} delay={colIdx * 120}>
                <h3 className="flex items-center gap-2.5 text-xl font-semibold">
                  <Icon size={20} className="text-green-700" />
                  {heading}
                </h3>
                <ul className="mt-6 space-y-3">
                  {items.map((item, j) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-zinc-600"
                      style={{
                        opacity: 0,
                        animation: `fadeSlideIn 0.5s ease ${
                          300 + colIdx * 120 + j * 80
                        }ms both`,
                      }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── WRITING ──────────────────────────────────────────── */}
        <section className="border-t border-green-100 py-20">
          <div className="flex items-end justify-between">
            <SectionHead>Featured Writing</SectionHead>
            <AnimLink href="/writing">View All</AnimLink>
          </div>

          <div className="mt-10">
            {writings.map(({ title, date }, i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="group flex cursor-pointer items-center justify-between border-b border-green-100 py-7 transition-colors hover:bg-green-50 hover:px-4">
                  <div>
                    <h3 className="text-lg font-semibold transition-colors group-hover:text-green-800">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400">{date}</p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="mr-2 text-green-400 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ─────────────────────────────────────────── */}
        <section className="border-t border-green-100 py-20">
          <SectionHead>Selected Projects</SectionHead>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {projects.map(({ title, description, tag }, i) => (
              <Reveal key={title} delay={i * 100}>
                <HoverCard className="group relative cursor-pointer overflow-hidden">
                  {/* Animated green top bar */}
                  <span className="absolute left-0 top-0 h-1 w-0 rounded-t-3xl bg-green-500 transition-all duration-500 group-hover:w-full" />
                  <span className="mb-3 inline-block rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                    {tag}
                  </span>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {description}
                  </p>
                </HoverCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── TIMELINE / JOURNEY ───────────────────────────────── */}
        <section className="border-t border-green-100 py-20">
          <SectionHead>Journey</SectionHead>

          <div className="relative mt-12 ml-4">
            {/* Vertical line */}
            <span className="absolute left-0 top-0 h-full w-px bg-green-100" />

            {[
              { year: "2026", text: "MBA in Business Intelligence & Analytics" },
              {
                year: "2024",
                text: "Started Professional Software Engineering Career",
              },
              { year: "2024", text: "Graduated in Computer Science Engineering" },
            ].map(({ year, text }, i) => (
              <Reveal key={`${year}-${i}`} delay={i * 120}>
                <div className="relative mb-8 pl-8">
                  {/* Dot */}
                  <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-green-500 bg-white" />
                  <p className="text-sm font-bold text-green-700">{year}</p>
                  <p className="mt-1 text-zinc-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── CONTACT ──────────────────────────────────────────── */}
        <section className="border-t border-green-100 py-24 text-center">
          <Reveal>
            <h2 className="text-4xl font-bold">Let&apos;s Connect</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-600">
              Feel free to connect through email, LinkedIn, GitHub, or other
              professional platforms.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:your@email.com"
                className="flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg"
              >
                <HiOutlineMail size={18} />
                Email
              </a>
              {[
                {
                  href: "https://github.com",
                  icon: <FaGithub size={18} />,
                  label: "GitHub",
                },
                {
                  href: "https://linkedin.com",
                  icon: <FaLinkedin size={18} />,
                  label: "LinkedIn",
                },
                {
                  href: "https://medium.com",
                  icon: <FaMedium size={18} />,
                  label: "Medium",
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-green-200 bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-green-300 hover:shadow-md"
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </Reveal>
        </section>
      </main>

      {/* Global keyframes */}
      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}