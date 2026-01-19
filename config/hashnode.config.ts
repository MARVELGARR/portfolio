


import { getEnv } from "@/lib/env";

export const hashnodeConfig = {
  endpoint: "https://gql.hashnode.com",
  host: getEnv("HOST"),
  token: getEnv("HASHNODE_TOKEN")
};
