export default {
  name: "dayDescription",
  type: "document",
  title: "Day Description",
  preview: {
    select: {
      date: "date",
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
};
