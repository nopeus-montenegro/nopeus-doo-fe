export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-between px-6 py-16">
      <header className="flex items-center justify-between">
        <span className="text-lg font-semibold tracking-tight text-white">
          NOPEUS
        </span>
        <span className="rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1 text-xs text-zinc-400">
          Montenegro · EU
        </span>
      </header>

      <section className="my-auto space-y-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Software engineering &amp; web platforms.
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          We design, architect, and ship high-performance web applications,
          telemetry dashboards, and B2B software solutions.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="mailto:office@nopeus.me"
            className="inline-flex items-center rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
          >
            office@nopeus.me
          </a>
          <a
            href="https://nopeus-gt.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-800"
          >
            Nopeus GT ↗
          </a>
        </div>
      </section>

      <footer className="flex flex-col gap-2 border-t border-zinc-900 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <strong className="font-medium text-zinc-400">Nopeus DOO</strong> ·
          Budva, Montenegro
        </div>
        <div className="flex gap-4">
          <a href="mailto:office@nopeus.me" className="hover:text-zinc-300">
            General
          </a>
          <a href="mailto:billing@nopeus.me" className="hover:text-zinc-300">
            Billing
          </a>
        </div>
      </footer>
    </main>
  );
}
