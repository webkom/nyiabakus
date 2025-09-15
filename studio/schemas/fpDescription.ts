import { Rule } from "sanity";

const FPDescriptionSchema = {
  title: "FP beskrivelse",
  name: "fpDescription",
  description: "Define the description of the fadderperiode",
  type: "document",
  fields: [
    {
      title: "FP beskrivelse",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "FP beskrivelse",
      };
    },
  },
};

export default FPDescriptionSchema;
