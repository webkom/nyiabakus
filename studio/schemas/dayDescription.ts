import { Rule } from "sanity";

export const FPGroups = [
  { title: "2-årig", value: "2_YEAR" },
  { title: "5-årig", value: "5_YEAR" },
];

const baseSchema = {
  name: "dayDescription",
  type: "document",
  title: "Fadderperioden",
  preview: {
    select: {
      date: "date",
      fpGroup: "fpGroup",
    },
    prepare(selection: Record<string, any>) {
      const { date } = selection;
      const dateDisplayString = new Date(date).toLocaleDateString(["no-NB"], {
        weekday: "long",
        day: "numeric",
        month: "long",
      });
      const capitalizedDateString =
        dateDisplayString.charAt(0).toUpperCase() + dateDisplayString.slice(1);

      return {
        title: capitalizedDateString,
      };
    },
  },
  fields: [
    {
      name: "date",
      type: "date",
      title: "Dato",
      validation: (rule: Rule) => rule.required(),
    },
    {
      title: "Innhold",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule: Rule) => rule.required(),
    },
  ],
  orderings: [
    {
      title: "Dato stigende",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
    {
      title: "Dato synkende",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
};

export const FPDayDescriptionSchema = {
  ...baseSchema,
  name: "fpDayDescription",
  title: "FP dagbeskrivelser",
};

export const MFPDayDescriptionSchema = {
  ...baseSchema,
  name: "mfpDayDescription",
  title: "MFP dagbeskrivelser",
};
