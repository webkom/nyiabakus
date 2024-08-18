import { defineArrayMember, defineField, defineType } from "sanity";
import SelectAbakusEvent from "./components/SelectAbakusEvent";

export const FPGroups = [
  { title: "2-årig", value: "2_YEAR" },
  { title: "5-årig", value: "5_YEAR" },
];

const dayDescription = defineArrayMember({
  title: "Beskrivelse",
  name: "description",
  type: "object",
  fields: [
    defineField({
      name: "description",
      title: "Beskrivelse",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
  preview: {
    select: { description: "description" },
    prepare(selection) {
      const block = (selection.description ?? []).find(
        (block: any) => block._type === "block"
      );
      const firstLine = block.children.map((child: any) => child.text);
      return {
        title: "Beskrivelse",
        subtitle: `${firstLine}`,
      };
    },
  },
});

const abakusEvent = defineArrayMember({
  name: "abakus_event",
  type: "object",
  title: "Abakus.no arrangement",
  fields: [
    defineField({
      name: "event_id",
      type: "number",
      title: "Arrangement",
      options: {
        list: [{ value: undefined, title: "Laster inn arrangementer..." }],
      },
      components: {
        input: SelectAbakusEvent,
      },
    }),
  ],
  preview: {
    select: {
      event_id: "event_id",
    },
    prepare(selection) {
      return {
        title: "Arrangement (på abakus.no)",
        subtitle: `Arrangements-ID: ${selection.event_id}`,
      };
    },
  },
});

const otherEvent = defineArrayMember({
  name: "other_event",
  type: "object",
  title: "Arrangement som ikke er på abakus.no",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Tittel",
    }),
    defineField({
      name: "location",
      type: "string",
      title: "Sted",
    }),
    defineField({
      name: "startTime",
      type: "string",
      title: "Start",
      description: "Når starter arrangementet?",
    }),
    defineField({
      name: "endTime",
      type: "string",
      title: "Slutt",
      description: "Nå er arrangementet ferdig?",
    }),
    defineField({
      name: "description",
      type: "array",
      title: "Beskrivelse",
      of: [defineArrayMember({ type: "block" })],
    }),
  ],
  preview: {
    select: {
      title: "title",
      location: "location",
    },
    prepare(selection) {
      return {
        title: "Arrangement (ikke på abakus.no)",
        subtitle: `${selection.title}, ${selection.location}`,
      };
    },
  },
});

const baseSchema = defineType({
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
    defineField({
      name: "date",
      type: "date",
      title: "Dato",
    }),
    defineField({
      title: "Innhold",
      name: "content",
      type: "array",
      of: [dayDescription, abakusEvent, otherEvent],
    }),
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
});

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
