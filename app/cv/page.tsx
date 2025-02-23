import { allPages } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export default function CV() {
  const cv = allPages.find((page) => page.slug === "cv");
  
  if (!cv) {
    notFound();
  }

  return (
    <article className="bg-white dark:bg-zinc-900 mx-auto max-w-4xl p-12 prose prose-neutral dark:prose-invert">
      <Mdx code={cv.body.code} />
    </article>
  );
}

export const metadata: Metadata = {
  title: "CV",
  description: "CV",
};
