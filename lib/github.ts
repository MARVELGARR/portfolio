export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        // Optional: Add GITHUB_TOKEN if rate limits become an issue
        // Authorization: process.env.GITHUB_TOKEN ? `token ${process.env.GITHUB_TOKEN}` : "",
      },
      next: { revalidate: 3600  * 10 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const repos: GitHubRepo[] = await response.json();
    return repos.filter(repo => !repo.fork); // Filter out forks by default
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}
