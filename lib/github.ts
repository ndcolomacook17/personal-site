import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN, // Optional: add token for higher rate limits
});

export interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  topics: string[];
}

export async function getUserRepositories(
  username: string
): Promise<Repository[]> {
  try {
    const { data } = await octokit.repos.listForUser({
      username,
      sort: "updated",
      direction: "desc",
      per_page: 100,
    });

    return data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      homepage: repo.homepage ?? null,
      language: repo.language ?? null,
      stargazers_count: repo.stargazers_count ?? 0,
      updated_at: repo.updated_at ?? new Date().toISOString(),
      topics: repo.topics || [],
    }));
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
}


