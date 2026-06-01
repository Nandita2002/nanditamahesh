import Link from "next/link";

export default function HomePage() {
  const interests = [
    "Software Engineering",
    "Artificial Intelligence",
    "Business Intelligence",
    "System Design",
    "Web Development",
    "Technology Research",
  ];

  const posts = [
    {
      title: "Why I Started This Website",
      date: "Coming Soon",
    },
    {
      title: "My Journey Into Software Engineering",
      date: "Coming Soon",
    },
    {
      title: "What I'm Currently Learning",
      date: "Coming Soon",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* HERO */}
      <section className="py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_0.5fr]">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
              Personal Website
            </p>

            <h1 className="text-6xl font-bold tracking-tight md:text-8xl">
              Nandita
              <br />
              Mahesh
            </h1>

            <p className="mt-8 text-2xl font-medium text-black/70">
              Software Engineer
            </p>

            <p className="mt-10 max-w-3xl text-xl leading-9 text-black/80">
              Exploring software engineering, artificial intelligence,
              business intelligence, and emerging technologies.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/70">
              This website is my digital space for documenting what I
              learn, researching new ideas, sharing projects, and
              writing about technology.
            </p>

            <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium">
              <a
                href="https://linkedin.com/in/nanditamahesh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Nandita2002"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>

              <a
                href="mailto:nanditam2029@gmail.com"
                className="hover:underline"
              >
                Email
              </a>
            </div>
          </div>

          {/* Profile Card */}
          <div>
            <div className="rounded-3xl border border-zinc-200 p-8">
              <div className="h-28 w-28 rounded-full bg-zinc-100" />

              <h3 className="mt-6 text-xl font-semibold">
                Nandita Mahesh
              </h3>

              <p className="mt-2 text-black/60">
                Software Engineer
              </p>

              <div className="mt-6 space-y-2 text-sm">
                <p>Karnataka, India</p>
                <p>MBA Student</p>
                <p>Technology Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERESTS */}
      <section className="border-t border-zinc-200 py-20">
        <h2 className="text-3xl font-bold">
          Current Interests
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {interests.map((interest) => (
            <span
              key={interest}
              className="rounded-full border border-zinc-200 px-4 py-2 text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </section>

      {/* FEATURED WRITING */}
      <section className="border-t border-zinc-200 py-20">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            Featured Writing
          </h2>

          <Link
            href="/writing"
            className="text-sm font-medium"
          >
            View All →
          </Link>
        </div>

        <div className="mt-10">
          {posts.map((post) => (
            <div
              key={post.title}
              className="border-b border-zinc-200 py-8"
            >
              <h3 className="text-xl font-semibold">
                {post.title}
              </h3>

              <p className="mt-2 text-black/50">
                {post.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="border-t border-zinc-200 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">
            About This Website
          </h2>

          <p className="mt-8 text-xl leading-9 text-black/80">
            I created this website as a place to collect my
            thoughts, document my learning journey, and
            share ideas that I find interesting.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/70">
            You&apos;ll find articles, project notes, research
            ideas, reading recommendations, and reflections
            on technology.
          </p>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="border-t border-zinc-200 py-20">
        <h2 className="text-3xl font-bold">
          Explore
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Link
            href="/about"
            className="rounded-3xl border border-zinc-200 p-8 transition hover:border-black"
          >
            <h3 className="text-xl font-semibold">
              About
            </h3>

            <p className="mt-3 text-black/70">
              Learn more about my background,
              interests, and journey.
            </p>
          </Link>

          <Link
            href="/writing"
            className="rounded-3xl border border-zinc-200 p-8 transition hover:border-black"
          >
            <h3 className="text-xl font-semibold">
              Writing
            </h3>

            <p className="mt-3 text-black/70">
              Articles, notes, and research.
            </p>
          </Link>

          <Link
            href="/projects"
            className="rounded-3xl border border-zinc-200 p-8 transition hover:border-black"
          >
            <h3 className="text-xl font-semibold">
              Projects
            </h3>

            <p className="mt-3 text-black/70">
              Things I&apos;ve built and learned from.
            </p>
          </Link>

          <Link
            href="/contact"
            className="rounded-3xl border border-zinc-200 p-8 transition hover:border-black"
          >
            <h3 className="text-xl font-semibold">
              Contact
            </h3>

            <p className="mt-3 text-black/70">
              Ways to connect with me online.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}