import { defineQuery, groq } from "next-sanity";
import { sanityClient } from "./client";

const fetchFpDayDescriptions = defineQuery(
  `*[_type == "fpDayDescription" && date > $startDate] | order(date asc)`
);

const fetchMfpDayDescriptions = defineQuery(
  `*[_type == "mfpDayDescription" && date > $startDate] | order(date asc)`
);

export async function getFpDayDescriptions() {
  const currentYear = new Date().getFullYear();
  return await sanityClient
    .fetch(fetchFpDayDescriptions, {
      startDate: `${currentYear}-01-01`,
    })
}

export async function getMfpDayDescriptions() {
  const currentYear = new Date().getFullYear();
  return await sanityClient
    .fetch(fetchMfpDayDescriptions, {
      startDate: `${currentYear}-01-01`,
    })
}
