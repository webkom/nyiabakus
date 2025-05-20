import { createClient, type QueryParams, type ClientConfig } from "next-sanity";

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

/**
* A wrapper function for sanityClient.fetch() to cache the results in the nextjs cache
*
* Default revalidation time is 60 seconds, meaning it will only query sanity max once per minute.
*
* @param query - query string to pass to sanityClient.fetch()
* @param params - params passed to sanityClient.fetch()
* @param revalidate - default 60 (seconds)
* @param config - New client configuration properties, shallowly merged with existing configuration.
* Example: { useCdn: false } to use Sanity API instead of CDN. Useful for static generation.
* @returns a promise containing the result from sanityClient.fetch()
*/
export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 60, // default revalidation time in seconds
  config,
}: {
  query: QueryString
  params?: QueryParams
  revalidate?: number | false
  config?: ClientConfig
}) {
  return sanityClient.withConfig(config).fetch(query, params, {
    next: {
      revalidate: revalidate,
    },
  })
}
