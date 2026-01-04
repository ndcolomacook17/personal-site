import { getUserRepositories } from "@/lib/github";
import ProjectCard from "@/components/ProjectCard";

// Replace with your GitHub username
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "ndcolomacook17";

export const metadata = {
  title: "Projects",
  description: "A collection of my GitHub projects and repositories",
};

export default async function ProjectsPage() {
  let repositories = [];
  let error = null;

  try {
    repositories = await getUserRepositories(GITHUB_USERNAME);
    // Filter out forks if desired
    // repositories = repositories.filter(repo => !repo.fork);
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to fetch repositories";
    console.error("Error fetching repositories:", err);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
          Projects
        </h1>
        <p className="text-lg text-slate-400">
          A collection of my open-source projects and contributions on GitHub
        </p>
      </div>

      {error ? (
        <div className="rounded-lg border border-red-800 bg-red-950/50 p-6">
          <p className="text-red-400">
            Error loading projects: {error}. Please check your GitHub username
            configuration.
          </p>
        </div>
      ) : repositories.length === 0 ? (
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-12 text-center">
          <p className="text-slate-400">No projects found.</p>
          <p className="mt-2 text-sm text-slate-500">
            Update GITHUB_USERNAME in your environment variables or the page
            code.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repositories.map((repo) => (
            <ProjectCard key={repo.id} project={repo} />
          ))}
        </div>
      )}
    </div>
  );
}

