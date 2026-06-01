export default function ReadingPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-5xl font-bold tracking-tight">
        Reading
      </h1>

      <p className="mt-6 text-lg text-neutral-600">
        Books, research papers, articles, and resources
        that I find interesting.
      </p>

      <div className="mt-12 space-y-6">
        <div className="border-l-2 pl-4">
          Clean Code — Robert C. Martin
        </div>

        <div className="border-l-2 pl-4">
          Designing Data Intensive Applications
        </div>

        <div className="border-l-2 pl-4">
          The Pragmatic Programmer
        </div>
      </div>
    </section>
  );
}