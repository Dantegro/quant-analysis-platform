"use client";

import { ScrollReveal } from "../scroll-reveal";

export function HomeSections() {
	return (
		<div id="content" className="mx-auto w-full max-w-3xl px-6 pb-32 pt-16">
			<ScrollReveal>
				<p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
					Workspace
				</p>
				<h2 className="mt-16 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
					Macroeconomics calendar
				</h2>
			</ScrollReveal>
		</div>
	);
}
