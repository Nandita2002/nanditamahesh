const projects = [
  {
    title: "Student Sync",
    description:
      "A student management and collaboration platform.",
  },
  {
    title: "Certificate Generator",
    description:
      "A web application for generating certificates automatically.",
  },
  {
    title: "QR Code Generator",
    description:
      "A customizable QR code generation tool.",
  },
  {
    title: "NGO Platform",
    description:
      "A platform designed to support NGO activities and management.",
  },
];

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-5xl font-bold tracking-tight">
        Projects
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-neutral-600">
        A collection of projects that helped me learn, experiment,
        and understand technology better.
      </p>

      <div className="mt-16 space-y-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border p-8"
          >
            <h2 className="text-2xl font-semibold">
              {project.title}
            </h2>

            <p className="mt-4 text-neutral-600">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}