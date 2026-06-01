const articles = [
  {
    title: "Why I Started This Website",
    date: "June 2026",
  },
  {
    title: "My Journey Into Software Engineering",
    date: "June 2026",
  },
  {
    title: "What I'm Currently Learning",
    date: "June 2026",
  },
];

export default function WritingPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-5xl font-bold tracking-tight">
        Writing
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-neutral-600">
        Articles, notes, and thoughts on software engineering,
        artificial intelligence, business intelligence, and
        technology.
      </p>

      <div className="mt-16 space-y-8">
        {articles.map((article) => (
          <article
            key={article.title}
            className="border-b pb-8"
          >
            <h2 className="text-2xl font-semibold">
              {article.title}
            </h2>

            <p className="mt-2 text-neutral-500">
              {article.date}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}