export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="text-5xl font-bold tracking-tight">
        About
      </h1>

      <div className="mt-12 space-y-8 text-lg leading-8 text-neutral-700">
        <p>
          Hi, I&apos;m Nandita Mahesh. I&apos;m a software engineer who enjoys
          learning about technology, software systems, artificial
          intelligence, business intelligence, and emerging trends.
        </p>

        <p>
          I believe learning is a lifelong process. This website is my
          digital space to document what I discover, build, read, and
          research along the way.
        </p>

        <p>
          My interests include backend development, web technologies,
          artificial intelligence, data-driven decision making, and
          understanding how technology shapes the world around us.
        </p>

        <h2 className="pt-8 text-3xl font-semibold">
          Current Areas of Interest
        </h2>

        <ul className="space-y-3">
          <li>Software Engineering</li>
          <li>Artificial Intelligence</li>
          <li>Business Intelligence</li>
          <li>System Design</li>
          <li>Web Development</li>
          <li>Technical Writing</li>
        </ul>
      </div>
    </section>
  );
}