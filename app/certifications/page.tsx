export default function CertificationsPage() {
  const certifications = [
    {
      title: "EF SET English Certificate",
      issuer: "EF SET",
      level: "C1 Advanced",
      year: "2024",
    },
    {
      title: "Campus Ambassador - Platinum",
      issuer: "E-Cell IIT Bombay",
      level: "Platinum Badge",
      year: "2024",
    },
    {
      title: "Introduction to Distributed SQL and CockroachDB",
      issuer: "CockroachDB",
      level: "Certification",
      year: "2024",
    },
    {
      title: "VSM",
      issuer: "Professional Certification",
      level: "Completed",
      year: "2024",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Certifications
        </p>

        <h1 className="mt-4 text-6xl font-bold tracking-tight">
          Credentials & Learning
        </h1>

        <p className="mt-8 text-xl leading-9 text-black/70">
          Courses, certifications, and learning milestones that
          have contributed to my growth in technology and
          professional development.
        </p>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="rounded-3xl border border-zinc-200 p-8 transition hover:border-black"
          >
            <div className="flex items-start justify-between">
              <span className="text-sm text-zinc-500">
                {cert.year}
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-semibold">
              {cert.title}
            </h2>

            <p className="mt-3 text-black/70">
              {cert.issuer}
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              {cert.level}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-24 border-t border-zinc-200 pt-16">
        <h2 className="text-3xl font-bold">
          Continuous Learning
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-black/70">
          Beyond formal certifications, I regularly explore
          software engineering, artificial intelligence,
          system design, business intelligence, and emerging
          technologies through books, research papers,
          technical blogs, and hands-on projects.
        </p>
      </div>
    </section>
  );
}