import { groq } from "next-sanity";
import { sanityClient } from "./sanity";

type Meta = {
  _id: string;
  _rev: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
};

export enum BlacklistType {
  FP = "fp",
  MFP = "mfp",
}

type APISettings = Meta &
  Settings & {
    blacklist: Array<{
      _key: string;
      id: number;
      [BlacklistType.FP]: boolean;
      [BlacklistType.MFP]: boolean;
    }>;
  };

export type Blacklist = number[];

type Blacklists = {
  [BlacklistType.FP]: Blacklist;
  [BlacklistType.MFP]: Blacklist;
};

export type Settings = {
  fromDate: string;
  toDate: string;
  blacklists: Blacklists;
  isTBD: boolean;
};

/**
 * Fetch SiteSettings from Sanity and dezerialize it to Settings
 *
 * @example
 * return {
 *   props: {
 *     myProp,
 *     settings: await getSettings(),
 *   }),
 * };
 *
 * @returns a settings object
 */
export async function getSettings(): Promise<Settings | undefined> {
  let data: APISettings | undefined;
  try {
    data = await sanityClient
      .fetch(groq`*[_type == "siteSettings"]`)
      .then((res: APISettings[]) =>
        res.find((item) => item._id === "siteSettings")
      );
  } catch (e) {}
  if (!data) return undefined;
  return {
    ...data,
    blacklists: data.blacklist.reduce<Blacklists>(
      (acc, item) => {
        if (item.fp) acc[BlacklistType.FP].push(item.id);
        if (item.mfp) acc[BlacklistType.MFP].push(item.id);
        return acc;
      },
      {
        [BlacklistType.FP]: [],
        [BlacklistType.MFP]: [],
      }
    ),
  };
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
): Promise<T & { settings?: Settings }> {
  return {
    ...props,
    settings: await getSettings(),
  };
}

export default getSettings;
