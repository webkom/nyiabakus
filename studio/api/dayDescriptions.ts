import { groq } from "next-sanity";
import { sanityClient } from "./client";
import { DayDescription } from "@/pages/fadderperioden";


export async function getFpDayDescriptions(): Promise<DayDescription[]> {
    let dayDescriptions: DayDescription[] = [];
  try {
    const currentYear = new Date().getFullYear();
    dayDescriptions = await sanityClient.fetch(
      groq`*[_type == "fpDayDescription" && date > '${currentYear}-01-01'] | order(date asc)`
    );
  } catch (e) {}

  return dayDescriptions;
}

export async function getMfpDayDescriptions(): Promise<DayDescription[]> {
  let dayDescriptions: DayDescription[] = [];
  try {
    const currentYear = new Date().getFullYear();
    dayDescriptions = await sanityClient.fetch(
      groq`*[_type == "mfpDayDescription" && date > '${currentYear}-01-01'] | order(date asc)`
    );
  } catch (e) {}

  return dayDescriptions;
}