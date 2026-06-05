import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Student Sync",
    category: "Education Platform",
    description:
      "A student management platform designed to simplify communication, attendance tracking and academic workflows.",
    tech: ["Next.js", "TypeScript", "MongoDB"],
  },
  {
    title: "Certificate Generator",
    category: "Automation Tool",
    description:
      "Generate professional certificates instantly with dynamic data, QR verification and customizable templates.",
    tech: ["Next.js", "Tailwind", "QR Code"],
  },
  {
    title: "QR Generator",
    category: "Utility Tool",
    description:
      "A modern QR code generation platform for websites, events and business applications.",
    tech: ["React", "TypeScript", "Tailwind"],
  },
];

export default function FeaturedWork() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-green-700">
              Featured Work
            </p>

            <h2 className="text-4xl font-black text-zinc-900 md:text-5xl">
              Projects I&quot;ve built.
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-zinc-600">
              A collection of products, tools and platforms I&quot;ve
              designed and developed while learning and growing
              as a software engineer.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-semibold text-green-700 hover:text-green-800"
          >
            View All Projects
            <FaArrowRight size={14} />
          </Link>
        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-green-100
                bg-white
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Project Image Placeholder */}

              <div className="h-56 bg-gradient-to-br from-green-50 to-green-100" />

              {/* Content */}

              <div className="p-8">
                <span className="text-sm font-medium text-green-700">
                  {project.category}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-zinc-900">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-600">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        bg-green-50
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-green-700
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <button
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    font-semibold
                    text-green-700
                    transition
                    group-hover:gap-3
                  "
                >
                  View Case Study
                  <FaArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}