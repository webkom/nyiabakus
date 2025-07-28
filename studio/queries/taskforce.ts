import { sanityClient } from "./client";
import { defineQuery } from "next-sanity";

const fetchTaskforce = defineQuery(`*[_type == "taskforce"][0]`);

export async function getTaskforce() {
  return await sanityClient.fetch(fetchTaskforce);
}

export default getTaskforce;
