import { ScrollReveal } from "../scroll-reveal";

export function HomePage() {
	return (
		<main className="min-h-[200svh] px-6 py-10">
			<section className="flex min-h-[100svh] items-center justify-center">
				<div aria-label="Macro dashboard" className="w-full max-w-3xl text-center">
					<p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
						Trading Workspace
					</p>
					<h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
						Macroeconomics analysis platform
					</h1>
				</div>
			</section>

			<ScrollReveal>
				<section aria-label="Economic calendar" className="mx-auto w-full max-w-3xl pb-24">
					<h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
						Economic calendar
					</h2>
				</section>
			</ScrollReveal>
		</main>
	);
}
