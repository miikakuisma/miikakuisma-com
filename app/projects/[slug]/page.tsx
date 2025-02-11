import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { ProjectContent } from "./project-content";
import { Redis } from "@upstash/redis";

export const revalidate = 60;

const redis = Redis.fromEnv();

export async function generateStaticParams() {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const views = await redis.get<number>(["pageviews", "projects", slug].join(":")) ?? 0;

  return <ProjectContent project={project} initialViews={views} />;
}
