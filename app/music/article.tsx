import { Release } from "contentlayer/generated";

type Props = {
	release: Release;
};

export const Article = ({ release }: Props) => {
	return (
		<article className="relative p-4 md:p-8 h-full min-h-[300px] group">
			{/* Background image with overlay */}
			<div 
				className="absolute inset-0 z-0 transition-transform duration-300 bg-cover bg-center group-hover:scale-105"
				style={{ 
					backgroundImage: `url(${release.image || '/default-release-bg.jpg'})`,
				}} 
			/>
			{/* Gradient overlay */}
			<div className="absolute inset-0 z-10 bg-gradient-to-b from-purple-900/50 to-purple-900/90 group-hover:from-purple-900/70 group-hover:to-purple-900/90 transition-colors duration-500" />
			
			{/* Content */}
			<div className="relative z-20">
				<div className="flex justify-between gap-2 items-center">
					<span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
						{release.date ? (
							<time dateTime={new Date(release.date).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
									new Date(release.date),
								)}
							</time>
						) : (
							<span>SOON</span>
						)}
					</span>
				</div>
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display mt-4">
					{release.title}
				</h2>
				<p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
					{release.description}
				</p>
			</div>
		</article>
	);
}; 