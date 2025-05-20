/* eslint-disable  @typescript-eslint/no-explicit-any */

import { Rule } from "sanity";

const EventItem = {
  title: "Event",
  type: "object",
  fields: [
    {
      title: "Event id",
      name: "id",
      type: "number",
      validation: (rule: Rule) => [rule.min(0), rule.required()],
    },
    {
      title: "Blacklist Fadderperiode",
      name: "fp",
      type: "boolean",
      initialValue: true,
      options: {
        layout: "checkbox",
      },
    },
    {
      title: "Blacklist Masterfadderperiode",
      name: "mfp",
      type: "boolean",
      initialValue: true,
      options: {
        layout: "checkbox",
      },
    },
  ],
  preview: {
    select: {
      id: "id",
      fp: "fp",
      mfp: "mfp",
    },
    prepare({ id, fp, mfp }: { id: string; fp: boolean; mfp: boolean }) {
      return {
        title: `Event: ${id}`,
        subtitle: `Blacklisted for ${fp ? "Fadderperioden" : ""}${
          fp && mfp ? " and " : " "
        }${mfp ? "Masterfadderperioden" : ""}`,
      };
    },
  },
};

const SiteSettingsSchema = {
  title: "Site Settings",
  name: "siteSettings",
  description: "Define site settings",
  type: "document",
  fields: [
    {
      title: "Event program is TBD",
      description: "Remember to unset this before fadderperioden starts",
      name: "isTBD",
      type: "boolean",
      initialValue: false,
    },
    {
      title: "Periode start",
      name: "fromDate",
      type: "date",
      options: {
        validation: (rule: Rule) => rule.required(),
      },
    },
    {
      title: "Periode slutt",
      name: "toDate",
      type: "date",
      options: {
        validation: (rule: Rule) => rule.required(),
      },
    },
    {
      title: "Blacklisted Events",
      name: "blacklist",
      type: "array",
      of: [{ ...EventItem }],
      validation: (rule: Rule) => rule.unique(),
      options: {
        disableActions: ["duplicate"],
      },
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Site settings",
      };
    },
  },
};

export default SiteSettingsSchema;
