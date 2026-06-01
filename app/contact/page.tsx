export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Contact
        </p>

        <h1 className="mt-4 text-6xl font-bold tracking-tight">
          Get in Touch
        </h1>

        <p className="mt-8 text-xl leading-9 text-black/70">
          The best way to reach me is through email or
          professional social platforms.
        </p>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        <a
          href="mailto:nanditam2029@gmail.com"
          className="rounded-3xl border border-zinc-200 p-8 transition hover:border-black"
        >
          <h3 className="text-xl font-semibold">
            Email
          </h3>

          <p className="mt-3 text-black/60">
            nanditam2029@gmail.com
          </p>
        </a>

        <a
          href="https://linkedin.com/in/nanditamahesh"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-3xl border border-zinc-200 p-8 transition hover:border-black"
        >
          <h3 className="text-xl font-semibold">
            LinkedIn
          </h3>

          <p className="mt-3 text-black/60">
            Connect professionally
          </p>
        </a>

        <a
          href="https://github.com/Nandita2002"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-3xl border border-zinc-200 p-8 transition hover:border-black"
        >
          <h3 className="text-xl font-semibold">
            GitHub
          </h3>

          <p className="mt-3 text-black/60">
            View my repositories
          </p>
        </a>
      </div>
    </section>
  );
}