import { hashnodeConfig } from "@/config/hashnode.config";

export interface HashnodePost {
  title: string;
  brief: string;
  slug: string;
  coverImage?: {
    url: string;
  };
  publishedAt: string;
  readTimeInMinutes: number;
}

const PUBLICATION_QUERY = `
  query Publication($host: String!) {
    publication(host: $host) {
      isTeam
      title
      posts(first: 10) {
        edges {
          node {
            title
            brief
            slug
            coverImage {
              url
            }
            publishedAt
            readTimeInMinutes
          }
        }
      }
    }
  }
`;

export async function getHashnodePosts(): Promise<HashnodePost[]> {
  const { endpoint, host, token } = hashnodeConfig;

  if (!host) {
    console.warn("NEXT_PUBLIC_HASHNODE is not defined.");
    return [];
  }

  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 15000); // 15s timeout

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`
      },
      body: JSON.stringify({
        query: PUBLICATION_QUERY,
        variables: {
          host,
        },
      }),
      signal: controller.signal,
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    
    clearTimeout(id);

    const { data } = await response.json();

    if (!data?.publication?.posts?.edges) {
      return [];
    }

    return data.publication.posts.edges.map((edge: any) => edge.node);
  } catch (error) {
    console.error("Error fetching Hashnode posts:", error);
    return [];
  }
}
