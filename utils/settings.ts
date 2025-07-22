import { groq } from "next-sanity";
import { sanityClient } from "./sanity";
import { SiteSettings } from "@/sanity.types";

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
  let data: SiteSettings | undefined;
  try {
    data = await sanityClient
      .fetch(groq`*[_type == "siteSettings"]`)
      .then((res: SiteSettings[]) =>
        res.find((item) => item._id === "siteSettings")
      );
  } catch (e) {}

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

/**
 * Inject settings into a props object
 * Intended to be used in eg. `getStaticProps()` to also be able to access siteSettings
 *
 * @example
 * // returns { props: { myProp, settings } }
 * return {
 *   props: await withSettings({
 *     myProp
 *   }),
 * };
 *
 * @param props
 * @returns `props` with `settings` (siteSettings defined in sanity)
 */
export async function withSettings<T extends object>(
  props: T
): Promise<T | (T & { settings: Settings })> {
  const settings = await getSettings();
  return {
    ...props,
    settings,
  };
}

export default getSettings;
