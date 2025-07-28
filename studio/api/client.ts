import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.SANITY_TOKEN;

export const sanityClient = createClient({
  projectId,
  dataset,
  token,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // https://www.sanity.io/docs/apis-and-sdks/asset-cdn
});

export const genericFetch = async <T>(query: string, params: Record<string, any> = {}): Promise<T> => {
  try {
    const data = await sanityClient.fetch<T>(query, params);
    return data;
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    throw error;
  }
}