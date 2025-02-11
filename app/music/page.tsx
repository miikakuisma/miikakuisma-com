import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { allReleases } from "contentlayer/generated";
import { Article } from "./article";

export default function MusicPage() {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-purple-900 via-purple-400/10 to-purple-900">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-purple-100 sm:text-4xl">
						Music
					</h2>
					<p className="mt-4 text-purple-300">
						Deep Trance & Epic Chill Out
					</p>
				</div>
				<div className="w-full h-px bg-purple-800" />
				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
					{allReleases
						.sort((a, b) => {
							if (a.date && b.date) {
								return new Date(b.date).getTime() - new Date(a.date).getTime();
							}
							return 0;
						})
						.map((release) => (
							<Card key={release.slug}>
								<Article release={release} />
							</Card>
						))}
				</div>
			</div>
		</div>
	);
} 