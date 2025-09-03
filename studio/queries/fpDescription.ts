import { defineQuery, groq } from "next-sanity";
import { sanityClient } from "./client";

const fetchFpDescription = defineQuery(
  `*[_type == "fpDescription"][0]`
);

export async function getFpDescription() {
  return await sanityClient.fetch(fetchFpDescription);
}
