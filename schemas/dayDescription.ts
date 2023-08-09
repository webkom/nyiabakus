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
    },
    {
      title: "Innhold",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
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

export const FPSchema = {
  ...baseSchema,
  name: "fpDayDescription",
  title: "Fadderperioden",
};

export const MFPSchema = {
  ...baseSchema,
  name: "mfpDayDescription",
  title: "Masterfadderperioden",
};
