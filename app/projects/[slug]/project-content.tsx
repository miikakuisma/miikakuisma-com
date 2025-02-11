'use client'
import { useState } from "react";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import { ReportView } from "./view";
// import { ErrorComponent } from "@/app/components/error";

export function ProjectContent({ project, initialViews }: { project: any, initialViews: number }) {
  const [views] = useState(initialViews);
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} views={views} />
      <ReportView slug={project.slug} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={project.body.code} />
      </article>

      {/* {loading ? (
        <span>Loading views...</span>
      ) : (
        <span>{views} views</span>
      )} */}
    </div>
  );
} 