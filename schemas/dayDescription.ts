export const FPGroups = [
  { title: "2-årig", value: "2_YEAR" },
  { title: "5-årig", value: "5_YEAR" },
];

export default {
  name: "dayDescription",
  type: "document",
  title: "Day Description",
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
        title:
          (selection.fpGroup
            ? FPGroups.find((fpg) => fpg.value === selection.fpGroup)?.title +
              " "
            : "") + capitalizedDateString,
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
    {
      title: "Faddergruppe",
      name: "fpGroup",
      type: "string",
      options: {
        list: FPGroups.map(({ title, value }) => ({ title, value })),
        layout: "select",
      },
    },
  ],
};
