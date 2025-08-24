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
      validation: (rule: Rule) => rule.required(),
    },
    {
      title: "Svar",
      name: "answer",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule: Rule) => rule.required(),
    },
    {
      title: "Slug",
      description:
        "En unik identifikator for spørsmålet, til bruk i URL-er. Å endre denne kan medføre at lenker til spørsmålet blir brutt.",
      name: "slug",
      type: "slug",
      options: {
        source: "question",
        maxLength: 96,
      },
      validation: (rule: Rule) => rule.required(),
    },
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
