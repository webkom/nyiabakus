import { sanityClient } from "./client";
import { defineQuery } from "next-sanity";

const fetchFaq = defineQuery(`*[_type == "faq"]`);

export async function getFAQ() {
  return await sanityClient.fetch(fetchFaq);
}

export default getFAQ;
