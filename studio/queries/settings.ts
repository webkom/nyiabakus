import { defineQuery, groq } from "next-sanity";
import { sanityClient } from "./client";
import { SiteSettings } from "@/studio/generated/sanity.types";

export enum BlacklistType {
  FP = "fp",
  MFP = "mfp",
}

type Blacklist = {
  [BlacklistType.FP]: number[];
  [BlacklistType.MFP]: number[];
};

/**
 * SiteSettings with certain properties modified for easier usage
 */
export type Settings = SiteSettings & {
  blacklist: Blacklist;
  isTBD: boolean;
} | null;

const fetchSiteSettings = defineQuery(`*[_type == "siteSettings"][0]`);

/**
 * Fetch SiteSettings from Sanity and dezerialize it to Settings
 *
 * Transform certain properties for easier use elsewhere in the app:
 * - group blacklist into two blacklists for fp and mfp.
 * - if isTBD is undefined default it to false
 *
 * @returns a settings object
 */
export async function getSettings(): Promise<Settings> {
  const data = await sanityClient.fetch(fetchSiteSettings);

  if (!data) return null;

  const emptyBlacklists = {
    [BlacklistType.FP]: [] as number[],
    [BlacklistType.MFP]: [] as number[],
  };

  const modifiedBlacklist =
    data.blacklist?.reduce<Blacklist>((acc, item) => {
      if (item.id) {
        if (item.fp) acc[BlacklistType.FP].push(item.id);
        if (item.mfp) acc[BlacklistType.MFP].push(item.id);
      }
      return acc;
    }, emptyBlacklists) || emptyBlacklists;

  return {
    ...data,
    blacklist: modifiedBlacklist,
    isTBD: !!data.isTBD,
  } as Settings;
}

export default getSettings;
