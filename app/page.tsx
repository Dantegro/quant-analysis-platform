import { HomeSections } from "./components/home/home-sections";

export default function Home() {
  return (
    <>
      <section
        aria-label="Hero"
        className="relative flex min-h-dvh flex-col items-center justify-center px-6"
      >
        <div className="hero-enter text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
            Futures day trading analysis platform
          </h1>
          <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Decision support for price action and macroeconomics context.
          </p>
        </div>

        <a
          href="#content"
          className="scroll-hint absolute bottom-10 flex items-center justify-center text-zinc-500 transition-colors hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
          aria-label="Scroll to content"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </a>
      </section>

      <HomeSections />
    </>
  );
}
