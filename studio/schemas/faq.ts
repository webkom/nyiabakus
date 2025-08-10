import { Rule } from "sanity";

const FAQSchema = {
  title: "FAQ",
  name: "faq",
  type: "document",
  fields: [
    {
      title: "Spørsmål",
      name: "question",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      title: "Svar",
      name: "answer",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule: Rule) => Rule.required(),
    }
  ],
  preview: {
    select: {
      title: "question",
    },
  },
  orderings: [
    {
      title: "Spørsmål A-Å",
      name: "questionAsc",
      by: [{ field: "question", direction: "asc" }],
    },
    {
      title: "Spørsmål Å-A",
      name: "questionDesc",
      by: [{ field: "question", direction: "desc" }],
    },
  ],
};

export default FAQSchema;
