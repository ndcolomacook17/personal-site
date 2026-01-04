import Link from "next/link";
import { Repository } from "@/lib/github";

interface ProjectCardProps {
  project: Repository;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="group rounded-lg border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-slate-700 hover:bg-slate-900 hover:shadow-lg">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex-1">
          <h3 className="mb-2 text-xl font-semibold text-slate-100 group-hover:text-white transition-colors">
            {project.name}
          </h3>
          {project.description && (
            <p className="text-slate-400 text-sm leading-relaxed">
              {project.description}
            </p>
          )}
        </div>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
        {project.language && (
          <span className="flex items-center gap-1">
            <span className="h-3 w-3 rounded-full bg-blue-500"></span>
            {project.language}
          </span>
        )}
        {project.stargazers_count > 0 && (
          <span className="flex items-center gap-1">
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {project.stargazers_count}
          </span>
        )}
        <span className="text-xs">Updated {formatDate(project.updated_at)}</span>
      </div>

      <div className="flex flex-wrap gap-2">
        <Link
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-700 hover:text-white"
        >
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Code
        </Link>
        {project.homepage && (
          <Link
            href={project.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-transparent px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-800 hover:text-white"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Demo
          </Link>
        )}
      </div>

      {project.topics.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.topics.slice(0, 5).map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}


