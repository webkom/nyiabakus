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
