export default function UsesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Uses
        </p>

        <h1 className="mt-4 text-6xl font-bold tracking-tight">
          Tools & Technologies
        </h1>

        <p className="mt-8 text-xl leading-9 text-black/70">
          A collection of tools, technologies, and resources that I
          use for learning, building software, researching ideas,
          and staying productive.
        </p>
      </div>

      {/* Development */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold">
          Development
        </h2>

        <div className="mt-8 space-y-6">
          <div>
            <h3 className="font-semibold">Frontend</h3>
            <p className="mt-2 text-black/70">
              React, Next.js, TypeScript, Tailwind CSS
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Backend</h3>
            <p className="mt-2 text-black/70">
              Java, Spring Boot, REST APIs, Firebase
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Database</h3>
            <p className="mt-2 text-black/70">
              MongoDB, SQL
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Version Control</h3>
            <p className="mt-2 text-black/70">
              Git & GitHub
            </p>
          </div>
        </div>
      </section>

      {/* Learning */}
      <section className="mt-20 border-t border-zinc-200 pt-16">
        <h2 className="text-3xl font-bold">
          Learning Resources
        </h2>

        <div className="mt-8 space-y-6">
          <div>
            <h3 className="font-semibold">Documentation</h3>
            <p className="mt-2 text-black/70">
              Official documentation is usually my first learning
              source.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Technical Blogs</h3>
            <p className="mt-2 text-black/70">
              Engineering blogs, architecture articles,
              and technology research.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Books</h3>
            <p className="mt-2 text-black/70">
              Clean Code, The Pragmatic Programmer,
              Designing Data-Intensive Applications.
            </p>
          </div>
        </div>
      </section>

      {/* Productivity */}
      <section className="mt-20 border-t border-zinc-200 pt-16">
        <h2 className="text-3xl font-bold">
          Productivity
        </h2>

        <div className="mt-8 space-y-6">
          <div>
            <h3 className="font-semibold">Code Editor</h3>
            <p className="mt-2 text-black/70">
              Visual Studio Code
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Design</h3>
            <p className="mt-2 text-black/70">
              Figma
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Research & Notes</h3>
            <p className="mt-2 text-black/70">
              Personal notes, blogs, articles, and project
              documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="mt-20 border-t border-zinc-200 pt-16">
        <h2 className="text-3xl font-bold">
          Currently Exploring
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Java",
            "Spring Boot",
            "System Design",
            "Artificial Intelligence",
            "Business Intelligence",
            "Next.js",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-zinc-200 px-4 py-2 text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </section>
    </section>
  );
}